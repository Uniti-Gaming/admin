import { Route, Routes } from 'react-router-dom';

import {Aside, Header} from '@components';
import {
    User,
    Users,
    MessagesForKey,
    Statistics,
    ExchangeRates,
    EditGame,
    Donut,
    EditCard,
    EditAccountOperator,
    PromoGenerator,
    GamesPanel,
    CreateAccountOperator,
    Operators,
    Plans,
    Products,
} from '@pages';

import styles from './App.module.scss';
import PromoList from '@/pages/PromoList/PromoList.tsx';
import Logs from '@/pages/Logs/Logs.tsx';

function App() {
    return (
        <>
            <Header />
            <main className={styles.main}>

                <Aside />
                <Routes>
                    <Route path='/' element={<Statistics />} />
                    <Route path='/users' element={<Users />} />
                    <Route path='/users/:id' element={<User />} />

                    <Route path='/games' element={<GamesPanel />} />

                    <Route path='/exchange-rates' element={<ExchangeRates />} />

                    <Route path='/messages' element={<MessagesForKey />} />

                    <Route path='/editgame' element={<EditGame />} />

                    <Route path='/donut' element={<Donut />} />

                    <Route path='/editcard' element={<EditCard />} />

                    <Route path='/editaccountoperator' element={<EditAccountOperator />} />

                    <Route path='/generatepromo' element={<PromoGenerator />} />

                    <Route path='/createaccountoperator' element={<CreateAccountOperator />} />

                    <Route path='/operators' element={<Operators />} />

                    <Route path='/plans' element={<Plans />} />

                    <Route path='/promolist' element={<PromoList />} />

                    <Route path='/logs' element={<Logs />} />

                    <Route path='/products' element={<Products />} />

                </Routes>

            </main>
        </>
    );
}

export default App; 