import React from "react";
import cn from "classnames";
import Icon from "./Icon";

const Badge = ({ icon, className, small, medium }) => {
  const size = cn({
    "mr-2 p-2 rounded-lg": small,
    "mr-4 p-4 rounded-xl": medium,
  });

  if (!icon) {
    icon = "doc";
  }
  return (
    <div
      className={`${size} badge shadow-sm flex items-center justify-center bg-gray-100 dark:bg-gray-800 + ${className}`}
    >
      <Icon className="w-5 text-gray-600 dark:text-gray-300" icon={icon} />
    </div>
  );
};

export default Badge;
