import { Routes, Route } from 'react-router-dom';

import Drive from './drive';
import Layout from './layout';
import Listing from './listing';

export default function Drives() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Layout>
                        <Listing />
                    </Layout>
                }
            />
            <Route
                path=":id"
                element={
                    <Layout>
                        <Drive />
                    </Layout>
                }
            />
        </Routes>
    );
}
