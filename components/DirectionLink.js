import React from "react";
import Link from "next/link";

const DirectionLink = ({ href, icon, className, children }) => {
  const isInternalLink = href && href.startsWith("/");

  let svg;
  if (icon === "back") {
    svg = (
      <svg
        className="w-4 mr-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  if (icon === "top") {
    svg = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-4 mr-1"
      >
        <path
          fillRule="evenodd"
          d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  if (isInternalLink) {
    return (
      <Link href={href} passHref>
        <a
          className={
            `flex w-max items-center text-gray-800 dark:text-white font-semibold hover:bg-orange-lightest dark:hover:bg-navy-dark rounded -mx-1 -my-0.5 px-1 py-0.5 hover:no-underline focus:outline-none focus:ring focus:ring-orange ` +
            `${className}`
          }
        >
          {svg}
          {children}
        </a>
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={
        `flex w-max items-center text-gray-800 dark:text-white font-semibold hover:bg-orange-lightest dark:hover:bg-navy-dark rounded -mx-1 -my-0.5 px-1 py-0.5 hover:no-underline focus:outline-none focus:ring focus:ring-orange ` +
        `${className}`
      }
    >
      {svg}
      {children}
    </a>
  );
};

export default DirectionLink;
