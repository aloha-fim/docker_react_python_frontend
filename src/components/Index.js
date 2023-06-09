/*!

=========================================================
* BLK Design System React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// core components
import IndexNavbar from "./indexnavbar/IndexNavbar";
import Header from "./header/header";
// import Footer from "../components/Footer/Footer.js";

// sections for this page/view
// import Basics from "../views/IndexSections/Basics.js";
// import Navbars from "../views/IndexSections/Navbars.js";
// import Tabs from "../views/IndexSections/Tabs.js";
// import Pagination from "../views/IndexSections/Pagination.js";
// import Notifications from "../views/IndexSections/Notifications.js";
import Typography from "./Typography.js";
import JavaScript from "./JavaScript.js";
import NucleoIcons from "./NucleoIcons.js";
import Signup from "./Signup.js";
import Examples from "./Examples.js";
// import Download from "../views/IndexSections/Download.js";

export default function Index() {
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
        <div className="main">
          {/* <Basics />
          <Navbars />
          <Tabs />
          <Pagination />
          <Notifications />
          <Typography /> */}
          <JavaScript />
          <Typography />
          <NucleoIcons />
          <Examples />
          <Signup />
          {/* <Download /> */}
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}