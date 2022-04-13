import React from "react";
import Link from "next/link";

const ProjectTile = ({ slug, title, description }) => (
  <div className="col-span-full sm:col-span-1 flex flex-col p-6 bg-white border border-stone-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
    <h3 className="mb-2 text-lg font-semibold">{title}</h3>
    <p className="flex flex-grow mb-6 text-stone-600 dark:text-gray-300">
      {description}
    </p>
    <Link href={`/projects/${slug.replace(/\.mdx?$/, "")}`} passHref>
      <a className="flex justify-center items-center p-3 bg-pebble border border-stone-200 rounded-full font-semibold transition hover:bg-stone-200 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600 focus:outline-none focus:ring focus:ring-orange">
        Read more
      </a>
    </Link>
  </div>
);

export default ProjectTile;
