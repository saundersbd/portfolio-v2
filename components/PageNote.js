import React from "react";

const PageNote = ({ title, description }) => (
  <div className="px-6 py-6 border rounded-lg border-navy-lighter bg-navy-lightest dark:bg-navy-darkest dark:border dark:border-orange-lighter">
    {title && (
      <h3 className="mt-0 mb-1 text-lg dark:text-navy-lighter">{title}</h3>
    )}
    <p className="mt-0 mb-0 text-lg leading-loose">{description}</p>
  </div>
);

export default PageNote;
