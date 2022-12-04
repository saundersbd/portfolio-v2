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
        <h1 className="mb-1 text-3xl font-bold font-display sm:text-4xl">
          Brian Saunders
        </h1>
        <p className="mb-4 text-base text-gray-500 sm:mb-8 sm:text-lg dark:text-gray-400">
          Product design leader with front-end expertise
        </p>
        <p className="mb-4 text-sm sm:leading-relaxed sm:text-lg">
          I&rsquo;m a great product design leader, pretty good ukulele strummer,
          and sub-par ceramicist who lives and works in Chicago.
        </p>
        <p className="mb-4 text-sm sm:mb-8 sm:leading-relaxed sm:text-lg">
          Right now I&rsquo;m Principal Designer at Paylocity, where I&rsquo;m
          leading the design for its next generation of mobile apps.
        </p>

        <div className="flex flex-col text-sm sm:text-base sm:flex-row">
          <Link
            href="/about"
            className="flex items-center mb-1 mr-3 underline rounded sm:mb-0 underline-offset-2 hover:text-mint-400"
            passHref
          >
            <Icon icon="about" className="w-5 mr-1.5" />
            More about me
          </Link>
          <Link
            href="/resume"
            className="flex items-center mb-1 mr-3 underline rounded sm:mb-0 underline-offset-2 hover:text-mint-400"
            passHref
          >
            <Icon className="w-5 mr-1.5" />
            View my CV
          </Link>
          <a
            href="mailto:saundersbd@gmail.com"
            className="flex items-center underline rounded underline-offset-2 hover:text-mint-400"
          >
            <Icon icon="mailOutline" className="w-5 mr-1.5" />
            saundersbd@gmail.com
          </a>
        </div>
      </section>

      <section className="pb-6 sm:pb-8">
        <div className="flex flex-col overflow-hidden border border-gray-300 shadow-sm rounded-xl dark:border-gray-700">
          <div className="px-4 py-2 bg-gray-100 dark:bg-gray-700">
            <h2 className="text-sm font-bold leading-6 font-display">
              Writing
            </h2>
          </div>
          <div className="p-4 bg-white sm:p-8 dark:bg-gray-800">
            <h3 className="flex items-center px-4 mb-4 -mt-0 sm:mb-6 sm:-mt-2">
              <hr className="w-full h-px bg-gray-200 border-none dark:bg-gray-700" />
              <span className="px-2 pl-3 text-sm font-semibold text-center text-gray-500 dark:text-gray-400">
                2022
              </span>
              <hr className="w-full h-px bg-gray-200 border-none dark:bg-gray-700" />
            </h3>
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
            <DirectionLink href="/posts" className="mt-6" direction="right">
              View all posts
            </DirectionLink>
          </div>
        </div>
      </section>

      <Link
        href="projects"
        className="flex items-center p-8 transition-all bg-white border border-gray-300 shadow-sm dark:bg-gray-800 rounded-xl dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
      >
        <div className="flex-grow">
          <h3 className="mb-1 text-sm font-semibold underline sm:text-base font-display">
            Projects
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            A summary of my favorite work over the years.
          </p>
        </div>
        <Icon
          icon="arrow-right"
          className="w-8 text-gray-300 dark:text-gray-500"
        />
      </Link>
    </>
  );
}
