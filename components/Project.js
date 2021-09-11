import React from "react";
import Link from "next/link";
import Icon from "../components/Icon";

const Project = ({ slug, title, description }) => (
  <Link href={`/projects/${slug.replace(/\.mdx?$/, "")}`} passHref>
    <a className="block p-6 transition bg-white border border-gray-300 rounded-md shadow col-span-full lg:col-span-1 hover:shadow-lg hover:bg-gray-100 focus:outline-none focus:ring focus:ring-blue-400 dark:bg-gray-900 dark:hover:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600">
      <h3 className="mb-2 text-lg font-bold">{title}</h3>
      <p className="mb-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
        {description}
      </p>
      <Icon
        icon="arrow-right"
        className="w-6 text-gray-500 dark:text-gray-500"
      />
    </a>
  </Link>
);

export default Project;
