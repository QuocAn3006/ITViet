import { Icon } from '@iconify/react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const NavbarAdmin = () => {
	const navigate = useNavigate();
	const user = useSelector(state => state?.user);
	return (
		<header className='flex flex-col'>
			<nav className='gap-2 h-12  w-full'>
				<div className='max-w-7xl mx-auto flex item-center justify-between'>
					<div className='flex gap-1 items-center'>
						<img
							src='../src/assets/images/logo.png'
							alt=''
							width={30}
							height={30}
						/>
						<h1 className='text-2xl font-bold my-2 text-blue-900'>
							VIET
						</h1>
					</div>
					<div className='flex hover cursor-pointer gap-1 '>
						<div className=''>
							<button className=' flex peer hover:bg-gray-200 text-black gap-1 px-2 rounded-md relative'>
								<h1 className='py-3 font-semibold'>
									{user?.name}
								</h1>
								<Icon
									icon='tabler:user-circle'
									className='my-3 items-center'
									height={25}
								></Icon>
							</button>
							<div className='hidden peer-hover:flex hover:flex flex-col bg-gray-300 drop-shadow-lg rounded-md gap-1 absolute top-12 right-[7.4rem] z-40'>
								<a
									className='hover:bg-gray-200 p-3 rounded-md flex gap-3 items-center'
									href='#'
								>
									<Icon
										icon='codicon:account'
										height={18}
									></Icon>
									<h1>Tài khoản</h1>
								</a>
								<a
									className='hover:bg-gray-200 p-3 rounded-md flex gap-3 items-center'
									href='#'
								>
									<Icon
										icon='mingcute:store-line'
										height={18}
									></Icon>
									<h1>Thông tin gian hàng</h1>
								</a>
								<div
									onClick={() => navigate('/')}
									type='button'
									className='hover:bg-gray-200 p-3 rounded-md flex gap-3 items-center'
								>
									<Icon
										icon='tabler:logout'
										height={18}
									></Icon>
									<h1>Đăng xuất</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
			<nav className='bg-[#4b6580] text-white h-10 items-center'>
				<div className='max-w-7xl mx-auto flex item-center'>
					<div className='flex gap-2 items-center h-10 px-2 hover:bg-[#3e5369] cursor-pointer rounded-md'>
						<Icon icon='ph:eye-bold'></Icon>
						<h1>Tổng quan</h1>
					</div>
					<div className='flex gap-2 items-center h-10 px-2 hover:bg-[#3e5369] cursor-pointer rounded-md'>
						<Icon icon='gravity-ui:box'></Icon>
						<h1>Hàng hóa</h1>
					</div>
					<div className='flex gap-2 items-center h-10 px-2 hover:bg-[#3e5369] cursor-pointer rounded-md'>
						<Icon icon='tabler:table'></Icon>
						<h1>Phòng/Bàn</h1>
					</div>
					<div className='flex gap-2 items-center h-10 px-2 hover:bg-[#3e5369] cursor-pointer rounded-md'>
						<Icon icon='fluent:arrow-swap-16-filled'></Icon>
						<h1>Giao dịch</h1>
					</div>
					<div className='flex gap-2 items-center h-10 px-2 hover:bg-[#3e5369] cursor-pointer rounded-md'>
						<Icon icon='mdi:partnership-outline'></Icon>
						<h1>Đối tác</h1>
					</div>
					<div className='flex gap-2 items-center h-10 px-2 hover:bg-[#3e5369] cursor-pointer rounded-md'>
						<Icon icon='mdi:human-queue'></Icon>
						<h1>Nhân viên</h1>
					</div>
					<div className='flex gap-2 items-center h-10 px-2 hover:bg-[#3e5369] cursor-pointer rounded-md'>
						<Icon icon='material-symbols:shopping-cart-outline'></Icon>
						<h1>Website</h1>
					</div>
					<div className='flex gap-2 items-center h-10 px-2 hover:bg-[#3e5369] cursor-pointer rounded-md'>
						<Icon icon='dashicons:money-alt'></Icon>
						<h1>Sổ quỹ</h1>
					</div>
					<div className='flex gap-2 items-center h-10 px-2 hover:bg-[#3e5369] cursor-pointer rounded-md'>
						<Icon icon='tabler:report'></Icon>
						<h1>Báo cáo</h1>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default NavbarAdmin;
