import React from "react";
import Link from "next/link";
import Icon from "./Icon";

interface LibraryRowProps {
  author: string;
  title: string;
  date: string;
  url: string;
  notes?: string;
  recommended?: boolean;
}

const LibraryRow = ({
  author,
  title,
  date,
  url,
  notes,
  recommended,
}: LibraryRowProps) => (
  <li className="flex flex-col items-start pb-4 mb-4 border-b border-gray-200 sm:flex-row sm:items-center dark:border-gray-700 last:border-none last:mb-0">
    <div className="flex-grow mb-3 mr-0 sm:mr-4 sm:mb-0">
      <div className="flex items-center mb-1">
        {url ? (
          <a
            className="sm:w-max text-sm font-semibold text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded -mx-1 -my-0.5 px-1 py-0.5 mb-0 underline underline-offset-2 focus:outline-none focus:ring focus:ring-orange transition-all focus:bg-blue-50 dark:focus:bg-gray-900"
            href={url}
            target="_blank"
          >
            {title}
            {recommended ? (
              <Icon
                icon="thumbs-up"
                className="inline-block w-5 h-5 pt-1 ml-1 text-mint-400 dark:text-mint-300"
              />
            ) : null}
          </a>
        ) : (
          title
        )}
      </div>
      <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
        {author} ({date})
      </div>
    </div>

    {notes ? (
      <Link
        href={notes}
        className="flex items-center justify-center px-2 py-2 text-sm font-semibold tracking-wide text-black no-underline transition-all border border-gray-300 rounded-lg shadow-sm w-max hover:shadow-none hover:no-underline focus:outline-none focus:ring hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
        passHref
      >
        <Icon icon="doc" className="w-4 mr-1.5" />
        Notes
      </Link>
    ) : null}
  </li>
);

export default LibraryRow;