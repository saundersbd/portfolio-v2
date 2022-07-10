import React from "react";

import Link from "next/link";

const PostAlt = ({ slug, title, description, published }) => (
  <div className="mb-2 sm:mb-4">
    <Link href={`/posts/${slug.replace(/\.mdx?$/, "")}`} passHref>
      <a className="block rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 -m-2 p-2 sm:-m-4 sm:p-4 transition-all">
        <h3 className="text-sm font-bold underline mb-1">
          {title}
          <span className="inline-block text-xs border border-gray-300 dark:border-purple-700 dark:text-gray-100 rounded-full ml-2 px-2 py-1">
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
