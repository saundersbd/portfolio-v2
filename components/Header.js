import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Container from "../components/Container";

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
      <Link href="/about" passHref>
        <NavLink isActive={activeRoute === "About"}>About</NavLink>
      </Link>

      <Link href="/bookshelf" passHref>
        <NavLink isActive={activeRoute === "Bookshelf"} className="ml-2">
          My Bookshelf
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

  return (
    <header className="fixed top-0 left-0 right-0 z-10 flex h-24 sm:h-20 items-center bg-white border-b border-gray-300 dark:bg-black dark:border-gray-800">
      <Container
        size="normal"
        className="flex sm:flex-row flex-col items-center justify-center sm:justify-between"
      >
        <Link href="/" passHref>
          <a className="text-lg font-semibold focus:outline-none focus:ring focus:ring-blue-400 sm:mb-0 mb-3 dark:text-gray-400 rounded">
            Brian Saunders
          </a>
        </Link>
        <nav>
          <NavLinks activeRoute={activeRoute} />
        </nav>
      </Container>
    </header>
  );
};

export default Header;
