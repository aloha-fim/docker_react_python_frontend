
import React from "react";
import { Outlet } from "react-router-dom";

import IndexNavbar from "./components/indexnavbar/indexnavbar";
import Header from "./components/header/header";

export default function Layout() {

    React.useEffect(() => {
      document.body.classList.toggle("index-page");
      // Specify how to clean up after this effect:
      return function cleanup() {
        document.body.classList.toggle("index-page");
      };
    }, []);

    return (
        <>
        <IndexNavbar />
        <div className="wrapper">
          <Header />
          <Outlet />
        </div>
        </>
    );
};


