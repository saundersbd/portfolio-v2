import React from "react";
import Layout from "../components/Layout";
import DirectionLink from "../components/DirectionLink";

const PostLayout = ({ children }) => (
  <Layout>
    <div className="py-8 sm:py-16">
      <DirectionLink href="/" className="mb-12" direction="left">
        Back to home
      </DirectionLink>
      <article className="article">{children}</article>
      <DirectionLink href="#top" className="mt-12" direction="top">
        Back to top
      </DirectionLink>
    </div>
  </Layout>
);

export default PostLayout;
