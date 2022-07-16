import React from "react";

const Tag = ({ children }) => (
  <span className="mr-1.5 mb-1.5 px-1 py-0.5 rounded text-gray-800 dark:text-white text-sm bg-blue-100 dark:bg-blue-60 dark:bg-gradient-to-tr dark:from-blue-600 dark:to-blue-500">
    {children}
  </span>
);

export default Tag;
