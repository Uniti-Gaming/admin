// import classNames from 'classnames';
import styles from './OneUser.module.scss';
import classNames from 'classnames';
import {bonuses1, tickets1, balls1} from '@images';


const OneUser = () => {
    return (
        <div className={styles.oneUser}>

            <div className={styles.leftPanel}>
                <h2 className={styles.userName}>Sisyphus Ventures</h2>
                <h3 className={styles.userID}>UG-45-qwer</h3>

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

                <form action="#">
                    <div className={styles.grid}>
                        <label className={styles.label} htmlFor="name">Имя</label>
                        <input className={styles.input} type="text" name="name"/>

                        <label className={styles.label} htmlFor="email">Email</label>
                        <input className={styles.input} type="text" name="email"/>

                        <label className={styles.label} htmlFor="id">ID</label>
                        {/* eslint-disable-next-line max-len */}
                        <input className={classNames(styles.input, styles.short)} type="text" name="id"  readOnly={true}/>

                        <label className={styles.label} htmlFor="phone">Номер телефона</label>
                        <input className={styles.input} type="text" name="phone"/>

                        <label className={styles.label} htmlFor="regdate">Дата регистрации</label>
                        <input className={styles.input} type="text" name="regdate" readOnly={true}/>
                    </div>

                    <div className={styles.bonuses}>
                        <label className={styles.label} htmlFor="balance">Баланс</label>
                        <label className={classNames(styles.input, styles.labelInput, styles.balance)}>
                            <input type="text" name="balance"/>
                            <img src={bonuses1} alt=""/>
                        </label>

                        <label className={styles.label} htmlFor="balls">Баллы</label>
                        <label className={classNames(styles.input, styles.labelInput, styles.balls)}>
                            <input type="text" name="balls"/>
                            <img src={balls1} alt=""/>
                        </label>

                        <label className={styles.label} htmlFor="tickets">Билеты</label>
                        <label className={classNames(styles.input, styles.labelInput, styles.tickets)}>
                            <input type="text" name="tickets"/>
                            <img src={tickets1} alt=""/>
                        </label>
                    </div>

                    <div className={styles.grid}>
                        <label className={styles.label} htmlFor="lang">Язык</label>
                        <input className={styles.input} type="text" name="lang" readOnly={true}/>

                        <label className={styles.label} htmlFor="tariff">Тариф</label>
                        <input className={styles.input} type="text" name="tariff" readOnly={true}/>

                        <label className={styles.label} htmlFor="expdate">Срок действия</label>
                        <div className={styles.exprdate}>
                            {/* eslint-disable-next-line max-len */}
                            <input className={classNames(styles.input, styles.short)} type="text" name="expdate" readOnly={true}/>
                            {/* eslint-disable-next-line max-len */}
                            <input className={classNames(styles.input, styles.short)} type="text" name="expdate" readOnly={true}/>
                        </div>
                    </div>

                    <div className={styles.bonuses}>
                        <label className={styles.label} htmlFor="trustPhone">Номер подтверждён</label>
                        <select name="trustPhone">
                            <option value="yes">Да</option>
                            <option value="no">Нет</option>
                        </select>

                        <label className={styles.label} htmlFor="trustMail">Почта подтверждена</label>
                        <select name="trustMail">
                            <option value="yes">Да</option>
                            <option value="no">Нет</option>
                        </select>
                    </div>
                </form>

                <div className={styles.footerButtons}>
                    <button className={styles.button}>Отмена</button>
                    <button className={classNames(styles.button, styles.save)}>Сохранить изменения</button>
                </div>
            </div>
        </div>
    );
};

export default OneUser;