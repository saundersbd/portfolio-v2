import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";

import { bookFilePaths, BOOKS_PATH } from "../../lib/mdx";
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
import BookLayout from "../../layouts/BookLayout";

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

const Book = ({ source, frontMatter }) => {
  return (
    <BookLayout frontMatter={frontMatter}>
      <Head>
        <title>Brian Saunders | {frontMatter.title}</title>
      </Head>
      <MDXRemote {...source} components={components} />
    </BookLayout>
  );
};

export default Book;

export const getStaticProps = async ({ params }) => {
  const bookFilePath = path.join(BOOKS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(bookFilePath);

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
  const paths = bookFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
