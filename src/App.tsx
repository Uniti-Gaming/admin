import {Route, Routes} from 'react-router-dom';

import {Aside, Header, Table} from '@components';
import {
    OneUser,
    UserPanel,
    MessagesForKey,
    Statistics,
    ExchangeRates,
    EditGame,
    Donut,
    EditCard,
    EditAccountOperator, PromoGenerator,
} from '@pages';

import styles from './App.module.scss';

function App() {
    return (
        <>
            <Header/>
            <main className={styles.main}>

                <Aside/>

                <Routes>
                    <Route path='/' element={<Statistics/>}/>
                    <Route path='/users' element={<UserPanel/>}/>

                    {/* user должен быть динамическим роутом */}
                    <Route path='/user' element={<OneUser/>}/>

                    <Route path='/games' element={<Table/>}/>

                    <Route path='/exchange-rates' element={<ExchangeRates/>}/>

                    <Route path='/messages' element={<MessagesForKey/>}/>

                    <Route path='/editgame' element={<EditGame/>}/>

                    <Route path='/donut' element={<Donut/>}/>

                    <Route path='/editcard' element={<EditCard/>}/>

                    <Route path='/editaccountoperator' element={<EditAccountOperator/>}/>

                    <Route path='/generatepromo' element={<PromoGenerator/>}/>

                </Routes>

            </main>
        </>
    );
}

export default App; 