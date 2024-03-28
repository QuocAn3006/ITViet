import AdminLayout from '../Layouts/AdminLayout';
import DefaultLayout from '../Layouts/DefaultLayout';
import AdminPage from '../pages/AdminPage';
import CashierPage from '../pages/CashierPage';
import ChargePage from '../pages/ChargePage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import RegisterPage from '../pages/RegisterPage';
import SolutionPage from '../pages/SolutionPage';

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
		path: '/register',
		page: RegisterPage,
		layout: null
	},

	{
		path: '*',
		page: NotFoundPage
	},
	{
		path: '/solution',
		page: SolutionPage,
		layout: DefaultLayout
	},
	{
		path: '/charge',
		page: ChargePage,
		layout: DefaultLayout
	}
];
