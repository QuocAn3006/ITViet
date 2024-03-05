import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
	const navigate = useNavigate();

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
								type='password'
								className='h-11 pl-7 w-full bg-transparent overflow-visible block m-0 box-border'
								style={{
									borderBottom: '1px solid #ccc'
								}}
								placeholder='Mật khẩu'
							/>
						</div>

						<aside className='mt-5 text-right text-sm text-primary'>
							<label htmlFor=''>Quên mật khẩu?</label>
						</aside>
					</section>
					<section className='mt-5 flex overflow-hidden text-center gap-2'>
						<button
							onClick={() => navigate('/admin')}
							className='flex items-center justify-center py-3 px-5 gap-2 rounded-3xl font-bold text-white bg-primary w-[50%]'
						>
							<Icon
								icon='ph:chart-line'
								height={22}
							/>
							Quản lý
						</button>

						<button
							onClick={() => navigate('/cashier')}
							className='flex items-center justify-center py-3 px-5 gap-2 rounded-3xl font-bold text-white bg-[#4bac4d] w-[50%]'
						>
							<Icon
								icon='iconoir:cart'
								height={22}
							/>
							Cửa hàng
						</button>
					</section>
				</div>
			</form>
		</div>
	);
};

export default LoginPage;
