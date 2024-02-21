/* eslint-disable max-len */
import { NavLink } from 'react-router-dom';
import s from './Aside.module.scss';
import { shevron } from '@images';



const Aside = () => {
    return (
        <div className={s.Aside}>

            <div className={s.aside__content}>

                {/*<-- использовал тег А, что бы не ругался сборщик, потом заменим на Link -->*/}
                <nav className={s.aside__list}>
                    {/*<li className={s.list__item}><a href="#">Статистика <img src={shevron} alt=""/></a></li>*/}


                    <NavLink to='users'>Управление пользователями {<img src={shevron} alt='' />}</NavLink>

                    <NavLink to='user'>Пользователь {<img src={shevron} alt='' />}</NavLink>

                    {/* <li className={s.list__item}><a href="#">Управление пользователями <img src={shevron} alt=""/></a></li>*/}
                    {/*    <li className={s.list__item}><a href="#">Игры <img src={shevron} alt=""/></a></li>*/}
                    {/*    <li className={s.list__item}><a href="#">Редактировать курс <img src={shevron} alt=""/></a></li>*/}
                    {/*    <li className={s.list__item}><a href="#">Операторы <img src={shevron} alt=""/></a></li>*/}
                    {/*    <li className={s.list__item}><a href="#">Тарифы <img src={shevron} alt=""/></a></li>*/}
                    {/*    <li className={s.list__item}><a href="#">Логи действий <img src={shevron} alt=""/></a></li>*/}
                    {/*    <li className={s.list__item}><a href="#">Промокоды <img src={shevron} alt=""/></a></li>*/}
                    {/*    <li className={s.list__item}><a href="#">Карточки товаров <img src={shevron} alt=""/></a></li>*/}
                    {/*    <li className={s.list__item}><a href="#">Сообщения для ключа <img src={shevron} alt=""/></a></li>*/}
                    {/*    <li className={s.list__item}><a href="#">Донаты <img src={shevron} alt=""/></a></li>*/}
                </nav>

                <button>Выход</button>

            </div>


        </div>
    );
};

export default Aside;