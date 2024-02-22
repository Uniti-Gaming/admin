import styles from './MessagesForKey.module.scss';
import {Headings} from '@components';


const MessagesForKey = () => {
    return (
        <div className={styles.MessagesForKey}>

            <Headings title={'СООБЩЕНИЕ ДЛЯ КЛЮЧА PC'} size={2}/>

            {/*<div className={styles.message}>*/}

            {/*<Headings title={'СООБЩЕНИЕ ДЛЯ КЛЮЧА PC'} size={2}/>*/}

            {/*    <textarea cols={66} rows={10}/>*/}
            {/*</div>*/}

            {/*<div className={styles.currentMessage}>*/}

            <Headings title={'ТЕКУЩЕЕ СООБЩЕНИЕ'} size={3}/>

            {/*</div>*/}

        </div>
    );
};

export default MessagesForKey;