import { Post } from "../src/utils/mdx/sources";
import Link from "next/link";
import Image from "next/image";
import Icon from "../src/components/Icon";
import DirectionLink from "../src/components/DirectionLink";
import PostAlt from "../src/components/Post";

export default async function HomePage() {
  const posts = await Post.getAllMdxNodes();

  return (
    <>
      <section className="px-4 my-8 sm:my-16 sm:px-8">
        <Image
          className="w-16 mb-4 rounded-full sm:w-20 dark:opacity-75"
          height={800}
          width={800}
          alt="A picture of Brian"
          src="/images/portrait-square.jpg"
        />
        <h1 className="mb-1 text-3xl font-medium sm:text-4xl">
          Brian Saunders
        </h1>
        <p className="mb-4 font-sans text-sm text-gray-500 sm:mb-8 sm:text-lg dark:text-gray-400">
          Product design leader with front-end expertise
        </p>
        <p className="mb-4 font-serif text-base sm:leading-relaxed sm:text-lg">
          I&rsquo;m a great product design leader, pretty good ukulele strummer,
          and sub-par ceramicist who lives and works in Chicago.
        </p>
        <p className="mb-4 font-serif text-base sm:mb-8 sm:leading-relaxed sm:text-lg">
          Right now I&rsquo;m a Principal Designer at Paylocity, where I&rsquo;m
          leading the design for its next generation of mobile apps.
        </p>

        <div className="flex flex-col font-sans text-sm sm:text-base sm:flex-row">
          <Link
            href="/about"
            className="flex items-center mb-1 mr-3 underline rounded sm:mb-0 underline-offset-2 hover:text-mint-400 dark:text-gray-400 dark:hover:text-mint-200"
            passHref
          >
            <Icon icon="ID" className="w-5 mr-1.5" />
            More about me
          </Link>
          <a
            href="mailto:saundersbd@gmail.com"
            className="flex items-center underline rounded underline-offset-2 hover:text-mint-400 dark:text-gray-400 dark:hover:text-mint-200"
          >
            <Icon icon="mailOutline" className="w-5 mr-1.5" />
            saundersbd@gmail.com
          </a>
        </div>
      </section>

      <section className="pb-6 sm:pb-8">
        <div className="flex flex-col overflow-hidden border border-gray-300 shadow-sm rounded-xl dark:border-gray-800">
          <div className="px-4 py-2 bg-gray-100 dark:bg-gray-800">
            <h2 className="text-sm font-medium leading-6">Writing</h2>
          </div>
          <div className="p-4 bg-white sm:p-8 dark:bg-gray-900">
            {posts.slice(0, 5).map((post) => {
              return (
                <PostAlt
                  key={post?.slug}
                  title={post?.frontMatter?.title}
                  description={post?.frontMatter?.description}
                  published={post?.frontMatter?.published}
                  slug={post?.slug}
                />
              );
            })}
            <DirectionLink href="/blog" className="mt-6" direction="right">
              View all posts
            </DirectionLink>
          </div>
        </div>
      </section>

      <Link
        href="projects"
        className="flex items-center p-8 transition-all bg-white border border-gray-300 shadow-sm dark:bg-gray-900 rounded-xl dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800"
      >
        <div className="flex-grow">
          <h3 className="mb-1 text-sm font-medium dark:text-gray-100 sm:text-base">
            Projects
          </h3>
          <p className="text-base text-gray-700 dark:text-gray-300">
            A summary of things I&rsquo;ve worked on.
          </p>
        </div>
        <Icon
          icon="arrow-right"
          className="w-6 text-gray-300 dark:text-gray-500"
        />
      </Link>
    </>
  );
}
