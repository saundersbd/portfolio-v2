import React from "react";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Head from "next/head";
import Layout from "../../components/Layout";
import ContainerNarrow from "../../components/ContainerNarrow";
import Grid from "../../components/Grid";
import CurrentBook from "../../components/CurrentBook";
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
      <ContainerNarrow>
        <Grid className="grid-cols-6">
          <div className="col-span-full lg:col-start-2 lg:col-end-6">
            <DirectionLink href="/" icon="back" className="mb-8">
              Back to Home
            </DirectionLink>
            <h1 className="mb-10 font-sans text-4xl font-bold leading-normal sm:text-5xl">
              My Bookshelf
            </h1>
            <p className="mb-12 text-xl font-normal leading-loose">
              My reading is usually a mix of design and history. Each page here
              contains some notes and highlights from the book, just so I can
              keep track of things that inspire me.
            </p>

            <hr className="h-px mb-12 bg-gray-400 border-0 dark:bg-gray-600" />

            <div className="mb-16">
              <h2 className="mb-12 text-3xl font-bold xs:text-4xl">
                Currently reading
              </h2>

              <CurrentBook
                title="Lincoln President-Elect"
                author="Harold Holzer"
                description="A deep dive into the 4-month period between Lincoln's election and when he took office."
                url="/images/books/lincoln-president-elect.jpg"
                barFraction="2/5"
              />
            </div>

            <h2 className="mb-12 text-3xl font-bold xs:text-4xl">Finished</h2>

            {filteredBooks.map((book) => (
              <Book
                key={book.data.title}
                slug={book.filePath}
                {...book.data}
              ></Book>
            ))}
          </div>
        </Grid>
      </ContainerNarrow>
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
