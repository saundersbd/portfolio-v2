import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import Grid from "../../components/Grid";
import Book from "../../components/Book";
import DirectionLink from "../../components/DirectionLink";

import { getAllFilesFrontMatter } from "../../lib/mdx";

const Bookshelf = ({ books }) => {
  const filteredBooks = books.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });

  return (
    <Layout className="pt-40 pb-12">
      <Head>
        <title>Brian Saunders | My Bookshelf</title>
      </Head>
      <Container size="narrow">
        <Grid className="grid-cols-6">
          <div className="col-span-full lg:col-start-2 lg:col-end-6">
            <DirectionLink href="/" icon="back" className="mb-8">
              Back to Home
            </DirectionLink>
            <h1 className="sm:text-5xl text-4xl leading-normal font-bold sm:mb-8 mb-6">
              My Bookshelf
            </h1>
            <p className="sm:text-2xl text-xl font-medium mb-12 sm:leading-relaxed">
              I thought it would be a good idea to share notes on some of my
              favorite books I've read recently.
            </p>

            <h2 className="text-4xl font-bold mb-8">Books</h2>

            {filteredBooks.map((frontMatter) => (
              <Book key={frontMatter.title} {...frontMatter}></Book>
            ))}
          </div>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Bookshelf;

export async function getStaticProps() {
  const books = await getAllFilesFrontMatter("books");

  return { props: { books } };
}
