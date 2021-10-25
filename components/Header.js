import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Headroom from "react-headroom";
import ContainerFull from "../components/ContainerFull";

const NavLink = React.forwardRef(
  ({ isActive, href, className, children }, ref) => (
    <a
      className={
        `flex items-center justify-center text-lg font-medium text-center focus:outline-none focus:ring focus:ring-blue-400 px-4 sm:mb-0 mb-2 hover:bg-orange-lightest dark:hover:bg-gray-900 ` +
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
        <NavLink
          isActive={activeRoute === "Posts"}
          className="border-l border-orange-light"
        >
          Writing
        </NavLink>
      </Link>

      <Link href="/bookshelf" passHref>
        <NavLink
          isActive={activeRoute === "Bookshelf"}
          className="border-l border-orange-light"
        >
          Bookshelf
        </NavLink>
      </Link>

      <Link href="/about" passHref>
        <NavLink
          isActive={activeRoute === "About"}
          className="border-l border-r border-orange-light"
        >
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
    <Headroom>
      <header className="z-10 flex items-stretch h-20 bg-white border-t border-b border-orange-light sm:h-16 dark:bg-black dark:border-gray-800">
        <ContainerFull className="flex flex-col items-stretch justify-center sm:flex-row sm:justify-between">
          <Link href="/" passHref>
            <a className="flex items-center px-4 mb-3 text-lg font-semibold rounded focus:outline-none focus:ring focus:ring-blue-400 sm:mb-0 dark:text-gray-400">
              Brian Saunders
            </a>
          </Link>
          <nav className="flex items-stretch">
            <NavLinks activeRoute={activeRoute} />
          </nav>
        </ContainerFull>
      </header>
    </Headroom>
  );
};

export default Header;
