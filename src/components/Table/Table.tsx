import TableItem from '@/components/Table/TableItem/TableItem.tsx';
import styles from './Table.module.scss';
import {search} from '@images';


const data = [
    {
        name: 'Assassin\'s Creed Origins: Revenge of the Souls',
        category: 'Бесплатно',
        action: 'Изменить',
    },
    {
        name: 'Assassin\'s Creed Origins: Revenge of the Souls',
        category: 'Бесплатно',
        action: 'Изменить',
    },
    {
        name: 'Assassin\'s Creed Origins: Revenge of the Souls',
        category: 'Бесплатно',
        action: 'Изменить',
    },
];


const Table = () => {
    return (
        <div className={styles.gameTable}>

            <div className={styles.captionTable}>
                <p>Игры</p>
                <div className={styles.captionSearchPanel}>
                    <img src={search} alt=""/>
                    <input type="text"/>
                </div>
                
            </div>

            <table>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Название</th>
                        <th>категория</th>
                        <th>Действие</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((elem, index) => (
                            <TableItem item={elem} index={index}/>))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Table;
