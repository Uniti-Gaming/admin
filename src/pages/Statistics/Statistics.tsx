import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

import styles from './Statistics.module.scss';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);

ChartJS.defaults.color = 'white';


// const options = {
//     responsive: true,
//     plugins: {
//         legend: {
//             display: false,
//             position: 'top' as const,
//         },
//         title: {
//             display: true,
//             text: 'Chart.js Line Chart',
//         },
//     },
// };

const labels = ['08.12 00:00', '', '', '', '', '09.12 00:00'];


const data = {
    labels,
    datasets: [
        {
            label: 'Количество игроков',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            borderColor: '#79109D',
            backgroundColor: '#79109D',
        },
    ],
};



const Statistics = () => {
    return (
        <Line
            className={styles.chart}
            width={424}
            height={235}
            options={{
                responsive: false,
                aspectRatio: 424 / 235,
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                scales: {
                    y: {
                        grid: {
                            color: '#8E8E93',
                            drawTicks: false,
                        },
                    },
                    x: {
                        grid: {
                            color: 'transparent',
                            tickColor: '#8E8E93',
                        },
                    },
                },
            }}
            data={data}
        />
    );

};

export default Statistics;