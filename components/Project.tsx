import React from "react";
import Link from "next/link";
import formatDate from "../lib/formatDate";

import Badge from "../components/Badge";

interface Project {
  slug: string;
  title: string;
  description: string;
  published: string;
  projectType: string;
}

const Project = ({
  slug,
  title,
  description,
  published,
  projectType,
}: Project) => {
  const formattedPublishedDate = formatDate(published || "");
  return (
    <div className="mb-2 sm:mb-4 last-of-type:mb-0">
      <Link
        href={`/projects/${slug.replace(/\.mdx?$/, "")}`}
        className="flex items-start p-2 -m-2 transition-all rounded-lg project-link hover:bg-gray-100 dark:hover:bg-gray-800 sm:-m-4 sm:p-4 focus:bg-gray-50 dark:focus:bg-gray-800"
        passHref
      >
        <Badge icon={projectType} className="hidden mr-4 sm:flex" medium />
        <div className="flex-grow">
          <h3 className="mb-1 text-sm font-semibold underline sm:text-base font-display">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {description}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Project;
