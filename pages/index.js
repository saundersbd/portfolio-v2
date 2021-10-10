import React from "react";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import ContainerFull from "../components/ContainerFull";
import Section from "../components/Section";
import Grid from "../components/Grid";
import Button from "../components/Button";
import Project from "../components/Project";
import Post from "../components/Post";
import Icon from "../components/Icon";

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
    <Layout className="pt-24 sm:pt-20">
      <Head>
        <title>Brian Saunders | Home</title>
        <meta
          name="description"
          content="The personal website of Brian Saunders, a product designer from Chicago"
        />
      </Head>
      <Section className="py-16 bg-blue-100 border-b border-blue-100 dark:bg-black dark:text-gray-100 dark:border-gray-800">
        <ContainerFull>
          <Grid className="grid-cols-6 md:gap-x-16 gap-y-8">
            <div className="md:col-span-4 col-span-full">
              <h1 className="mb-6 font-sans text-4xl font-bold leading-normal sm:text-5xl sm:leading-tight sm:mb-8 dark:text-gray-200">
                Hi, I'm Brian Saunders
              </h1>
              <p className="mb-6 text-xl font-normal leading-loose sm:mb-8 dark:text-gray-400">
                I'm a great product designer, pretty good ukulele player, and
                sub-par ceramicist who lives and works in Chicago. I love
                designing software and have contributed to all kinds of things,
                from design systems to smaller apps to enterprise software used
                by millions of people.
              </p>
              <p className="mb-6 text-xl font-normal leading-loose sm:mb-12 dark:text-gray-400">
                Right now I'm a Senior Product Designer at Paylocity, where I'm
                designing software that helps employees collaborate and stay
                connected at work. I'm also leading a Figma transition!
              </p>
              <div className="flex flex-col xs:flex-row">
                <Button
                  href="/about"
                  className="w-full mb-4 mr-0 xs:w-max xs:mb-0 xs:mr-4"
                >
                  <Icon icon="about" className="w-5 mr-2" />
                  More about me
                </Button>
                <Button
                  href="mailto:saundersbd@gmail.com"
                  className="w-full xs:w-max"
                >
                  <Icon icon="mail" className="w-5 mr-2" />
                  Email
                </Button>
              </div>
            </div>

            <div className="md:col-span-2 col-span-full">
              <figure className="w-32 md:w-full">
                <Image
                  className="rounded-full md:mb-2 md:rounded"
                  height={682}
                  width={682}
                  alt="A picture of Brian"
                  src="/images/portrait-blue.png"
                />
              </figure>
              <figcaption className="hidden text-sm font-normal leading-loose text-gray-600 md:block dark:text-gray-400">
                I have been featured in no publications and have failed to
                appear in Forbes' <span className="italic">30 Under 30</span>{" "}
                list thirty separate times.
              </figcaption>
            </div>
          </Grid>
        </ContainerFull>
      </Section>

      <Section className="py-16 bg-white sm:py-24 dark:bg-black">
        <ContainerFull>
          <Grid className="grid-cols-6 lg:gap-x-16 gap-y-4">
            <div className="lg:col-span-4 col-span-full">
              <h2 className="mb-12 font-sans text-4xl font-bold">Projects</h2>
              <Grid className="grid-cols-2 gap-5 mb-12 lg:gap-6">
                {filteredProjects.map((project) => (
                  <Project
                    key={project.data.title}
                    slug={project.filePath}
                    {...project.data}
                  />
                ))}
              </Grid>
            </div>
            <div className="lg:col-span-2 col-span-full">
              <h2 className="mb-12 font-sans text-4xl font-bold">
                Recent Posts
              </h2>
              <ul>
                {filteredPosts.slice(0, 5).map((post) => (
                  <Post
                    key={post.data.title}
                    slug={post.filePath}
                    {...post.data}
                  />
                ))}
              </ul>
              <Link href="/posts" passHref>
                <a className="flex w-max items-center text-lg text-gray-700 dark:text-white font-semibold hover:bg-gray-200 dark:hover:bg-gray-800 rounded -mx-1 -my-0.5 px-1 py-0.5 hover:no-underline focus:outline-none focus:ring focus:ring-blue-400}">
                  More Posts
                  <Icon icon="arrow-right" className="w-4 ml-1" />
                </a>
              </Link>
            </div>
          </Grid>
        </ContainerFull>
      </Section>
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
