import React from "react";
import Link from "next/link";
import Icon from "./Icon";

const DirectionLink = ({ href, className, children, direction }) => {
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    if (direction === "left") {
      return (
        <Link href={href} passHref>
          <a className={`block-link ` + `${className}`}>
            <Icon icon="arrow-left" className="w-4 mr-1" />
            {children}
          </a>
        </Link>
      );
    }
    if (direction === "top") {
      return (
        <Link href={href} passHref>
          <a className={`block-link ` + `${className}`}>
            <Icon icon="arrow-up" className="w-4 mr-1" />
            {children}
          </a>
        </Link>
      );
    }

    if (direction === "right") {
      return (
        <Link href={href} passHref>
          <a className={`block-link ` + `${className}`}>
            {children}
            <Icon icon="arrow-right" className="w-4 ml-1" />
          </a>
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
