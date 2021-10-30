import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Headroom from "react-headroom";
import ContainerFull from "../components/ContainerFull";

const NavLink = React.forwardRef(
  ({ isActive, href, className, children }, ref) => (
    <a
      className={
        `flex items-center justify-center flex-grow sm:flex-grow-0 text-sm sm:text-lg font-normal tracking-wide text-center focus:outline-none focus:ring focus:ring-orange px-4 hover:bg-orange-lightest dark:hover:bg-gray-900 ` +
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
          className="py-2 border-t border-l sm:border-t-0 border-orange-light dark:border-orange-lighter"
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
      <header className="z-10 flex flex-col justify-between h-24 bg-white border-t border-b sm:items-stretch sm:flex-row border-orange-light sm:h-16 dark:bg-navy-darkest dark:border-orange-lighter">
        <Link href="/" passHref>
          <a className="flex items-center justify-center flex-grow px-4 text-xl font-semibold sm:flex-grow-0 sm:mt-0 focus:outline-none focus:ring focus:ring-orange sm:mb-0 dark:text-white">
            Brian Saunders
          </a>
        </Link>
        <nav className="flex items-stretch justify-center">
          <NavLinks activeRoute={activeRoute} />
        </nav>
      </header>
    </Headroom>
  );
};

export default Header;
