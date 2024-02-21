import styles from './OneUser.module.scss';
// import { bonuses1 } from '@images';


const OneUser = () => {
    return (
        <div className={styles.OneUser}>

            <div className={styles.oneUser__content}>

                <div className={styles.oneUser__leftPanel}>
                    <div className={styles.leftPanel__userName}>
                        <h2>Sisyphus Ventures</h2>
                        <h3>UG-45-qwer</h3>
                    </div>

                    <div className={styles.leftPanel__profileData}>
                        <h2>Данные профиля</h2>
                        <p>Здесь будут отображены данные профиля</p>
                    </div>

                    <div className={styles.leftPanel__comments}>
                        <h2>Коментарии</h2>
                        <p>Здесь будут отображены коментраии к профилю</p>
                    </div>

                    <div className={styles.leftPanel__additionalPanel}>
                        <h2>Причина блокировки:</h2>
                        <p>Оскорбление администрации</p>
                    </div>
                    <button className={styles.leftPanel__resetPassword_btn}>Сбросить пароль</button>
                </div>

                <div className={styles.oneUser__rightPanel}>
                    <div className={styles.rightPanel__accountStatus}>
                        <p>Статус аккаунта</p>
                        <button className={styles.rightPanel__statusTip}>Активен</button>
                    </div>

                    <form action='#'>
                        <div>
                            <label htmlFor='name'>Имя</label>
                            <input type='text' name='name' value='Vasily'/>
                        </div>
                        <div>
                            <label htmlFor='email'>Email</label>
                            <input type='email' name='email' value='vasya-pupkin@mail.tm'/>
                        </div>
                        <div className={styles.id}>
                            <label htmlFor='id'>ID</label>
                            <input className={styles.shortInput} value='UG-45-qwer' name='id' readOnly={true} />
                        </div>
                        <div>
                            <label htmlFor='phone'>Номер телефона</label>
                            <input type='phone' name='phone' value='+993 (65) 12-54-12'/>
                        </div>
                        <div className={styles.dateRegistration}>
                            <label htmlFor='dateRegistration'>Дата регистрации</label>
                            <input type='text' name='dateRegistration' readOnly={true} value='18.09.2022'/>
                        </div>

                        <div className={styles.bonuses}>
                            <div>
                                <label htmlFor='balance'>Баланс</label>
                                <input type='text' name='balance' value={'50 TMT'}/>
                            </div>
                            <div>
                                <label htmlFor='balls'>Баллы</label>
                                <input type='text' name='balls' value='800 UG'/>
                            </div>
                            <div>
                                <label htmlFor='tickets'>Билеты</label>
                                <input type='text' name='tickets' value='3Ticket'/>
                            </div>
                        </div>

                        <div>
                            <label htmlFor='lang'>Язык</label>
                            <input type='text' name='lang' value='Русский' readOnly={true}/>
                        </div>

                        <div>
                            <label htmlFor='tarif'>Тариф</label>
                            <input type='text' name='tarif' value='Нет' readOnly={true}/>
                        </div>

                        <div className={styles.limitsDate}>
                            <label htmlFor='limitsDate'>Срок действия</label>
                            <input type='date' name='limitsDateFrom' readOnly={true}/>
                            <input type='date' name='limitsDateBefore' readOnly={true}/>
                        </div>

                        {/* Здесь нужно добавить листбоксы для подтверждения почты и телефона*/}
                        <div className={styles.button__panel}>
                            <button>Отмена</button>
                            <button>Сохранить изменения</button>
                        </div>

                    </form>
                </div>


            </div>

        </div>
    );
};

export default OneUser;