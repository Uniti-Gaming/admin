import styles from './PromoGenerator.module.scss';
import {Heading} from '@components';
import classNames from 'classnames';

const PromoGenerator = () => {
    return (
        <div className={styles.promoGenerator}>

            <Heading title='Сгенерировать промокоды' size={3}/>

            <div className={styles.content}>

                <label className={classNames(styles.label, styles.div1)} htmlFor='quantity'>Кол-во</label>
                <input className={classNames(styles.input, styles.div2)} name='name' id='quantity' type='quantity'/>

                <label className={classNames(styles.label, styles.div3)} htmlFor='game'>Номинал</label>
                <input className={classNames(styles.input, styles.div4)} name='game' id='game' type='text'/>

                <select name='units' id='units' className={styles.div5}>
                    <option value='TMT'>TMT</option>
                    <option value='UG'>UG</option>
                    <option value='Ticket'>Ticket</option>
                </select>
            </div>

            <div className={styles.footer}>
                <button type='button' className={styles.button}>Отмена</button>
                <button type='submit' className={classNames(styles.button, styles.generate)}>Сгенерировать и
                    экспортировать в CSV
                </button>
            </div>
        </div>
    );
};

export default PromoGenerator;