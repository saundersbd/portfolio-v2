import React from "react";

const Blockquote = ({ children }) => (
  <blockquote className="py-4 pl-6 font-mono not-italic text-black border-l-4 border-blue-400 not-prose dark:bg-gray-800 dark:border-purple-500 dark:text-white">
    {children}
  </blockquote>
);

export default Blockquote;
