import React from "react";
import Link from "next/link";
import Icon from "../components/Icon";

const Project = ({ slug, title, description }) => (
  <Link href={`/projects/${slug}`} passHref>
    <a className="block col-span-full lg:col-span-1 p-6 bg-white rounded-md border border-gray-300 shadow hover:shadow-md transition focus:outline-none focus:ring focus:ring-blue-400 dark:bg-gray-900 dark:border-gray-800 dark:hover:border-gray-600">
      <h3 className="text-lg font-bold mb-1">{title}</h3>
      <p className="text-lg text-gray-600 mb-4 dark:text-gray-300">
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
