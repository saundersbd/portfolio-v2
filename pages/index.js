import React from "react";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Head from "next/head";
import Image from "next/future/image";
import Layout from "../components/Layout";
import Project from "../components/Project";
import Post from "../components/Post";
import DirectionLink from "../components/DirectionLink";

import {
  postFilePaths,
  POSTS_PATH,
  projectFilePaths,
  PROJECTS_PATH,
} from "../lib/mdx";

function HomePage({ posts, projects }) {
  const filteredProjects = projects.sort((a, b) => a.data.order - b.data.order);
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
        <title>Brian Saunders | Home</title>
        <meta
          name="description"
          content="The personal website of Brian Saunders, a product designer from Chicago"
        />
      </Head>

      <section className="px-4 my-8 sm:my-16 sm:px-8">
        <Image
          className="w-16 mb-4 rounded-full sm:w-20 dark:opacity-75"
          height={800}
          width={800}
          alt="A picture of Brian"
          src="/images/portrait-square.jpg"
        />
        <h1 className="mb-1 text-2xl font-bold font-display sm:text-4xl">
          Brian Saunders
        </h1>
        <p className="mb-4 text-base text-gray-500 sm:mb-8 sm:text-lg dark:text-gray-400">
          Product design leader with front-end expertise
        </p>
        <p className="mb-4 text-sm sm:leading-relaxed sm:text-lg">
          I&rsquo;m a great product design leader, pretty good ukulele strummer,
          and sub-par ceramicist who lives and works in Chicago.
        </p>
        <p className="text-sm sm:leading-relaxed sm:text-lg">
          Right now I&rsquo;m a Principal Designer at Paylocity, where I&rsquo;m
          leading the design for our next generation of mobile apps.
        </p>
      </section>

      <section className="pb-8">
        <div className="flex flex-col overflow-hidden border border-gray-300 rounded-lg shadow-sm dark:border-gray-700">
          <div className="px-4 py-2 bg-gray-100 dark:bg-gray-700">
            <h2 className="text-sm font-bold leading-6 font-display">
              Writing
            </h2>
          </div>
          <div className="p-4 bg-white sm:p-8 dark:bg-gray-900">
            {filteredPosts.slice(0, 5).map((post) => (
              <Post key={post.data.title} slug={post.filePath} {...post.data} />
            ))}
            <DirectionLink href="/posts" className="mt-6" direction="right">
              View all posts
            </DirectionLink>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="flex flex-col overflow-hidden border border-gray-300 rounded-lg shadow-sm dark:border-gray-700">
          <div className="px-4 py-2 bg-gray-100 dark:bg-gray-700">
            <h2 className="text-sm font-bold leading-6 font-display">
              Projects
            </h2>
          </div>
          <div className="p-4 bg-white sm:p-8 dark:bg-gray-900">
            {filteredProjects.slice(0, 5).map((post) => (
              <Project
                key={post.data.title}
                slug={post.filePath}
                {...post.data}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default HomePage;

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

  const projects = projectFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(PROJECTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts, projects } };
}
