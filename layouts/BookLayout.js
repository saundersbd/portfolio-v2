import React from "react";
import Layout from "../components/Layout";
import DirectionLink from "../components/DirectionLink";

const PostLayout = ({ children }) => (
  <Layout>
    <div className="py-8 sm:py-16">
      <DirectionLink href="/bookshelf" icon="arrow-left" className="mb-12">
        Back to bookshelf
      </DirectionLink>
      <article className="prose prose-lg">{children}</article>
      <DirectionLink href="#top" icon="arrow-up" className="mt-12">
        Back to top
      </DirectionLink>
    </div>
  </Layout>
);

export default PostLayout;
