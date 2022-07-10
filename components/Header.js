import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import MobileMenu from "../components/MobileMenu";
import Button from "./Button";

const NavLink = React.forwardRef(
  ({ isActive, href, className, children }, ref) => (
    <a
      className={
        `inline-block mr-2 text-sm leading-6 px-3 py-1 rounded-full text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-all focus:outline-none focus:ring focus:ring-orange-500 ` +
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
        className={`${
          resolvedTheme === "dark" ? "justify-end" : "justify-start"
        } flex w-12 p-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 bg-blue-500 transition-all hover:cursor-pointer focus:outline-none focus:ring focus:ring-orange-500 shadow-inner`}
        onClick={(e) => toggleStatus(e)}
        onKeyPress={(e) => toggleStatus(e)}
      >
        <div className="p-1 rounded-full bg-white shadow-sm transition-all">
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
    <header className="relative flex items-center justify-between p-4 border-b border-gray-300 dark:border-gray-800">
      <div>
        <MobileMenu />
        <nav className="hidden sm:flex">
          <NavLinks activeRoute={activeRoute} />
        </nav>
      </div>
      <div className="flex items-center">
        {mounted && <DarkModeToggle />}
        <Button href="mailto:saundersbd@gmail.com">
          <svg
            className="w-4 text-black dark:text-gray-200 mr-2"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.60254 4.70685L7.99984 7.9055L14.3972 4.70681C14.3489 3.86653 13.6523 3.20001 12.7999 3.20001H3.19988C2.34749 3.20001 1.65078 3.86656 1.60254 4.70685Z"
              fill="currentColor"
            />
            <path
              d="M14.4001 6.49432L8.00006 9.69432L1.6001 6.49437V11.2C1.6001 12.0837 2.31644 12.8 3.2001 12.8H12.8001C13.6838 12.8 14.4001 12.0837 14.4001 11.2V6.49432Z"
              fill="currentColor"
            />
          </svg>
          Contact
        </Button>
      </div>
    </header>
  );
};

export default Header;
