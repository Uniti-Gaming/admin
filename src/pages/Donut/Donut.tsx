import styles from './Donut.module.scss';
import {Heading} from '@components';
import classNames from 'classnames';


const Donut = () => {
    return (
        <div className={styles.donut}>

            <Heading title='Донат' size={3}/>

            <div className={styles.donutContent}>
                <label className={styles.label}>Название</label>
                <input className={styles.input} type='text'/>

                <label className={styles.label}  htmlFor='game'>Игра</label>
                <input className={styles.input} type='text'/>

                <label className={styles.label}  htmlFor='timeLabel'>Отметка</label>
                <input className={styles.input} type='text'/>

                <label className={styles.label}  htmlFor='user'>Пользователь</label>
                <input className={styles.input} type='text'/>

                <label className={styles.label}  htmlFor='userID'>Пользователя</label>
                <input className={styles.input} type='text'/>

                <label className={styles.label}  htmlFor='userNick'>Никнейм в игре</label>
                <input className={styles.input} type='text'/>

                <label className={styles.label}  htmlFor='totalMoney'>Сумма</label>
                <input className={styles.input} type='text'/>

                <label className={styles.label}  htmlFor='status'>Изменить статус</label>
                <div className={styles.buttons}>
                    <button className={classNames(styles.button, styles.unsuccessful)}>Неудачно</button>
                    <button className={classNames(styles.button, styles.pending)}>В обработке</button>
                    <button className={classNames(styles.button, styles.paid)}>Оплачен</button>
                </div>
            </div>

            <div className={styles.footerButtons}>
                <button className={styles.button}>Отмена</button>
                <button className={classNames(styles.button, styles.save)}>Сохранить изменения</button>
            </div>
        </div>
    );
};

export default Donut;