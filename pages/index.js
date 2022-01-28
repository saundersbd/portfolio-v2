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
    <Layout>
      <Head>
        <title>Brian Saunders | Home</title>
        <meta
          name="description"
          content="The personal website of Brian Saunders, a product designer from Chicago"
        />
      </Head>
      <Section className="py-12 border-b sm:py-16 bg-beige dark:bg-navy-darkest dark:text-gray-100 border-orange-light dark:border-orange-lighter">
        <ContainerFull>
          <Grid className="grid-cols-6 md:gap-x-16 gap-y-8">
            <div className="md:col-span-4 col-span-full">
              <h1 className="mb-6 font-sans text-4xl font-bold leading-normal tracking-wide sm:text-5xl sm:leading-tight sm:mb-8 dark:text-gray-200">
                Hi, I'm Brian Saunders
              </h1>
              <p className="mb-6 text-lg font-normal leading-loose sm:leading-extra-loose sm:text-xl sm:mb-8 dark:text-white">
                I'm a great product designer, pretty good ukulele player, and
                sub-par ceramicist who lives and works in Chicago. I love
                creating software with other people and have contributed to all
                kinds of projects, from design systems to startups to enterprise
                software used by millions of people.
              </p>
              <p className="mb-6 text-lg font-normal leading-loose sm:leading-extra-loose sm:text-xl sm:mb-12 dark:text-white">
                I'm a Senior Product Designer at Paylocity, where I design
                software that helps employees collaborate and stay connected at
                work. I'm also leading a Figma transition and beginning work
                managing, editing, and writing for the company UX blog on
                Medium.
              </p>
              <div className="flex flex-col xs:flex-row">
                <Button
                  href="/about"
                  className="w-full mb-4 mr-0 xs:w-max xs:mb-0 xs:mr-4"
                  primary
                >
                  <Icon icon="about" className="w-5 mr-2" />
                  More about me
                </Button>
                <Button
                  href="mailto:saundersbd@gmail.com"
                  className="w-full xs:w-max"
                  primary
                >
                  <Icon icon="mail" className="w-5 mr-2" />
                  Email
                </Button>
              </div>
            </div>

            <div className="md:col-span-2 col-span-full">
              <figure className="w-32 md:mb-1 md:w-full">
                <Image
                  className="rounded-full md:rounded"
                  height={682}
                  width={682}
                  alt="A picture of Brian"
                  src="/images/portrait-square-blue.jpg"
                />
              </figure>
              <figcaption className="hidden text-sm font-normal leading-loose text-gray-600 md:block dark:text-gray-300">
                My work has been featured in my Mom's yearly Christmas card.
              </figcaption>
            </div>
          </Grid>
        </ContainerFull>
      </Section>

      <Section className="py-12 bg-white sm:py-16 dark:bg-navy-darkest">
        <ContainerFull>
          <h2 className="mb-12 font-sans text-4xl font-bold tracking-wide">
            Writing
          </h2>
          <Grid className="grid-cols-3 gap-y-12 sm:gap-y-16 gap-x-16">
            <div className="col-span-full lg:col-span-1">
              <p className="mb-4 text-lg font-semibold">
                I like to write about the personal and developmental aspects of
                being a designer.
              </p>
              <Link href="/posts" passHref>
                <a className="flex w-max items-center text-gray-500 dark:text-white hover:bg-orange-lightest dark:hover:bg-navy-dark rounded -mx-1 -my-0.5 px-1 py-0.5 hover:no-underline focus:outline-none focus:ring focus:ring-orange">
                  View all writing
                  <Icon icon="arrow-right" className="w-4 ml-1" />
                </a>
              </Link>
            </div>
            <div className="col-span-full lg:col-span-2">
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

      <Section className="pb-12 bg-white sm:pb-16 dark:bg-navy-darkest">
        <ContainerFull>
          <h2 className="mb-12 font-sans text-4xl font-bold tracking-wide">
            Projects
          </h2>
          <Grid className="grid-cols-3 gap-y-12 sm:gap-y-16 gap-x-16">
            <div className="col-span-full lg:col-span-1">
              <p className="text-lg font-semibold">
                A sampling of some work that I've done over the years
              </p>
            </div>
            <div className="col-span-full lg:col-span-2">
              {filteredProjects.slice(0, 5).map((post) => (
                <Project
                  key={post.data.title}
                  slug={post.filePath}
                  {...post.data}
                />
              ))}
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
