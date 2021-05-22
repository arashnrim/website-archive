import * as React from "react";

import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => (
  <>
    <Header />
    {props.children}
    <Footer />
  </>
);

export default Layout;
