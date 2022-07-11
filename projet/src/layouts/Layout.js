import Header from "../layouts/Header/Header";
import Main from "./Main/Main";


function Layout({children}) {
    // Template
    return (
        <>
            <Header />
            <Main content={children} />
        </>
    );
}

export default Layout;