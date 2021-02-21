import React from "react";

const PageNote = ({ title, description }) => (
  <div className="bg-blue-100 px-6 py-4 rounded-md dark:bg-gray-900">
    {title && <h3 className="text-lg mb-2 mt-0 dark:text-gray-400">{title}</h3>}
    <p className="mb-0 mt-0 text-base leading-loose">{description}</p>
  </div>
);

export default PageNote;
