/* eslint-disable react/prop-types */
import banner from '../assets/images/banner-homemajor-2.webp';
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

				<div className='w-full lg:w-[55%] mt-12'>
					<div
						className='relative bg-contain bg-no-repeat bg-bottom'
						style={{
							backgroundImage: `url(${banner})`,
							height: '60vh',
							zIndex: openMenu ? -1 : 0
						}}
					>
						<div className=' absolute left-[3%] lg:top-[18%] lg:left-0 top-0 w-fit'>
							<span className='bg-white px-6 py-4 rounded-3xl font-semibold lg:w-fit'>
								Phần mềm quản lý bán hàng
							</span>
						</div>

						<div className='absolute bottom-0 lg:bottom-[20%] left-[5%] w-fit '>
							<span className='bg-white px-6 py-4 rounded-3xl font-semibold'>
								Giải pháp thanh toán
							</span>
						</div>

						<div className='absolute top-[45%] right-[1%] w-fit '>
							<span className='bg-white px-6 py-4 rounded-3xl font-semibold'>
								Dịch vụ với chi phí hợp lý
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
