import tw from "twin.macro";
import Link from "next/link";

const StyledButton = ({ size, type }) => [
  tw`flex items-center justify-center w-max text-base font-bold rounded-md transition no-underline hover:no-underline focus:outline-none focus:ring focus:ring-blue-400 shadow-sm hover:shadow no-underline!`,
  size === "normal" && tw`py-2 px-4`,
  size === "large" && tw`px-4 py-3 text-base sm:px-3 sm:py-2 sm:text-lg`,
  type === "primary" &&
    tw`border-2 border-blue-700 text-blue-700! hover:bg-blue-50 dark:border-blue-700 dark:bg-blue-700 dark:text-white! dark:hover:bg-blue-600 dark:hover:text-white!`,
  type === "secondary" && tw`bg-blue-700 text-white! hover:bg-blue-600`,
];

const Button = ({ href, className, children, ...props }) => {
  const a = href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href} passHref>
        <a className={className} css={StyledButton(props)}>
          {children}
        </a>
      </Link>
    );
  }

  return (
    <a
      className={className}
      css={StyledButton(props)}
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
