import { Route, Routes, Outlet, Navigate } from 'react-router-dom';

import Feed from './pages/feed';
import LandingPage from './pages/landingPage';
import Student from './pages/student';

function ProtectedRoute() {
    const result = localStorage.getItem('authToken') !== null;

    return result ? <Outlet /> : <Navigate to="/login" />;
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
                <Route path="student" element={<Navigate to={'profile'} />} />
                <Route path="student/*" element={<Student />} />
                <Route path="feed" element={<Feed />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;
