import React from "react";

const Tag = ({ label }) => (
  <span className="px-2 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded dark:bg-gray-800 dark:text-gray-400">
    {label}
  </span>
);

export default Tag;
