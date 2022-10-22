import React from "react";
import Link from "next/link";

const Post = ({ slug, title, description }) => {
  return (
    <li className="mb-6">
      <Link href={`/posts/${slug.replace(/\.mdx?$/, "")}`} passHref>
        <a className="flex mb-1 sm:w-max text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded -mx-1 -my-0.5 px-1 py-0.5 underline underline-offset-2 focus:outline-none focus:ring focus:ring-mint-400 focus:bg-mint-50 dark:focus:bg-gray-900">
          <h3 className="text-sm font-semibold tracking-wide sm:text-base font-display">
            {title}
          </h3>
        </a>
      </Link>

      {description ? (
        <p className="text-sm leading-relaxed text-gray-700 sm:leading-relaxed dark:text-gray-300">
          {description}
        </p>
      ) : null}
    </li>
  );
};

export default Post;
