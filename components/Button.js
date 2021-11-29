import Link from "next/link";
import cn from "classnames";

const Button = ({
  href,
  className,
  children,
  primary,
  secondary,
  ...props
}) => {
  const btnClass = cn({
    "flex items-center justify-center text-base font-semibold tracking-wide rounded-md no-underline hover:no-underline focus:outline-none focus:ring focus:ring-orange py-2 px-3": true,
    "text-white bg-navy hover:bg-teal border border-navy hover:border-teal dark:border-navy-light dark:bg-navy-dark dark:text-white  dark:hover:bg-navy dark:hover:text-white":
      primary,
    "text-navy border border-navy bg-navy-lightest hover:bg-navy hover:text-white dark:border-navy-light dark:bg-navy-dark dark:text-white dark:hover:bg-navy dark:hover:text-white":
      secondary,
  });
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href} passHref>
        <a className={`${className} + ${btnClass}`}>{children}</a>
      </Link>
    );
  }

  return (
    <a
      className={`${className} + ${btnClass}`}
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
