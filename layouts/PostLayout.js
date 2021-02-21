import React from "react";
import Layout from "../components/Layout";
import Container from "../components/Container";
import Grid from "../components/Grid";
import DirectionLink from "../components/DirectionLink";

const PostLayout = ({ children }) => (
  <Layout className="pt-40 pb-12">
    <Container size="narrow">
      <article>
        <Grid cols="6" className="gap-y-12">
          <div className="col-span-full lg:col-start-2 lg:col-end-6">
            <DirectionLink href="/" icon="back">
              Back to Home
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
    </Container>
  </Layout>
);

export default PostLayout;
