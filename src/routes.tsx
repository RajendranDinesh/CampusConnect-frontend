import { Route, Routes, Outlet, Navigate } from 'react-router-dom';

import Chat from './pages/chat';
import Drives from './pages/drives';
import Feed from './pages/feed';
import Jobs from './pages/job';
import LandingPage from './pages/landingPage';
import Network from './pages/network';
import Student from './pages/student';

function ProtectedRoute() {
    const result = localStorage.getItem('authToken') !== null;

    return result ? <Outlet /> : <Navigate to="/" />;
}

export function Logout() {
    localStorage.removeItem('authToken');
    return <Navigate to="/login" />;
}

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />

            <Route path="/" element={<ProtectedRoute />}>
                <Route path="chat" element={<Chat />} />

                <Route path="drives/*" element={<Drives />} />

                <Route path="feed" element={<Feed />} />

                <Route path="jobs" element={<Jobs />} />

                <Route path="network" element={<Network />} />

                <Route path="student" element={<Navigate to={'profile'} />} />
                <Route path="student/*" element={<Student />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;
