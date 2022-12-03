import React from "react";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Head from "next/head";
import Layout from "../../components/Layout";
import DirectionLink from "../../components/DirectionLink";
import PostListItem from "../../components/PostListItem";

import { postFilePaths, POSTS_PATH } from "../../lib/mdx";

interface PostsPageProps {
  posts: Array<PostContentProps>;
}

interface PostContentProps {
  content: object;
  data: PostProps;
  filePath: string;
}

interface PostProps {
  published: string;
  title: string;
  description: string;
  filePath: string;
}

const Posts = ({ posts }: PostsPageProps) => {
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
    <Layout>
      <Head>
        <title>Brian Saunders | Writing</title>
      </Head>
      <div className="py-8 sm:py-16">
        <DirectionLink href="/" className="mb-12" direction="left">
          Back to Home
        </DirectionLink>
        <div>
          <div className="mb-8 sm:mb-12">
            <h1 className="mb-4 text-2xl font-bold sm:text-4xl sm:mb-6">
              Writing
            </h1>
            <p className="text-sm sm:text-base sm:leading-relaxed">
              The goal this year is to publish more, even if it's not perfect.
            </p>
          </div>

          <h2 className="pb-1 mb-8 text-xl font-bold border-b border-gray-200">
            2022
          </h2>
          <ul className="mb-16">
            {filteredPosts
              .filter((post) => post.data.published.slice(0, 4) === "2022")
              .map((post) => (
                <PostListItem
                  key={post.data.title}
                  slug={post.filePath}
                  {...post.data}
                ></PostListItem>
              ))}
          </ul>

          <h2 className="pb-1 mb-8 text-xl font-bold border-b border-gray-200">
            2021
          </h2>
          <ul className="mb-16">
            {filteredPosts
              .filter((post) => post.data.published.slice(0, 4) === "2021")
              .map((post) => (
                <PostListItem
                  key={post.data.title}
                  slug={post.filePath}
                  {...post.data}
                ></PostListItem>
              ))}
          </ul>
        </div>
        <DirectionLink href="#top" direction="top">
          Back to top
        </DirectionLink>
      </div>
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