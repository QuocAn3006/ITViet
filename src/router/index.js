import CashierPage from '../pages/CashierPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';

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
		path: '/cashier',
		page: CashierPage,
		layout: null
	},
	{
		path: '*',
		page: NotFoundPage
	}
];
