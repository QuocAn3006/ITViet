import { Icon } from '@iconify/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const buttomItems = [
		{
			key: 'admin',
			title: 'Quản lý',
			icon: 'ph:chart-line'
		},
		{
			key: 'cashier',
			title: 'Cửa hàng',
			icon: 'iconoir:cart'
		}
	];

	const navigate = useNavigate();
	const handleLogin = async (data, key) => {
		const res = await axios.post(
			`${import.meta.env.VITE_DATABASE_URL}/user/login`,
			data
		);

		const response = res.data;

		if (response?.status === 'OK') {
			switch (key) {
				case 'cashier':
					return navigate('/cashier');
				case 'admin':
					return navigate('/admin');
			}

			localStorage.setItem('access_token', response?.accessToken);
			localStorage.setItem('refresh_token', response?.refreshToken);
		}
	};

	useEffect(() => {
		handleLogin();
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

						{/* {error && (
							<aside className='mt-5 text-red-500 text-sm'>
								{error}
							</aside>
						)} */}

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
								className='flex items-center justify-center py-3 px-5 gap-2 rounded-3xl font-bold text-white bg-primary w-[50%]'
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
