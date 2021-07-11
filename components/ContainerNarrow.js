import React from "react";

const ContainerNarrow = ({ children }) => (
  <div className="w-full md:max-w-3xl lg:max-w-5xl sm:mx-auto px-8">
    {children}
  </div>
);

export default ContainerNarrow;
