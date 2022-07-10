import React from "react";

const HrSection = ({ className }) => (
  <div
    className={
      `text-sm text-center my-12 text-black dark:text-gray-500 ` +
      `${className}`
    }
  >
    &#9670; &#9670; &#9670;
  </div>
);

export default HrSection;
