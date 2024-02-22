import styles from './MessagesForKey.module.scss';
import {Headings} from '@components';


const MessagesForKey = () => {
    return (
        <div className={styles.messagesForKey}>
            <div className={styles.messagesForKey__content}>

                <div className={styles.messagesForKey__newMessage}>

                    <Headings title={'СООБЩЕНИЕ ДЛЯ КЛЮЧА PC'} size={2}/>

                    <textarea cols={86} rows={4}/>

                    <p>0/500</p>
                </div>

                <div className={styles.messagesForKey__currMessage}>

                    <Headings title={'ТЕКУЩЕЕ СООБЩЕНИЕ'} size={3}/>
                    
                    {/* eslint-disable-next-line max-len */}
                    <textarea cols={66} rows={6} readOnly={true} value='Приглашаем вас на ивент по игре CS:GО, который состоится 8 сентября в 20:00. Все подробности на нашем сайте в разделе “Новости”.'/>
                </div>

                <div className={styles.buttonPanel}>
                    <button>Сохранить изменения</button>
                </div>


                <div className={styles.messagesForKey__newMessage}>

                    <Headings title={'СООБЩЕНИЕ ДЛЯ КЛЮЧА Steam'} size={2}/>

                    <textarea cols={86} rows={4}/>

                    <p>0/500</p>
                </div>

                <div className={styles.messagesForKey__currMessage}>

                    <Headings title={'ТЕКУЩЕЕ СООБЩЕНИЕ'} size={3}/>

                    {/* eslint-disable-next-line max-len */}
                    <textarea cols={66} rows={6} readOnly={true} value='Приглашаем вас на ивент по игре CS:GО, который состоится 8 сентября в 20:00. Все подробности на нашем сайте в разделе “Новости”.'/>
                </div>

                <div className={styles.buttonPanel}>
                    <button>Сохранить изменения</button>
                </div>


            </div>
        </div>
    );
};

export default MessagesForKey;