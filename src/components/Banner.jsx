/* eslint-disable react/prop-types */
import banner from '../assets/images/banner-homemajor-2.webp';
const Banner = props => {
	const { title, isHomeBanner = false, isSolutionPage = false } = props;
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
							backgroundImage:
								'url(https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2023/10/08101925/quan_bg-min.png)',
							backgroundRepeat: 'no-repeat'
						}}
					>
						<div className='h-[432px] flex items-center justify-center'>
							<div className='flex items-center flex-col gap-10 '>
								<h1 className='text-center text-6xl font-bold text-white'>
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
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Banner;
