import { FC } from 'react';
import { Table, Tbody, Thead, PaginationButtons } from '@/components';
import styles from './UserPanel.module.scss';
import { search } from '@images';

type UserNameProps = {
    name: string;
    email: string;
}

const UserName: FC<UserNameProps> = ({ name, email }) => {
    return (
        <>
            {name}
            <span className={styles.email}>{email}</span>
        </>
    );
};

const UserPanel = () => {
    return (
        <div className={styles.panel}>
            <div className={styles.userPanel__content}>

                <div className={styles.userPanel__title}>
                    <p>Пользователи</p>

                    <div className={styles.title__search}>
                        <img src={search} alt='Magnifer image' />
                        <input type='text' placeholder='Поиск' />
                    </div>
                </div>

                <Table>
                    <Thead row={[
                        {
                            cell: 'Пользователь',
                            extraClass: styles.alignLeft,
                        },
                        {
                            cell: 'ID',
                            extraClass: styles.alignLeft,
                        },
                        { cell: 'Тариф' },
                        { cell: 'Номер телефона' },
                        { cell: 'Статус' },
                        { cell: 'Действие' },
                    ]} />
                    <Tbody
                        tbody={[
                            {
                                row: [
                                    {
                                        cell: <UserName name='Roy Charyyev' email='Roycharyyew@gmail.com' />,
                                        extraClass: styles.alignLeft,
                                    },
                                    {
                                        cell: 'UG-45-qwer',
                                        extraClass: styles.alignLeft,
                                    },
                                    { cell: 'Властелин' },
                                    { cell: '+993 (62) 39-57-37' },
                                    { cell: 'Заблокирован' },
                                    { cell: 'Подробнее' },
                                ],
                            },
                            {
                                row: [
                                    {
                                        cell: <UserName name='Roy Charyyev' email='Roycharyyew@gmail.com' />,
                                        extraClass: styles.alignLeft,
                                    },
                                    {
                                        cell: 'UG-45-qwer',
                                        extraClass: styles.alignLeft,
                                    },
                                    { cell: 'Властелин' },
                                    { cell: '+993 (62) 39-57-37' },
                                    { cell: 'Заблокирован' },
                                    { cell: 'Подробнее' },
                                ],
                            },
                            {
                                row: [
                                    {
                                        cell: <UserName name='Roy Charyyev' email='Roycharyyew@gmail.com' />,
                                        extraClass: styles.alignLeft,
                                    },
                                    {
                                        cell: 'UG-45-qwer',
                                        extraClass: styles.alignLeft,
                                    },
                                    { cell: 'Властелин' },
                                    { cell: '+993 (62) 39-57-37' },
                                    { cell: 'Заблокирован' },
                                    { cell: 'Подробнее' },
                                ],
                            },
                            {
                                row: [
                                    {
                                        cell: <UserName name='Roy Charyyev' email='Roycharyyew@gmail.com' />,
                                        extraClass: styles.alignLeft,
                                    },
                                    {
                                        cell: 'UG-45-qwer',
                                        extraClass: styles.alignLeft,
                                    },
                                    { cell: 'Властелин' },
                                    { cell: '+993 (62) 39-57-37' },
                                    { cell: 'Заблокирован' },
                                    { cell: 'Подробнее' },
                                ],
                            },
                            {
                                row: [
                                    {
                                        cell: <UserName name='Roy Charyyev' email='Roycharyyew@gmail.com' />,
                                        extraClass: styles.alignLeft,
                                    },
                                    {
                                        cell: 'UG-45-qwer',
                                        extraClass: styles.alignLeft,
                                    },
                                    { cell: 'Властелин' },
                                    { cell: '+993 (62) 39-57-37' },
                                    { cell: 'Заблокирован' },
                                    { cell: 'Подробнее' },
                                ],
                            },
                        ]}
                    />
                    <tfoot>
                        <tr>
                            <td className={styles.counter} colSpan={3}>
                                Показывает 1 страницу 12 из 50 пунктов
                            </td>
                            <td className={styles.pagination} colSpan={3}>
                                <PaginationButtons />
                            </td>
                        </tr>
                    </tfoot>
                </Table>
            </div>
        </div>
    );
};

export default UserPanel;