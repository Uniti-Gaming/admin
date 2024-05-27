import styles from './Plans.module.scss';
import BeforeTable from '@/components/BeforeTable/BeforeTable.tsx';
import {PaginationButtons, Row, Table, Tbody, Thead} from '@components';
import {IPlan} from '@interfaces';
import {useState} from 'react';
import {plansData} from '@data';
import {NavLink} from 'react-router-dom';

type Plans = {
    data: IPlan[],
    page: number,
    totalPages: number,
}

const Plans = () => {
    const [plans, setPlans] = useState<Plans>({
        data: plansData.slice(0, 12),
        page: 1,
        totalPages: Math.ceil(plansData.length / 12),
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
        setPlans({
            data: plansData.slice(start, end),
            page,
            totalPages: plans.totalPages,
        });
    };


    return (
        <div className={styles.panel}>

            {/* eslint-disable-next-line no-console */}
            <BeforeTable title='Тарифы' search={(value) => console.log(value)}/>

            <Table>
                <Thead row={[
                    {
                        cell: 'Название',
                    },
                    {
                        cell: 'Тип',
                    },
                    {cell: 'Стоимость'},
                    {cell: 'Скидка'},
                    {cell: 'Действие'},
                ]}/>

                <Tbody>
                    {plans.data.map((plans, index) => (
                        <Row
                            key={index}
                            row={[
                                {cell: plans.name},
                                {cell: plans.type},
                                {cell: plans.price},
                                {cell: plans.discount},
                                {
                                    cell: (<NavLink className={styles.link} 
                                        to={`/operator/${plans.name}`}>Изминить</NavLink>),
                                },
                            ]}
                        />
                    ))}
                </Tbody>
                <tfoot>
                    <tr>
                        <td className={styles.counter} colSpan={3}>
                            Показывает {plans.page} страницу {plans.data.length} из {plansData.length} пунктов
                        </td>
                        <td className={styles.pagination} colSpan={3}>
                            <PaginationButtons
                                totalPages={plans.totalPages}
                                currentPage={plans.page}
                                onChangePage={handlePageChange}
                            />
                        </td>
                    </tr>
                </tfoot>
            </Table>
        </div>
    );
};

export default Plans;