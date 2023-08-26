import React from "react";

const Reference = ({ children }: { children: React.ReactNode }) => (
  <>
    <h2 className="!mb-2">Reference</h2>
    <div className="text-slate-11 dark:text-slateDark-11 reference not-prose">
      {children}
    </div>
  </>
);

export default Reference;
