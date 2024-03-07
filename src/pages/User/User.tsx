import classNames from 'classnames';
import { useParams } from 'react-router-dom';
import { bonuses1, tickets1, balls1 } from '@images';
import { usersData } from '@data';
import styles from './User.module.scss';


export const User = () => {
    const { id } = useParams();
    const curentUser = usersData.find((item) => item.id === Number(id));

    if (!curentUser) {
        return <p>Такого пользователя не существует</p>;
    }

    return (
        <div className={styles.oneUser}>

            <div className={styles.leftPanel}>
                <h2 className={styles.userName}>{curentUser.name}</h2>
                <h3 className={styles.userID}>{curentUser.id}</h3>

                <div className={styles.profileData}>
                    <h3>Данные профиля</h3>
                    <p>Здесь будут отображены данные профиля</p>
                </div>

                <div className={styles.profileComments}>
                    <h3>Коментарии</h3>
                    <p>Здесь будут отображены коментраии к профилю</p>
                </div>

                <div className={styles.blockReason}>
                    <h3>Причина блокировки:</h3>
                    <p>Оскорбление администрации</p>
                </div>

                <button className={styles.button}>Сбросить пароль</button>
            </div>

            <div className={styles.rightPanel}>

                <div className={styles.blockStatus}>
                    <p>Статус блокировки аккаунта</p>

                    <button className={styles.button}>Заблокирован</button>
                </div>

                <form action='#'>
                    <div className={styles.grid}>
                        <label className={styles.label} htmlFor='name'>Имя</label>
                        <input
                            className={styles.input}
                            defaultValue={curentUser.name}
                            type='text'
                            id='name'
                            name='name'
                        />

                        <label className={styles.label} htmlFor='email'>Email</label>
                        <input
                            className={styles.input}
                            type='text'
                            id='email'
                            name='email'
                            defaultValue={curentUser.email.email}
                        />

                        <label className={styles.label} htmlFor='id'>ID</label>
                        <input
                            className={classNames(styles.input, styles.short)}
                            type='text'
                            id='text'
                            name='id'
                            readOnly={true}
                            defaultValue={curentUser.id}
                        />

                        <label className={styles.label} htmlFor='phone'>Номер телефона</label>
                        <input
                            className={styles.input}
                            type='text'
                            id='phone'
                            name='phone'
                            defaultValue={curentUser.phone.number}
                        />

                        <label className={styles.label} htmlFor='regdate'>Дата регистрации</label>
                        <input
                            className={styles.input}
                            type='text'
                            id='regdate'
                            name='regdate'
                            readOnly={true}
                            defaultValue={curentUser.registration_date}
                        />
                    </div>
                    {/* слишком много `label` */}
                    <div className={styles.bonuses}>
                        <label className={styles.label} htmlFor='balance'>Баланс</label>
                        <label className={classNames(styles.input, styles.labelInput, styles.balance)}>
                            <input defaultValue={curentUser.balance.main} type='text' name='balance' id='balance' />
                            <img src={bonuses1} alt='' />
                        </label>

                        <label className={styles.label} htmlFor='balls'>Баллы</label>
                        <label className={classNames(styles.input, styles.labelInput, styles.balls)}>
                            <input defaultValue={curentUser.balance.coins} type='text' name='balls' id='balls' />
                            <img src={balls1} alt='' />
                        </label>

                        <label className={styles.label} htmlFor='tickets'>Билеты</label>
                        <label className={classNames(styles.input, styles.labelInput, styles.tickets)}>
                            <input defaultValue={curentUser.balance.tickets} type='text' name='tickets' id='tickets' />
                            <img src={tickets1} alt='' />
                        </label>
                    </div>

                    <div className={classNames(styles.grid, styles.additionalGrid)}>
                        <label className={styles.label} htmlFor='lang'>Язык</label>
                        <input
                            defaultValue={curentUser.language}
                            className={styles.input}
                            type='text'
                            id='lang'
                            name='lang'
                            readOnly={true}
                        />

                        <label className={styles.label} htmlFor='tariff'>Тариф</label>
                        <input
                            defaultValue={curentUser.tariff.name}
                            className={styles.input}
                            type='text'
                            id='tariff'
                            name='tariff'
                            readOnly={true}
                        />

                        <label className={styles.label} htmlFor='expdate'>Срок действия</label>
                        <div className={styles.exprdate}>
                            <input
                                defaultValue={curentUser.tariff.start_date}
                                className={classNames(styles.input, styles.short)}
                                type='text'
                                id='expdate'
                                name='expdate'
                                readOnly={true}
                            />
                            <input
                                defaultValue={curentUser.tariff.end_date}
                                className={classNames(styles.input, styles.short)}
                                type='text'
                                id='expdate'
                                name='expdate'
                                readOnly={true}
                            />
                        </div>
                    </div>

                    <div className={styles.bonuses}>
                        <label className={styles.label} htmlFor='trustPhone'>Номер подтверждён</label>
                        <select
                            defaultValue={curentUser.phone.verified ? 'yes' : 'no'}
                            name='trustPhone'
                            id='trustPhone'
                        >
                            <option value='yes'>Да</option>
                            <option value='no'>Нет</option>
                        </select>

                        <label className={styles.label} htmlFor='trustMail'>Почта подтверждена</label>
                        <select defaultValue={curentUser.email.verified ? 'yes' : 'no'} name='trustMail' id='trustMail'>
                            <option value='yes'>Да</option>
                            <option value='no'>Нет</option>
                        </select>
                    </div>
                </form>

                <div className={styles.footer}>
                    <button type='button' className={styles.button}>Отмена</button>
                    <button type='submit' className={classNames(styles.button, styles.save)}>
                        Сохранить изменения
                    </button>
                </div>
            </div>
        </div>
    );
};