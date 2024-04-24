import AdminLayout from '../Layouts/AdminLayout';
import DefaultLayout from '../Layouts/DefaultLayout';
import config from '../config';
import AdminPage from '../pages/Admin/AdminPage';
import CashierPage from '../pages/Admin/CashierPage';
import ChargePage from '../pages/ChargePage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ManageProductPage from '../pages/Admin/ManageProductPage';
import NotFoundPage from '../pages/NotFoundPage';

export const routes = [
	{
		path: config.routes.home,
		page: HomePage
	},
	{
		path: config.routes.login,
		page: LoginPage,
		layout: null
	},

	{
		path: '/cashier',
		page: CashierPage,
		layout: null
	},

	{
		path: config.routes.notfound,
		page: NotFoundPage
	},
	{
		path: `${config.routes.solution}/:id`,
		page: SolutionPage,
		layout: DefaultLayout
	},
	{
		path: '*',
		page: NotFoundPage
	}
];
