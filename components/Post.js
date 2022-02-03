import React from "react";
import Grid from "../components/Grid";
import Icon from "../components/Icon";

import Link from "next/link";

const PostAlt = ({ slug, title, description }) => (
  <Grid className="grid-cols-5 mb-8 gap-x-8">
    <div className="col-span-full sm:col-span-2">
      <h3 className="pt-8 sm:pt-3 mt-2 mb-4 text-xs font-bold leading-relaxed tracking-wider uppercase border-t border-stone-200 dark:border-orange-light sm:mb-0">
        {title}
      </h3>
    </div>
    <div className="col-span-full sm:col-span-3">
      <p className="mb-3 text-base leading-relaxed">{description}</p>
      <p>
        <Link href={`/posts/${slug.replace(/\.mdx?$/, "")}`} passHref>
          <a className="block-link">
            Read more
            <Icon icon="arrow-right" className="w-4 ml-1" />
          </a>
        </Link>
      </p>
    </div>
  </Grid>
);

export default PostAlt;
