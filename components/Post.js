import React from "react";
import Link from "next/link";
import formatDate from "../lib/formatDate";

const Post = ({ slug, title, description, published }) => {
  const publishedDate = published;
  const formattedPublishedDate = formatDate(publishedDate || "");

  return (
    <li className="mb-6">
      <Link href={`/posts/${slug.replace(/\.mdx?$/, "")}`} passHref>
        <a className="flex sm:w-max text-gray-700 dark:text-white font-semibold hover:bg-orange-lightest dark:hover:bg-gray-800 rounded -mx-1 -my-0.5 px-1 py-0.5 mb-0 hover:no-underline focus:outline-none focus:ring focus:ring-blue-400">
          <h3 className="font-bold">{title}</h3>
        </a>
      </Link>
      <p className="mb-2 text-gray-500">{formattedPublishedDate}</p>
    </li>
  );
};

export default Post;
