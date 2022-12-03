import React from "react";

const Reference = ({ children }: { children: React.ReactNode }) => (
  <>
    <h2 className="!mb-2">Reference</h2>
    <div className="text-sm text-gray-600 dark:text-gray-300 reference not-prose">
      {children}
    </div>
  </>
);

export default Reference;
