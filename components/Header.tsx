import React, { AnchorHTMLAttributes } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Headroom from "react-headroom";

import MobileMenu from "../components/MobileMenu";
import Icon from "./Icon";

interface NavLinkConfig extends AnchorHTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean;
  href?: string;
  className?: string;
  value: string;
}

const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkConfig>(
  ({ isActive, href, className, value }: NavLinkConfig, ref) => {
    const ariaCurrent = isActive ? "page" : undefined;
    return (
      <a
        className={
          `inline-block mr-2 text-base font-medium leading-6 px-3 py-1 rounded-full text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-all focus:outline-none focus:ring focus:ring-mint-400 dark:focus:bg-gray-800 focus:bg-mint-50 ` +
          `${className}`
        }
        aria-current={ariaCurrent}
        href={href}
        ref={ref}
      >
        {value}
      </a>
    );
  }
);

const NavLinks = ({ activeRoute }: { activeRoute: string }) => {
  return (
    <>
      <Link href="/" passHref legacyBehavior>
        <NavLink isActive={activeRoute === "Home"} value="Home" />
      </Link>
      <Link href="/posts" passHref legacyBehavior>
        <NavLink isActive={activeRoute === "Posts"} value="Writing" />
      </Link>
      <Link href="/projects" passHref legacyBehavior>
        <NavLink isActive={activeRoute === "Projects"} value="Projects" />
      </Link>
      <Link href="/bookshelf" passHref legacyBehavior>
        <NavLink isActive={activeRoute === "Bookshelf"} value="Bookshelf" />
      </Link>
      <Link href="/about" passHref legacyBehavior>
        <NavLink isActive={activeRoute === "About"} value="About" />
      </Link>
    </>
  );
};

const lightModeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-4 text-black"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
    />
  </svg>
);

const darkModeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 text-gray-900"
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
  const { resolvedTheme, setTheme } = useTheme();
  const toggleStatus = (e: React.KeyboardEvent | React.MouseEvent) => {
    if (e.nativeEvent instanceof KeyboardEvent) {
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
        className="relative w-12 h-8 p-1 transition-all rounded-full shadow-inner bg-mint-500 hover:cursor-pointer focus:outline-none focus:ring focus:ring-mint-400"
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
  if (router.pathname.includes("/projects")) {
    activeRoute = "Projects";
    activePath = "/projects";
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
          <Link
            href="/about/resume"
            className="flex items-center px-1 mr-4 text-sm font-medium rounded hover:underline underline-offset-2 focus:ring focus:ring-mint-400 focus:bg-mint-50 dark:focus:bg-gray-800"
          >
            <Icon className="w-4 mr-1.5" />
            View my CV
          </Link>
          {mounted && <DarkModeToggle />}
        </div>
      </header>
    </Headroom>
  );
};

export default Header;
