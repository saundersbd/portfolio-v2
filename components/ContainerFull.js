import React from "react";

const ContainerFull = ({ children, className }) => (
  <div
    className={`${className} w-full lg:max-w-5xl xl:max-w-7xl mx-0 sm:mx-auto px-4 sm:px-8`}
  >
    {children}
  </div>
);

export default ContainerFull;
