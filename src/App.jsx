/* eslint-disable react/prop-types */
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate
} from 'react-router-dom';
import { privateRoutes, routes } from './router/index';
import DefaultLayout from './Layouts/DefaultLayout';
import * as UserService from './services/user';
import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import { resetUser, updatedUser } from './redux/Slice/userSlice';

function App() {
	const [isAuthenciated, setIsAuthenciated] = useState(false);
	const user = useSelector(state => state?.user);
	const dispatch = useDispatch();
	const handleGetDetailUser = async (id, token) => {
		const refreshToken = JSON.parse(localStorage.getItem('refreshToken'));
		const res = await UserService.getDetailUser(id, token);
		dispatch(
			updatedUser({ ...res?.data, accessToken: token, refreshToken })
		);
	};

	const handleDecode = () => {
		const accessToken = JSON.parse(localStorage.getItem('accessToken'));
		let decoded = {};
		if (accessToken && !user?.accessToken) {
			decoded = jwtDecode(accessToken);
		}
		return { decoded, accessToken };
	};
	useEffect(() => {
		const { decoded, accessToken } = handleDecode();
		if (decoded?.userId) {
			handleGetDetailUser(decoded?.userId, accessToken);
		}
	}, []);

	useEffect(() => {
		if (user) {
			setIsAuthenciated(true);
		} else {
			setIsAuthenciated(false);
		}
	});

	UserService.axiosJWT.interceptors.request.use(
		async config => {
			const { decoded } = handleDecode();
			const currentTime = new Date();
			const refreshToken = JSON.parse(
				localStorage.getItem('refreshToken')
			);
			const decodedRefreshToken = jwtDecode(refreshToken);
			if (decoded?.exp < currentTime.getTime() / 1000) {
				if (decodedRefreshToken?.exp > currentTime.getTime() / 1000) {
					const res = await UserService.refreshToken(refreshToken);
					config.headers['token'] = `Bearer ${res?.accessToken}`;
				} else {
					dispatch(resetUser());
				}
			}
			return config;
		},
		error => {
			return Promise.reject(error);
		}
	);

	const PrivateRoutes = ({ isAuthenciated, route }) => {
		return isAuthenciated ? <route.page /> : <Navigate to='/login' />;
	};

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

					{privateRoutes.map(route => {
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
										<PrivateRoutes
											isAuthenciated={isAuthenciated}
											route={route}
										/>
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
