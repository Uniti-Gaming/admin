import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

const Statistics = () => {
    return (
        <Chart type='line' data={{
            labels: ['Jun', 'Jul', 'Aug'],
            datasets: [
                {
                    // id: 1,
                    label: '',
                    data: [5, 6, 7],
                },
                {
                    // id: 2,
                    label: '',
                    data: [3, 2, 1],
                },
            ],
        }} />
    );
};

export default Statistics;