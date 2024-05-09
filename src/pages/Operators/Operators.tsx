import styles from './Operators.module.scss';
import BeforeTable from '@/components/BeforeTable/BeforeTable.tsx';
import {PaginationButtons, Row, Table, Tbody, Thead} from '@components';
import {IOperator} from '@interfaces';
import {useState} from 'react';
import {operatorsData} from '@data';
import {NavLink} from 'react-router-dom';

type Operators = {
    data: IOperator[],
    page: number,
    totalPages: number,
}

const Operators = () => {
    const [operators, setOperators] = useState<Operators>({
        data: operatorsData.slice(0, 12),
        page: 1,
        totalPages: Math.ceil(operatorsData.length / 12),
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
        setOperators({
            data: operatorsData.slice(start, end),
            page,
            totalPages: operators.totalPages,
        });
    };

    return (
        <div className={styles.panel}>

            {/* eslint-disable-next-line no-console */}
            <BeforeTable title='Операторы' search={(value) => console.log(value)}/>

            <Table>
                <Thead row={[
                    {
                        cell: 'Имя',
                    },
                    {
                        cell: 'ID',
                    },
                    {cell: 'Почта'},
                    {cell: 'Номер телефона'},
                    {cell: 'Действие'},
                ]}/>

                <Tbody>
                    {operators.data.map((operator, index) => (
                        <Row
                            key={index}
                            row={[
                                {cell: operator.name},
                                {cell: operator.ID},
                                {cell: operator.mail},
                                {cell: operator.phone},
                                {
                                    cell: (<NavLink className={styles.link}
                                                    to={`/operator/${operator.ID}`}>Изминить</NavLink>),
                                },
                            ]}
                        />
                    ))}
                </Tbody>

                <tfoot>
                    <tr>
                        <td className={styles.buttonRow} colSpan={5}>
                            <button type='button' className={styles.button}>Добавитить оператора</button>
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.counter} colSpan={3}>
                            Показывает {operators.page} страницу {operators.data.length} из {operatorsData
                            .length} пунктов
                        </td>
                        <td className={styles.pagination} colSpan={3}>
                            <PaginationButtons
                                totalPages={operators.totalPages}
                                currentPage={operators.page}
                                onChangePage={handlePageChange}
                            />
                        </td>
                    </tr>
                </tfoot>
            </Table>
        </div>
    );
};

export default Operators;