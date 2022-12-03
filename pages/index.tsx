import React from "react";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import Project from "../components/Project";
import Post from "../components/Post";
import DirectionLink from "../components/DirectionLink";
import Icon from "../components/Icon";

import {
  postFilePaths,
  POSTS_PATH,
  projectFilePaths,
  PROJECTS_PATH,
} from "../lib/mdx";

interface HomeProps {
  posts: Array<PostContentProps>;
  projects: Array<ProjectContentProps>;
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

interface ProjectContentProps {
  data: ProjectProps;
  filePath: string;
}

interface ProjectProps {
  order: number;
  title: string;
  description: string;
  published: string;
  projectType: string;
}

function HomePage({ posts, projects }: HomeProps) {
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
        <h1 className="mb-1 text-3xl font-bold font-display sm:text-4xl">
          Brian Saunders
        </h1>
        <p className="mb-4 text-base text-gray-500 sm:mb-8 sm:text-lg dark:text-gray-400">
          Product design leader with front-end expertise
        </p>
        <p className="mb-4 text-sm sm:leading-relaxed sm:text-lg">
          I&rsquo;m a great product design leader, pretty good ukulele strummer,
          and sub-par ceramicist who lives and works in Chicago.
        </p>
        <p className="mb-4 text-sm sm:mb-8 sm:leading-relaxed sm:text-lg">
          Right now I&rsquo;m Principal Designer at Paylocity, where I&rsquo;m
          leading the design for its next generation of mobile apps.
        </p>

        <div className="flex flex-col text-sm sm:text-base sm:flex-row">
          <Link
            href="/about"
            className="flex items-center mb-1 mr-3 underline rounded sm:mb-0 underline-offset-2 hover:text-mint-400"
            passHref
          >
            <Icon icon="about" className="w-5 mr-1.5" />
            More about me
          </Link>
          <Link
            href="/about/resume"
            className="flex items-center mb-1 mr-3 underline rounded sm:mb-0 underline-offset-2 hover:text-mint-400"
            passHref
          >
            <Icon className="w-5 mr-1.5" />
            View my CV
          </Link>
          <a
            href="mailto:saundersbd@gmail.com"
            className="flex items-center underline rounded underline-offset-2 hover:text-mint-400"
          >
            <Icon icon="mailOutline" className="w-5 mr-1.5" />
            saundersbd@gmail.com
          </a>
        </div>
      </section>

      <section className="pb-6 sm:pb-8">
        <div className="flex flex-col overflow-hidden border border-gray-300 rounded-lg shadow-sm dark:border-gray-700">
          <div className="px-4 py-2 bg-gray-100 dark:bg-gray-700">
            <h2 className="text-sm font-bold leading-6 font-display">
              Writing
            </h2>
          </div>
          <div className="p-4 bg-white sm:p-8 dark:bg-gray-900">
            <h3 className="flex items-center px-4 mb-4 -mt-0 sm:mb-6 sm:-mt-2">
              <hr className="w-full h-px bg-gray-200 border-none dark:bg-gray-700" />
              <span className="px-2 pl-3 text-sm font-semibold text-center text-gray-500 dark:text-gray-400">
                2022
              </span>
              <hr className="w-full h-px bg-gray-200 border-none dark:bg-gray-700" />
            </h3>
            {filteredPosts.slice(0, 5).map((post) => (
              <Post key={post.data.title} slug={post.filePath} {...post.data} />
            ))}
            <DirectionLink href="/posts" className="mt-6" direction="right">
              View all posts
            </DirectionLink>
          </div>
        </div>
      </section>

      <section>
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
