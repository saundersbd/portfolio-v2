import React from "react";
import Link from "next/link";

const Project = ({ slug, title, description }) => (
  <div className="mb-2 sm:mb-4">
    <Link href={`/projects/${slug.replace(/\.mdx?$/, "")}`} passHref>
      <a className="block rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 -m-2 p-2 sm:-m-4 sm:p-4 transition-all">
        <h3 className="text-sm font-bold underline mb-1">{title}</h3>

        <p className="text-sm text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </a>
    </Link>
  </div>
);

export default Project;
