import React from "react";

const Reference = ({ children }) => (
  <>
    <h2 className="!mb-2">Reference</h2>
    <p className="text-sm text-gray-600 dark:text-gray-300 reference not-prose">
      {children}
    </p>
  </>
);

export default Reference;
