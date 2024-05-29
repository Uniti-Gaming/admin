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

            <BeforeTable title='Список тарифов'/>

            <Table>
                <Thead row={[
                    {
                        cell: 'Название', extraClass: styles.alignLeft,
                    },
                    {
                        cell: 'Тип', extraClass: styles.alignLeft,
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
                                {cell: plans.name, extraClass: styles.alignLeft},
                                {cell: plans.type, extraClass: styles.alignLeft},
                                {cell: plans.price + ' ман'},
                                {cell: plans.discount + ' %'},
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