import fs from "fs";
import matter from "gray-matter";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import slug from "remark-slug";

import { projectFilePaths, PROJECTS_PATH } from "../../lib/mdx";
import Head from "next/head";
import Link from "next/link";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import PostImage from "../../components/PostImage";
import PageNote from "../../components/PageNote";
import HrSection from "../../components/HrSection";

import ProjectLayout from "../../layouts/ProjectLayout";

const components = {
  Link,
  Button,
  Icon,
  PostImage,
  PageNote,
  HrSection,
};

const Project = ({ source, frontMatter }) => {
  const title = `Brian Saunders | ${frontMatter.title}`;
  return (
    <ProjectLayout frontMatter={frontMatter}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={frontMatter.description} />
      </Head>
      <MDXRemote {...source} components={components} />
    </ProjectLayout>
  );
};

export default Project;

export const getStaticProps = async ({ params }) => {
  const projectFilePath = path.join(PROJECTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(projectFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [slug],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = projectFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
