import styles from './PromoList.module.scss';
import BeforeTable from '@/components/BeforeTable/BeforeTable.tsx';
import {PaginationButtons, Row, Table, Tbody, Thead} from '@components';
import {IPromo} from '@interfaces';
import {useState} from 'react';
import {operatorsData, promosData} from '@data';
import classNames from 'classnames';

type Promos = {
    data: IPromo[],
    page: number,
    totalPages: number,
}

const PromoList = () => {
    const [promos, setPromos] = useState<Promos>({
        data: promosData.slice(0, 12),
        page: 1,
        totalPages: Math.ceil(promosData.length / 12),
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
        setPromos({
            data: promosData.slice(start, end),
            page,
            totalPages: promos.totalPages,
        });
    };

    return (
        <div className={styles.panel}>

            <BeforeTable title='Список промокодов'
                children={
                    <button type='button'
                        className={classNames(styles.button, styles.headerButton)}>Cгенерировать</button>
                }
    
                search={(value) => console.log(value)}
            />

            <Table>
                <Thead row={[
                    {
                        cell: '№',
                    },
                    {
                        cell: 'дата создания',
                    },
                    {cell: 'промокод'},
                    {cell: 'номинал'},
                    {cell: 'Статус'},
                    {cell: 'дата активации'},
                ]}/>

                <Tbody>
                    {promos.data.map((promo, index) => (
                        <Row
                            key={index}
                            row={[
                                {cell: promo.ID},
                                {cell: promo.date},
                                {cell: promo.code},
                                {cell: promo.rating},
                                {cell: promo.status},
                                {cell: promo.dateActivation},
                            ]}
                        />
                    ))}
                </Tbody>

                <tfoot>
                    <tr>
                        <td className={styles.counter} colSpan={3}>
                        Показывает {promos.page} страницу {promos.data.length} из {operatorsData
                                .length} пунктов
                        </td>
                        <td className={styles.pagination} colSpan={3}>
                            <PaginationButtons
                                totalPages={promos.totalPages}
                                currentPage={promos.page}
                                onChangePage={handlePageChange}
                            />
                        </td>
                    </tr>
                </tfoot>


            </Table>
        </div>
    );
};

export default PromoList;