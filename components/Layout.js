import React from "react";
import Header from "../components/Header";

const Layout = ({ className, children }) => (
  <div className={className}>
    <Header />
    {children}
  </div>
);

export default Layout;
