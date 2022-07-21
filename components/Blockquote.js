import React from "react";

const Blockquote = ({ children }) => (
  <blockquote className="py-2 pl-5 font-mono not-italic text-gray-700 border-blue-400 border-l-3 not-prose dark:border-purple-500 dark:text-gray-200">
    {children}
  </blockquote>
);

export default Blockquote;
