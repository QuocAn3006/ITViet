import { Icon } from '@iconify/react';
import { useEffect } from 'react';
import { useState } from 'react';
import { mobileDropMenus, navItemTypes, navItems } from '../constants';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
	const [displayBgColor, setDisplayBgColor] = useState(false);
	const [openMenu, setOpenMenu] = useState(false);
	const navigate = useNavigate();
	useEffect(() => {
		function checkPositionHandler() {
			if (window.scrollY == 0) setDisplayBgColor(false);
			else setDisplayBgColor(true);
		}
		checkPositionHandler();
		window.addEventListener('scroll', checkPositionHandler);
		return () => window.removeEventListener('scroll', checkPositionHandler);
	}, []);

	const MobileMenu = () => {
		const [menuType, setMenuType] = useState(null);

		const handleOpenSubMenu = type => {
			if (menuType === type) {
				setMenuType(null);
			} else {
				setMenuType(type);
			}
		};

		return (
			<>
				<button className='lg:hidden'>
					<Icon
						icon='nimbus:menu'
						height={28}
						onClick={() => setOpenMenu(true)}
					/>
				</button>

				<div
					className={`fixed inset-0 duration-300 ${
						openMenu
							? 'pointer-events-auto bg-black/60 overflow-y-auto overflow-x-hidden'
							: 'pointer-events-none'
					}`}
					onClick={e => {
						if (e.target !== e.currentTarget) return;
						setOpenMenu(false);
					}}
				>
					<div
						className={`absolute min-h-screen right-0 w-full bg-white font-bold text-xl duration-300 overflow-auto z-10  ${
							openMenu ? 'translate-x-0' : 'translate-x-full '
						}`}
					>
						<Icon
							icon='ic:round-close'
							height={28}
							className='cursor-pointer mb-5 mt-2 mx-4 float-right'
							onClick={() => setOpenMenu(false)}
						/>
						<div className='mt-[2.25rem]'></div>
						{navItems.map((item, idx) => (
							<div key={idx}>
								<div
									className={`m-3 flex gap-2 items-center ${
										menuType === item.key
											? 'text-primary'
											: ''
									}`}
									onClick={() => handleOpenSubMenu(item.key)}
								>
									<span className='hover:text-primary cursor-pointer flex flex-col py-2'>
										{item.title}
									</span>

									{item.key && (
										<Icon
											icon='icon-park-outline:right'
											height={22}
											className={`duration-300 mt-[6px] ${
												menuType === item.key
													? 'rotate-90'
													: ''
											}`}
										/>
									)}
								</div>
								<ul
									className='grid grid-cols-2 gap-x-2.5 gap-y-1 font-normal text-base overflow-hidden duration-300 m-3'
									style={{
										maxHeight:
											menuType === item.key ? '50rem' : 0
									}}
								>
									{menuType === 'product' &&
										mobileDropMenus.products.map(
											product => (
												<li
													key={product.title}
													className='text-black pb-2 font-medium cursor-pointer hover:text-primary'
												>
													{product.title}
												</li>
											)
										)}

									{menuType === 'solution' &&
										mobileDropMenus.solutions.map(
											solution => (
												<li
													key={solution.title}
													className='text-black pb-2 font-medium cursor-pointer hover:text-primary'
												>
													{solution.title}
												</li>
											)
										)}
								</ul>
							</div>
						))}
					</div>
				</div>
			</>
		);
	};

	return (
		<>
			<header
				className={`${
					displayBgColor ? 'bg-white' : 'bg-transparent'
				} py-3 fixed inset-x-0 duration-300`}
			>
				<nav className='max-w-7xl mx-auto flex justify-between items-center px-4'>
					<div
						className='cursor-pointer flex items-center gap-1'
						onClick={() => navigate('/')}
					>
						<img
							src='../src/assets/images/logo.png'
							alt='logo'
							width={45}
							height={45}
							loading='lazy'
						/>
						<span className='text-2xl font-bold text-black/70'>
							Viet
						</span>
					</div>

					<div className='font-bold text-lg lg:flex items-center gap-12 hidden'>
						<span className='hover:text-primary cursor-pointer relative group'>
							Sản phẩm
							<ul className='dropdown-menu w-[300px] grid-cols-1'>
								{navItemTypes.product.map(item => (
									<li
										key={item.title}
										className='hover:text-primary text-base duration-100 flex items-center gap-2'
									>
										<Icon
											icon={item.icon}
											height={20}
										/>
										{item.title}
									</li>
								))}
							</ul>
						</span>

						<span className='hover:text-primary cursor-pointer relative group'>
							Giải pháp
							<ul className='dropdown-menu w-[1200px] grid-cols-3 ml-4 flex items-center flex-col justify-between lg:flex-row gap-2 '>
								<li className='w-full'>
									<div className='rounded-2xl flex items-center w-full flex-col gap-2'>
										<p className='font-bold text-xl items-center flex gap-4 py-1'>
											<div className='flex justify-center items-center rounded-xl'>
												<Icon
													icon='fa6-solid:store'
													className='text-primary bg-gray-400/20 p-0.5 rounded-md'
													height={20}
												></Icon>
											</div>
											<h1 className='text-black'>
												Bán buôn, bán lẻ
											</h1>
										</p>
										<div className='flex-col flex w-full gap-2'>
											<div className='flex items-center gap-2 border-t-2 p-1 hover:bg-primary/10'>
												<Icon
													icon='game-icons:clothes'
													className='text-gray-600 bg-gray-400/20 p-0.5 rounded-md'
													height={20}
												/>
												<h4 className='text-base text-left'>
													Thời trang
												</h4>
											</div>
											<div className='flex items-center gap-2 border-t-2 p-1 hover:bg-primary/10'>
												<Icon
													icon='ic:twotone-local-grocery-store'
													className='text-gray-600 bg-gray-400/20 p-0.5 rounded-md'
													height={20}
												/>
												<h4 className='text-base text-left'>
													Tạp hóa & Siêu thị
												</h4>
											</div>
											<div className='flex items-center gap-2 border-t-2 p-1 hover:bg-primary/10'>
												<Icon
													icon='gridicons:phone'
													className='text-gray-600 bg-gray-400/20 p-0.5 rounded-md'
													height={20}
												/>
												<h4 className='text-base text-left'>
													Điện thoại & Điện máy
												</h4>
											</div>
											<div className='flex items-center gap-2 border-t-2 p-1 hover:bg-primary/10'>
												<Icon
													icon='icon-park-outline:boy-stroller'
													className='text-gray-600 bg-gray-400/20 p-0.5 rounded-md'
													height={20}
												/>
												<h4 className='text-base text-left'>
													Mẹ & Bé
												</h4>
											</div>
											<div className='flex items-center gap-2 border-t-2 p-1 hover:bg-primary/10'>
												<Icon
													icon='mi:book'
													className='text-gray-600 bg-gray-400/20 p-0.5 rounded-md'
													height={20}
												/>
												<h4 className='text-base text-left'>
													Sách & Văn phòng phẩm
												</h4>
											</div>
											<div className='flex items-center gap-2 border-t-2 p-1 hover:bg-primary/10'>
												<Icon
													icon='solar:cosmetic-linear'
													className='text-gray-600 bg-gray-400/20 p-0.5 rounded-md'
													height={20}
												/>
												<h4 className='text-base text-left'>
													Mỹ phẩm
												</h4>
											</div>
											<div className='flex items-center gap-2 border-t-2 p-1 hover:bg-primary/10'>
												<Icon
													icon='jam:tools'
													className='text-gray-600 bg-gray-400/20 p-0.5 rounded-md'
													height={20}
												/>
												<h4 className='text-base text-left'>
													Sản xuất
												</h4>
											</div>
											<div className='flex items-center gap-2 border-t-2 p-1 hover:bg-primary/10'>
												<Icon
													icon='fluent:food-grains-20-regular'
													className='text-gray-600 bg-gray-400/20 p-0.5 rounded-md'
													height={20}
												/>
												<h4 className='text-base text-left'>
													Nông sản & Thực phẩm
												</h4>
											</div>
											<div className='flex items-center gap-2 border-t-2 p-1 hover:bg-primary/10'>
												<Icon
													icon='fa-regular:plus-square'
													className='text-gray-600 bg-gray-400/20 p-0.5 rounded-md'
													height={20}
												/>
												<h4 className='text-base text-left'>
													Khác
												</h4>
											</div>
										</div>
									</div>
								</li>

								<li className='w-full'>
									<div className='rounded-2xl flex items-center flex-col gap-2'>
										<p className='font-bold text-xl items-center flex gap-2 py-1'>
											<div className='flex justify-center items-center rounded-xl'>
												<Icon
													icon='fluent-emoji-high-contrast:cup-with-straw'
													className='text-primary bg-gray-400/20 p-0.5 rounded-md'
													height={20}
												></Icon>
											</div>
											<h1 className='text-black'>
												Ăn uống, giải trí
											</h1>
										</p>
										<div className='flex-col flex w-full gap-2'>
											<div
												onClick={() =>
													navigate('/solution')
												}
												type='button'
												className='flex items-center gap-2 border-t-2 p-1 hover:bg-primary/10'
											>
												<Icon
													icon='uil:restaurant'
													className='text-gray-600 bg-gray-400/20 p-0.5 rounded-md'
													height={20}
												/>
												<h4 className='text-base text-left'>
													Nhà hàng
												</h4>
											</div>
											<div
												onClick={() =>
													navigate('/solution')
												}
												type='button'
												className='flex items-center gap-2 border-t-2 p-1 hover:bg-primary/10'
											>
												<Icon
													icon='maki:restaurant-noodle'
													className='text-gray-600 bg-gray-400/20 p-0.5 rounded-md'
													height={20}
												/>
												<h4 className='text-base text-left'>
													Quán ăn
												</h4>
											</div>
											<div
												onClick={() =>
													navigate('/solution')
												}
												type='button'
												className='flex items-center gap-2 border-t-2 p-1 hover:bg-primary/10'
											>
												<Icon
													icon='ep:milk-tea'
													className='text-gray-600 bg-gray-400/20 p-0.5 rounded-md'
													height={20}
												/>
												<h4 className='text-base text-left'>
													Cà phê, Trà sữa
												</h4>
											</div>
											<div
												onClick={() =>
													navigate('/solution')
												}
												type='button'
												className='flex items-center gap-2 border-t-2 p-1 hover:bg-primary/10'
											>
												<Icon
													icon='f7:music-mic'
													className='text-gray-600 bg-gray-400/20 p-0.5 rounded-md'
													height={20}
												/>
												<h4 className='text-base text-left'>
													Karaoke
												</h4>
											</div>
											<div
												onClick={() =>
													navigate('/solution')
												}
												type='button'
												className='flex items-center gap-2 border-t-2 p-1 hover:bg-primary/10'
											>
												<Icon
													icon='mdi:billiards'
													className='text-gray-600 bg-gray-400/20 p-0.5 rounded-md'
													height={20}
												/>
												<h4 className='text-base text-left'>
													Bida
												</h4>
											</div>
											<div
												onClick={() =>
													navigate('/solution')
												}
												type='button'
												className='flex items-center gap-2 border-t-2 p-1 hover:bg-primary/10'
											>
												<Icon
													icon='carbon:bar'
													className='text-gray-600 bg-gray-400/20 p-0.5 rounded-md'
													height={20}
												/>
												<h4 className='text-base text-left'>
													Bar, Pub & Club
												</h4>
											</div>
											<div
												onClick={() =>
													navigate('/solution')
												}
												type='button'
												className='flex items-center gap-2 border-t-2 p-1 hover:bg-primary/10'
											>
												<Icon
													icon='ic:outline-fastfood'
													className='text-gray-600 bg-gray-400/20 p-0.5 rounded-md'
													height={20}
												/>
												<h4 className='text-base text-left'>
													Căng tin
												</h4>
											</div>
											<div
												onClick={() =>
													navigate('/solution')
												}
												type='button'
												className='flex items-center gap-2 border-t-2 p-1 hover:bg-primary/10'
											>
												<Icon
													icon='icon-park-outline:resting'
													className='text-gray-600 bg-gray-400/20 p-0.5 rounded-md'
													height={20}
												/>
												<h4 className='text-base text-left'>
													Trạm dừng chân
												</h4>
											</div>
											<div
												onClick={() =>
													navigate('/solution')
												}
												type='button'
												className='flex items-center gap-2 border-t-2 p-1 hover:bg-primary/10'
											>
												<Icon
													icon='fa-regular:plus-square'
													className='text-gray-600 bg-gray-400/20 p-0.5 rounded-md'
													height={20}
												/>
												<h4 className='text-base text-left'>
													Khác
												</h4>
											</div>
										</div>
									</div>
								</li>

								<li className='w-full'>
									<div className='rounded-2xl flex items-center flex-col gap-2'>
										<p className='font-bold text-xl items-center flex gap-2 py-1'>
											<div className='flex justify-center items-center rounded-xl'>
												<Icon
													icon='mdi:human-male-male'
													className='text-primary bg-gray-400/20 p-0.5 rounded-md'
													height={20}
												></Icon>
											</div>
											<h1 className='text-black'>
												Lưu trú,làm đẹp
											</h1>
										</p>
										<div className='flex-col flex w-full '>
											<div className='flex items-center py-3 px-2 hover:bg-primary/10'>
												<div className='flex items-center gap-1 '>
													<Icon
														icon='solar:star-fall-outline'
														className='text-gray-600 bg-gray-400/20 p-0.5 rounded-md'
														height={20}
													/>
													<h4 className='text-base text-left font-medium'>
														Beauty Spa
													</h4>
												</div>
											</div>
											<div className='flex items-center py-3 px-2 border-t-2 p-1 hover:bg-primary/10'>
												<div className='flex items-center gap-1 '>
													<Icon
														icon='solar:star-fall-outline'
														className='text-gray-600 bg-gray-400/20 p-0.5 rounded-md'
														height={20}
													/>
													<h4 className='text-base text-left font-medium'>
														Massage
													</h4>
												</div>
											</div>
											<div className='flex items-center gap-2 border-t-2 p-1 hover:bg-primary/10'>
												<Icon
													icon='mingcute:hair-2-line'
													className='text-gray-600 bg-gray-400/20 p-0.5 rounded-md'
												/>
												<h4 className='text-base text-left font-medium'>
													Hair Salon & Nail
												</h4>
											</div>
											<div className='flex items-center gap-2 border-t-2 p-1 hover:bg-primary/10'>
												<Icon
													icon='icon-park-outline:hotel'
													className='text-gray-600 bg-gray-400/20 p-0.5 rounded-md'
													height={20}
												/>
												<h4 className='text-base text-left'>
													Khách sạn & Nhà nghỉ
												</h4>
											</div>
											<div className='flex items-center gap-2 border-t-2 p-1 hover:bg-primary/10'>
												<Icon
													icon='icon-park-outline:homestay'
													className='text-gray-600 bg-gray-400/20 p-0.5 rounded-md'
													height={20}
												/>
												<h4 className='text-base text-left'>
													Homestay
												</h4>
											</div>
											<div className='flex items-center gap-2 border-t-2 p-1 hover:bg-primary/10'>
												<Icon
													icon='material-symbols:holiday-village-outline'
													className='text-gray-600 bg-gray-400/20 p-0.5 rounded-md'
													height={20}
												/>
												<h4 className='text-base text-left'>
													Villa, Resort
												</h4>
											</div>
											<div className='flex items-center gap-2 border-t-2 p-1 hover:bg-primary/10'>
												<Icon
													icon='ion:fitness-outline'
													className='text-gray-600 bg-gray-400/20 p-0.5 rounded-md'
													height={20}
												/>
												<h4 className='text-base text-left'>
													Fitness & Yoga
												</h4>
											</div>
											<div className='flex items-center gap-2 border-t-2 p-1 hover:bg-primary/10'>
												<Icon
													icon='mingcute:hospital-line'
													className='text-gray-600 bg-gray-400/20 p-0.5 rounded-md'
													height={20}
												/>
												<h4 className='text-base text-left'>
													Phòng khám
												</h4>
											</div>
											<div className='flex items-center gap-2 border-t-2 p-1 hover:bg-primary/10'>
												<Icon
													icon='fa-regular:plus-square'
													className='text-gray-600 bg-gray-400/20 p-0.5 rounded-md'
													height={20}
												/>
												<h4 className='text-base text-left'>
													Khác
												</h4>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</span>
						<span className='hover:text-primary cursor-pointer relative group'>
							Khách hàng
						</span>
						<div
							onClick={() => navigate('/charge')}
							type='button'
							className='hover:text-primary cursor-pointer relative group'
						>
							Phí dịch vụ
						</div>
						<span className='hover:text-primary cursor-pointer relative group'>
							Hỗ trợ
						</span>
						<span className='hover:text-primary cursor-pointer relative group'>
							Tin tức
						</span>
						<button
							className='bg-primary rounded-2xl px-[1.5rem] py-1 text-white font-bold'
							onClick={() => navigate('/login')}
						>
							Đăng nhập
						</button>
					</div>

					{/* mobile */}
					<MobileMenu />
				</nav>
			</header>
		</>
	);
};

export default Navbar;
