import { Outlet } from "react-router-dom";

import Header from "./components/header/header";

const Layout = () => {
    return (
        <>
        {/* put header here */}
        <div className="wrapper">
            <Header />
            <Outlet />
        </div>
        </>
    );
};

export default Layout;
