import { Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Users from './users';
import Settings from './settings';

export default function Admin() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Layout>
                        <Users />
                    </Layout>
                }
            />
            <Route
                path="/settings"
                element={
                    <Layout>
                        <Settings />
                    </Layout>
                }
            />
        </Routes>
    );
}
