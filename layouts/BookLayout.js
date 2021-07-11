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
            <DirectionLink href="/bookshelf" icon="back">
              Back to Bookshelf
            </DirectionLink>
          </div>
          <div className="col-span-full lg:col-start-2 lg:col-end-6 prose prose-lg md:prose-xl dark:prose-dark">
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
