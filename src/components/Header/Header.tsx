import { Route, Routes } from 'react-router-dom';

import styles from './Header.module.scss';
import { logo, nick, bell } from '@images';
import { routes } from '@data/routes';

const Header = () => {
    return (
        <header className={styles.Header}>
            <div className={styles.header__content}>

                <img className={styles.logo} src={logo} alt='Unite logo' />

                <div className={styles.header__addition}>
                    {/* Я не уверен что это правильный подход */}
                    <Routes>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                element={<h1 className={styles.title}>{route.name}</h1>}
                            />
                        ))}
                    </Routes>

                    <div className={styles.buttons__panel}>
                        {/*<button>*/}
                        <img src={bell} alt='Attention bell' />
                        {/*</button>*/}

                        {/*<button>*/}
                        <img src={nick} alt='Nick name' />
                        {/*</button>*/}

                        <p>Admin</p>
                    </div>

                </div>

            </div>


        </header>
    );
};

export default Header;