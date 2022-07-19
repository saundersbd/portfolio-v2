import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import formatDate from "../../lib/formatDate";
import slug from "remark-slug";

import { bookFilePaths, BOOKS_PATH } from "../../lib/mdx";
import Head from "next/head";
import Link from "next/link";
import Button from "../../components/Button";
import Blockquote from "../../components/Blockquote";
import Icon from "../../components/Icon";
import PostImage from "../../components/PostImage";
import PageNote from "../../components/PageNote";
import HrSection from "../../components/HrSection";
import BookLayout from "../../layouts/BookLayout";

const components = {
  Link,
  Icon,
  PostImage,
  PageNote,
  HrSection,
  Button,
  Blockquote,
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

      <div className="flex flex-col mx-0 mb-8 overflow-hidden border rounded-lg border-beige-dark sm:mb-12 sm:flex-row md:-mx-20 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-center w-full py-0 pt-8 bg-gray-100 border-r border-gray-200 sm:pt-0 sm:w-1/3 dark:bg-gray-800 dark:border-gray-700">
          <div className="w-32 overflow-hidden border rounded shadow-md book-image dark:border-gray-800">
            <img
              className="my-0"
              src={frontMatter.cover}
              alt="The book cover"
            />
          </div>
        </div>
        <div className="w-full p-6 sm:w-2/3">
          <h1 className="mb-2 !text-3xl font-bold dark:text-white">
            {frontMatter.title}
          </h1>
          <p className="mt-0 mb-4 text-base leading-relaxed text-gray-500 dark:text-gray-300">
            By {frontMatter.author}
            {frontMatter.edited && " · Updated on " + formattedEditedDate}
          </p>
          <p className="mt-0 mb-6 leading-loose">{frontMatter.description}</p>
          <Button
            href={frontMatter.url}
            className="dark:!bg-gray-700 dark:!border-gray-600 dark:!text-white dark:hover:!bg-gray-800 dark:hover:!border-gray-700"
          >
            <Icon icon="external" className="w-4 mr-1.5" />
            {frontMatter.url.includes("amazon")
              ? "View on Amazon"
              : "View article"}
          </Button>
        </div>
      </div>
      <div>
        <MDXRemote {...source} components={components} />
      </div>
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
