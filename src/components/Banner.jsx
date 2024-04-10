/* eslint-disable react/prop-types */
import logo from '../assets/images/img_logo.png';
import abc from '../assets/images/cc.png';
const Banner = props => {
	const { openMenu } = props;
	return (
		<>
			{isHomeBanner && (
				<div className='bg-gradient-to-r from-slate-200 to-primary/20 w-full min-h-[80vh]'>
					<div className='max-w-7xl mx-auto'>
						<div className='flex h-screen flex-nowrap flex-col lg:flex-row gap-10'>
							<div className='flex flex-col items-center justify-center mt-36 lg:mt-0 gap-8 lg:w-[35%] w-full'>
								<h1 className='font-bold text-5xl leading-tight text-center'>
									{title}
								</h1>

								<div className='flex items-center gap-2 '>
									<button className='px-5 py-3 text-base bg-primary text-white rounded-3xl font-semibold'>
										Dùng thử miễn phí
									</button>

									<button className='px-5 py-3 text-base bg-[#cce2fd] text-primary rounded-3xl font-semibold '>
										Khám phá
									</button>
								</div>
							</div>

							<div
								className='hidden md:flex flex-1 items-center justify-center lg:w-[65%] relative z-10'
								style={{
									backgroundImage:
										'url(https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2023/11/21043602/banner-homemajor-2.webp)',
									backgroundPosition: 'bottom',
									backgroundSize: 'contain',
									backgroundRepeat: 'no-repeat'
								}}
							>
								<div className='absolute left-0 top-[18%] w-fit'>
									<div
										className='w-[560px] h-[560px]'
										style={{
											backgroundImage:
												'url(https://i.pinimg.com/originals/6a/a9/a5/6aa9a58e2c210b4c8540b16f625160a0.jpg)',
											backgroundSize: 'contain',
											backgroundPosition: 'bottom'
										}}
									>
										
									</div>
								</div>

								<div className='absolute left-[5%] bottom-[20%] w-fit'>
									<div
										className='flex items-center bg-white rounded-3xl px-4 py-2'
										style={{
											boxShadow:
												' 0 8px 24px 0 rgba(0,48,104,.04)'
										}}
									>
										<span className='w-14 h-14 flex items-center justify-center'>
											<img
												src={logo}
												alt='logo'
												width={45}
												height={45}
											/>
										</span>
										<span className='text-base font-semibold text-[#002249]'>
											Giải pháp thanh toán và vay vốn
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}

			{isSolutionPage && (
				<div className='pt-[65px]'>
					<div
						className='bg-cover h-[432px]'
						style={{
							backgroundImage:
								'url(https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2023/10/08101925/quan_bg-min.png)',
							backgroundRepeat: 'no-repeat'
						}}
					>
						<div className=' absolute left-[3%] lg:top-[18%] lg:left-0 top-0 w-fit'>
							<div className='bg-white px-6 py-4 rounded-3xl font-semibold lg:w-fit flex items-center gap-2'>
								<img
									src='../src/assets/images/logo.png'
									alt='logo'
									width={22}
									height={22}
									loading='lazy'
								/>
								Phần mềm quản lý bán hàng
							</div>
						</div>

						<div className='absolute bottom-0 lg:bottom-[20%] left-[5%] w-fit '>
							<div className='bg-white px-6 py-4 rounded-3xl font-semibold lg:w-fit flex items-center gap-2'>
								<img
									src='../src/assets/images/logo.png'
									alt='logo'
									width={22}
									height={22}
									loading='lazy'
								/>
								Giải pháp thanh toán
							</div>
						</div>

						<div className='absolute top-[45%] right-[1%] w-fit '>
							<div className='bg-white px-6 py-4 rounded-3xl font-semibold lg:w-fit flex items-center gap-2'>
								<img
									src='../src/assets/images/logo.png'
									alt='logo'
									width={22}
									height={22}
									loading='lazy'
								/>
								Dịch vụ với chi phí hợp lý
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
