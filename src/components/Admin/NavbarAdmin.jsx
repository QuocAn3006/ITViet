import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const NavbarAdmin = () => {
	const navigate = useNavigate();
	return (
		<header className="flex flex-col">
			<nav className="gap-2 h-12  w-full">
				<div className="max-w-7xl mx-auto flex item-center justify-between">
					<div className="flex gap-2">
						<h1>Logo</h1>
						<h1 className="text-2xl font-bold my-2 text-blue-900">ITVIET</h1>
					</div>
					<div className="flex hover cursor-pointer gap-1 ">
						<div className="">
							<button class=" flex peer hover:bg-gray-200 text-black gap-1 px-2 rounded-md relative">
								<h1 className="py-3 font-semibold">0795599925</h1>
								<Icon icon='tabler:user-circle' className="my-3 items-center" height={25}></Icon>
							</button>
							<div class="hidden peer-hover:flex hover:flex flex-col bg-gray-300 drop-shadow-lg rounded-md gap-1 absolute top-12">
								<a class="hover:bg-gray-200 p-3 rounded-md flex gap-3 items-center" href="#">
									<Icon icon='codicon:account'></Icon>
									<h1>Tài khoản</h1>
								</a>
								<a class="hover:bg-gray-200 p-3 rounded-md flex gap-3 items-center" href="#">
									<Icon icon='mingcute:store-line'></Icon>
									<h1>Thông tin gian hàng</h1>
								</a>
								<div
									onClick={() => navigate('/')}
									type='button'
									className='hover:bg-gray-200 p-3 rounded-md flex gap-3 items-center'
								>
									<Icon icon='tabler:logout'></Icon>
									<h1>Đăng xuất</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
			<nav className="bg-blue-950/75 text-white h-10 items-center">
				<div className="max-w-7xl mx-auto flex item-center">
					<div className="flex gap-2 items-center h-10 px-2 hover:bg-slate-500 cursor-pointer rounded-md">
						<Icon icon='ph:eye-bold'></Icon>
						<h1>Tổng quan</h1>
					</div>
					<div className="flex gap-2 items-center h-10 px-2 hover:bg-slate-500 cursor-pointer rounded-md">
						<Icon icon='gravity-ui:box'></Icon>
						<h1>Hàng hóa</h1>
					</div>
					<div className="flex gap-2 items-center h-10 px-2 hover:bg-slate-500 cursor-pointer rounded-md">
						<Icon icon='tabler:table'></Icon>
						<h1>Phòng/Bàn</h1>
					</div>
					<div className="flex gap-2 items-center h-10 px-2 hover:bg-slate-500 cursor-pointer rounded-md">
						<Icon icon='fluent:arrow-swap-16-filled'></Icon>
						<h1>Giao dịch</h1>
					</div>
					<div className="flex gap-2 items-center h-10 px-2 hover:bg-slate-500 cursor-pointer rounded-md">
						<Icon icon='mdi:partnership-outline'></Icon>
						<h1>Đối tác</h1>
					</div>
					<div className="flex gap-2 items-center h-10 px-2 hover:bg-slate-500 cursor-pointer rounded-md">
						<Icon icon='mdi:human-queue'></Icon>
						<h1>Nhân viên</h1>
					</div>
					<div className="flex gap-2 items-center h-10 px-2 hover:bg-slate-500 cursor-pointer rounded-md">
						<Icon icon='material-symbols:shopping-cart-outline'></Icon>
						<h1>Website</h1>
					</div>
					<div className="flex gap-2 items-center h-10 px-2 hover:bg-slate-500 cursor-pointer rounded-md">
						<Icon icon='dashicons:money-alt'></Icon>
						<h1>Sổ quỹ</h1>
					</div>
					<div className="flex gap-2 items-center h-10 px-2 hover:bg-slate-500 cursor-pointer rounded-md">
						<Icon icon='tabler:report'></Icon>
						<h1>Báo cáo</h1>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default NavbarAdmin;
