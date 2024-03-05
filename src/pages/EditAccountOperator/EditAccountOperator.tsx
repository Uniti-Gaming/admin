import styles from './EditAccountOperator.module.scss';
import {Heading} from '@components';
import classNames from 'classnames';
import {showpass} from '@images';


const EditAccountOperator = () => {
    return (
        <div className={styles.editAccountOperator}>

            <Heading title='Редактировать аккаунт оператора' size={3}/>

            <form action='#' className={styles.content}>

                <label className={styles.label} htmlFor='name'>Имя</label>
                <input className={styles.input} type='text' id='name' name='name'/>

                <label className={styles.label} htmlFor='ID'>ID</label>
                <input className={styles.input} type='text' id='ID' name='ID'/>

                <label className={styles.label} htmlFor='mail'>Почта</label>
                <input className={styles.input} type='text' id='mail' name='mail'/>

                <label className={styles.label} htmlFor='phone'>Телефон</label>
                <input className={styles.input} type='text' id='phone' name='phone'/>

                <label className={styles.label} htmlFor='password'>Пароль</label>

                <label htmlFor='password' className={styles.wrapperShowPass}>
                    <input className={styles.input} type='password' id='password' name='password'/>
                    <button className={styles.showPass}>
                        <img src={showpass} alt='show password image'/>
                    </button>
                </label>

            </form>

            <div className={styles.footer}>
                <button type='button' className={styles.button}>Отмена</button>
                <button type='submit' className={classNames(styles.button, styles.save)}>Сохранить изменения
                </button>
            </div>
        </div>
    );
};

export default EditAccountOperator;