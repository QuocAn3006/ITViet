import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { routes } from './router/index';
import DefaultLayout from './Layouts/DefaultLayout';
import { Fragment } from 'react';

function App() {
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
