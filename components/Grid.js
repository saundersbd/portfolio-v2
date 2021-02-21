import React from "react";

const Grid = ({ className, children }) => (
  <div className={`grid ` + `${className}`}>{children}</div>
);

export default Grid;
