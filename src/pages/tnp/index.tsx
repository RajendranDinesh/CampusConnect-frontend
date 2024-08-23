import { Routes, Route } from 'react-router-dom';

import Drives from './drives';
import EditDrive from './editDrive';
import Layout from './layout';
import Home from './home';
import Analysis from './analysis';

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
            <Route
                path="/drives/:driveId/edit"
                element={
                    <Layout>
                        <EditDrive />
                    </Layout>
                }
            />
            <Route
                path="/drives/analysis"
                element={
                    <Layout>
                        <Analysis />
                    </Layout>
                }
            />
        </Routes>
    );
}
