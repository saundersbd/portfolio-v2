import React from "react";
import cn from "classnames";
import Link from "next/link";
import useDelayedRender from "use-delayed-render";
import { useState, useEffect } from "react";
import styles from "../styles/mobile-menu.module.css";

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 300,
    }
  );

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = "";
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = "hidden";
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <button
        className={cn(styles.burger, "visible sm:hidden my-4 -ml-3")}
        aria-label="Toggle menu"
        type="button"
        onClick={toggleMenu}
      >
        <MenuIcon data-hide={isMenuOpen} />
        <CrossIcon data-hide={!isMenuOpen} />
      </button>
      {isMenuMounted && (
        <ul
          className={cn(
            styles.menu,
            "absolute flex flex-col bg-beige dark:bg-navy-darkest border-t border-orange-light dark:border-orange-lighter",
            isMenuRendered && styles.menuRendered
          )}
        >
          <li className="text-base font-semibold border-b border-orange-light text-stone-800 dark:text-white dark:border-orange-lighter">
            <Link href="/" passHref>
              <a className="flex w-auto py-4">Home</a>
            </Link>
          </li>

          <li className="text-base font-semibold border-b border-orange-light text-stone-800 dark:text-white dark:border-orange-lighter">
            <Link href="/posts" passHref>
              <a className="flex w-auto py-4">Writing</a>
            </Link>
          </li>

          <li className="text-base font-semibold border-b border-orange-light text-stone-800 dark:text-white dark:border-orange-lighter">
            <Link href="/bookshelf" passHref>
              <a className="flex w-auto py-4">My Bookshelf</a>
            </Link>
          </li>

          <li className="text-base font-semibold border-b border-orange-light text-stone-800 dark:text-white dark:border-orange-lighter">
            <Link href="/about" passHref>
              <a className="flex w-auto py-4">About</a>
            </Link>
          </li>
        </ul>
      )}
    </>
  );
}

function MenuIcon(props) {
  return React.createElement(
    "svg",
    Object.assign(
      {
        className: "h-5 w-5 absolute text-gray-900 dark:text-gray-100",
        width: "24",
        height: "24",
        viewBox: "0 0 20 20",
        fill: "currentColor",
      },
      props
    ),
    React.createElement("path", {
      d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
      fillRule: "evenodd",
      clipRule: "evenodd",
    })
  );
}
function CrossIcon(props) {
  return React.createElement(
    "svg",
    Object.assign(
      {
        className: "h-5 w-5 absolute text-gray-900 dark:text-gray-100",
        viewBox: "0 0 20 20",
        width: "24",
        height: "24",
        fill: "currentColor",
        shapeRendering: "geometricPrecision",
      },
      props
    ),
    React.createElement("path", {
      d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
      fillRule: "evenodd",
      clipRule: "evenodd",
    })
  );
}
