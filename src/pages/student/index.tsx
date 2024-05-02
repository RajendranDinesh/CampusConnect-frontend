import { Routes, Route } from 'react-router-dom';

import EditProfile from './editProfile';
import Layout from './layout';
import Profile from './profile';

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
            <Route
                path="profile/edit"
                element={
                    <Layout>
                        <EditProfile />
                    </Layout>
                }
            />
        </Routes>
    );
}
