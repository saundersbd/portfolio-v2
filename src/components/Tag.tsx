import React from "react";

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="mr-1.5 mb-1.5 px-1.5 py-0.5 rounded text-jade-12 dark:text-jadeDark-12 text-sm bg-jade-4 dark:bg-jadeDark-4 font-sans">
    {children}
  </span>
);

export default Tag;
