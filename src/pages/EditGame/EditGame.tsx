import styles from './EditGame.module.scss';
import Heading from '@/components/Heading/Heading.tsx';

const EditGame = () => {
    return (
        <div className={styles.editGame}>
            <Heading title='Редактировать игру' size={3}/>

            <div className={styles.content}>
                <label className={styles.label} htmlFor='name'>Название</label>
                <input className={styles.input} type='text' name='name'/>
            </div>
            <div className={styles.content}>
                <label className={styles.label} htmlFor='link'>Ссылка</label>
                <input className={styles.input} type='text' name='link'/>
            </div>
            <div className={styles.content}>
                <label className={styles.label} htmlFor='category'>Категория</label>
                <select className={styles.select} name='category' id='category'>
                    <option value='nomoney'>Бесплатно</option>
                    <option value='standartLib'>Стандартная библиотека</option>
                    <option value='extendetLib'>Расширенная библиотека</option>
                </select>
            </div>

            <div className={styles.buttonsPanel}>
                <button className={styles.deleteGameBtn}>Удалить игру</button>

                <div className={styles.additionalButtons}>
                    <button className={styles.cancelBtn}>Отмена</button>
                    <button className={styles.saveGameBtn}>Сохранить изменения</button>
                </div>
            </div>
        </div>
    );
};

export default EditGame;