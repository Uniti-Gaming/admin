import styles from './EditGame.module.scss';
import Heading from '@/components/Heading/Heading.tsx';
import classNames from 'classnames';

const EditGame = () => {
    return (
        <div className={styles.editGame}>
            <Heading title='Редактировать игру' size={3}/>

            <form action='#' className={styles.content}>
                <label className={styles.label} htmlFor='name'>Название</label>
                <input className={styles.input} type='text' id='name' name='name'/>

                <label className={styles.label} htmlFor='link'>Ссылка</label>
                <input className={styles.input} type='text' id='link' name='link'/>

                <label className={styles.label} htmlFor='category'>Категория</label>
                <select className={styles.select} name='category' id='category'>
                    <option value='nomoney'>Бесплатно</option>
                    <option value='standartLib'>Стандартная библиотека</option>
                    <option value='extendetLib'>Расширенная библиотека</option>
                </select>
            </form>

            <div className={styles.footer}>
                <button type='button' className={styles.button}>Удалить игру</button>

                <div className={styles.additionalButtons}>
                    <button type='button' className={styles.button}>Отмена</button>
                    <button type='submit' className={classNames(styles.button, styles.save)}>Сохранить изменения
                    </button>
                </div>
            </div>

        </div>
    );
};

export default EditGame;