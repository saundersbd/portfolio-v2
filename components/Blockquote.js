import React from "react";

const Blockquote = ({ children }) => (
  <blockquote className="py-2 pl-5 italic text-gray-700 border-[#42B883] font-display border-l-3 not-prose dark:border-[#42B883] dark:text-gray-200">
    {children}
  </blockquote>
);

export default Blockquote;
