import styles from './Donut.module.scss';
import {Heading} from '@components';
import classNames from 'classnames';


const Donut = () => {
    return (
        <div className={styles.donut}>

            <Heading title='Донат' size={3}/>

            <div className={styles.content}>
                <label className={styles.label} htmlFor='name'>Название</label>
                <input className={styles.input} name='name' type='text'/>

                <label className={styles.label} htmlFor='game'>Игра</label>
                <input className={styles.input} name='game' type='text'/>

                <label className={styles.label} htmlFor='timeLabel'>Отметка</label>
                <input className={styles.input} name='timeLabel' type='text'/>

                <label className={styles.label} htmlFor='user'>Пользователь</label>
                <input className={styles.input} name='user' type='text'/>

                <label className={styles.label} htmlFor='userID'>Пользователя</label>
                <input className={styles.input} name='userID' type='text'/>

                <label className={styles.label} htmlFor='userNick'>Никнейм в игре</label>
                <input className={styles.input} name='userNick' type='text'/>

                <label className={styles.label} htmlFor='totalMoney'>Сумма</label>
                <input className={styles.input} name='totalMoney' type='text'/>

                <label className={styles.label}>Изменить статус</label>
                <div className={styles.buttons} >
                    <button className={styles.button}>Неудачно</button>
                    <button className={classNames(styles.button, styles.pending)}>В обработке</button>
                    <button className={styles.button}>Оплачен</button>
                </div>
            </div>

            <div className={styles.footer}>
                <button className={styles.button}>Отмена</button>
                <button className={classNames(styles.button, styles.save)}>Сохранить изменения</button>
            </div>
        </div>
    );
};

export default Donut;