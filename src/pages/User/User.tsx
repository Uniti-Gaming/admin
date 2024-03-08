import { FormEvent, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { coinIcon, tmtIcon, ticketIcon } from '@images';
import { usersData } from '@data';
import { IUser } from '@interfaces';
import { BalanceInput } from '@/components';
import styles from './User.module.scss';


export const User = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState<IUser | undefined>(usersData.find((item) => item.id === Number(id)));

    if (!user) {
        return <p>Такого пользователя не существует</p>;
    }
    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        // eslint-disable-next-line no-console
        console.log(user);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.user}>
                <h2 className={styles.name}>{user.name}</h2>
                <p className={styles.id}>{user.id}</p>
            </div>
            <p className={styles.statusLabel}>Статус блокировки аккаунта</p>
            <div className={classNames(styles.status, styles[user.status])}>
                <button
                    className={styles.blocked}
                    type='button'
                    onClick={() => setUser({ ...user, status: 'blocked' })}
                >
                    Заблокирован
                </button>
                <button
                    className={styles.active}
                    type='button'
                    onClick={() => setUser({ ...user, status: 'active' })}
                >
                    Активен
                </button>
            </div>
            <div className={styles.divider} />
            <div className={styles.data}>
                <h3 className={styles.heading}>Данные профиля</h3>
                <p className={styles.description}>Здесь будут отображены данные профиля</p>
            </div>
            <label className={styles.label} htmlFor='name'>Имя</label>
            <input
                className={classNames(styles.input, styles.large)}
                defaultValue={user.name}
                type='text'
                id='name'
                name='name'
            />
            <label className={styles.label} htmlFor='email'>Email</label>
            <input
                className={classNames(styles.input, styles.large)}
                type='text'
                id='email'
                name='email'
                defaultValue={user.email.email}
            />
            <label className={styles.label} htmlFor='id'>ID</label>
            <input
                className={classNames(styles.input, styles.short)}
                type='text'
                id='text'
                name='id'
                readOnly={true}
                defaultValue={user.id}
            />
            <div className={styles.divider} />
            <div className={styles.comments}>
                <h3 className={styles.heading}>Коментарии</h3>
                <p className={styles.description}>Здесь будут отображены коментраии к профилю</p>
            </div>
            <label className={styles.label} htmlFor='phone'>Номер телефона</label>
            <input
                className={classNames(styles.input, styles.large)}
                type='text'
                id='phone'
                name='phone'
                defaultValue={user.phone.number}
            />
            <label className={styles.label} htmlFor='regdate'>Дата регистрации</label>
            <input
                className={classNames(styles.input, styles.large)}
                type='text'
                id='regdate'
                name='regdate'
                readOnly={true}
                defaultValue={user.registration_date}
            />
            <textarea
                className={styles.textarea}
                defaultValue='Причина блокировки: Оскорбление администрации'
            />
            <div className={classNames(styles.divider, styles.small)} />
            <label className={styles.label} htmlFor='balance'>Баланс</label>
            <BalanceInput
                value={user.balance.main}
                width={207}
                name='balance'
                id='balance'
                currency='TMT'
                icon={tmtIcon}
                onChange={(evt) => setUser({
                    ...user,
                    balance: { ...user.balance, main: Number(evt.target.value) },
                })}
            />
            <label className={styles.label} htmlFor='coins'>Баллы</label>
            <BalanceInput
                value={user.balance.coins}
                name='coins'
                id='coins'
                currency='UG'
                width={207}
                icon={coinIcon}
                onChange={(evt) => setUser({
                    ...user,
                    balance: { ...user.balance, coins: Number(evt.target.value) },
                })}
            />
            <label className={styles.label} htmlFor='tickets'>Билеты</label>
            <BalanceInput
                value={user.balance.tickets}
                name='tickets'
                id='tickets'
                currency='Ticket'
                width={207}
                icon={ticketIcon}
                onChange={(evt) => setUser({
                    ...user,
                    balance: { ...user.balance, tickets: Number(evt.target.value) },
                })}
            />
            <div className={classNames(styles.divider, styles.small)} />
            <label className={styles.label} htmlFor='lang'>Язык</label>
            <input
                defaultValue={user.language}
                className={classNames(styles.input, styles.large)}
                type='text'
                id='lang'
                name='lang'
                readOnly={true}
            />
            <label className={styles.label} htmlFor='tariff'>Тариф</label>
            <input
                defaultValue={user.tariff.name}
                className={classNames(styles.input, styles.large)}
                type='text'
                id='tariff'
                name='tariff'
                readOnly={true}
            />
            <label className={styles.label} htmlFor='expdate'>Срок действия</label>
            <div className={styles.exprdate}>
                <input
                    defaultValue={user.tariff.start_date}
                    className={classNames(styles.input, styles.short)}
                    type='text'
                    id='expdate'
                    name='expdate'
                    readOnly={true}
                />
                <input
                    defaultValue={user.tariff.end_date}
                    className={classNames(styles.input, styles.short)}
                    type='text'
                    id='expdate'
                    name='expdate'
                    readOnly={true}
                />
            </div>
            <label className={styles.label} htmlFor='trustPhone'>Номер подтверждён</label>
            <select
                defaultValue={user.phone.verified ? 'yes' : 'no'}
                name='trustPhone'
                id='trustPhone'
            >
                <option value='yes'>Да</option>
                <option value='no'>Нет</option>
            </select>
            <label className={styles.label} htmlFor='trustMail'>Почта подтверждена</label>
            <select defaultValue={user.email.verified ? 'yes' : 'no'} name='trustMail' id='trustMail'>
                <option value='yes'>Да</option>
                <option value='no'>Нет</option>
            </select>
            <div className={styles.divider} />

            <button className={styles.button}>Сбросить пароль</button>
            <div className={styles.footer}>
                <button
                    type='button'
                    className={styles.button}
                    onClick={() => navigate(-1)}
                >
                    Отмена
                </button>
                <button type='submit' className={classNames(styles.button, styles.save)}>
                    Сохранить изменения
                </button>
            </div>
        </form>
    );
};