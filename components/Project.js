import React from "react";
import Button from "../components/Button";

const Project = ({ slug, title, description }) => (
  <div className="p-6 transition border rounded-lg border-navy-lighter bg-navy-lightest col-span-full lg:col-span-1 dark:bg-navy-darkest dark:border dark:border-orange-lighter">
    <h3 className="mb-2 text-lg font-semibold tracking-wide">{title}</h3>
    <p className="mb-4 text-base text-gray-600 leading-extra-loose sm:leading-loose dark:text-navy-lightest">
      {description}
    </p>
    <Button
      className="w-max"
      href={`/projects/${slug.replace(/\.mdx?$/, "")}`}
      secondary
    >
      View Project
    </Button>
  </div>
);

export default Project;
