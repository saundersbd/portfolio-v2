import React from "react";

const PageNote = ({ title, description }) => (
  <div className="px-6 py-4 border rounded-lg bg-blue-50 dark:bg-gray-800 dark:border dark:border-gray-700">
    {title && (
      <h3 className="mt-0 mb-2 !text-base text-semibold dark:text-white">
        {title}
      </h3>
    )}
    <p className="mt-0 mb-0 !text-base !leading-loose">{description}</p>
  </div>
);

export default PageNote;
