import styles from './Header_3.module.scss';

type titleProps = {
    title: string;
}

const Header_3 = ({title}: titleProps) => {
    return (
        <div className={styles.Header_3}>

            <h3>{title}</h3>

        </div>
    );
};

export default Header_3;