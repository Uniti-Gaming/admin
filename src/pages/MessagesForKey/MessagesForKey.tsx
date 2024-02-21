import styles from './MessagesForKey.module.scss';
import {Header_2} from '@components';


const MessagesForKey = () => {
    return (
        <div className={styles.MessagesForKey}>
        
            <Header_2 title={'СООБЩЕНИЕ ДЛЯ КЛЮЧА PC'}/>

            <textarea cols={66} rows={10}/>
        
        </div>
    );
};

export default MessagesForKey;