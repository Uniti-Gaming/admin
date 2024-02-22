import styles from './Heading.module.scss';

type headingProps = {
    title: string,
    size: number,
}

const Heading = ({title, size}: headingProps) => {

    function heading(text: string) {
        switch (size) {
            case 1:
                return (<h1 className={styles.heading1}>{text}</h1>);
            case 2:
                return (<h2 className={styles.heading1}>{text}</h2>);
            case 3:
                return (<h3 className={styles.heading1}>{text}</h3>);
            case 4:
                return (<h4 className={styles.heading1}>{text}</h4>);
            case 5:
                return (<h5 className={styles.heading1}>{text}</h5>);
            case 6:
                return (<h6 className={styles.heading1}>{text}</h6>);
            default:
                return (<b>ERROR! Check size!</b>);
        }
    }

    return (
        <>
            {heading(title)}
        </>
    );
};
export default Heading;