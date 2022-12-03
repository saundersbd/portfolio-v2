import React from "react";
import fs from "fs";
import matter from "gray-matter";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import formatDate from "../../lib/formatLongDate";
import slug from "remark-slug";

import { postFilePaths, POSTS_PATH } from "../../lib/mdx";
import Head from "next/head";
import PostLayout from "../../layouts/PostLayout";
import PostImage from "../../components/PostImage";
import PageNote from "../../components/PageNote";

interface PostPageProps {
  frontMatter: PostProps;
  source: MDXRemoteSerializeResult;
}

interface PostProps {
  title: string;
  description: string;
  published: string;
  edited?: string;
}

interface ParamsProps {
  params: SlugProps;
}

interface SlugProps {
  slug: string;
}

const components = {
  PostImage,
  PageNote,
};

const Post = ({ source, frontMatter }: PostPageProps) => {
  const publishedDate = frontMatter.published;
  const formattedPublishedDate = formatDate(publishedDate || "");
  const editedDate = frontMatter.edited;
  let formattedEditedDate;
  if (editedDate) {
    formattedEditedDate = formatDate(editedDate || "");
  }
  const title = `Brian Saunders | ${frontMatter.title}`;

  return (
    <PostLayout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={frontMatter.description} />
      </Head>
      <h1 className="mb-4">{frontMatter.title}</h1>
      <p className="my-0 mb-12 !text-gray-500 dark:!text-gray-400">
        {formattedPublishedDate}&nbsp;
        {formattedEditedDate && `\u00B7 Last edited on ${formattedEditedDate}`}
      </p>
      <MDXRemote {...source} components={components} />
    </PostLayout>
  );
};

export default Post;

export const getStaticProps = async ({ params }: ParamsProps) => {
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
