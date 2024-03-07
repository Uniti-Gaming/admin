/**
 * External dependencies
 */
import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Table, Tbody, Thead, PaginationButtons, Row } from '@/components';
import { usersData, text } from '@data';
import { IUser } from '@/core/interfaces';
import styles from './Users.module.scss';
import BeforeTable from '@/components/BeforeTable/BeforeTable';

type UserNameProps = {
    name: string;
    email: string;
}

/**
 * Renders the user's name and email.
 *
 * @return {JSX.Element} The JSX element representing the user's name and email
 */
const UserName: FC<UserNameProps> = ({ name, email }) => {
    return (
        <>
            {name}
            <span className={styles.email}>{email}</span>
        </>
    );
};

export const Users = () => {
    const [users, setUsers] = useState<IUser[]>(usersData.slice(0, 12));
    const lang = 'ru';

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handlePageChange = (page: number) => {
        const start = (page - 1) * 12;
        const end = start + 12;
        setUsers(usersData.slice(start, end));
    };
    
    return (
        <div className={styles.panel}>
            {/* eslint-disable-next-line no-console */}
            <BeforeTable title='Пользователи' search={(value) => console.log(value)} />
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
                <Tbody>
                    {users.map((user) => (
                        <Row
                            key={user.id}
                            row={[
                                {
                                    cell: <UserName name={user.name} email={user.email.email} />,
                                    extraClass: styles.alignLeft,
                                },
                                { cell: user.id, extraClass: styles.alignLeft },
                                { cell: user.tariff.name },
                                { cell: user.phone.number },
                                { cell: text[user.status][lang], extraClass: styles[user.status] },
                                { cell: (
                                    <NavLink className={styles.link} to={`/users/${user.id}`}>Подробнее</NavLink>
                                )},
                            ]}
                        />
                    ))}
                </Tbody>
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
    );
};
