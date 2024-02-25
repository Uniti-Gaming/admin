import classNames from 'classnames';

import styles from './PaginationButtons.module.scss';

const PaginationButtons = () => {
    return (
        <div className={styles.wrapper}>
            <button className={classNames(styles.button, styles.previous, styles.disabled)}>Предыдущее</button>
            <button className={classNames(styles.button, styles.current)}>1</button>
            <button className={styles.button}>2</button>
            <button className={styles.button}>3</button>
            <button className={styles.button}>4</button>
            <button className={styles.button}>5</button>
            <button className={classNames(styles.button, styles.next)}>Дальше</button>
        </div>
    );
};

export default PaginationButtons;