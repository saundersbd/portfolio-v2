import React from "react";
import Link from "next/link";

import Badge from "../components/Badge";

const Project = ({ slug, title, description, projectType }) => (
  <div className="mb-2 sm:mb-4">
    <Link href={`/projects/${slug.replace(/\.mdx?$/, "")}`} passHref>
      <a className="project-link flex items-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 -m-2 p-2 sm:-m-4 sm:p-4 focus:bg-gray-100 dark:focus:bg-gray-800 transition-all">
        <Badge
          icon={projectType}
          className="hidden sm:flex mr-4"
          strokeWidth="2"
          medium
        />
        <div className="flex-grow">
          <h3 className="text-sm font-bold underline mb-1">{title}</h3>

          <p className="text-sm text-gray-600 dark:text-gray-300">
            {description}
          </p>
        </div>
      </a>
    </Link>
  </div>
);

export default Project;
