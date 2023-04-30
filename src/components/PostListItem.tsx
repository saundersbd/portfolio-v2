import React from "react";
import Link from "next/link";

interface PostProps {
  slug?: string;
  title?: string;
  description?: string;
}

const Post = ({ slug, title, description }: PostProps) => {
  return (
    <li className="mb-6">
      <Link
        href={`/blog/${slug}`}
        className="flex mb-1 sm:w-max text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded -mx-1 -my-0.5 px-1 py-0.5 underline underline-offset-2 focus:outline-none focus:ring focus:ring-mint-400 focus:bg-mint-50 dark:focus:bg-gray-900"
        passHref
      >
        <h3 className="text-base font-semibold tracking-wide dark:text-gray-100 font-display">
          {title}
        </h3>
      </Link>

      {description ? (
        <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-400">
          {description}
        </p>
      ) : null}
    </li>
  );
};

export default Post;
