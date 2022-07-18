import React from "react";
import Ribbon from "../components/Ribbon";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ className, children }) => (
  <div>
    <Ribbon />
    <div className="overflow-hidden shadow-lg bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-900 rounded-2xl">
      <Header />
      <div className={`max-w-2xl mx-auto px-6 sm:px-4 ${className}`}>
        {children}
      </div>
    </div>
    <Footer />
  </div>
);

export default Layout;
