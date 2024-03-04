import { Icon } from '@iconify/react';
import { Tabs } from 'antd';
import { tableOrder } from '../constants';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOrderProduct } from '../redux/Slice/orderSlice';
const CashierPage = () => {
	const [selectedTable, setSelectedTable] = useState(null);
	const [selectedTabKey, setSelectedTabKey] = useState('1');
	const dispatch = useDispatch();
	const order = useSelector(state => state?.order);
	const handleTableClick = idx => {
		setSelectedTable(idx);
		setSelectedTabKey('2');
	};

	const handleAddOrder = () => {
		dispatch(
			addOrderProduct({
				orderItem: {
					name: 'Milano',
					amount: 1,
					image: 'https://cdn-app.kiotviet.vn/sample/coffee/1.jpg',
					price: 30000,
					productId: 1
				}
			})
		);
	};
	const items = [
		{
			key: '1',
			label: 'Phòng bàn',
			children: (
				<ul className='h-full flex flex-wrap gap-y-6'>
					{tableOrder.map((item, idx) => (
						<li
							onClick={() => handleTableClick(idx)}
							key={idx}
							className={`cursor-pointer text-center w-[12.5%] h-[25%] hover:bg-[#d5d5d5d5] rounded-2xl flex flex-col items-center gap-1 
							${selectedTable === idx ? 'bg-[#4b6580] ' : ''}`}
						>
							{idx === 0 ? (
								<>
									<Icon
										icon={item.icon}
										height={40}
										className='my-2'
									/>
									{item.title}
								</>
							) : (
								<>
									<img
										src={item.icon}
										alt='table-icon'
										className='pt-4'
									/>
									{item.title}
								</>
							)}
						</li>
					))}
				</ul>
			)
		},
		{
			key: '2',
			label: 'Thực đơn',
			children: (
				<ul className='flex flex-wrap gap-y-6 h-full'>
					<li
						onClick={handleAddOrder}
						className='cursor-pointer text-center w-[20%] h-[25%] hover:bg-[#d5d5d5d5] rounded-2xl gap-1 flex items-center justify-center'
					>
						<div className='h-full block p-0 overflow-hidden text-center'>
							<img
								src='https://cdn-app.kiotviet.vn/sample/coffee/1.jpg'
								alt='anh-cf'
								width={100}
								height={80}
								className='max-h-full max-w-full pt-2'
							/>
							<h2>Milano</h2>
							<span className='text-black'>30,000</span>
						</div>
					</li>
					<li className='cursor-pointer text-center w-[20%] h-[25%] hover:bg-[#d5d5d5d5] rounded-2xl gap-1 flex items-center justify-center'>
						<div className='h-full block p-0 overflow-hidden text-center'>
							<img
								src='https://cdn-app.kiotviet.vn/sample/coffee/1.jpg'
								alt='anh-cf'
								width={100}
								height={80}
								className='max-h-full max-w-full pt-2'
							/>
							<h2>Milano</h2>
							<span className='text-black'>30,000</span>
						</div>
					</li>
					<li className='cursor-pointer text-center w-[20%] h-[25%] hover:bg-[#d5d5d5d5] rounded-2xl gap-1 flex items-center justify-center'>
						<div className='h-full block p-0 overflow-hidden text-center'>
							<img
								src='https://cdn-app.kiotviet.vn/sample/coffee/1.jpg'
								alt='anh-cf'
								width={100}
								height={80}
								className='max-h-full max-w-full pt-2'
							/>
							<h2>Milano</h2>
							<span className='text-black'>30,000</span>
						</div>
					</li>
				</ul>
			)
		},
		{
			key: '3',
			label: 'Khác',
			children: 'Content of Tab Pane 3'
		}
	];

	return (
		<div className='p-3 w-full h-full min-h-screen flex bg-[#2f3f50] gap-4'>
			<div className='w-[65%] bg-white rounded-2xl p-4'>
				<Tabs
					items={items}
					activeKey={selectedTabKey}
					onChange={setSelectedTabKey}
				/>
			</div>

			<div className='w-[35%] bg-white rounded-2xl p-4 flex flex-col'>
				<div className='h-full'>
					{order?.orderItems.length === 0 && (
						<div className='flex items-center flex-col justify-center mt-10'>
							<i
								className='w-[96px] h-[96px] min-w-[96px]'
								style={{
									background:
										'url(https://static-kvfnb.kiotviet.vn/Content/WebPos/food-icon.svg) no-repeat'
								}}
							></i>
							<div className='text-center'>
								<p className='font-medium text-xl'>
									Chưa có món nào
								</p>
								<span>Vui lòng chọn thực đơn</span>
							</div>
						</div>
					)}
					{order?.orderItems?.map(item => (
						<div
							key={item.name}
							className='my-[5px]'
						>
							<div
								style={{
									backgroundColor: 'unset',
									boxShadow:
										'0px 4px 10px rgba(0, 0, 0, 0.1)',
									border: '1px solid transparent',
									borderRadius: '10px',
									padding: '14px 0'
								}}
							>
								<div className='flex w-full items-center'>
									<span className='px-2'>
										<Icon
											icon='ph:trash-light'
											height={20}
										/>
									</span>
									<div className='flex flex-1 gap-x-2'>
										<div
											className=''
											style={{
												flex: '1 1 20%',
												wordBreak: 'break-word'
											}}
										>
											<span className='font-semibold'>
												{item.name}
											</span>
										</div>

										<div className='w-[109px]'>
											<div className='flex items-center'>
												<button
													className='w-7 h-7 min-w-7 rounded-full flex items-center justify-center'
													style={{
														border: '1px solid #4D5258'
													}}
												>
													-
												</button>

												<input
													min={1}
													defaultValue={1}
													className='w-8 h-5 border-none text-center'
													type='text'
												/>

												<button
													className='w-7 h-7 min-w-7 rounded-full flex items-center justify-center'
													style={{
														border: '1px solid #4D5258'
													}}
												>
													+
												</button>
											</div>
										</div>

										<div className='border-b-2 border-b-[#dddddd]'>
											{item.price}
										</div>

										<div className='font-semibold'>
											{item.price}
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className='flex gap-2'>
					<button className='flex items-center py-4 px-6 w-[50%] bg-[#28b44f] rounded-2xl justify-center font-semibold text-white'>
						<Icon icon='solar:dollar-linear' />
						Thanh toán (F9)
					</button>

					<button className='flex items-center py-4 px-6 w-[50%] bg-primary rounded-2xl justify-center font-semibold text-white'>
						<Icon icon='ph:bell-bold' />
						Thông báo (F10)
					</button>
				</div>
			</div>
		</div>
	);
};

export default CashierPage;
