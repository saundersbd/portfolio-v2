import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ContainerFull from "../components/ContainerFull";

const NavLink = React.forwardRef(
  ({ isActive, href, className, children }, ref) => (
    <a
      className={
        `text-lg font-medium py-2 px-3 rounded-md focus:outline-none focus:ring focus:ring-blue-400 sm:mb-0 mb-2 hover:bg-gray-100 dark:hover:bg-gray-900 ` +
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
      <Link href="/posts" passHref>
        <NavLink isActive={activeRoute === "Posts"}>Writing</NavLink>
      </Link>

      <Link href="/bookshelf" passHref>
        <NavLink isActive={activeRoute === "Bookshelf"} className="ml-2">
          Bookshelf
        </NavLink>
      </Link>

      <Link href="/about" passHref>
        <NavLink isActive={activeRoute === "About"} className="ml-2">
          About
        </NavLink>
      </Link>
    </>
  );
};

const Header = () => {
  const router = useRouter();

  let activeRoute = "";
  let activePath = "";

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
    <header className="fixed top-0 left-0 right-0 z-10 flex items-center h-24 bg-white border-b border-gray-300 sm:h-20 dark:bg-black dark:border-gray-800">
      <ContainerFull className="flex flex-col items-center justify-center sm:flex-row sm:justify-between">
        <Link href="/" passHref>
          <a className="mb-3 text-lg font-semibold rounded focus:outline-none focus:ring focus:ring-blue-400 sm:mb-0 dark:text-gray-400">
            Brian Saunders
          </a>
        </Link>
        <nav>
          <NavLinks activeRoute={activeRoute} />
        </nav>
      </ContainerFull>
    </header>
  );
};

export default Header;
