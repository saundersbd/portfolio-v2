import React from "react";
import ButtonSecondary from "../components/ButtonSecondary";

const Project = ({ slug, title, description }) => (
  <div className="p-6 transition border border-gray-300 rounded-md bg-navy-lightest col-span-full lg:col-span-1 focus:outline-none focus:ring focus:ring-blue-400 dark:bg-gray-900 dark:border-gray-700">
    <h3 className="mb-2 text-lg font-bold">{title}</h3>
    <p className="mb-4 text-base leading-loose text-gray-600 sm:leading-loose dark:text-gray-300">
      {description}
    </p>
    <ButtonSecondary
      className="w-max"
      href={`/projects/${slug.replace(/\.mdx?$/, "")}`}
    >
      View Project
    </ButtonSecondary>
  </div>
);

export default Project;
