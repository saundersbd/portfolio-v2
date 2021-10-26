import Link from "next/link";

const Button = ({ href, className, children, ...props }) => {
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href} passHref>
        <a
          className={`${className} flex items-center justify-center text-sm font-semibold rounded-md transition no-underline hover:no-underline focus:outline-none focus:ring focus:ring-blue-400 py-2 px-3 text-white bg-navy hover:bg-navy-light dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:border-gray-500 dark:hover:bg-gray-800 dark:hover:text-white`}
        >
          {children}
        </a>
      </Link>
    );
  }

  return (
    <a
      className={`${className} flex items-center justify-center text-base font-medium rounded-md transition no-underline hover:no-underline focus:outline-none focus:ring focus:ring-blue-400 py-2 px-3text-white bg-navy hover:bg-navy-light dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:border-gray-500 dark:hover:bg-gray-800 dark:hover:text-white`}
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
