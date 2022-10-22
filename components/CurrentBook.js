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
    <div className="flex flex-col mb-12 overflow-hidden bg-white border border-gray-300 rounded-lg shadow-sm col-span-full xs:flex-row dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-center p-4 bg-gray-100 dark:bg-gray-700 sm:w-1/5">
        <div className="flex-shrink-0 w-16 overflow-hidden rounded shadow-md book-image sm:w-16 dark:border-gray-800">
          <img src={imageUrl} />
        </div>
      </div>

      <div className="flex flex-col justify-center flex-grow p-6 bg-white dark:bg-gray-900">
        <h3 className="mb-3 text-lg font-semibold tracking-wide">
          <a
            className="mb-2 text-base font-semibold text-black underline transition-all rounded underline-offset-2 dark:text-white focus:outline-none focus:ring focus:ring-orange focus:bg-mint-50 dark:focus:bg-gray-900"
            href={url}
          >
            {title}
          </a>
          <span className="ml-1.5 text-sm font-normal text-gray-700 dark:text-gray-300">
            by {author}
          </span>
        </h3>

        <div className="progress">
          <p className="mb-1.5 text-xs text-gray-700 dark:text-gray-400">{`${toPercent(
            progressBarWidth
          )}% complete (${date})`}</p>
          <div className="w-full h-2 overflow-hidden bg-gray-200 rounded-sm sm:w-1/3 progress-bar dark:bg-gray-700">
            <div
              className={`progress h-2 bg-mint-400 dark:bg-mint-300 ${barClass}`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentBook;
