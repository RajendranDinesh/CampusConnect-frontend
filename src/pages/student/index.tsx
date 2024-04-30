import { Routes, Route } from 'react-router-dom';

import Profile from './profile';
import Layout from './layout';

export default function Student() {
    return (
        <Routes>
            <Route
                path="profile"
                element={
                    <Layout>
                        <Profile />
                    </Layout>
                }
            />
        </Routes>
    );
}
