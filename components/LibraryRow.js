import React from "react";
import Link from "next/link";

const LibraryRow = ({ author, title, date, url, notes, recommended }) => (
  <li className="grid items-center grid-cols-1 gap-2 py-3 border-b border-gray-300 sm:py-2 dark:border-gray-600 sm:grid-cols-12">
    <div className="flex flex-col justify-center col-span-full sm:col-span-10">
      <div className="flex items-center mb-1">
        {url ? (
          <a
            className="font-medium underline rounded hover:text-blue-600 dark:hover:text-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
            href={url}
            target="_blank"
          >
            {title}
          </a>
        ) : (
          title
        )}
        {recommended ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 ml-2 text-green-600 dark:text-green-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
            />
          </svg>
        ) : null}
      </div>
      <div className="text-gray-500 dark:text-gray-400">
        {author} ({date})
      </div>
    </div>
    <div className="flex justify-start pr-2 sm:justify-end col-span-full sm:col-span-2">
      {notes ? (
        <Link href={notes} passHref>
          <a className="flex items-center justify-center px-2 py-1 text-base font-medium text-gray-800 no-underline transition bg-white border border-gray-300 rounded-md shadow-sm w-max hover:no-underline focus:outline-none focus:ring focus:ring-blue-400 hover:shadow hover:bg-gray-50 dark:border-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-600 dark:hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Notes
          </a>
        </Link>
      ) : null}
    </div>
  </li>
);

export default LibraryRow;
