import ProductAdmin from '../components/Admin/ProductAdmin';

const AdminPage = () => {
	const navigate = useNavigate();
	const itemMenu = [
		{
			key: 'product',
			title: 'Quản lý hàng hóa',
			icon: 'fluent-mdl2:product'
		},
		{
			key: 'chart',
			title: 'Quản lý doanh thu',
			icon: 'mdi:chart-line'
		},
		{
			key: 'employee',
			title: 'Quản lý nhân viên',
			icon: 'clarity:employee-group-solid'
		}
	];

	const [keySelected, setKeySelected] = useState('product');
	const renderPage = key => {
		switch (key) {
			case 'product':
				return <ProductAdmin />;
			case 'chart':
				return <ChartAdmin />;
			case 'employee':
				return <ManageEmployee />;
			default:
				return <></>;
		}
	};

	const handleClick = key => {
		setKeySelected(key);
	};
	return (
		<div className='flex'>
			<div className='w-[20%] h-screen bg-slate-600 text-white'>
				{itemMenu.map(item => (
					<div
						className={`${
							keySelected === item.key
								? 'bg-white text-primary hover:bg-white font-semibold'
								: ''
						} p-4 flex gap-2 items-center text-lg hover:bg-white/60 hover:text-primary cursor-pointer`}
						key={item.key}
						onClick={() => handleClick(item.key)}
					>
						<Icon
							icon={item.icon}
							height={22}
						/>
						<h2>{item.title}</h2>
					</div>
				))}
				<div
					onClick={() => navigate('/login')}
					className='p-4 flex gap-2 items-center text-lg hover:bg-slate-100 hover:text-primary cursor-pointer'
				>
					<Icon
						icon='material-symbols:logout-sharp'
						height={22}
					/>
					<h2>Đăng xuất</h2>
				</div>
			</div>
			<div className='w-[80%] p-4 bg-[#f0f2f5]'>
				{renderPage(keySelected)}
			</div>
		</div>
	);
};

export default AdminPage;
