import {
	Chart as ChartJS,
	LinearScale,
	CategoryScale,
	BarElement,
	PointElement,
	LineElement,
	Legend,
	Tooltip
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import * as StoreService from '../../services/store';

ChartJS.register(
	LinearScale,
	CategoryScale,
	BarElement,
	PointElement,
	LineElement,
	Legend,
	Tooltip
);

const ChartOwner = () => {
	const [allStore, setAllStore] = useState([]);

	const getAllStore = async () => {
		try {
			const res = await StoreService.getAllStore();
			setAllStore(res.data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		Promise.all([getAllStore()]);
	}, []);
	const options = {
		scales: {
			y: {
				beginAtZero: true
			}
		}
	};

	const monthlyCounts = new Array(12).fill(0);
	allStore.forEach(item => {
		// Tạo một đối tượng ngày từ chuỗi createdAt của mỗi mục
		const createdAtDate = new Date(item.createdAt);
		// Lấy tháng từ ngày tạo
		const month = createdAtDate.getMonth();
		// Tăng số lượng mục cho tháng tương ứng
		monthlyCounts[month]++;
	});
	const labels = monthlyCounts.map((count, index) => {
		// Chuyển đổi index thành tên tháng (index bắt đầu từ 0)
		const monthName = new Date(2000, index).toLocaleString('en-US', {
			month: 'long'
		});
		return monthName;
	});

	const monthlyEarnings = new Array(12).fill(0);

	// Lặp qua mỗi mục trong mảng allStore
	allStore.forEach(item => {
		// Tạo một đối tượng ngày từ chuỗi createdAt của mỗi mục
		const createdAtDate = new Date(item.createdAt);
		// Tính toán ngày end bằng cách cộng thêm 3 tháng
		const endDate = new Date(createdAtDate);
		endDate.setMonth(endDate.getMonth() + 3);

		// Lấy tháng từ ngày tạo
		const month = createdAtDate.getMonth();
		// Tăng số lượng mục cho tháng tương ứng
		monthlyCounts[month]++;

		// Tính toán tiền dựa trên tiêu chí nhân với 720000
		const earning =
			270000 * (endDate.getMonth() - createdAtDate.getMonth());
		// Cộng vào tổng tiền của tháng
		monthlyEarnings[month] += earning;
	});

	const data = {
		labels,
		datasets: [
			{
				type: 'bar',
				label: 'Tổng doanh thu theo tháng',
				Color: 'rgb(255, 99, 132)',
				fill: false,
				data: monthlyEarnings
			}
		]
	};

	return (
		<div className='flex-1 p-4'>
			{/* Doanh thu */}
			<div className='w-full h-auto'>
				<Line
					options={options}
					data={data}
				/>
			</div>
		</div>
	);
};

export default ChartOwner;
