import styles from './GamesPanel.module.scss';

import BeforeTable from '@/components/BeforeTable/BeforeTable';
import {PaginationButtons, Row, Table, Tbody, Thead} from '@/components';
import {IGameData} from '@interfaces';
import {gamesData} from '@data';
import {useState} from 'react';

type Games = {
    data: IGameData[]
    page: number
    totalPages: number
}

const GamesPanel = () => {
    const [games, setGames] = useState<Games>({
        data: gamesData.slice(0, 12),
        page: 1,
        totalPages: Math.ceil(gamesData.length / 12),
    });

    /**
     * Handles the page change event.
     *
     * @param {number} page - The new page number
     * @return {void}
     */
    const handlePageChange = (page: number) => {
        const start = (page - 1) * 12;
        const end = start + 12;
        setGames({
            data: gamesData.slice(start, end),
            page,
            totalPages: games.totalPages,
        });
    };

    return (
        <div className={styles.panel}>

            <BeforeTable title="Игры" search={(value) => console.log(value)}/>

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
                    {cell: 'Категория'},
                    {cell: 'Действие'},
                ]}/>

                <Tbody>
                    {games.data.map((game, index) => (
                        <Row
                            key={index}
                            row={[

                                {cell: index, extraClass: styles.alignLeft},
                                {cell: game.name},
                                {cell: game.category},
                                {cell: game.action},
                            ]}
                        />
                    ))}
                </Tbody>

                <tfoot>
                    <tr>
                        <td className={styles.counter} colSpan={3}>
                            Показывает {games.page} страницу {games.data.length} из {gamesData.length} пунктов
                        </td>
                        <td className={styles.pagination} colSpan={3}>
                            <PaginationButtons
                                totalPages={games.totalPages}
                                currentPage={games.page}
                                onChangePage={handlePageChange}
                            />
                        </td>
                    </tr>
                </tfoot>

            </Table>
        </div>
    );
};

export default GamesPanel;