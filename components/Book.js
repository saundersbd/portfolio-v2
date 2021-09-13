import React from "react";
import Link from "next/link";

const Project = ({ slug, title, description, cover, author }) => (
  <Link href={`/bookshelf/${slug.replace(/\.mdx?$/, "")}`} passHref>
    <a className="flex flex-col col-span-6 overflow-hidden transition bg-white border border-gray-300 rounded-md shadow book xs:flex-row hover:shadow-lg focus:outline-none focus:ring focus:ring-blue-400 dark:bg-gray-900 dark:hover:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600">
      <div className="flex items-center justify-center p-6 bg-gray-100 book-image-container dark:bg-gray-800">
        <div className="flex-shrink-0 w-16 overflow-hidden rounded shadow-md book-image sm:w-24 dark:border-gray-800">
          <img src={cover} />
        </div>
      </div>

      <div className="p-4 xs:p-6">
        <h3 className="mb-1 text-lg font-bold">{title}</h3>
        <p className="mb-2 text-gray-500 dark:text-gray-400">{author}</p>
        <p className="text-base leading-relaxed text-gray-700 sm:text-lg sm:leading-relaxed dark:text-gray-300">
          {description}
        </p>
      </div>
    </a>
  </Link>
);

export default Project;
