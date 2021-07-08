import React from "react";
import Link from "next/link";

const Post = ({ slug, title, description }) => (
  <li>
    <Link
      as={`/posts/${slug.replace(/\.mdx?$/, "")}`}
      href={`/posts/${slug}`}
      passHref
    >
      <a className="flex w-max text-gray-700 dark:text-white font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 rounded -mx-1 -my-0.5 px-1 py-0.5 mb-2 hover:no-underline focus:outline-none focus:ring focus:ring-blue-400">
        <h3 className="text-lg font-bold">{title}</h3>
      </a>
    </Link>
    <p className="text-lg text-gray-600 mb-4 dark:text-gray-300">
      {description}
    </p>
  </li>
);

export default Post;
