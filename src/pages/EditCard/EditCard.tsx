import styles from './EditCard.module.scss';
import {Heading} from '@components';
import classNames from 'classnames';
import {balls1} from '@images';


const EditCard = () => {
    return (
        <div className={styles.editCard}>

            <Heading title='Редактировать карточку' size={3}/>

            <form action='#'>
                <div className={styles.content}>

                    <label className={styles.label} htmlFor='name'>Название</label>
                    <input className={styles.input} type='text' name='name'/>

                    <label className={styles.label} htmlFor='game'>Игра</label>
                    <input className={styles.input} type='text' name='game'/>

                    <label className={styles.label} htmlFor='photo'>Фото (URL)</label>
                    <input className={styles.input} type='text' name='photo'/>

                    <label className={styles.label} htmlFor='logo'>Лого (URL)</label>
                    <input className={styles.input} type='text' name='logo'/>

                    <label className={styles.label} htmlFor='type'>Тип</label>
                    <input className={styles.input} type='text' name='type'/>

                    <label className={styles.label} htmlFor='shortdescr'>Краткое <br/>описание</label>
                    <input className={styles.input} type='text' name='shortdescr'/>
                </div>

                <div className={styles.additional}>
                    <label className={styles.label} htmlFor='descr'>Описание</label>
                    <textarea name='descr' id='descr'/>

                    <label className={styles.label} htmlFor='price'>Цена</label>
                    <label className={classNames(styles.input, styles.labelInput, styles.balls)}>
                        <input className={styles.price} type='text' name='price'/>
                        <img src={balls1} alt=''/>
                    </label>
                </div>

                <div className={styles.footerButtons}>
                    <button className={styles.button}>Отмена</button>
                    <button className={classNames(styles.button, styles.save)}>Сохранить изменения</button>
                </div>
            </form>

        </div>
    );
};

export default EditCard;