/**
 * The `BalanceInput` component in TypeScript React renders an input field with a currency value and an
 * icon.
 * @param  - The `BalanceInput` component takes the following parameters:
 * @returns The `BalanceInput` component is being returned. It consists of an input field for numerical
 * values, a span displaying the value and currency, and a span displaying an icon.
 */
import { FC, InputHTMLAttributes } from 'react';
import styles from './BalanceInput.module.scss';

type BalanceInputProps = InputHTMLAttributes<HTMLInputElement> & {
    currency: string;
    icon: string;
    width?: number | string;
}

export const BalanceInput: FC<BalanceInputProps> = ({value, currency, icon, width, ...props }) => {
    return (
        <div className={styles.wrapper} style={{maxWidth: width}}>
            <input
                {...props}
                value={value}
                type='number'
            />
            <span className={styles.value}>{value} {currency}</span>
            <img
                className={styles.icon}
                src={icon}
            />
        </div>
    );
};
