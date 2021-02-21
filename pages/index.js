import React from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Container from "../components/Container";
import Section from "../components/Section";
import Grid from "../components/Grid";
import Button from "../components/Button";
import Project from "../components/Project";
import Post from "../components/Post";
import Icon from "../components/Icon";

import { getAllFilesFrontMatter } from "../lib/mdx";

function HomePage({ projects, posts }) {
  const filteredProjects = projects.sort((a, b) => a.order - b.order);
  const filteredPosts = posts.sort((a, b) => {
    if (a.published < b.published) {
      return 1;
    }
    if (a.published > b.published) {
      return -1;
    }
    return 0;
  });

  return (
    <Layout className="pt-24 sm:pt-20">
      <Head>
        <title>Brian Saunders | Home</title>
      </Head>
      <Section className="bg-blue-100 sm:py-24 py-16 border-b border-blue-100 dark:bg-black dark:text-gray-100 dark:border-gray-800">
        <Container size="normal">
          <Grid className="grid-cols-6 md:gap-x-16 gap-y-8">
            <div className="md:col-span-4 col-span-full">
              <h1 className="sm:text-5xl text-4xl leading-normal font-bold sm:mb-8 mb-6 dark:text-gray-200">
                Hi, I'm Brian Saunders
              </h1>
              <p className="sm:text-2xl text-xl font-medium sm:mb-8 mb-6 sm:leading-relaxed dark:text-gray-400">
                I'm a designer who lives and works in Chicago. I love designing
                software and have extensive experience working at different
                scales, from smaller independent apps to enterprise software
                used by millions of people.
              </p>
              <p className="sm:text-2xl text-xl font-medium sm:mb-12 mb-6 sm:leading-relaxed dark:text-gray-400">
                Right now I'm a Senior Product Designer at Paylocity, where I
                design software that helps employees collaborate and stay
                connected at work.
              </p>
              <Button
                href="/about"
                size="large"
                type="primary"
                className="sm:w-max w-full"
              >
                <Icon icon="about" className="w-6 mr-3" />
                More about me
              </Button>
            </div>

            <div className="md:col-span-2 col-span-full">
              <figure className="w-32 md:w-full">
                <Image
                  className="md:mb-3 rounded-full md:rounded"
                  height={682}
                  width={682}
                  alt="A picture of Brian"
                  src="/images/portrait-blue.png"
                />
              </figure>
              <figcaption className="hidden md:block text-sm font-medium text-gray-600 leading-relaxed dark:text-gray-400">
                I have been featured in no publications and have failed to make
                the 30 Under 30 list thirty separate times.
              </figcaption>
            </div>
          </Grid>
        </Container>
      </Section>

      <Section className="bg-white sm:py-24 py-16 dark:bg-black">
        <Container size="normal">
          <Grid className="grid-cols-6 lg:gap-x-16 gap-y-4">
            <div className="lg:col-span-4 col-span-full">
              <h2 className="text-4xl font-bold mb-8">Projects</h2>
              <Grid className="grid-cols-2 gap-5 lg:gap-6 mb-12">
                {filteredProjects.map((frontMatter) => (
                  <Project key={frontMatter.title} {...frontMatter}></Project>
                ))}
              </Grid>
            </div>
            <div className="lg:col-span-2 col-span-full">
              <h2 className="text-4xl font-bold mb-8">Posts</h2>
              <ul>
                {filteredPosts.map((frontMatter) => (
                  <Post key={frontMatter.title} {...frontMatter}></Post>
                ))}
              </ul>
            </div>
          </Grid>
        </Container>
      </Section>
    </Layout>
  );
}

export default HomePage;

export async function getStaticProps() {
  const projects = await getAllFilesFrontMatter("projects");
  const posts = await getAllFilesFrontMatter("posts");

  return { props: { projects, posts } };
}
