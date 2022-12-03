import fs from "fs";
import matter from "gray-matter";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import formatDate from "../../lib/formatDate";
import slug from "remark-slug";
import Image from "next/image";

import { bookFilePaths, BOOKS_PATH } from "../../lib/mdx";
import Head from "next/head";
import BookLayout from "../../layouts/BookLayout";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import HrSection from "../../components/HrSection";
import Reference from "../../components/Reference";

interface BookPageProps {
  frontMatter: BookProps;
  source: MDXRemoteSerializeResult;
}

interface BookProps {
  title: string;
  description: string;
  published: string;
  edited?: string;
  cover: string;
  author: string;
  url: string;
}

interface ParamsProps {
  params: SlugProps;
}

interface SlugProps {
  slug: string;
}

const components = {
  HrSection,
  Reference,
};

const Book = ({ source, frontMatter }: BookPageProps) => {
  const editedDate = frontMatter.edited;
  const formattedEditedDate = formatDate(editedDate || "");
  const title = `Brian Saunders | ${frontMatter.title}`;

  return (
    <BookLayout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={frontMatter.description} />
      </Head>

      <div className="flex flex-col items-center p-6 mx-0 mb-8 overflow-hidden border border-gray-300 rounded-lg sm:p-8 sm:items-start sm:mb-12 sm:flex-row md:-mx-16 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex-shrink-0 w-24 mb-8 mr-0 overflow-hidden border rounded shadow-md h-36 sm:mr-6 sm:mb-0 book-image dark:border-gray-800">
          <Image
            src={frontMatter.cover}
            alt="The book cover"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="!mb-4 !text-3xl !sm:text-4xl !leading-snug font-bold dark:text-white">
            {frontMatter.title}
          </h1>
          <p className="mt-0 !mb-4 text-base leading-relaxed text-gray-500 dark:text-gray-300">
            By {frontMatter.author}
            {frontMatter.edited && " · Updated on " + formattedEditedDate}
          </p>
          <p className="mt-0 mb-4 !text-base !leading-relaxed">
            {frontMatter.description}
          </p>
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

export const getStaticProps = async ({ params }: ParamsProps) => {
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
