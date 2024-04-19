import { Icon } from '@iconify/react';
import { convertPrice } from '../../utils';
import { Tabs } from 'antd';
import LineChart from '../LineChart';
const ChartAdmin = ({ allOrder }) => {
	const items = [
		{
			key: '1',
			label: 'Theo ngày',
			children: <LineChart allOrder={allOrder} />
		},
		{
			key: '2',
			label: 'Theo tháng',
			children: 'Content of Tab Pane 3'
		},
		{
			key: '3',
			label: 'Theo năm',
			children: 'Content of Tab Pane 3'
		}
	];
	const date = new Date();
	console.log(date);

	let sum = 0;
	allOrder.map(item => {
		if (date.toISOString().split('T')[0] === item.createdAt.split('T')[0]) {
			sum += item.totalPrice;
		}
	});

	return (
		<div className='max-w-7xl mx-auto pt-5'>
			<div className='bg-white w-full p-4 rounded-xl'>
				<h1 className='uppercase text-base font-semibold'>
					kết quả bán hôm nay
				</h1>

				<div className='flex gap-3 items-center justify-between mt-4'>
					<div className='flex items-center gap-2'>
						<Icon
							icon='material-symbols:monetization-on'
							height={42}
							className='text-primary'
						/>
						<div className='flex flex-col gap-2 ml-4'>
							<span className='text-primary text-2xl font-semibold'>
								{convertPrice(sum)}
							</span>
							<span className='text-gray-500 text-sm'>
								Hôm qua 729000
							</span>
						</div>
					</div>
				</div>
			</div>

			<div className='bg-white w-full p-4 rounded-xl mt-5'>
				<h1 className='uppercase text-base font-semibold'>Doanh số</h1>

				<Tabs items={items} />
			</div>

			<div className='bg-white w-full p-4 rounded-xl mt-5'>
				<h1 className='uppercase text-base font-semibold'>
					Top sản phẩm bán chạy
				</h1>

				<HorizontalChart allOrder={allOrder} />
			</div>
		</div>
	);
};

export default ChartAdmin;
