import styles from './Header.module.scss';
import { logo, nick, bell } from '@images';


const Header = () => {
    return (
        <header className={styles.Header}>
            <div className={styles.header__content}>

                <img className={styles.logo} src={logo} alt='Unite logo' />

                <div className={styles.header__addition}>
                    <p>Управление пользователями</p>

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