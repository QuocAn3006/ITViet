/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Chart as ChartJS, defaults } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

const LineChart = ({ allProduct }) => {
	return (
		<>
			<Line
				data={{
					labels: allProduct?.map(item => item.totalPrice),
					datasets: [
						{
							label: 'Thống kê theo ngày',
							data: allProduct?.map(item => item.totalPrice),
							backgroundColor: '#064FF0',
							borderColor: '#064FF0'
						}
					]
				}}
				options={{
					elements: {
						line: {
							tension: 0.5
						}
					},
					plugins: {
						title: {
							text: 'Thống kê theo ngày'
						}
					}
				}}
			/>
		</>
	);
};

export default LineChart;
