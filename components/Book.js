import React from "react";
import Link from "next/link";

const Project = ({ slug, title, description, cover, author }) => (
  <Link
    as={`/bookshelf/${slug.replace(/\.mdx?$/, "")}`}
    href={`/bookshelf/${slug}`}
    passHref
  >
    <a className="flex col-span-full lg:col-span-1 mb-6 p-6 bg-white rounded-md border border-gray-300 shadow hover:shadow-lg hover:bg-gray-100 transition focus:outline-none focus:ring focus:ring-blue-400 last:mb-0 dark:bg-gray-900 dark:border-gray-800 dark:hover:border-gray-600">
      <div className="book-image w-16 sm:w-24 flex-shrink-0 mr-4 lg:mr-6 border border-gray-200 rounded overflow-hidden dark:border-gray-800">
        <img src={cover} />
      </div>
      <div>
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-gray-500 font-semibold mb-2">{author}</p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          {description}
        </p>
      </div>
    </a>
  </Link>
);

export default Project;
