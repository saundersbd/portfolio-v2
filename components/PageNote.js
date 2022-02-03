import React from "react";

const PageNote = ({ title, description }) => (
  <div className="px-6 py-0 border rounded-lg border-navy-lighter bg-navy-lightest dark:bg-gray-800 dark:border dark:border-gray-700">
    {title && (
      <h3 className="mt-0 mb-0 text-lg text-semibold dark:text-white">
        {title}
      </h3>
    )}
    <p className="mt-0 mb-0 text-lg">{description}</p>
  </div>
);

export default PageNote;
