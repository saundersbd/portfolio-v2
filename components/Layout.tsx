import React from "react";
import Ribbon from "../components/Ribbon";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface LayoutProps {
  className?: string;
  children: React.ReactNode;
}

const Layout = ({ className, children }: LayoutProps) => (
  <div>
    <Ribbon />
    <div className="relative z-0 overflow-hidden shadow-xl bg-gradient-to-b from-white to-[#FCFCFD] dark:from-gray-900 dark:to-gray-900 rounded-t-2xl dark:shadow-none">
      <Header />
      <div
        className={`max-w-2xl mx-auto px-6 sm:px-4 pb-6 sm:pb-16 ${className}`}
      >
        {children}
      </div>
      <Footer />
    </div>
  </div>
);

export default Layout;