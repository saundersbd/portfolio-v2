import React from "react";
import Link from "next/link";

import Badge from "../components/Badge";

const Project = ({ slug, title, description, projectType }) => (
  <div className="mb-2 sm:mb-4">
    <Link href={`/projects/${slug.replace(/\.mdx?$/, "")}`} passHref>
      <a className="flex items-center p-2 -m-2 transition-all rounded-lg project-link hover:bg-gray-100 dark:hover:bg-gray-800 sm:-m-4 sm:p-4 focus:bg-mint-50 dark:focus:bg-gray-800">
        <Badge
          icon={projectType}
          className="hidden mr-4 sm:flex"
          strokeWidth="2"
          medium
        />
        <div className="flex-grow">
          <h3 className="mb-1 text-base font-semibold underline font-display">
            {title}
          </h3>

          <p className="text-sm text-gray-600 dark:text-gray-300">
            {description}
          </p>
        </div>
      </a>
    </Link>
  </div>
);

export default Project;
