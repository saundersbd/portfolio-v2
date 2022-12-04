import { Post } from "../../../src/utils/mdx/sources";
import { serialize } from "next-mdx-remote/serialize";
import { MdxContent } from "../../components/MdxContent";
import formatLongDate from "../../../src/utils/formatLongDate";

import ScrollUp from "../../components/ScrollUp";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

export async function generateStaticParams() {
  const files = await Post.getMdxFiles();

  return files?.map((file) => ({
    slug: file.slug.split("/"),
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await Post.getMdxNode(params?.slug?.join("/"));
  const mdx = await serialize(post!.content, {
    mdxOptions: {},
  });

  return (
    <>
      <ScrollUp />
      <header className="not-prose">
        <h1 className="mb-4 text-3xl font-semibold leading-snug text-black sm:text-4xl dark:text-white">
          {post?.frontMatter?.title}
        </h1>
        <p className="italic text-gray-500 dark:text-gray-400">
          Published on {formatLongDate(post?.frontMatter?.published)}
        </p>
      </header>

      <MdxContent source={mdx} rawSource={post!.content} />
    </>
  );
}
