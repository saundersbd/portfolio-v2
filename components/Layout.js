import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ className, children }) => (
  <div>
    <Header />
    <div className={className}>{children}</div>
    <Footer />
  </div>
);

export default Layout;
