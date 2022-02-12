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
import HrSection from "../components/HrSection";

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
      <Section className="py-12 border-b sm:py-16 bg-stone-100 dark:bg-gray-900 dark:text-gray-100 border-orange-light dark:border-orange-lighter">
        <ContainerFull>
          <Grid className="grid-cols-6 md:gap-x-16 gap-y-8">
            <div className="md:col-span-4 col-span-full">
              <h1 className="mt-0 sm:-mt-2 mb-6 font-sans text-4xl font-bold leading-normal sm:text-5xl sm:leading-tight sm:mb-8 dark:text-gray-200">
                Hi, I'm Brian Saunders
              </h1>
              <p className="mb-6 text-lg font-normal leading-loose sm:leading-extra-loose sm:text-xl dark:text-white">
                I'm a great product designer, pretty good ukulele player, and
                sub-par ceramicist who lives and works in Chicago. I love
                creating software with other people and have contributed to all
                kinds of projects, from design systems to startups to enterprise
                software used by millions of people.
              </p>
              <p className="mb-6 text-lg font-normal leading-loose sm:leading-extra-loose sm:text-xl sm:mb-8 dark:text-white">
                Right now I'm a Senior Product Designer at Paylocity, where I
                create software that helps employees collaborate and stay
                connected at work.
              </p>
              <div className="flex flex-col xs:flex-row">
                <Button
                  href="/about"
                  className="w-full mb-4 mr-0 xs:w-max xs:mb-0 xs:mr-4 bg-stone-200 border-stone-300 hover:bg-stone-300"
                  primary
                >
                  <Icon icon="about" className="w-5 mr-2" />
                  More about me
                </Button>
                <Button
                  href="mailto:saundersbd@gmail.com"
                  className="w-full xs:w-max bg-stone-200 border-stone-300 hover:bg-stone-300"
                  primary
                >
                  <Icon icon="mail" className="w-5 mr-2" />
                  Send a message
                </Button>
              </div>
            </div>

            <div className="md:col-span-2 col-span-full">
              <figure className="w-32 md:mb-1 md:w-full">
                <Image
                  className="rounded-full md:rounded dark:opacity-75 transition"
                  height={800}
                  width={800}
                  alt="A picture of Brian"
                  src="/images/portrait-square-blue.jpg"
                />
              </figure>
              <figcaption className="hidden text-sm font-normal leading-relaxed text-stone-600 md:block dark:text-gray-300">
                My work has been featured in the family Christmas card.
              </figcaption>
            </div>
          </Grid>
        </ContainerFull>
      </Section>

      <Section className="pt-12 bg-white sm:pt-16 dark:bg-gray-900">
        <ContainerFull>
          <h2 className="mb-6 font-sans text-4xl font-bold tracking-wide">
            Writing
          </h2>
          <div className="hidden sm:block w-10 h-1 mb-8 bg-orange dark:bg-orange-lighter"></div>
          <Grid className="grid-cols-5 gap-y-12 sm:gap-y-16 gap-x-16">
            <div className="col-span-full lg:col-span-2">
              <p className="mb-4 text-lg leading-loose">
                I like to write about the personal and developmental aspects of
                being a designer.
              </p>
              <Link href="/posts" passHref>
                <a className="block-link">
                  View all writing
                  <Icon icon="arrow-right" className="w-4 ml-1" />
                </a>
              </Link>
            </div>
            <div className="col-span-full lg:col-span-3">
              {filteredPosts.slice(0, 5).map((post) => (
                <Post
                  key={post.data.title}
                  slug={post.filePath}
                  {...post.data}
                />
              ))}
            </div>
          </Grid>
        </ContainerFull>
      </Section>

      <HrSection className="text-xl" />

      <Section className="pb-12 bg-white sm:pb-16 dark:bg-gray-900">
        <ContainerFull>
          <h2 className="mb-6 font-sans text-4xl font-bold tracking-wide">
            Projects
          </h2>
          <div className="hidden sm:block w-10 h-1 mb-8 bg-orange dark:bg-orange-lighter"></div>
          <Grid className="grid-cols-5 gap-y-12 sm:gap-y-16 gap-x-16">
            <div className="col-span-full lg:col-span-2">
              <p className="mb-4 text-lg leading-loose">
                <Link href="mailto:saundersbd@gmail.com" passHref>
                  <a className="text-blue-600 underline rounded hover:bg-orange-lightest transition hover:text-stone-800 -mx-1 -my-0.5 px-1 py-0.5 hover:no-underline focus:outline-none focus:ring focus:ring-orange dark:hover:bg-gray-800 dark:hover:text-blue-300">
                    Send me a message
                  </a>
                </Link>{" "}
                to request more recent and detailed case studies.
              </p>
            </div>
            <div className="col-span-full lg:col-span-3">
              <Grid className="grid-cols-2 gap-4">
                {filteredProjects.slice(0, 5).map((post) => (
                  <Project
                    key={post.data.title}
                    slug={post.filePath}
                    {...post.data}
                  />
                ))}
              </Grid>
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
