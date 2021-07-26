import React from "react";
import Link from "next/link";

const Project = ({ slug, title, description, cover, author }) => (
  <Link
    as={`/bookshelf/${slug.replace(/\.mdx?$/, "")}`}
    href={`/bookshelf/${slug}`}
    passHref
  >
    <a className="book flex col-span-full flex-col xs:flex-row lg:col-span-1 mb-6 bg-white rounded-md border border-gray-300 shadow hover:shadow-lg transition focus:outline-none focus:ring focus:ring-blue-400 last:mb-0 dark:bg-gray-900 dark:hover:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 overflow-hidden">
      <div className="book-image-container flex items-center justify-center bg-gray-100 p-6 dark:bg-gray-800">
        <div className="book-image w-16 sm:w-24 flex-shrink-0 rounded shadow-md overflow-hidden dark:border-gray-800">
          <img src={cover} />
        </div>
      </div>

      <div className="p-4 xs:p-6">
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400 mb-2">{author}</p>
        <p className="text-base sm:text-lg leading-relaxed sm:leading-relaxed text-gray-700 dark:text-gray-300">
          {description}
        </p>
      </div>
    </a>
  </Link>
);

export default Project;
