import styles from './UserPanel.module.scss';
import { search } from '@images';

const UserPanel = () => {
    return (
        <div className={styles.UserPanel}>
            <div className={styles.userPanel__content}>

                <div className={styles.userPanel__title}>
                    <p>Пользователи</p>

                    <div className={styles.title__search}>
                        <img src={search} alt='Magnifer image' />
                        <input type='text' placeholder='Поиск' />
                    </div>
                </div>

                <div className={styles.userPanel__data}>
                    <table>
                        <thead>
                            <tr>
                                <th>Пользователь</th>
                                <th>ID</th>
                                <th>Тариф</th>
                                <th>Номер телефона</th>
                                <th>Статус</th>
                                <th>Действие</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>
                                    <p>Roy Charyyev</p>
                                    Roycharyyew@gmail.com
                                </td>

                                <td>
                                    UG-45-qwer
                                </td>

                                <td>
                                    Властелин
                                </td>

                                <td>
                                    +993 (62) 39-57-37
                                </td>

                                <td>
                                    Заблокирован
                                </td>

                                <td>
                                    Подробнее
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Roy Charyyev</p>
                                    Roycharyyew@gmail.com
                                </td>

                                <td>
                                    UG-45-qwer
                                </td>

                                <td>
                                    Властелин
                                </td>

                                <td>
                                    +993 (62) 39-57-37
                                </td>

                                <td>
                                    Активен
                                </td>

                                <td>
                                    Подробнее
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Roy Charyyev</p>
                                    Roycharyyew@gmail.com
                                </td>

                                <td>
                                    UG-45-qwer
                                </td>

                                <td>
                                    Властелин
                                </td>

                                <td>
                                    +993 (62) 39-57-37
                                </td>

                                <td>
                                    Заблокирован
                                </td>

                                <td>
                                    Подробнее
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Roy Charyyev</p>
                                    Roycharyyew@gmail.com
                                </td>

                                <td>
                                    UG-45-qwer
                                </td>

                                <td>
                                    Властелин
                                </td>

                                <td>
                                    +993 (62) 39-57-37
                                </td>

                                <td>
                                    Активен
                                </td>

                                <td>
                                    Подробнее
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className={styles.userPanel__footer}>

                    <p>Показывает 1 страницу 12 из 50 пунктов </p>

                    <div className={styles.userPAnel__paginator}>
                        <button className={styles.disableButton}>Предыдущее</button>
                        <button className={styles.activeButton}>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                        <button>5</button>
                        <button>Дальше</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserPanel;