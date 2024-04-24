import { Icon } from '@iconify/react';
import { useEffect } from 'react';
import { useState } from 'react';
import { navItemTypes, navItems } from '../constants';
import Banner from './Banner';
import { useNavigate } from 'react-router-dom';
import config from '../config';

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

	const handleNavigate = id => {
		navigate(`${config.routes.solution}/${id}`);
	};

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
				} py-3 fixed inset-x-0 duration-300 z-40`}
			>
				<nav className='max-w-7xl mx-auto flex justify-between items-center px-4'>
					<div className='cursor-pointer flex items-center gap-1'>
						<img
							src='../src/assets/images/img_logo.png'
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
							<ul className='dropdown-menu w-72 grid-cols-1'>
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
							<ul className='dropdown-menu grid-cols-3'>
								{navItemTypes.solutions.trade.map(item => (
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

								{navItemTypes.solutions.entertainment.map(
									item => (
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
									)
								)}
							</ul>
						</span>
						<span className='hover:text-primary cursor-pointer relative group'>
							Khách hàng
						</span>
						<span className='hover:text-primary cursor-pointer relative group'>
							Phí dịch vụ
						</div>
						<span className='hover:text-primary cursor-pointer relative group'>
							<div onClick={() => navigate('/support')}>
								Hỗ trợ
							</div>
						</span>
						<span className='hover:text-primary cursor-pointer relative group'>
							Tin tức
						</span>
						<button
							className='bg-primary rounded-2xl px-[1.5rem] py-1 text-white font-bold'
							onClick={() => navigate(config.routes.login)}
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
