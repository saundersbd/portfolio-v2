import React from "react";
import Grid from "../components/Grid";
import Icon from "../components/Icon";

import Link from "next/link";

const PostAlt = ({ slug, title, description }) => (
  <Grid className="grid-cols-3 mb-8 gap-x-8">
    <div className="col-span-full sm:col-span-1">
      <h3 className="pt-3 mb-4 text-xs font-bold leading-relaxed tracking-wider uppercase border-t border-gray-300 sm:mb-0">
        {title}
      </h3>
    </div>
    <div className="col-span-full sm:col-span-2">
      <p className="mb-3 text-lg">{description}</p>
      <p>
        <Link href={`/posts/${slug.replace(/\.mdx?$/, "")}`} passHref>
          <a className="flex w-max items-center text-gray-500 dark:text-white hover:bg-orange-lightest dark:hover:bg-navy-dark rounded -mx-1 -my-0.5 px-1 py-0.5 hover:no-underline focus:outline-none focus:ring focus:ring-orange">
            Read more
            <Icon icon="arrow-right" className="w-4 ml-1" />
          </a>
        </Link>
      </p>
    </div>
  </Grid>
);

export default PostAlt;
