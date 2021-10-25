import React from "react";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Head from "next/head";
import Layout from "../../components/Layout";
import Section from "../../components/Section";
import ContainerNarrow from "../../components/ContainerNarrow";
import Grid from "../../components/Grid";
import DirectionLink from "../../components/DirectionLink";
import Post from "../../components/Post";

import { postFilePaths, POSTS_PATH } from "../../lib/mdx";

const Posts = ({ posts }) => {
  const filteredPosts = posts.sort((a, b) => {
    if (a.data.published < b.data.published) {
      return 1;
    }
    if (a.data.published > b.data.published) {
      return -1;
    }
    return 0;
  });

  return (
    <Layout className="py-12 pt-0">
      <Head>
        <title>Brian Saunders | My Bookshelf</title>
      </Head>
      <Section className="py-16 bg-navy dark:bg-black dark:text-gray-100 dark:border-gray-800">
        <ContainerNarrow>
          <Grid className="grid-cols-6">
            <div className="col-span-full lg:col-start-2 lg:col-end-6">
              <h1 className="mb-8 font-sans text-4xl font-bold leading-normal text-center text-white sm:text-5xl">
                Writing
              </h1>
              <p className="text-lg leading-loose text-center text-white">
                A growing collection of thoughts meeting at the intersection of
                my life and career.
              </p>
            </div>
          </Grid>
        </ContainerNarrow>
      </Section>
      <Section className="py-16 bg-white">
        <ContainerNarrow>
          <Grid className="grid-cols-6">
            <div className="col-span-full lg:col-start-2 lg:col-end-6">
              <DirectionLink href="/" icon="back" className="mb-12">
                Back to Home
              </DirectionLink>
              <h2 className="pb-2 mb-8 text-xl font-bold border-b-2 border-gray-300 dark:border-gray-600 xs:text-2xl">
                2021
              </h2>
              <ul className="mb-16">
                {filteredPosts.map((post) => (
                  <Post
                    key={post.data.title}
                    slug={post.filePath}
                    {...post.data}
                  ></Post>
                ))}
              </ul>
              <DirectionLink href="#top" icon="top">
                Back to top
              </DirectionLink>
            </div>
          </Grid>
        </ContainerNarrow>
      </Section>
    </Layout>
  );
};

export default Posts;

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}
