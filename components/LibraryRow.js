import React from "react";
import Link from "next/link";

const LibraryRow = ({ author, title, date, url, notes, recommended }) => (
  <li className="flex flex-col sm:flex-row items-start sm:items-center border-b border-gray-200 dark:border-gray-700 pb-4 mb-4 last:border-none last:mb-0">
    <div className="flex-grow mb-3 sm:mb-0">
      <div className="flex items-center mb-1">
        {url ? (
          <a
            className="sm:w-max text-sm font-bold text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded -mx-1 -my-0.5 px-1 py-0.5 mb-0 underline focus:outline-none focus:ring focus:ring-orange transition-all"
            href={url}
            target="_blank"
          >
            {title}
            {recommended ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block w-5 h-5 ml-1 -mt-1 text-green-600 dark:text-green-300"
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
          </a>
        ) : (
          title
        )}
      </div>
      <div className="flex items-center text-sm text-gray-500 dark:text-gray-300">
        {author} ({date})
      </div>
    </div>

    {notes ? (
      <Link href={notes} passHref>
        <a className="flex items-center justify-center px-2 py-2 text-sm tracking-wide no-underline border rounded-lg shadow-sm font-bold text-black border-gray-200 w-max hover:shadow-none hover:no-underline focus:outline-none focus:ring focus:ring-orange hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 mr-1 text-gray-200"
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
  </li>
);

export default LibraryRow;
