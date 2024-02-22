import styles from './MessagesForKey.module.scss';
import {Header_2} from '@components';
import Header_3 from '@/components/Header_3/Header_3.tsx';


const MessagesForKey = () => {
    return (
        <div className={styles.MessagesForKey}>

            <div className={styles.message}>

                <Header_2 title={'СООБЩЕНИЕ ДЛЯ КЛЮЧА PC'}/>

                <textarea cols={66} rows={10}/>
            </div>

            <div className={styles.currentMessage}>

                <Header_3 title={'ТЕКУЩЕЕ СООБЩЕНИЕ'}/>

            </div>

        </div>
    );
};

export default MessagesForKey;