import hydrate from "next-mdx-remote/hydrate";

import { getFiles, getFileBySlug } from "../../lib/mdx";
import Head from "next/head";
import BookLayout from "../../layouts/BookLayout";
import MDXComponents from "../../components/MDXComponents";

const Book = ({ mdxSource, frontMatter }) => {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  });

  return (
    <BookLayout frontMatter={frontMatter}>
      <Head>
        <title>Brian Saunders | {frontMatter.title}</title>
      </Head>
      {content}
    </BookLayout>
  );
};

export default Book;

export async function getStaticPaths() {
  const books = await getFiles("books");

  return {
    paths: books.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const book = await getFileBySlug("books", params.slug);

  return { props: book };
}
