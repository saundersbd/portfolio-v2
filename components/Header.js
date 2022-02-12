import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Headroom from "react-headroom";
import MobileMenu from "../components/MobileMenu";
import ContainerFull from "./ContainerFull";

const NavLink = React.forwardRef(
  ({ isActive, href, className, children }, ref) => (
    <a
      className={
        `flex items-center justify-center flex-grow sm:flex-grow-0 text-sm sm:text-lg font-normal tracking-wide text-center focus:outline-none focus:ring focus:ring-orange px-5 py-4 hover:bg-orange-lightest dark:hover:bg-gray-900 dark:text-white hover:z-10 focus:z-10 ` +
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
        <NavLink
          isActive={activeRoute === "Home"}
          className="py-2 border-t sm:border-t-0 sm:border-l border-orange-light dark:border-orange-lighter"
        >
          Home
        </NavLink>
      </Link>

      <Link href="/posts" passHref>
        <NavLink
          isActive={activeRoute === "Posts"}
          className="py-2 border-t sm:border-t-0 sm:border-l border-orange-light dark:border-orange-lighter"
        >
          Writing
        </NavLink>
      </Link>

      <Link href="/bookshelf" passHref>
        <NavLink
          isActive={activeRoute === "Bookshelf"}
          className="py-2 border-t border-l sm:border-t-0 border-orange-light dark:border-orange-lighter"
        >
          Bookshelf
        </NavLink>
      </Link>

      <Link href="/about" passHref>
        <NavLink
          isActive={activeRoute === "About"}
          className="py-2 border-t border-l border-r sm:border-t-0 border-orange-light dark:border-orange-lighter"
        >
          About
        </NavLink>
      </Link>
    </>
  );
};

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
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
    <Headroom>
      <header className="flex bg-white border-t-0 border-b sm:p-0 sm:items-stretch border-orange-light dark:bg-gray-900 dark:border-orange-lighter">
        <ContainerFull>
          <nav className="relative flex items-center justify-between w-full">
            <div>
              <MobileMenu />
              <div className="hidden sm:flex-row sm:flex">
                <NavLinks activeRoute={activeRoute} />
              </div>
            </div>
            <button
              aria-label="Toggle Dark Mode"
              type="button"
              className="flex items-center justify-center w-10 h-10 my-4 transition-all bg-beige rounded-lg border border-beige-dark sm:my-0 dark:bg-gray-800 focus:outline-none focus:ring focus:ring-orange hover:ring-2 ring-gray-300 dark:ring-orange-lighter dark:border-orange-lighter"
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
            >
              {mounted && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 text-stone-700 dark:text-gray-200"
                >
                  {resolvedTheme === "dark" ? (
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  ) : (
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  )}
                </svg>
              )}
            </button>
          </nav>
        </ContainerFull>
      </header>
    </Headroom>
  );
};

export default Header;
