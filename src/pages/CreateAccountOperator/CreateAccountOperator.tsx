import styles from './CreateAccountOperator.module.scss';
import Heading from '../../components/Heading/Heading.tsx';
import classNames from 'classnames';
import {showpass} from '@images';


const CreateAccountOperator = () => {
    return (
        <div className={styles.createAccountOperator}>

            <Heading title='Редактировать аккаунт оператора' size={3}/>

            <form action='#' className={styles.createForm}>
                <div className={styles.content}>

                    <label className={styles.label} htmlFor='name'>Имя</label>
                    <input className={styles.input} type='text' id='name' name='name'/>

                    <label className={styles.label} htmlFor='id'>ID</label>
                    <input className={styles.input} type='text' id='id' name='id'/>

                    <label className={styles.label} htmlFor='mail'>Почта</label>
                    <input className={styles.input} type='email' id='mail' name='mail'/>

                    <label className={styles.label} htmlFor='phone'>Телефон</label>
                    <input className={styles.input} type='phone' id='phone' name='phone'/>

                    <label className={styles.label} htmlFor='password'>Пароль</label>
                    <label className={styles.inputWrapper}>
                        <input className={classNames(styles.input, styles.short)}
                            type='password'
                            id='password'
                            name='password'
                        />
                        <img className={styles.showPass} src={showpass} alt='show password'/>
                    </label>

                    <label className={styles.label} htmlFor='password'>Повторить пароль</label>
                    <label className={styles.inputWrapper}>
                        <input className={classNames(styles.input, styles.short)}
                            type='password'
                            id='password'
                            name='password'
                        />
                        <img className={styles.showPass} src={showpass} alt='show password'/>
                    </label>
                </div>

                <div className={styles.footer}>
                    <button type='button' className={styles.button}>Отмена</button>
                    <button type='submit' className={classNames(styles.button, styles.save)}>Сохранить изменения
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateAccountOperator;