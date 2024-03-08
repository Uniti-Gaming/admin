import { FormEvent, useState } from 'react';
import classNames from 'classnames';
import { BalanceInput } from '@/components';
import { coinIcon, tmtIcon, ticketIcon } from '@images';
import styles from './ExchangeRates.module.scss';

const ExchangeRates = () => {
    const [values, setValues] = useState({
        coin: 2,
        ticket: 20,
        ref: {
            main: 20,
            ticket: 0,
            coin: 20,
        },
    });

    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        // eslint-disable-next-line no-console
        console.log(values);
    }

    return (
        <form className={styles.wrapper} onSubmit={handleSubmit}>
            <h2 className={styles.title}>Редактировать курс - баллы/билеты</h2>
            <label className={styles.label}>
                <span className={styles.name}>1 UG</span>
                <img className={styles.icon} src={coinIcon} alt='ug coin icon'/>
                =
                <BalanceInput
                    currency='TMT'
                    icon={tmtIcon}
                    width={136}
                    value={values.coin}
                    onChange={(value) => setValues({...values, coin: Number(value)})}
                />
                <span className={styles.pen} />
            </label>
            <label className={styles.label}>
                <span className={styles.name}>1 Ticket</span>
                <img className={styles.icon} src={ticketIcon} alt='ticket icon'/>
                =
                <BalanceInput
                    currency='TMT'
                    icon={tmtIcon}
                    width={136}
                    value={values.ticket}
                    onChange={(value) => setValues({...values, ticket: Number(value)})}
                />
                <span className={styles.pen} />
            </label>
            <h2 className={classNames(styles.title, styles.mt)}>Редактировать бонус реферального кода</h2>
            <div className={styles.ref}>
                <label className={styles.label}>
                    <BalanceInput
                        currency='TMT'
                        icon={tmtIcon}
                        width={136}
                        value={values.ref.main}
                        onChange={(value) => setValues({
                            ...values,
                            ref: {...values.ref, main: Number(value)},
                        })}
                    />
                    <span className={styles.pen} />
                </label>
                <label className={styles.label}>
                    <BalanceInput
                        currency='UG'
                        icon={coinIcon}
                        width={136}
                        value={values.ref.coin}
                        onChange={(value) => setValues({
                            ...values,
                            ref: {...values.ref, coin: Number(value)},
                        })}
                    />
                    <span className={styles.pen} />
                </label>
                <label className={styles.label}>
                    <BalanceInput
                        currency='Ticket'
                        icon={ticketIcon}
                        width={136}
                        value={values.ref.ticket}
                        onChange={(value) => setValues({
                            ...values,
                            ref: {...values.ref, ticket: Number(value)},
                        })}
                    />
                    <span className={styles.pen} />
                </label>
            </div>
            <div className={styles.footer}>
                <button type='button' className={styles.button}>Отмена</button>
                <button type='submit' className={classNames(styles.button, styles.submit)}>Сохранить изменения</button>
            </div>
        </form>
    );
};

export default ExchangeRates;