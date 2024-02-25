import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import styles from './Aside.module.scss';
import { shevron } from '@images';
import { routes } from '@/core/routes';

type ItemProps = {
    text: string;
    path: string;
}

const Item: FC<ItemProps> = ({ text, path }) => {
    return (
        <NavLink
            className={({ isActive }) => classnames(styles.link, { [styles.active]: isActive })}
            to={path}
        >
            {text}
            <img src={shevron} alt='shevron' />
        </NavLink>
    );
};

const Aside = () => {
    return (
        <aside className={styles.aside}>
            <nav className={styles.aside__list}>
                {routes.map((route, index) => (
                    <Item key={index} text={route.name} path={route.path} />
                ))}
            </nav>
            <button className={styles.button}>Выход</button>
        </aside>
    );
};

export default Aside;