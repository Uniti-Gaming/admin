import styles from './EditCard.module.scss';
import {Heading} from '@components';
import classNames from 'classnames';
import {tmtIcon} from '@images';


const EditCard = () => {
    return (
        <div className={styles.editCard}>

            <Heading title='Редактировать карточку' size={3}/>

            <form action='#' className={styles.editForm}>

                <div className={styles.content}>
                    <label className={styles.label} htmlFor='name'>Название</label>
                    <input className={styles.input} type='text' id='name' name='name'/>

                    <label className={styles.label} htmlFor='game'>Игра</label>
                    <input className={styles.input} type='text' id='game' name='game'/>

                    <label className={styles.label} htmlFor='photo'>Фото (URL)</label>
                    <input className={styles.input} type='text' id='photo' name='photo'/>

                    <label className={styles.label} htmlFor='logo'>Лого (URL)</label>
                    <input className={styles.input} type='text' id='logo' name='logo'/>

                    <label className={styles.label} htmlFor='type'>Тип</label>
                    <input className={styles.input} type='text' id='type' name='type'/>

                    <label className={styles.label} htmlFor='shortdescr'>Краткое <br/>описание</label>
                    <input className={styles.input} type='text' id='shortdescr' name='shortdescr'/>


                    <div className={styles.additional}>
                        <label className={styles.label} htmlFor='descr'>Описание</label>
                        <textarea name='descr' id='descr'/>

                        <label className={styles.label} htmlFor='price'>Цена</label>
                        <label className={classNames(styles.input, styles.labelInput, styles.balls)}>
                            <input className={styles.price} type='text' id='price' name='price'/>
                            <img className={styles.icon} src={tmtIcon} alt='ticket icon'/>
                        </label>
                    </div>
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

export default EditCard;