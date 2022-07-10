import React from "react";

const CurrentBook = ({
  title,
  author,
  description,
  imageUrl,
  url,
  progressBarWidth,
  barClass,
  date,
}) => {
  const toPercent = (a) => {
    let split = a.split("/");
    let result = parseInt(split[0], 10) / parseInt(split[1], 10);
    return result * 100;
  };

  return (
    <div className="flex flex-col mb-12 overflow-hidden bg-white border border-gray-200 rounded-lg shadow col-span-full xs:flex-row lg:col-span-1 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-center p-4 border-r bg-gray-100 border-gray-200 dark:bg-gray-800 dark:border-gray-700 sm:w-1/4">
        <div className="flex-shrink-0 w-20 overflow-hidden rounded shadow-md book-image sm:w-24 dark:border-gray-800">
          <img src={imageUrl} />
        </div>
      </div>

      <div className="flex-grow p-4">
        <h2 className="font-bold text-base mb-2">Currently reading...</h2>
        <h3 className="mb-1 text-lg font-semibold tracking-wide">
          <a
            className="text-sm text-black dark:text-white mb-2 underline font-bold hover:no-underline focus:outline-none focus:ring focus:ring-orange"
            href={url}
          >
            {title}
          </a>
        </h3>
        <p className="mb-2 text-sm text-gray-800 dark:text-gray-300">
          by {author}
        </p>
        <div className="progress">
          <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">{`${toPercent(
            progressBarWidth
          )}% complete (${date})`}</p>
          <div className="w-full h-3 overflow-hidden bg-gray-100 rounded-sm progress-bar dark:bg-gray-700">
            <div
              className={`progress h-3 bg-blue-500 dark:bg-purple-500 ${barClass}`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentBook;
