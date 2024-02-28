import { FC, useState } from 'react';
import styles from './ExchangeRates.module.scss';


type ItemProps = {
    label: string;
    defaultValue: number;
    icon: string;
}

const Item: FC<ItemProps> = ({ label, defaultValue, icon }) => {
    const [value, setValue] = useState(defaultValue);
    return (
        <label className={styles.label}>
            1{label}
            <img src={icon} alt={label} />
            =
            <div className={styles.input}>
                <input
                    type='number'
                    value={value}
                    onChange={(e) => setValue(Number(e.target.value))}
                />
                <span className={styles.value}>{value} TMT</span>
            </div>
        </label>
    );
};

const ExchangeRates = () => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Редактировать курс - баллы/билеты</h2>
            <Item label='UG' defaultValue={2} icon={''} />
            <Item label='UG' defaultValue={20} icon={''} />
            <h2 className={styles.title}>Редактировать бонус реферального кода</h2>
        </div>
    );
};

export default ExchangeRates;