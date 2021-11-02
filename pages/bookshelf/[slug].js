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

      <div className="flex flex-col mx-0 mb-8 overflow-hidden border border-gray-300 rounded-lg sm:mb-12 sm:flex-row md:-mx-20 dark:bg-navy-dark dark:border-navy-light">
        <div className="flex items-center justify-center w-full py-0 pt-8 border-r sm:pt-0 bg-navy-lightest sm:w-1/3 dark:bg-navy-dark dark:border-navy">
          <div className="w-32 overflow-hidden border border-gray-200 rounded shadow-md book-image dark:border-navy">
            <img
              className="my-0"
              src={frontMatter.cover}
              alt="The book cover"
            />
          </div>
        </div>
        <div className="w-full p-6 sm:w-2/3">
          <h1 className="mb-4 text-3xl font-bold leading-relaxed tracking-wide dark:text-white">
            {frontMatter.title}
          </h1>
          <p className="mt-0 mb-4 text-base font-semibold leading-relaxed text-gray-600 dark:text-navy-lighter">
            By {frontMatter.author}
            {frontMatter.edited && " · Updated on " + formattedEditedDate}
          </p>
          <p className="mt-0 mb-6 text-lg leading-extra-loose">
            {frontMatter.description}
          </p>
          <Button className="w-max" href={frontMatter.url}>
            <Icon icon="external" className="w-5 mr-2" />
            Amazon Link
          </Button>
        </div>
      </div>
      <div className="prose prose-lg md:prose-xl dark:prose-dark">
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
