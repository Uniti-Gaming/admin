import styles from './GamesPanel.module.scss';

import BeforeTable from '@/components/BeforeTable/BeforeTable';
import {Table, Thead} from '@/components';


// type Games = {
//     name: string,
//     category: string,
//     action: string
// }

const GamesPanel = () => {
    return (
        <div className={styles.panel}>

            <BeforeTable title='Игры' search={(value) => console.log(value)} />

            <Table>
                <Thead row={[
                    {
                        cell: '№',
                        extraClass: styles.alignLeft,
                    },
                    {
                        cell: 'Название',
                        extraClass: styles.alignLeft,
                    },
                    { cell: 'Категория' },
                    { cell: 'Действие' },
                ]} />

            </Table>
        </div>
    );
};

export default GamesPanel;