import Link from "next/link";

const Button = ({ href, className, children, ...props }) => {
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href} passHref>
        <a
          className={`${className} flex items-center justify-center text-base font-medium rounded-md transition no-underline hover:no-underline focus:outline-none focus:ring focus:ring-orange py-2 px-3 text-white bg-navy hover:bg-navy-light border border-navy dark:border-navy-light dark:bg-navy-dark dark:text-white  dark:hover:bg-navy dark:hover:text-white`}
        >
          {children}
        </a>
      </Link>
    );
  }

  return (
    <a
      className={`${className} flex items-center justify-center text-base font-medium rounded-md transition no-underline hover:no-underline focus:outline-none focus:ring focus:ring-orange py-2 px-3 text-white bg-navy hover:bg-navy-light border border-navy dark:border-navy-light dark:bg-navy-dark dark:text-white  dark:hover:bg-navy dark:hover:text-white`}
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
