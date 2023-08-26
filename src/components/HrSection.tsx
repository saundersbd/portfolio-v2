import React from "react";

const HrSection = ({ className }: { className?: string }) => (
  <div
    className={
      `text-sm text-center my-12 text-slate-12 dark:text-slateDark-11 ` +
      `${className}`
    }
  >
    &#9670; &#9670; &#9670;
  </div>
);

export default HrSection;
