import { useEffect, useState } from 'react';
import * as OrderService from '../../services/order';
import { convertPrice, formatDate } from '../../utils';
import { Spin, Table } from 'antd';
import { Icon } from '@iconify/react';
import { useDebounce } from '../../hook/useDebounce';

const ManageBillPage = () => {
	const [loading, setLoading] = useState(false);
	const [allOrder, setAllOrder] = useState([]);
	const [value, setValue] = useState('');
	const getAllOrder = async () => {
		try {
			setLoading(true);
			const res = await OrderService.getAllOrder();
			setAllOrder(res.data);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		getAllOrder();
	}, []);

	const column = [
		{
			title: 'Mã hóa đơn',
			dataIndex: '_id',
			filterSearch: true,
			onFilter: (value, record) => record._id.startWith(value),
			witdh: '30%'
		},
		{
			title: 'Giá tiền tạm tính',
			dataIndex: 'itemPrice'
		},
		{
			title: 'Giá tiền giảm giá',
			dataIndex: 'discountPrice'
		},
		{
			title: 'Tổng tiền',
			dataIndex: 'totalPrice'
		},
		{
			title: 'Thời gian giao dịch',
			dataIndex: 'createdAt'
		}
	];

	const handleOnChange = e => {
		e.preventDefault();
		setValue(e.target.value);
	};

	const searchDebounce = useDebounce(value);

	let dataTables;

	if (searchDebounce.length > 0) {
		const filter = allOrder.filter(item => item._id.includes(value));
		dataTables = filter.map(item => {
			return {
				...item,
				itemPrice: convertPrice(item.itemPrice),
				discountPrice:
					item.discountPrice > 100
						? `${convertPrice(item.discountPrice)}đ`
						: `${item.discountPrice}%`,
				totalPrice: convertPrice(item.totalPrice),
				createdAt: formatDate(item.createdAt),
				key: item._id
			};
		});
	} else {
		dataTables = allOrder.map(item => {
			return {
				...item,
				itemPrice: convertPrice(item.itemPrice),
				discountPrice:
					item.discountPrice > 100
						? `${convertPrice(item.discountPrice)}đ`
						: `${item.discountPrice}%`,
				totalPrice: convertPrice(item.totalPrice),
				createdAt: formatDate(item.createdAt),
				key: item._id
			};
		});
	}

	return (
		<>
			<div className='w-full min-h-screen h-full'>
				<div className='max-w-7xl mx-auto pt-5'>
					<div className='my-2 w-[560px] relative'>
						<input
							type='text'
							placeholder='Tìm mã hóa đơn'
							className='w-full pl-3 py-2 rounded-2xl'
							value={value}
							onChange={handleOnChange}
						/>
						<Icon
							icon='tabler:search'
							height={22}
							className='absolute top-2 right-4'
						/>
					</div>
					<div className='mt-4 w-full'>
						<Spin
							delay={500}
							spinning={loading}
						>
							<Table
								columns={column}
								dataSource={dataTables}
							/>
						</Spin>
					</div>
				</div>
			</div>
		</>
	);
};

export default ManageBillPage;
