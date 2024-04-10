import { Icon } from '@iconify/react';
import * as UserService from '../services/user';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { updatedUser } from '../redux/Slice/userSlice';
import { useEffect, useState } from 'react';
import config from '../config';

const LoginPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const dispatch = useDispatch();

	const buttomItems = [
		{
			key: 'admin',
			title: 'Quản lý',
			icon: 'ph:chart-line',
			bgColor: 'primary'
		},
		{
			key: 'cashier',
			title: 'Cửa hàng',
			icon: 'iconoir:cart',
			bgColor: '[#28b44f]'
		}
	];

	const navigate = useNavigate();

	const handleGetDetailUser = async (id, token) => {
		const refreshToken = JSON.parse(localStorage.getItem('refreshToken'));
		const res = await UserService.getDetailUser(id, token);
		dispatch(
			updatedUser({ ...res?.data, accessToken: token, refreshToken })
		);
	};

	const handleLogin = async (data, key) => {
		const res = await UserService.login(data);

		if (res?.status === 'ERR') {
			setError(res?.message);
		}

		if (res?.status === 'OK') {
			localStorage.setItem(
				'accessToken',
				JSON.stringify(res?.accessToken)
			);
			localStorage.setItem(
				'refreshToken',
				JSON.stringify(res?.refreshToken)
			);
			if (res?.accessToken) {
				const decoded = jwtDecode(res?.accessToken);
				if (decoded?.userId) {
					handleGetDetailUser(decoded?.userId, res?.accessToken);
				}
			}
			switch (key) {
				case 'cashier':
					return navigate(config.routes.cashier);
				case 'admin':
					return navigate(config.routes.admin);
			}
		}
	};
	useEffect(() => {
		handleLogin;
	}, []);
	return (
		<div
			className='relative'
			style={{
				background:
					'url(https://cdn-app.kiotviet.vn/retailler/Content/login-bg-fnb.jpg) no-repeat center bottom',
				overflow: 'hidden',
				backgroundSize: 'cover',
				minHeight: '100%',
				height: '100vh',
				zIndex: 0
			}}
		>
			<form
				action=''
				className='m-0 p-0 relative flex'
				style={{ height: 'calc(100vh - 52px)', zIndex: 2 }}
			>
				<div
					style={{ zIndex: 5 }}
					className='w-full max-w-[440px] min-w-[320px] m-auto h-auto pt-10 px-6 pb-6 box-border bg-white rounded-2xl'
				>
					<header className='text-center text-xl font-bold'>
						ITViet
					</header>
					<section>
						<div className='flex mb-3 items-center gap-2'>
							<Icon
								icon='solar:user-linear'
								height={22}
							/>
							<input
								value={email}
								onChange={e => setEmail(e.target.value)}
								type='text'
								className='h-11 pl-7 w-full bg-transparent overflow-visible block m-0 box-border'
								style={{
									borderBottom: '1px solid #ccc'
								}}
								placeholder='Tên đăng nhập'
							/>
						</div>

						<div className='flex mb-3 items-center gap-2'>
							<Icon
								icon='solar:lock-outline'
								height={20}
							/>
							<input
								value={password}
								onChange={e => setPassword(e.target.value)}
								type='password'
								className='h-11 pl-7 w-full bg-transparent overflow-visible block m-0 box-border'
								style={{
									borderBottom: '1px solid #ccc'
								}}
								placeholder='Mật khẩu'
							/>
						</div>

						{error && (
							<aside className='mt-5 text-red-500 text-sm font-semibold ml-6'>
								{error}
							</aside>
						)}

						<aside className='mt-5 text-right text-sm text-primary'>
							<label htmlFor=''>Quên mật khẩu?</label>
						</aside>
					</section>
					<section className='mt-5 flex overflow-hidden text-center gap-2'>
						{buttomItems.map(item => (
							<button
								type='button'
								key={item.key}
								onClick={() =>
									handleLogin({ email, password }, item.key)
								}
								className={`flex items-center justify-center py-3 px-5 gap-2 rounded-3xl font-bold text-white bg-${item.bgColor} w-[50%]`}
							>
								<Icon
									icon={item.icon}
									height={22}
								/>
								{item.title}
							</button>
						))}
					</section>
				</div>
			</form>
		</div>
	);
};

export default LoginPage;
