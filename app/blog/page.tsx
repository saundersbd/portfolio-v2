import { Post } from "../../src/utils/mdx/sources";
import PostListItem from "../../src/components/PostListItem";
import DirectionLink from "../../src/components/DirectionLink";
import ScrollUp from "../components/ScrollUp";

export default async function BlogPage() {
  const posts = await Post.getAllMdxNodes();

  return (
    <>
      <ScrollUp />
      <section className="py-24">
        <h1 className="mb-4 text-4xl font-medium">Writing</h1>
        <p className="mb-12 text-base leading-relaxed">
          My goal over the last year and a half has been to write and publish
          more. I&rsquo;ve been trying to hit publish even if the writing
          isn&rsquo;t perfect.
        </p>

        <h2 className="pb-1 mb-8 text-xl font-medium border-b border-slate-6 dark:border-slateDark-6 dark:text-slateDark-12">
          2023
        </h2>
        <ul className="mb-12">
          {posts
            .filter(
              (post) => post?.frontMatter?.published.slice(0, 4) === "2023"
            )
            .map((post) => {
              return (
                <PostListItem
                  key={post?.slug}
                  title={post?.frontMatter?.title}
                  description={post?.frontMatter?.description}
                  slug={post?.slug}
                />
              );
            })}
        </ul>

        <h2 className="pb-1 mb-8 text-xl font-medium border-b border-slate-6 dark:border-slateDark-6 dark:text-slateDark-12">
          2022
        </h2>
        <ul className="mb-12">
          {posts
            .filter(
              (post) => post?.frontMatter?.published.slice(0, 4) === "2022"
            )
            .map((post) => {
              return (
                <PostListItem
                  key={post?.slug}
                  title={post?.frontMatter?.title}
                  description={post?.frontMatter?.description}
                  slug={post?.slug}
                />
              );
            })}
        </ul>

        <h2 className="pb-1 mb-8 text-xl font-medium border-b border-slate-6 dark:border-slateDark-6 dark:text-slateDark-12">
          2021
        </h2>
        <ul className="mb-16">
          {posts
            .filter(
              (post) => post?.frontMatter?.published.slice(0, 4) === "2021"
            )
            .map((post) => {
              return (
                <PostListItem
                  key={post?.slug}
                  title={post?.frontMatter?.title}
                  description={post?.frontMatter?.description}
                  slug={post?.slug}
                />
              );
            })}
        </ul>
        <DirectionLink direction="top" href="#top">
          Back to top
        </DirectionLink>
      </section>
    </>
  );
}
