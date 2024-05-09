import { Routes, Route } from 'react-router-dom';

import Drives from './drives';
import Layout from './layout';
import Home from './home';

export default function TNP() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Layout>
                        <Home />
                    </Layout>
                }
            />
            <Route
                path="/drives"
                element={
                    <Layout>
                        <Drives />
                    </Layout>
                }
            />
        </Routes>
    );
}
