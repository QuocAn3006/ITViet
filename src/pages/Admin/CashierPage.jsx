/* eslint-disable react/display-name */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { Icon } from '@iconify/react';
import { Modal, Table, Tabs } from 'antd';
import { tableOrder } from '../../constants';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	addOrderProduct,
	decreaseAmount,
	increaseAmount,
	removeProduct
} from '../../redux/Slice/orderSlice';
import { useReactToPrint } from 'react-to-print';
import * as ProductService from '../../services/product';
import { convertPrice } from '../../utils';
import { useNavigate } from 'react-router-dom';
import config from '../../config';

const CashierPage = () => {
	const [selectedTable, setSelectedTable] = useState(null);
	const [selectedTabKey, setSelectedTabKey] = useState('1');
	const [allProduct, setAllProduct] = useState([]);
	const navigate = useNavigate();
	const user = useSelector(state => state?.user);
	const printref = useRef();
	const dispatch = useDispatch();
	const order = useSelector(state => state?.order);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const showModal = () => {
		setIsModalOpen(true);
	};
	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleTableClick = idx => {
		setSelectedTable(idx);
		setSelectedTabKey('2');
	};

	const handleOnChangeCount = (type, idProduct, limited) => {
		if (type === 'increase') {
			dispatch(increaseAmount({ idProduct }));
		} else if (type === 'decrease') {
			if (!limited) {
				dispatch(decreaseAmount({ idProduct }));
			}
		}
	};

	const handleDeleteProduct = idProduct => {
		dispatch(removeProduct({ idProduct }));
	};

	const priceMemo = useMemo(() => {
		const result = order?.orderItems.reduce((total, current) => {
			return total + current?.price * current?.amount;
		}, 0);
		return result;
	}, [order]);

	const getProductList = async () => {
		const res = await ProductService.getProductList();
		setAllProduct(res.data);
	};

	useEffect(() => {
		getProductList();
	}, []);

	const handleAddOrder = data => {
		dispatch(
			addOrderProduct({
				orderItem: data
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
					{allProduct?.map(item => (
						<li
							key={item._id}
							onClick={() =>
								handleAddOrder({
									name: item.name,
									amount: 1,
									image: item.image,
									price: item.price,
									id: item._id
								})
							}
							className='cursor-pointer w-[20%] h-[25%] hover:bg-[#d5d5d5d5] rounded-2xl gap-1 flex flex-col items-center justify-center'
						>
							<div className='p-0 overflow-hidden text-center h-[100px]'>
								<img
									src={item?.image}
									alt='anh-cf'
									width={50}
									height={50}
									className='h-full max-w-full pt-2'
								/>
							</div>
							<h2 className='overflow-hidden font-semibold'>
								{item?.name}
							</h2>
							<span className='text-primary font-semibold'>
								{convertPrice(item?.price)}
								<sup>đ</sup>
							</span>
						</li>
					))}
				</ul>
			)
		},
		{
			key: '3',
			label: 'Khác',
			children: 'Content of Tab Pane 3'
		}
	];

	const PrintOrder = React.forwardRef(({ allProduct, priceTotal }, ref) => {
		const columns = [
			{
				title: 'Tên sản phẩm',
				dataIndex: 'name'
			},

			{
				title: 'Số lượng',
				dataIndex: 'amount'
			},

			{
				title: 'Đơn giá',
				dataIndex: 'price'
			},
			{
				title: 'Thành tiền',
				dataIndex: 'total'
			}
		];

		const dataSource =
			allProduct?.length > 0 &&
			allProduct?.map(item => {
				return {
					...item,
					price: convertPrice(item.price),
					total: convertPrice(item.price * item.amount),
					key: item?._id
				};
			});
		return (
			<div
				className='flex-col gap-2 '
				ref={ref}
			>
				<div className='flex flex-col items-center justify-center gap-2 '>
					<h1 className='text-2xl font-bold'>Hệ thống ITViet</h1>
					<div className='flex items-center text-[14px] gap-1'>
						<span>Địa chỉ:</span>
						<span>
							254 Nguyễn Văn Linh, Quận Thanh Khê - Tp. Đà Nẵng
						</span>
					</div>
					<div className='flex items-center text-[14px] gap-1'>
						<span>Điện thoại:</span>
						<span>(+84) 236.3650403 - (+84) 236.3827111</span>
					</div>

					<h3 className='text-xl font-bold'>Hóa đơn thanh toán</h3>
				</div>
				<div>
					<Table
						columns={columns}
						dataSource={dataSource}
						pagination={false}
					/>
					<div className='flex items-center justify-between px-4 mt-2'>
						<span>Tổng cộng:</span>
						<span className='mr-24'>{priceTotal}</span>
					</div>
				</div>

				<span className='flex justify-center mt-5 text-sm'>
					Vui lòng quét mã QR code nếu bạn muốn chuyển khoản
				</span>

				<div className='mt-2 flex justify-center'>
					<img
						src='../src/assets/images/QRcode.jpg'
						alt='qrcode'
						width={260}
						height={260}
					/>
				</div>
				<span className='flex justify-center mt-2 text-sm'>
					Cảm ơn quý khách và hẹn gặp lại !!!
				</span>
			</div>
		);
	});

	const handlePrint = useReactToPrint({
		content: () => printref.current
	});

	return (
		<>
			<div className=' bg-[#2f3f50] pt-3 pr-8 w-full  text-white'>
				<span className='flex items-center gap-2 justify-end cursor-pointer relative group text-base'>
					<Icon
						icon='ph:user-light'
						height={20}
					/>
					{user.name}
					<ul className='dropdown-menu grid-cols-1 group-hover:top-5 right-20 z-20'>
						<li className='hover:text-primary text-base flex items-center gap-1'>
							<Icon
								icon='ph:user-light'
								height={20}
							/>
							Thông tin tài khoản
						</li>
						<li className='hover:text-primary text-base flex items-center gap-1'>
							<Icon
								icon='ant-design:setting-outlined'
								height={20}
							/>
							Cài đặt
						</li>
						<li
							className='hover:text-primary text-base flex items-center gap-1'
							onClick={() => navigate(config.routes.login)}
						>
							<Icon
								icon='ic:twotone-logout'
								height={20}
							/>
							Đăng xuất
						</li>
					</ul>
				</span>
			</div>
			<div className='p-3 w-full h-full min-h-screen flex bg-[#2f3f50] gap-4'>
				<div className='w-[65%] bg-white rounded-2xl p-4'>
					<Tabs
						items={items}
						activeKey={selectedTabKey}
						onChange={setSelectedTabKey}
					/>
				</div>

				<div className='w-[35%] flex flex-col bg-white rounded-2xl p-4'>
					<div className='h-full '>
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
								key={item._id}
								className='my-[5px] pb-3 '
								ref={printref}
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
										<span
											className='px-2 hover:text-red-500 cursor-pointer'
											onClick={() =>
												handleDeleteProduct(item?.id)
											}
										>
											<Icon
												icon='ph:trash-light'
												height={20}
											/>
										</span>
										<div className='flex flex-1 gap-x-2 '>
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

											<div className='w-[100px]'>
												<div className='flex items-center'>
													<button
														className='w-7 h-7 min-w-7 rounded-full flex items-center justify-center'
														style={{
															border: '1px solid #4D5258'
														}}
														onClick={() =>
															handleOnChangeCount(
																'decrease',
																item.id,
																item?.amount ===
																	1
															)
														}
													>
														-
													</button>

													<input
														min={1}
														value={item?.amount}
														className='w-8 h-5 border-none text-center'
														type='number'
													/>

													<button
														className='w-7 h-7 min-w-7 rounded-full flex items-center justify-center'
														style={{
															border: '1px solid #4D5258'
														}}
														onClick={() =>
															handleOnChangeCount(
																'increase',
																item.id
															)
														}
													>
														+
													</button>
												</div>
											</div>
											<div className='font-semibold w-[100px]'>
												{convertPrice(
													item?.price * item?.amount
												)}
												<sup>đ</sup>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>

					<div className='flex flex-col gap-2'>
						<div className='flex w-full items-center justify-between border-t border-t-gray-600 pt-4 pb-3'>
							<div className='text-lg font-semibold flex flex-col items-center'>
								<span>Tạm tính:</span>
								<span>Giảm giá:</span>
								<span>Tổng tiền</span>
							</div>
							<span className='text-lg font-semibold flex flex-col items-center'>
								<span>
									{convertPrice(priceMemo)}
									<sup>đ</sup>
								</span>
								<div>
									<span
										onClick={showModal}
										className='flex items-center gap-1'
									>
										0
										<Icon icon='mdi:edit-outline' />
									</span>

									<Modal
										title='Basic Modal'
										open={isModalOpen}
										onOk={handleOk}
										onCancel={handleOk}
									>
										<p>Some contents...</p>
										<p>Some contents...</p>
										<p>Some contents...</p>
									</Modal>
								</div>
								<span>0</span>
							</span>
						</div>

						<button
							onClick={handlePrint}
							className='flex items-center py-4 px-6 w-full bg-[#28b44f] rounded-2xl justify-center font-semibold text-white'
						>
							<Icon icon='solar:dollar-linear' />
							Thanh toán (F9)
						</button>

						<div className='hidden'>
							<PrintOrder
								ref={printref}
								allProduct={order?.orderItems}
								priceTotal={10000}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CashierPage;
