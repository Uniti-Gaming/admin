import styles from './EditAccountOperator.module.scss';
import {Heading} from '@components';
import classNames from 'classnames';


const EditAccountOperator = () => {
    return (
        <div className={styles.editAccountOperator}>

            <Heading title='Редактировать аккаунт оператора' size={3}/>

            <form action='#'>
                <div className={styles.content}>

                    <label className={styles.label} htmlFor='name'>Имя</label>
                    <input className={styles.input} type='text' name='name'/>

                    <label className={styles.label} htmlFor='ID'>ID</label>
                    <input className={styles.input} type='text' name='ID'/>

                    <label className={styles.label} htmlFor='mail'>Почта</label>
                    <input className={styles.input} type='text' name='mail'/>

                    <label className={styles.label} htmlFor='phone'>Телефон</label>
                    <input className={styles.input} type='text' name='phone'/>

                    <label className={styles.label} htmlFor='password'>Пароль</label>
                    <label htmlFor='password' className={styles.wrapperShowPass}>
                        <input className={styles.input} type='password' name='password'/>
                        <button className={styles.showPass}>
                            <img src='../../assets/icons/showpassword.svg' alt=''/>
                        </button>
                    </label>

                </div>

                <div className={styles.buttonsPanel}>
                    <button className={styles.button}>Удалить игру</button>

                    <div className={styles.additionalButtons}>
                        <button className={styles.button}>Отмена</button>
                        <button className={classNames(styles.button, styles.save)}>Сохранить изменения</button>
                    </div>
                </div>

            </form>


        </div>
    );
};

export default EditAccountOperator;