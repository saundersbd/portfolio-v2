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
        className="flex items-start p-2 -m-2 transition-all rounded-lg post-link hover:bg-slate-3 dark:hover:bg-slateDark-3 sm:-m-4 sm:p-4 focus:bg-slate-3 dark:focus:bg-slateDark-3 group"
        passHref
      >
        <div className="w-[54px] h-[54px] mr-4 sm:flex flex-col flex-shrink-0 items-center justify-center border border-slate-5 dark:border-slateDark-4 rounded-xl font-sans bg-slate-1 dark:bg-slateDark-1 transition-all">
          <div className="leading-snug text-slate-11 dark:text-slateDark-11 text-xxs">
            {formattedPublishedDate.slice(0, 3)}
          </div>
          <div className="font-medium dark:text-slateDark-12">
            {formattedPublishedDate.slice(3, 6)}
          </div>
        </div>
        <div className="flex-grow">
          <h3 className="mb-1 text-sm font-medium dark:text-slateDark-12 sm:text-base">
            {title}
          </h3>

          <p className="font-serif text-sm leading-relaxed text-slate-11 sm:text-base dark:text-slateDark-11">
            {description}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default PostAlt;
