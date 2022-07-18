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
        `inline-block mr-2 text-sm leading-6 px-3 py-1 rounded-full text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-all focus:outline-none focus:ring focus:ring-blue-500 ` +
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
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-4 text-black"
  >
    <path
      fillRule="evenodd"
      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
      clipRule="evenodd"
    />
  </svg>
);

const darkModeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-4 text-black"
  >
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
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
    <div className="mr-4">
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
          {mounted && <DarkModeToggle />}
          <Button href="/about/resume">
            <Icon className="w-4 mr-1.5" />
            View my CV
          </Button>
        </div>
      </header>
    </Headroom>
  );
};

export default Header;
