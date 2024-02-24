
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
import faker from 'faker';

import Chart from './Chart';
import styles from './Statistics.module.scss';
import classNames from 'classnames';

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
        <div>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <span className={styles.label}>Зарегистрированные пользователи</span>
                    <span className={styles.value}>58,000</span>
                </li>
                <li className={styles.item}>
                    <span className={styles.label}>Онлайн игроков</span>
                    <span className={styles.value}>1332</span>
                </li>
                <li className={styles.item}>
                    <span className={styles.label}>Средний чек пользователя</span>
                    <span className={styles.value}>500 ТМТ</span>
                </li>
                <li className={styles.item}>
                    <span className={styles.label}>Всего промокодов</span>
                    <span className={styles.value}>58,000</span>
                </li>
            </ul>
            <div className={styles.buttons}>
                <button className={classNames(styles.button, styles.active)}>
                    Сегодня
                </button>
                <button className={styles.button}>Вчера</button>
                <button className={styles.button}>Неделя</button>
                <button className={styles.button}>Месяц</button>
                <button className={styles.button}>Квартал</button>
                <button className={styles.button}>Год</button>
            </div>
            <div className={styles.charts}>
                <Chart
                    data={data}
                    title='Онлайн игроки по ключу PC'
                    label='Онлайн'
                    value={315}
                />
                <Chart
                    data={data}
                    title='Онлайн игроки по ключу Android'
                    label='Онлайн'
                    value={315}
                />
                <Chart
                    data={data}
                    title='Онлайн игроки по ключу Steam'
                    label='Онлайн'
                    value={315}
                />
                <Chart
                    data={data}
                    title='Выручка от тарифов'
                    label='Выручка'
                    value={315}
                />
                <Chart
                    data={data}
                    title='Выручка от донатов'
                    label='Выручка'
                    value={315}
                />
                <Chart
                    data={data}
                    title='Активаций промокодов'
                    label='Активаций промокодов'
                    value={315}
                />
            </div>
        </div>
    );

};

export default Statistics;