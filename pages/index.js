import React from "react";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Head from "next/head";
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
      <Section className="bg-blue-100 py-16 border-b border-blue-100 dark:bg-black dark:text-gray-100 dark:border-gray-800">
        <ContainerFull>
          <Grid className="grid-cols-6 md:gap-x-16 gap-y-8">
            <div className="md:col-span-4 col-span-full">
              <h1 className="sm:text-5xl text-4xl sm:leading-tight leading-normal font-sans font-bold sm:mb-8 mb-6 dark:text-gray-200">
                Hi, I'm Brian Saunders
              </h1>
              <p className="text-xl font-normal sm:mb-8 mb-6 leading-loose dark:text-gray-400">
                I'm a great product designer, pretty good ukulele player, and
                sub-par ceramicist who lives and works in Chicago. I love
                designing software and have worked on all kinds of things, from
                design systems to smaller apps to enterprise software used by
                millions of people.
              </p>
              <p className="text-xl font-normal sm:mb-12 mb-6 leading-loose dark:text-gray-400">
                Right now I'm a Senior Product Designer at Paylocity, where I
                design software that helps employees collaborate and stay
                connected at work.
              </p>
              <div className="flex flex-col xs:flex-row">
                <Button
                  href="/about"
                  className="xs:w-max w-full mb-4 xs:mb-0 mr-0 xs:mr-4"
                >
                  <Icon icon="about" className="w-5 mr-2" />
                  More about me
                </Button>
                <Button
                  href="mailto:saundersbd@gmail.com"
                  className="xs:w-max w-full"
                >
                  <Icon icon="mail" className="w-5 mr-2" />
                  Email
                </Button>
              </div>
            </div>

            <div className="md:col-span-2 col-span-full">
              <figure className="w-32 md:w-full">
                <Image
                  className="md:mb-2 rounded-full md:rounded"
                  height={682}
                  width={682}
                  alt="A picture of Brian"
                  src="/images/portrait-blue.png"
                />
              </figure>
              <figcaption className="hidden md:block text-sm font-normal text-gray-600 leading-loose dark:text-gray-400">
                I have been featured in no publications and have failed to
                appear in Forbes' <span className="italic">30 Under 30</span>{" "}
                list thirty separate times.
              </figcaption>
            </div>
          </Grid>
        </ContainerFull>
      </Section>

      <Section className="bg-white sm:py-24 py-16 dark:bg-black">
        <ContainerFull>
          <Grid className="grid-cols-6 lg:gap-x-16 gap-y-4">
            <div className="lg:col-span-4 col-span-full">
              <h2 className="text-4xl font-sans font-bold mb-12">Projects</h2>
              <Grid className="grid-cols-2 gap-5 lg:gap-6 mb-12">
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
              <h2 className="text-4xl font-sans font-bold mb-12">Writing</h2>
              <ul>
                {filteredPosts.map((post) => (
                  <Post
                    key={post.data.title}
                    slug={post.filePath}
                    {...post.data}
                  />
                ))}
              </ul>
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
