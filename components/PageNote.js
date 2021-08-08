import React from "react";

const PageNote = ({ title, description }) => (
  <div className="px-6 py-4 bg-blue-100 rounded-md dark:bg-gray-900 dark:border-gray-700">
    {title && <h3 className="mt-0 mb-1 text-lg dark:text-gray-400">{title}</h3>}
    <p className="mt-0 mb-0 text-lg leading-loose">{description}</p>
  </div>
);

export default PageNote;
