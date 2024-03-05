import styles from './Donut.module.scss';
import {Heading} from '@components';
import classNames from 'classnames';


const Donut = () => {
    return (
        <div className={styles.donut}>

            <Heading title='Донат' size={3}/>

            <form className={styles.content}>
                <label className={styles.label} htmlFor='name'>Название</label>
                <input className={styles.input} name='name' id='name' type='text'/>

                <label className={styles.label} htmlFor='game'>Игра</label>
                <input className={styles.input} name='game' id='game' type='text'/>

                <label className={styles.label} htmlFor='timeLabel'>Отметка</label>
                <input className={styles.input} name='timeLabel' id='timeLable' type='text'/>

                <label className={styles.label} htmlFor='user'>Пользователь</label>
                <input className={styles.input} name='user' id='user' type='text'/>

                <label className={styles.label} htmlFor='userID'>Пользователя</label>
                <input className={styles.input} name='userID' id='userID' type='text'/>

                <label className={styles.label} htmlFor='userNick'>Никнейм в игре</label>
                <input className={styles.input} name='userNick' id='userNick' type='text'/>

                <label className={styles.label} htmlFor='totalMoney'>Сумма</label>
                <input className={styles.input} name='totalMoney' id='totalManey' type='text'/>

                <label className={styles.label}>Изменить статус</label>
                <div className={styles.buttons} >
                    <button type='button' className={styles.button}>Неудачно</button>
                    <button type='button' className={classNames(styles.button, styles.pending)}>В обработке</button>
                    <button type='button' className={styles.button}>Оплачен</button>
                </div>
            </form>

            <div className={styles.footer}>
                <button type='button' className={styles.button}>Отмена</button>
                <button type='submit' className={classNames(styles.button, styles.save)}>Сохранить изменения</button>
            </div>
        </div>
    );
};

export default Donut;