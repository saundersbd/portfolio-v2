import React from "react";
import Link from "next/link";

interface ButtonProps {
  href: string | undefined;
  className?: string;
  children: React.ReactNode;
}

const Button = ({ href, className, children }: ButtonProps) => {
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link
        href={href}
        className="flex w-max items-center justify-center border border-gray-200 rounded-lg shadow leading-6 text-sm font-bold text-black !no-underline px-3 py-2 hover:bg-gray-50 dark:text-white dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:shadow-none transition-all focus:outline-none focus:ring focus:ring-blue-500"
        passHref
      >
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex w-max items-center justify-center border border-gray-200 rounded-lg shadow leading-6 text-sm font-bold text-black !no-underline px-3 py-2 hover:bg-gray-50 dark:text-white dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:shadow-none transition-all focus:outline-none focus:ring focus:ring-blue-500 ${className}`}
    >
      {children}
    </a>
  );
};

export default Button;