import AdminLayout from '../Layouts/AdminLayout';
import AdminPage from '../pages/AdminPage';
import CashierPage from '../pages/CashierPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';

export const privateRoutes = [
	{
		path: '/cashier',
		page: CashierPage,
		layout: null
	},
	{
		path: '/admin',
		page: AdminPage,
		layout: AdminLayout
	}
];

export const routes = [
	{
		path: '/',
		page: HomePage
	},
	{
		path: '/login',
		page: LoginPage,
		layout: null
	},

	{
		path: '*',
		page: NotFoundPage,
		layout: null
	}
];
