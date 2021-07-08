import React from "react";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Head from "next/head";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import Grid from "../../components/Grid";
import Book from "../../components/Book";
import DirectionLink from "../../components/DirectionLink";

import { bookFilePaths, BOOKS_PATH } from "../../lib/mdx";

const Bookshelf = ({ books }) => {
  const filteredBooks = books.sort((a, b) => {
    if (a.data.title < b.data.title) {
      return -1;
    }
    if (a.data.title > b.data.title) {
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
            <h1 className="sm:text-5xl text-4xl leading-normal font-sans font-bold sm:mb-8 mb-6">
              My Bookshelf
            </h1>
            <p className="text-xl font-normal mb-12 sm:leading-loose">
              I wanted to publish some notes and quotes from a few of my
              favorite books.
            </p>

            <h2 className="text-4xl font-bold mb-8">Books</h2>

            {filteredBooks.map((book) => (
              <Book
                key={book.data.title}
                slug={book.filePath}
                {...book.data}
              ></Book>
            ))}
          </div>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Bookshelf;

export function getStaticProps() {
  const books = bookFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(BOOKS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { books } };
}
