import React from "react";

const Tag = ({ label }) => (
  <span className="py-1 px-2 mr-2 mb-2 rounded bg-gray-200 text-gray-700 text-sm font-semibold dark:bg-gray-800 dark:text-gray-400">
    {label}
  </span>
);

export default Tag;
