import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
} from 'chart.js';
import {
    Chart,
} from 'react-chartjs-2';

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
    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const data = {
        labels,
        datasets: [
            {
                type: 'bar',
                label: 'Dataset 1',
                Color: 'rgb(255, 99, 132)',
                fill: false,
                data: { min: 200, max: 1200 },
            },
        ],
    };

    return (
        <div className="flex-1 p-4">
            {/* Doanh thu */}
            <div className="w-full h-auto">
                <Chart
                    type='bar'
                    options={options}
                    data={data}
                />
            </div>
        </div>
    );
}

export default ChartOwner;