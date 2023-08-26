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
        className="flex mb-1 sm:w-max text-slate-12 dark:text-slateDark-12 hover:bg-slate-3 dark:hover:bg-slateDark-3 rounded -mx-1 -my-0.5 px-1 py-0.5 underline underline-offset-2 focus:outline-none focus:ring focus:ring-jade-9 dark:focus:ring-jadeDark-11"
        passHref
      >
        <h3 className="text-base font-semibold tracking-wide dark:text-slateDark-12 font-display">
          {title}
        </h3>
      </Link>

      {description ? (
        <p className="text-base leading-relaxed text-slate-11 dark:text-slateDark-11">
          {description}
        </p>
      ) : null}
    </li>
  );
};

export default Post;
