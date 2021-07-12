import * as React from "react";

import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
