import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import formatDate from "../../lib/formatDate";

import { bookFilePaths, BOOKS_PATH } from "../../lib/mdx";
import Head from "next/head";
import Link from "next/link";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import PostImage from "../../components/PostImage";
import PageNote from "../../components/PageNote";
import HrSection from "../../components/HrSection";
import BookLayout from "../../layouts/BookLayout";

const components = {
  Link,
  Button,
  Icon,
  PostImage,
  PageNote,
  HrSection,
};

const Book = ({ source, frontMatter }) => {
  const editedDate = frontMatter.edited;
  const formattedEditedDate = formatDate(editedDate || "");

  return (
    <BookLayout frontMatter={frontMatter}>
      <Head>
        <title>Brian Saunders | {frontMatter.title}</title>
        <meta name="description" content={frontMatter.description} />
      </Head>
      <h1 className="mb-4">{frontMatter.title}</h1>
      <p>
        By {frontMatter.author}
        {frontMatter.edited && " · Updated on " + formattedEditedDate}
      </p>
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
