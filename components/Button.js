import Link from "next/link";

const Button = ({ href, className, children, ...props }) => {
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href} passHref>
        <a
          className={`${className} flex items-center justify-center text-base font-medium rounded-md transition no-underline hover:no-underline focus:outline-none focus:ring focus:ring-blue-400 shadow-sm hover:shadow py-2 px-3 border border-gray-300 text-gray-800 bg-white hover:bg-gray-50 dark:border-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-600 dark:hover:text-white`}
        >
          {children}
        </a>
      </Link>
    );
  }

  return (
    <a
      className={`${className} flex items-center justify-center text-base font-medium rounded-md transition no-underline hover:no-underline focus:outline-none focus:ring focus:ring-blue-400 shadow-sm hover:shadow py-2 px-3 border border-gray-300 text-gray-800 bg-white hover:bg-gray-50 dark:border-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-600 dark:hover:text-white`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
};

export default Button;
