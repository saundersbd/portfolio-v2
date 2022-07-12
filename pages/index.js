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

      <section className="my-8 sm:my-16 px-4 sm:px-8">
        <Image
          className="w-16 sm:w-20 mb-4 rounded-full dark:opacity-75"
          height={800}
          width={800}
          alt="A picture of Brian"
          src="/images/portrait-square.jpg"
        />
        <h1 className="mb-1 text-2xl sm:text-3xl font-bold">Brian Saunders</h1>
        <p className="mb-4 sm:mb-8 text-base sm:text-lg text-gray-500 dark:text-gray-400">
          Product designer with front-end expertise
        </p>
        <p className="mb-4 sm:leading-relaxed text-sm sm:text-base">
          I'm a great product design leader, pretty good ukulele player, and
          sub-par ceramicist who lives and works in Chicago.
        </p>
        <p className="sm:leading-relaxed text-sm sm:text-base">
          Right now I’m a Product Design Lead at Paylocity, where I am leading
          the design for the company’s next generation mobile apps.
        </p>
      </section>

      <section className="pb-8">
        <div className="flex flex-col border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
          <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2">
            <h2 className="text-sm font-bold leading-6">Writing</h2>
          </div>
          <div className="p-4 sm:p-8 bg-white dark:bg-gray-900">
            {filteredPosts.slice(0, 5).map((post) => (
              <Post key={post.data.title} slug={post.filePath} {...post.data} />
            ))}
            <DirectionLink
              href="/posts"
              icon="right"
              iconRight
              className="mt-6"
            >
              View all posts
            </DirectionLink>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="flex flex-col border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
          <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2">
            <h2 className="text-sm font-bold leading-6">Projects</h2>
          </div>
          <div className="p-4 sm:p-8 bg-white dark:bg-gray-900">
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
