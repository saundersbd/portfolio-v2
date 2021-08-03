import React from "react";

const CurrentBook = ({ title, author, description, url, barFraction }) => {
  const toPercent = (a) => {
    let split = a.split("/");
    let result = parseInt(split[0], 10) / parseInt(split[1], 10);
    return result * 100;
  };

  return (
    <div className="flex col-span-full flex-col xs:flex-row lg:col-span-1 bg-white rounded-md border border-gray-300 shadow dark:bg-gray-900 dark:border-gray-700 overflow-hidden">
      <div className="flex items-center justify-center bg-gray-100 p-6 dark:bg-gray-800">
        <div className="book-image w-16 sm:w-24 flex-shrink-0 rounded shadow-md overflow-hidden dark:border-gray-800">
          <img src={url} />
        </div>
      </div>

      <div className="p-4 xs:p-6">
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400 mb-2">{author}</p>
        <p className="mb-4 text-base sm:text-lg leading-relaxed sm:leading-relaxed text-gray-700 dark:text-gray-300">
          {description}
        </p>
        <div className="progress">
          <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">{`${toPercent(
            barFraction
          )}% complete`}</p>
          <div className="progress-bar w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-sm overflow-hidden">
            <div className={`progress h-3 bg-blue-600 w-${barFraction}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentBook;
