import React from "react";

import Link from "next/link";

const PostAlt = ({ slug, title, description, published }) => (
  <div className="mb-2 sm:mb-4">
    <Link href={`/posts/${slug.replace(/\.mdx?$/, "")}`} passHref>
      <a className="block p-2 -m-2 transition-all rounded-lg post-link hover:bg-gray-100 dark:hover:bg-gray-800 sm:-m-4 sm:p-4 focus:bg-blue-50 dark:focus:bg-gray-800">
        <h3 className="mb-1 text-base font-semibold underline font-display">
          {title}
          <span className="year-pill inline-block align-top py-0 font-normal text-xxs text-gray-500 border border-gray-300 dark:border-[#69C99E] dark:text-gray-300 rounded-full ml-2 px-1.5">
            {published.slice(0, 4)}
          </span>
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </a>
    </Link>
  </div>
);

export default PostAlt;
