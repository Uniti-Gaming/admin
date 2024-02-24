import { FC } from 'react';
import { Line } from 'react-chartjs-2';
import { ChartData, Point } from 'chart.js';

import styles from './Chart.module.scss';

type ChartProps = {
    data: ChartData<'line', (number | Point | null)[], unknown>;
    title: string;
    label: string;
    value: number;
}

const Chart: FC<ChartProps> = ({ data, title, label, value }) => {
    return (
        <div className={styles.wrapper}>

            <h3 className={styles.title}>{title}</h3>

            <Line
                className={styles.chart}
                width={424}
                height={235}
                options={{
                    responsive: false,
                    aspectRatio: 424 / 235,
                    plugins: {
                        legend: { display: false },
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

            <div className={styles.footer}>
                <span className={styles.label}>{label}</span>
                <span className={styles.value}>{value}</span>
            </div>

        </div>
    );
};

export default Chart;