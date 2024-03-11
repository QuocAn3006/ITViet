import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { routes } from './router/index';
import DefaultLayout from './Layouts/DefaultLayout';
import { Fragment } from 'react';
import * as UserService from './services/user';
import axios from 'axios';
function App() {
	UserService.axiosJWT.interceptors.request.use(
		async config => {
			const token = localStorage.getItem('access_token');
			console.log(token);
			if (token) {
				config.headers['Authorization'] = `Bearer ${token}`;
			}
			return config;
		},
		err => {
			return Promise.reject(err);
		}
	);

	UserService.axiosJWT.interceptors.response.use(
		response => response,
		async error => {
			const originalRequest = error.config;
			console.log('access token expire');
			if (error.response && error.response.status === 'ERR') {
				const refresh_token = localStorage.getItem('refresh_token');
				console.log('call api refresh');
				const res = await UserService.refreshToken(refresh_token);
				const { accessToken, refreshToken } = res.data;

				localStorage.setItem('accessToken', accessToken);
				localStorage.setItem('refreshToken', refreshToken);
				originalRequest.headers[
					'Authorization'
				] = `Bearer ${accessToken}`;
				return axios(originalRequest);
			}
		}
	);
	return (
		<>
			<Router>
				<Routes>
					{routes.map(route => {
						const Page = route.page;
						let Layout = DefaultLayout;
						if (route?.layout) {
							Layout = route?.layout;
						} else if (route?.layout === null) {
							Layout = Fragment;
						}
						return (
							<Route
								key={route.path}
								path={route.path}
								element={
									<Layout>
										<Page />
									</Layout>
								}
							/>
						);
					})}
				</Routes>
			</Router>
		</>
	);
}

export default App;
