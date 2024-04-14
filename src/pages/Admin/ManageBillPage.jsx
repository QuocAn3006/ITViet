import { useEffect, useState } from 'react';
import * as OrderService from '../../services/order';
import { convertPrice, formatDate } from '../../utils';

const ManageBillPage = () => {
	const [allOrder, setAllOrder] = useState([]);
	const getAllOrder = async () => {
		const res = await OrderService.getAllOrder();
		setAllOrder(res.data);
	};
	console.log(allOrder);
	useEffect(() => {
		getAllOrder();
	}, []);

	return (
		<div className='w-full min-h-screen'>
			<div className='max-w-7xl mx-auto pt-5'>
				<table className='mt-2 w-full text-center'>
					<tr className='border border-black'>
						<th className='border border-black'>Hóa đơn</th>
						<th className='border border-black'>
							Giá tiền tạm tính
						</th>
						<th className='border border-black'>
							Giá tiền giảm giá
						</th>
						<th className='border border-black'>Tổng tiền</th>
						<th className='border border-black'>Thời gian</th>
					</tr>
					{allOrder.map(item => (
						<>
							<tr className='border border-black'>
								{item.orderItems.map((i, id) => (
									<td
										key={id}
										className='flex flex-col'
									>
										{i.name}
									</td>
								))}
								<td className='border border-black'>
									{convertPrice(item.itemPrice)}
								</td>
								<td className='border border-black'>
									{item.discountPrice == 0 && <>None</>}
									{item.discountPrice > 0 &&
										item.discountPrice <= 100 && (
											<>{item.discountPrice}%</>
										)}
									{item.discountPrice > 100 && (
										<>{convertPrice(item.discountPrice)}đ</>
									)}
								</td>
								<td className='border border-black'>
									{convertPrice(item.totalPrice)}
								</td>
								<td className='border border-black'>
									{formatDate(item.createdAt)}
								</td>
							</tr>
						</>
					))}
				</table>
			</div>
		</div>
	);
};

export default ManageBillPage;
