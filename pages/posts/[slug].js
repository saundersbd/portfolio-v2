import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import formatDate from "../../lib/formatDate";
import slug from "remark-slug";

import { postFilePaths, POSTS_PATH } from "../../lib/mdx";
import Head from "next/head";
import Link from "next/link";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import PostImage from "../../components/PostImage";
import PageNote from "../../components/PageNote";
import HrSection from "../../components/HrSection";
import PostLayout from "../../layouts/PostLayout";

const components = {
  Link,
  Button,
  Icon,
  PostImage,
  PageNote,
  HrSection,
};

const Post = ({ source, frontMatter, posts }) => {
  const publishedDate = frontMatter.published;
  const formattedPublishedDate = formatDate(publishedDate || "");
  const editedDate = frontMatter.edited;
  let formattedEditedDate;
  if (editedDate) {
    formattedEditedDate = formatDate(editedDate || "");
  }

  return (
    <PostLayout frontMatter={frontMatter}>
      <Head>
        <title>Brian Saunders | {frontMatter.title}</title>
        <meta name="description" content={frontMatter.description} />
      </Head>
      <h1 className="mb-4">{frontMatter.title}</h1>
      <p className="my-0 mb-12 italic text-gray-600 dark:text-gray-300">
        Published on {formattedPublishedDate}&nbsp;
        {formattedEditedDate && `\u00B7 Last edited on ${formattedEditedDate}`}
      </p>
      <MDXRemote {...source} components={components} />
    </PostLayout>
  );
};

export default Post;

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

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
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
