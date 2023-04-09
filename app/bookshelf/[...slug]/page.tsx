import { Book } from "../../../src/utils/mdx/sources";
import { serialize } from "next-mdx-remote/serialize";
import { MdxContent } from "../../components/MdxContent";

import ScrollUp from "../../components/ScrollUp";
import Image from "next/image";
import Button from "../../../src/components/Button";
import Icon from "../../../src/components/Icon";

interface BookPageProps {
  params: {
    slug: string[];
  };
}

export async function generateStaticParams() {
  const files = await Book.getMdxFiles();

  return files?.map((file) => ({
    slug: file.slug.split("/"),
  }));
}

export default async function PostPage({ params }: BookPageProps) {
  const post = await Book.getMdxNode(params?.slug?.join("/"));
  const mdx = await serialize(post!.content, {
    mdxOptions: {},
  });

  return (
    <>
      <ScrollUp />
      <div className="flex flex-col items-center p-6 mx-0 mb-8 overflow-hidden border border-gray-300 rounded-lg sm:p-8 sm:items-start sm:mb-12 sm:flex-row md:-mx-16 dark:bg-gray-900 dark:border-gray-800">
        <div className="flex-shrink-0 w-24 mb-8 mr-0 overflow-hidden border rounded shadow-md h-36 sm:mr-6 sm:mb-0 book-image dark:border-gray-800 not-prose">
          <Image
            src={post?.frontMatter?.cover!}
            alt="Picture of the book cover"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="!mb-4 !text-3xl !sm:text-4xl !leading-snug font-semibold dark:text-gray-100">
            {post?.frontMatter?.title}
          </h1>
          <p className="mt-0 !mb-4 text-base leading-relaxed text-gray-500 dark:text-gray-400">
            By {post?.frontMatter?.author}
          </p>
          <p className="mt-0 mb-4 !text-base !leading-relaxed">
            {post?.frontMatter?.description}
          </p>
          <Button
            href={post?.frontMatter?.url}
            className="dark:!bg-gray-800 dark:!border-gray-700 dark:!text-gray-300 dark:hover:!bg-gray-700 dark:hover:!border-gray-700 not-prose"
          >
            <Icon icon="external" className="w-4 mr-1.5 dark:text-gray-300" />
            {post?.frontMatter?.url.includes("amazon")
              ? "View on Amazon"
              : "View article"}
          </Button>
        </div>
      </div>

      <MdxContent source={mdx} rawSource={post!.content} />
    </>
  );
}
