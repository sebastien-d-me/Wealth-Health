import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../layouts/Layout";
import Create from "../pages/Create/Create";
import List from "../pages/List/List";


function RoutesPath() {
    // Template
    return (
        <HashRouter>
            <Layout>
                <Routes>
                    <Route element={<Navigate replace to="/create" />} path="/" />
                    <Route element={<Create />} path="/create" />
                    <Route element={<List />} path="/list" />
                </Routes>
            </Layout>
        </HashRouter>
    );
}

export default RoutesPath;