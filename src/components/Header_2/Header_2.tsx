import styles from './Header_2.module.scss';


type titleProps = {
    title: string;
};

const Header_2 = ({title}: titleProps) =>
    (
        <div className={styles.Header_2}>

            <h2>{title}</h2>

        </div>
    );

export default Header_2;