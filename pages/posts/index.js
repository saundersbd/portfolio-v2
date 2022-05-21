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
import PostListItem from "../../components/PostListItem";

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
        <title>Brian Saunders | Writing</title>
      </Head>
      <Section className="py-8 bg-white sm:py-16 dark:bg-gray-900">
        <ContainerNarrow>
          <Grid className="grid-cols-6">
            <div className="col-span-full lg:col-start-2 lg:col-end-6">
              <DirectionLink href="/" icon="back" className="mb-12">
                Back to Home
              </DirectionLink>
              <div className="mb-6 sm:mb-12 border-b border-stone-300 dark:border-gray-600 pb-6 sm:pb-12">
                <h1 className="text-3xl sm:text-5xl font-bold mb-2 sm:mb-6">
                  Writing
                </h1>
                <p className="leading-relaxed">
                  This is a collection of thoughts from the intersection of my
                  life and career. These posts are works-in-progress. The goal
                  this year is to publish more, even if it's not perfect, so
                  I'll try to get first drafts out and then improve them over
                  time.
                </p>
              </div>
              <ul className="mb-16">
                {filteredPosts.map((post) => (
                  <PostListItem
                    key={post.data.title}
                    slug={post.filePath}
                    {...post.data}
                  ></PostListItem>
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
