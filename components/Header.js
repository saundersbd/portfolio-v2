import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Headroom from "react-headroom";

import MobileMenu from "../components/MobileMenu";
import Button from "./Button";
import Icon from "./Icon";

const NavLink = React.forwardRef(
  ({ isActive, href, className, children }, ref) => (
    <a
      className={
        `inline-block mr-2 text-base leading-6 px-3 py-1 rounded-full text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-all focus:outline-none focus:ring focus:ring-blue-500 dark:focus:bg-gray-800 focus:bg-blue-50 ` +
        `${className}`
      }
      aria-current={`${isActive && "page"}`}
      href={href}
      ref={ref}
    >
      {children}
    </a>
  )
);

const NavLinks = ({ activeRoute }) => {
  return (
    <>
      <Link href="/" passHref>
        <NavLink isActive={activeRoute === "Home"}>Home</NavLink>
      </Link>
      <Link href="/posts" passHref>
        <NavLink isActive={activeRoute === "Posts"}>Writing</NavLink>
      </Link>
      <Link href="/bookshelf" passHref>
        <NavLink isActive={activeRoute === "Bookshelf"}>Bookshelf</NavLink>
      </Link>
      <Link href="/about" passHref>
        <NavLink isActive={activeRoute === "About"}>About</NavLink>
      </Link>
    </>
  );
};

const lightModeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 text-black"
  >
    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
  </svg>
);

const darkModeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 text-black"
  >
    <path
      fillRule="evenodd"
      d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
      clipRule="evenodd"
    />
  </svg>
);

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { resolvedTheme, setTheme } = useTheme("light");
  const toggleStatus = (e) => {
    if (e.charCode === 32) {
      e.preventDefault();
      console.log("Space bar");
    }
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
    setDarkMode(!darkMode);
  };

  return (
    <div className="mr-2">
      <div
        role="switch"
        aria-checked={darkMode}
        aria-label="Toggle dark mode"
        tabIndex={0}
        className="relative w-12 h-8 p-1 transition-all bg-blue-500 rounded-full shadow-inner bg-gradient-to-r from-orange-400 to-yellow-400 dark:from-purple-500 dark:to-blue-500 hover:cursor-pointer focus:outline-none focus:ring focus:ring-blue-500"
        onClick={(e) => toggleStatus(e)}
        onKeyPress={(e) => toggleStatus(e)}
      >
        <div
          className={`${
            resolvedTheme === "dark" ? "right-1" : "right-5"
          } absolute p-1 transition-all rounded-full bg-white bg-gradient-to-r from-gray-50 to-white shadow-sm`}
        >
          {resolvedTheme === "dark" ? darkModeIcon : lightModeIcon}
        </div>
        <span className="on" aria-hidden={darkMode}>
          Dark mode is on
        </span>
        <span className="off" aria-hidden={!darkMode}>
          Dark mode is off
        </span>
      </div>
    </div>
  );
};

const Header = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const router = useRouter();

  let activeRoute = "";
  let activePath = "";

  if (router.pathname === "/") {
    activeRoute = "Home";
    activePath = "/";
  }
  if (router.pathname.includes("/about")) {
    activeRoute = "About";
    activePath = "/about";
  }
  if (router.pathname.includes("/bookshelf")) {
    activeRoute = "Bookshelf";
    activePath = "/bookshelf";
  }
  if (router.pathname.includes("/posts")) {
    activeRoute = "Posts";
    activePath = "/posts";
  }

  return (
    <Headroom pinStart={44}>
      <header className="relative flex items-center justify-between p-4 bg-white border-b border-gray-300 dark:border-gray-800 dark:bg-gray-900">
        <div>
          <MobileMenu />
          <nav className="hidden sm:flex">
            <NavLinks activeRoute={activeRoute} />
          </nav>
        </div>
        <div className="flex items-center">
          <Link href="/about/resume">
            <a className="flex items-center px-1 mr-4 text-base rounded hover:underline focus:ring focus:ring-blue-500 focus:bg-blue-50 dark:focus:bg-gray-800">
              <Icon className="w-4 mr-1.5" />
              View my CV
            </a>
          </Link>
          {mounted && <DarkModeToggle />}
        </div>
      </header>
    </Headroom>
  );
};

export default Header;
