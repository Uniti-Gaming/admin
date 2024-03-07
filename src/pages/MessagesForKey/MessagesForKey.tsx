import styles from './MessagesForKey.module.scss';
import classNames from 'classnames';


const MessagesForKey = () => {
    return (
        <div className={styles.messagesForKey}>

            <form action='#'>
                <div className={styles.newMessage}>
                    <h3 className={styles.heading}>СООБЩЕНИЕ ДЛЯ КЛЮЧА PC</h3>

                    <hr className={styles.line}/>

                    {/* eslint-disable-next-line max-len */}
                    <textarea className={styles.text} name='newmessage' id='newmessage' placeholder='Введите новое сообщение для ключа'></textarea>

                    <p className={styles.counter}>0/500</p>
                </div>

                <div className={styles.currMessage}>
                    <h3 className={styles.heading}>ТЕКУЩЕЕ СООБЩЕНИЕ</h3>

                    {/* eslint-disable-next-line max-len */}
                    <textarea className={styles.currText} name='newmessage' value='Приглашаем вас на ивент по игре CS:GО, который состоится 8 сентября в 20:00. Все подробности на нашем сайте в разделе “Новости”.'></textarea>
                </div>

                <div className={styles.footer}>
                    <button type='submit' className={classNames(styles.button, styles.save)}>
                        Сохранить изменения
                    </button>
                </div>
            </form>

            <form action='#'>
                <div className={styles.newMessage}>
                    <h3 className={styles.heading}>СООБЩЕНИЕ ДЛЯ КЛЮЧА Steam</h3>

                    <hr className={styles.line}/>

                    {/* eslint-disable-next-line max-len */}
                    <textarea className={styles.text} name='newmessage' id='newmessage' placeholder='Введите новое сообщение для ключа'></textarea>

                    <p className={styles.counter}>0/500</p>
                </div>

                <div className={styles.currMessage}>
                    <h3 className={styles.heading}>ТЕКУЩЕЕ СООБЩЕНИЕ</h3>

                    {/* eslint-disable-next-line max-len */}
                    <textarea className={styles.currText} name='newmessage' value='Приглашаем вас на ивент по игре CS:GО, который состоится 8 сентября в 20:00. Все подробности на нашем сайте в разделе “Новости”.'></textarea>
                </div>

                <div className={styles.footer}>
                    <button type='submit' className={classNames(styles.button, styles.save)}>
                        Сохранить изменения
                    </button>
                </div>
            </form>
        </div>
    );
};

export default MessagesForKey;