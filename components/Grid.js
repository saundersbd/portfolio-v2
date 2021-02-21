import React from "react";

const Grid = ({ className, cols, children }) => (
  <div className={`grid grid-cols-${cols} ` + `${className}`}>{children}</div>
);

export default Grid;
