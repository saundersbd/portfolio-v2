import React from "react";
import Header from "../components/Header";

const Layout = ({ className, children }) => (
  <div>
    <Header />
    <div className={className}>{children}</div>
  </div>
);

export default Layout;
