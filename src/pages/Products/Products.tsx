import styles from './Products.module.scss';
import BeforeTable from '@/components/BeforeTable/BeforeTable.tsx';
import {PaginationButtons, Row, Table, Tbody, Thead} from '@components';
import {IProduct} from '@interfaces';
import {useState} from 'react';
import {productsData} from '@data';
import {NavLink} from 'react-router-dom';

type Products = {
    data: IProduct[];
    page: number;
    totalPages: number;
}


const Products = () => {
    const [products, setProducts] = useState<Products>({
        data: productsData.slice(0, 12),
        page: 1,
        totalPages: Math.ceil(productsData.length / 12),
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
        setProducts({
            data: productsData.slice(start, end),
            page,
            totalPages: products.totalPages,
        });
    };


    return (
        <div className={styles.panel}>

            <BeforeTable title='Карточки товаров'
                children={
                    <button type='button'
                        className={styles.button}>добавить</button>
                }
    
                search={(value) => console.log(value)}
            />

            <Table>
                <Thead row={[
                    {cell: '№'},
                    {cell: 'Название'},
                    {cell: 'Игра'},
                    {cell: 'Стоимость'},
                    {cell: 'Действие'},
                ]}/>

                <Tbody>
                    {products.data.map((products, index) => (
                        <Row
                            key={index}
                            row={[
                                {cell: index + 1},
                                {cell: products.name},
                                {cell: products.game},
                                {cell: products.price + ' UG'},
                                {
                                    cell: (<NavLink className={styles.link}
                                        to={`/operator/${products.name}`}>Изменить</NavLink>),
                                },
                            ]}
                        />
                    ))}
                </Tbody>

                <tfoot>
                    <tr>
                        <td className={styles.counter} colSpan={3}>
                            Показывает {products.page} страницу {products.data.length} из {productsData.length} пунктов
                        </td>
                        <td className={styles.pagination} colSpan={3}>
                            <PaginationButtons
                                totalPages={products.totalPages}
                                currentPage={products.page}
                                onChangePage={handlePageChange}
                            />
                        </td>
                    </tr>
                </tfoot>


            </Table>

        </div>
    );
};

export default Products;