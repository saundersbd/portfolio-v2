import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";

import { postFilePaths, POSTS_PATH } from "../../lib/mdx";
import Head from "next/head";
import Link from "next/link";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import PostImageWide from "../../components/PostImageWide";
import PostImageNarrow from "../../components/PostImageNarrow";
import PageNote from "../../components/PageNote";
import HrSection from "../../components/HrSection";
import PostColNarrow from "../../components/PostColNarrow";
import PostColWide from "../../components/PostColWide";
import PostLayout from "../../layouts/PostLayout";

const components = {
  Link,
  Button,
  Icon,
  PostImageWide,
  PostImageNarrow,
  PageNote,
  HrSection,
  PostColNarrow,
  PostColWide,
};

const Post = ({ source, frontMatter }) => {
  return (
    <PostLayout frontMatter={frontMatter}>
      <Head>
        <title>Brian Saunders | {frontMatter.title}</title>
      </Head>
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
      remarkPlugins: [require("remark-slug")],
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
