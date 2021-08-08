import React from "react";
import Layout from "../components/Layout";
import ContainerNarrow from "../components/ContainerNarrow";
import Grid from "../components/Grid";
import DirectionLink from "../components/DirectionLink";

const PostLayout = ({ children }) => (
  <Layout className="pt-40 pb-12">
    <ContainerNarrow>
      <article>
        <Grid className="grid-cols-6 gap-y-12">
          <div className="col-span-full lg:col-start-2 lg:col-end-6">
            <DirectionLink href="/" icon="back">
              Back to Home
            </DirectionLink>
          </div>
          <div className="prose prose-lg col-span-full lg:col-start-2 lg:col-end-6 md:prose-xl dark:prose-dark max-w-none">
            {children}
          </div>
          <div className="col-span-full lg:col-start-2 lg:col-end-6">
            <DirectionLink href="#top" icon="top">
              Back to top
            </DirectionLink>
          </div>
        </Grid>
      </article>
    </ContainerNarrow>
  </Layout>
);

export default PostLayout;
