import React from "react";
import formatDate from "../utils/formatDate";

import Link from "next/link";

interface Post {
  slug?: string;
  title?: string;
  description?: string;
  published?: string;
}

const PostAlt = ({ slug, title, description, published }: Post) => {
  const formattedPublishedDate = formatDate(published || "");

  return (
    <div className="mb-2 sm:mb-4">
      <Link
        href={`/blog/${slug}`}
        className="flex items-start p-2 -m-2 transition-all rounded-lg post-link hover:bg-gray-50 dark:hover:bg-gray-800 sm:-m-4 sm:p-4 focus:bg-gray-50 dark:focus:bg-gray-800"
        passHref
      >
        <div className="badge hidden w-[54px] h-[54px] mr-4 sm:flex flex-col flex-shrink-0 items-center justify-center bg-transparent border border-gray-200 dark:border-gray-700 rounded-xl font-sans">
          <div className="leading-snug text-gray-700 dark:text-gray-400 text-xxs">
            {formattedPublishedDate.slice(0, 3)}
          </div>
          <div className="font-medium dark:text-gray-100">
            {formattedPublishedDate.slice(3, 6)}
          </div>
        </div>
        <div className="flex-grow">
          <h3 className="mb-1 text-sm font-medium dark:text-gray-100 sm:text-base">
            {title}
          </h3>

          <p className="font-serif text-sm leading-relaxed text-gray-700 sm:text-base dark:text-gray-300">
            {description}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default PostAlt;
