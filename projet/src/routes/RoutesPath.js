import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layouts/Layout";
import Create from "../pages/Create/Create";
import List from "../pages/List/List";


function RoutesPath() {
    // Template
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Layout>
                <Routes>
                    <Route element={<Create />} path="/" />
                    <Route element={<Create />} path="/create" />
                    <Route element={<List />} path="/list" />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default RoutesPath;