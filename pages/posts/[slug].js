import hydrate from "next-mdx-remote/hydrate";

import { getFiles, getFileBySlug } from "../../lib/mdx";
import Head from "next/head";
import PostLayout from "../../layouts/PostLayout";
import MDXComponents from "../../components/MDXComponents";

const Post = ({ mdxSource, frontMatter }) => {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  });

  return (
    <PostLayout frontMatter={frontMatter}>
      <Head>
        <title>Brian Saunders | {frontMatter.title}</title>
      </Head>
      {content}
    </PostLayout>
  );
};

export default Post;

export async function getStaticPaths() {
  const posts = await getFiles("posts");

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug("posts", params.slug);

  return { props: post };
}
