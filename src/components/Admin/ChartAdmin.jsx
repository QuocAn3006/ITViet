import { Icon } from '@iconify/react';
import { convertPrice } from '../../utils';
import { Tabs } from 'antd';
const ChartAdmin = () => {
	const items = [
		{
			key: '1',
			label: 'Theo ngày',
			children: 'Content of Tab Pane 3'
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
							<span className='text-gray-950 font-semibold text-sm'>
								3 đơn đã xong
							</span>
							<span className='text-primary text-2xl font-semibold'>
								{convertPrice(3000000)}
							</span>
							<span className='text-gray-500 text-sm'>
								Hôm qua 729000
							</span>
						</div>
					</div>
					<div>2</div>
					<div>3</div>
				</div>
			</div>

			<div className='bg-white w-full p-4 rounded-xl mt-5'>
				<h1 className='uppercase text-base font-semibold'>doanh số</h1>

				<Tabs items={items} />
			</div>
		</div>
	);
};

export default ChartAdmin;
