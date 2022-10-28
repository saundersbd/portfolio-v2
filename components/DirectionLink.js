import React from "react";
import Link from "next/link";
import Icon from "./Icon";

const DirectionLink = ({ href, className, children, direction }) => {
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

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
      {children}
    </a>
  );
};

export default DirectionLink;
