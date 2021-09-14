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
    <div className="flex flex-col mb-12 overflow-hidden bg-white border border-gray-300 rounded-md shadow col-span-full xs:flex-row lg:col-span-1 dark:bg-gray-900 dark:border-gray-700">
      <div className="flex items-center justify-center p-6 bg-gray-100 dark:bg-gray-800">
        <div className="flex-shrink-0 w-16 overflow-hidden rounded shadow-md book-image sm:w-24 dark:border-gray-800">
          <img src={imageUrl} />
        </div>
      </div>

      <div className="p-4 xs:p-6">
        <h3 className="mb-1 text-lg font-bold">
          <a
            className="underline rounded hover:text-blue-600 dark:hover:text-gray-300 focus:outline-none focus:ring focus:ring-blue-400 -mx-1 -my-0.5 px-1 py-0.5"
            href={url}
          >
            {title}
          </a>
        </h3>
        <p className="mb-2 text-gray-500 dark:text-gray-400">{author}</p>
        <p className="mb-4 text-base leading-relaxed text-gray-700 sm:text-lg sm:leading-relaxed dark:text-gray-300">
          {description}
        </p>
        <div className="progress">
          <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">{`${toPercent(
            progressBarWidth
          )}% complete (${date})`}</p>
          <div className="w-full h-3 overflow-hidden bg-gray-200 rounded-sm xl:w-11/12 progress-bar dark:bg-gray-600">
            <div
              className={`progress h-3 bg-blue-600 dark:bg-blue-400 ${barClass}`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentBook;
