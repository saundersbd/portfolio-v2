import React from "react";
import Layout from "../components/Layout";
import DirectionLink from "../components/DirectionLink";

const PostLayout = ({ children }: { children: React.ReactNode }) => (
  <Layout>
    <div className="py-8 sm:py-16">
      <DirectionLink href="/" className="mb-12" direction="left">
        Back to home
      </DirectionLink>
      <article className="prose dark:prose-invert prose-blockquote:font-normal prose-h1:font-semibold prose-h2:font-semibold">
        {children}
      </article>
      <DirectionLink href="#top" className="mt-12" direction="top">
        Back to top
      </DirectionLink>
    </div>
  </Layout>
);

export default PostLayout;
