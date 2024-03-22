import AdminLayout from '../Layouts/AdminLayout';
import DefaultLayout from '../Layouts/DefaultLayout';
import AdminPage from '../pages/AdminPage';
import CashierPage from '../pages/CashierPage';
import ChargePage from '../pages/ChargePage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import SolutionPage from '../pages/SolutionPage';

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
		path: '/admin',
		page: AdminPage,
		layout: AdminLayout
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
	},
];
