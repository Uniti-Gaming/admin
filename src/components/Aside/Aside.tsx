import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Aside.module.scss';
import { shevron } from '@images';
import { routes } from '@data/routes';

type ItemProps = {
    text: string
    path: string
}

const Item: FC<ItemProps> = ({ text, path }) => {

    return (
        <NavLink to={path}>
            {text}
            <img src={shevron} alt='shevron' />
        </NavLink>
    );
};


const Aside = () => {
    return (
        <div className={styles.aside}>
            <nav className={styles.aside__list}>
                {routes.map((route, index) => (
                    <Item key={index} text={route.name} path={route.path} />
                ))}
            </nav>
            <button>Выход</button>
        </div>
    );
};

export default Aside;