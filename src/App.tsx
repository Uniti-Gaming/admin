import { Route, Routes } from 'react-router-dom';

import {Aside, Header, Table} from '@components';
import {OneUser, UserPanel, MessagesForKey, Statistics} from '@pages';

import styles from './App.module.scss';

function App() {
    return (
        <>
            <Header />
            <main className={styles.main}>

                <Aside />

                <Routes>
                    <Route path='/statistics' element={<Statistics />} />
                    <Route path='/users' element={<UserPanel />} />
                    {/* user должен быть динамическим роутом */}
                    <Route path='/user' element={<OneUser />} />

                    <Route path='/games' element={<Table />} />

                    <Route path='/messages' element={<MessagesForKey />} />

                </Routes>

            </main>

        </>
    );
}

export default App; 