import React from "react";
import Layout from "../components/Layout";
import DirectionLink from "../components/DirectionLink";

const PostLayout = ({ children }: { children: React.ReactNode }) => (
  <Layout>
    <div className="py-8 sm:py-16">
      <DirectionLink href="/bookshelf" className="mb-12" direction="left">
        Back to bookshelf
      </DirectionLink>
      <article className="article">{children}</article>
      <DirectionLink href="#top" className="mt-12" direction="top">
        Back to top
      </DirectionLink>
    </div>
  </Layout>
);

export default PostLayout;
