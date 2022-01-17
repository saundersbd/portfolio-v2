import React from "react";
import Link from "next/link";

const LibraryRow = ({ author, title, date, url, notes, recommended }) => (
  <li className="grid items-center grid-cols-1 gap-2 py-3 border-b border-gray-300 dark:border-navy-light sm:grid-cols-12">
    <div className="flex flex-col justify-center col-span-full sm:col-span-10">
      <div className="flex items-center mb-1">
        {url ? (
          <a
            className="flex sm:w-max text-lg text-navy-darkest dark:text-white font-semibold hover:bg-orange-lightest dark:hover:bg-gray-800 rounded -mx-1 -my-0.5 px-1 py-0.5 mb-0 underline hover:no-underline focus:outline-none focus:ring focus:ring-orange"
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
            className="w-5 h-5 ml-2 text-red-500 dark:text-red-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        ) : null}
      </div>
      <div className="flex items-center text-gray-600 dark:text-navy-lighter">
        {author} ({date})
      </div>
    </div>
    <div className="flex justify-start pr-2 sm:justify-end col-span-full sm:col-span-2">
      {notes ? (
        <Link href={notes} passHref>
          <a className="flex items-center justify-center px-2 py-1 text-sm font-semibold tracking-wide no-underline transition border rounded bg-navy-lightest text-navy border-navy w-max hover:no-underline focus:outline-none focus:ring focus:ring-orange hover:bg-navy hover:text-white dark:border-navy-light dark:bg-navy-dark dark:text-navy-lightest dark:hover:bg-navy dark:hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 mr-1"
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
