import React from "react";
import cn from "classnames";
import Icon from "./Icon";

const Badge = ({ icon, className, small, medium }) => {
  const btnClass = cn({
    "mr-2 p-2 rounded-lg": small,
    "mr-4 p-4 rounded-xl": medium,
  });

  if (!icon) {
    icon = "doc";
  }
  return (
    <div
      className={`${btnClass} badge flex items-center justify-center border border-gray-200 dark:border-gray-700 dark:bg-gray-800 + ${className}`}
    >
      <Icon className="w-5 text-gray-600 dark:text-gray-300" icon={icon} />
    </div>
  );
};

export default Badge;
