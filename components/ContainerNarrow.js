import React from "react";

const ContainerNarrow = ({ children }) => (
  <div className="w-full px-8 md:max-w-3xl lg:max-w-5xl sm:mx-auto">
    {children}
  </div>
);

export default ContainerNarrow;
