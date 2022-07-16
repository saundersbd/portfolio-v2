import React from "react";
import Link from "next/link";
import Icon from "./Icon";

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
              <Icon
                icon="thumbs-up"
                className="inline-block w-5 h-5 ml-1 pt-1 text-green-600 dark:text-green-300"
              />
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
          <Icon icon="doc" className="w-4 mr-1" />
          Notes
        </a>
      </Link>
    ) : null}
  </li>
);

export default LibraryRow;
