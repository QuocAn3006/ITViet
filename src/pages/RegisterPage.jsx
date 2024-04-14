import { Icon } from '@iconify/react';
import { useState } from 'react';
import { optionStoreType } from '../constants';

const RegisterPage = () => {
	const [isShowPassword, setIsShowPassword] = useState(false);
	const [isConfirmPassword, setIsConfirmPassword] = useState(false);
	return (
		<div className='w-full'>
			<div className='flex justify-center'>
				<div
					className='h-screen hidden lg:flex justify-center w-[40%] relative'
					style={{
						backgroundImage:
							'url(https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2023/10/31095247/background-register1-1.jpg)',
						backgroundPosition: '50%',
						backgroundSize: 'cover'
					}}
				>
					<div className='flex items-center flex-col justify-center gap-4 text-white'>
						<h1 className='text-[40px] font-bold text-center'>
							Quản lý dễ dàng <br /> Bán hàng đơn giản
						</h1>

						<h3 className='text-base font-semibold'>
							Hỗ trợ đăng ký 18006162
						</h3>
					</div>
				</div>

				<div className='flex lg:flex-1 flex-col justify-center items-center mt-[120px] lg:mt-0'>
					<h1 className='text-2xl font-bold mb-4'>
						Tạo tài khoản dùng thử miễn phí
					</h1>

					<form
						action=''
						className='flex flex-col gap-3 max-w-[500px] w-full'
					>
						<div className='w-full'>
							<div className='w-full flex items-center border rounded-lg min-h-[48px] py-[5px]'>
								<input
									type='text'
									placeholder='Nhập họ tên'
									className='px-3 focus:outline-none w-full'
								/>
							</div>
						</div>

						<div className='w-full'>
							<div className='w-full flex items-center border rounded-lg min-h-[48px] py-[5px] relative'>
								<input
									type='text'
									placeholder='Số điện thoại'
									className='pl-14 focus:outline-none w-full'
								/>
								<span className='absolute top-[12px] left-[14px] cursor-pointer'>
									<Icon
										icon='twemoji:flag-vietnam'
										height={20}
									/>
								</span>
							</div>
						</div>

						<div className='w-full'>
							<div className='w-full flex items-center border rounded-lg min-h-[48px] py-[5px] relative'>
								<select
									name='storeType'
									id=''
									className='mx-3 focus:outline-none w-full cursor-pointer'
								>
									{optionStoreType.map((item, idx) => (
										<>
											<option
												value={item.title}
												key={idx}
												className='px-3'
											>
												{item.title}
											</option>
										</>
									))}
								</select>
							</div>
						</div>

						<div className='w-full'>
							<div className='w-full flex items-center border rounded-lg min-h-[48px] py-[5px]'>
								<input
									type='text'
									placeholder='Email'
									className='px-3 focus:outline-none w-full'
								/>
							</div>
						</div>

						<div className='w-full'>
							<div className='w-full flex items-center border rounded-lg min-h-[48px] py-[5px] relative'>
								<input
									type={isShowPassword ? 'text' : 'password'}
									placeholder='Mật khẩu'
									className='px-3 focus:outline-none w-full'
								/>
								<span
									className='absolute top-[12px] right-[14px] cursor-pointer'
									onClick={() =>
										setIsShowPassword(!isShowPassword)
									}
								>
									{isShowPassword ? (
										<Icon
											icon='mdi:eye-outline'
											height={20}
										/>
									) : (
										<Icon
											icon='mdi:eye-off-outline'
											height={20}
										/>
									)}
								</span>
							</div>
						</div>

						<div className='w-full'>
							<div className='w-full flex items-center border rounded-lg min-h-[48px] py-[5px] relative'>
								<input
									type={
										isConfirmPassword ? 'text' : 'password'
									}
									placeholder='Nhập lại mật khẩu'
									className='px-3 focus:outline-none w-full'
								/>

								<span
									className='absolute top-[12px] right-[14px] cursor-pointer'
									onClick={() =>
										setIsConfirmPassword(!isConfirmPassword)
									}
								>
									{isConfirmPassword ? (
										<Icon
											icon='mdi:eye-outline'
											height={20}
										/>
									) : (
										<Icon
											icon='mdi:eye-off-outline'
											height={20}
										/>
									)}
								</span>
							</div>
						</div>

						<button className='py-[11px] px-[23px] bg-primary hover:bg-[#005ac3] font-bold text-white cursor-pointer text-base rounded-3xl'>
							Đăng ký
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default RegisterPage;
