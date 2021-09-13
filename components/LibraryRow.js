import React from "react";
import Link from "next/link";

const LibraryRow = ({ author, title, date, url, notes }) => (
  <li className="grid grid-cols-1 py-2 border-b border-gray-300 dark:border-gray-600 md:grid-cols-12">
    <div className="col-span-full md:col-span-8">
      {notes ? (
        <Link href={notes} passHref>
          <a className="text-blue-600 dark:text-blue-300 hover:underline">
            {title}
          </a>
        </Link>
      ) : (
        title
      )}
    </div>
    <div className="col-span-full md:col-span-3">{author}</div>
    <div className="md:text-right col-span-full md:col-span-1">{date}</div>
  </li>
);

export default LibraryRow;
