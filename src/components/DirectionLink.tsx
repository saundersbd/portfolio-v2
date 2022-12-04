import React from "react";
import Link from "next/link";
import Icon from "./Icon";

interface LinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  direction: string;
}

const DirectionLink = ({ href, className, children, direction }: LinkProps) => {
  const isInternalLink = href && href.startsWith("/");

  if (isInternalLink) {
    if (direction === "left") {
      return (
        <Link href={href} className={`block-link ` + `${className}`} passHref>
          <Icon icon="arrow-hook-left" className="w-4 mr-1" />
          {children}
        </Link>
      );
    }
    if (direction === "top") {
      return (
        <Link href={href} className={`block-link ` + `${className}`} passHref>
          <Icon icon="arrow-up" className="w-4 mr-1" />
          {children}
        </Link>
      );
    }

    if (direction === "right") {
      return (
        <Link href={href} className={`block-link ` + `${className}`} passHref>
          {children}
          <Icon icon="arrow-right" className="w-4 ml-1" />
        </Link>
      );
    }
  }

  return (
    <a href={href} className={`block-link ` + `${className}`}>
      <Icon icon="arrow-up" className="w-4 mr-1" />
      {children}
    </a>
  );
};

export default DirectionLink;
