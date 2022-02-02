import React from "react";
import Link from "next/link";
import formatDate from "../lib/formatDate";

const Post = ({ slug, title, description, published }) => {
  const publishedDate = published;
  const formattedPublishedDate = formatDate(publishedDate || "");

  return (
    <li className="mb-6 sm:mb-8">
      <div className="flex flex-col justify-between sm:items-center sm:flex-row">
        <Link href={`/posts/${slug.replace(/\.mdx?$/, "")}`} passHref>
          <a className="flex mb-1 sm:w-max text-stone-800 dark:text-white font-semibold hover:bg-orange-lightest dark:hover:bg-gray-800 rounded -mx-1 -my-0.5 px-1 py-0.5 underline hover:no-underline focus:outline-none focus:ring focus:ring-orange">
            <h3 className="text-lg font-semibold tracking-wide">{title}</h3>
          </a>
        </Link>
        <p>{formattedPublishedDate}</p>
      </div>
      {description ? (
        <p className="mt-1 leading-relaxed text-stone-500 sm:leading-loose dark:text-navy-lighter">
          {description}
        </p>
      ) : null}
    </li>
  );
};

export default Post;
