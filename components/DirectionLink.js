import React from "react";
import Link from "next/link";
import Icon from "./Icon";

import { arrowLeft, arrowUp } from "./icons";

const DirectionLink = ({ href, icon, className, children, iconRight }) => {
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (icon === "left") {
    icon = arrowLeft;
  }
  if (icon === "top") {
    icon = arrowUp;
  }

  if (isInternalLink) {
    return (
      <Link href={href} passHref>
        <a className={`block-link ` + `${className}`}>
          {iconRight ? null : <Icon icon={icon} className="w-4 mr-1" />}
          {children}
          {iconRight ? <Icon icon={icon} className="w-4 ml-1" /> : null}
        </a>
      </Link>
    );
  }

  return (
    <a href={href} className={`block-link ` + `${className}`}>
      {svg}
      {children}
    </a>
  );
};

export default DirectionLink;
