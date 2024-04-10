/* eslint-disable react/prop-types */
import logo from '../assets/images/logo.png';
const Banner = props => {
	const { openMenu } = props;
	return (
		<div className='bg-gradient-to-r from-sky-300 to-lime-100'>
			<div className='max-w-7xl flex flex-col lg:flex-row justify-between items-center mx-auto min-h-screen'>
				<div className='flex flex-col lg:w-[45%]'>
					<h2 className='text-4xl text-center lg:text-left lg:text-[4rem] lg:leading-[60px] mt-12 mb-3 font-bold overflow-hidden text-ellipsis '>
						Phần mềm
						<br />
						quản lý bán hàng
						<br />
						phổ biến nhất
					</h2>
					<div className={`flex gap-4 mt-2`}>
						<button className='p-5 text-white rounded-3xl bg-primary font-semibold'>
							Dùng thử miễn phí
						</button>
						<button
							className='p-5 text-primary rounded-3xl bg-[#cce2fd] font-bold animate-button'
							style={{ zIndex: openMenu ? -1 : 0 }}
						>
							Khám phá
						</button>
					</div>
				</div>

							{/* <div className='flex flex-1 items-center justify-center lg:w-[65%]'>
								<div className='relative'>
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
							</div> */}
						</div>
					</div>
				</div>
			)}

			{isSolutionPage && (
				<div className='pt-[65px]'>
					<div
						className='bg-cover h-[432px]'
						style={{
							backgroundImage: `url(${banner})`,
							height: '60vh',
							zIndex: openMenu ? -1 : 0
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
