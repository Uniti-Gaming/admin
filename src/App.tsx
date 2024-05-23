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
    Logs,

} from '@pages';

import styles from './App.module.scss';

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

                    <Route path='/logs' element={<Logs />} />

                </Routes>

            </main>
        </>
    );
}

export default App; 