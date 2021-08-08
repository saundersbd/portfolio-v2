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
            <h1 className="sm:text-5xl text-4xl leading-normal font-sans font-bold mb-10">
              My Bookshelf
            </h1>
            <p className="text-xl font-normal mb-12 leading-loose">
              My reading is usually a mix of design and history. Each page here
              contains some notes and highlights from the book, just so I can
              keep track of things that inspire me.
            </p>

            <hr className="h-px mb-12 bg-gray-400 dark:bg-gray-600 border-0" />

            <div className="mb-16">
              <h2 className="text-3xl xs:text-4xl font-bold mb-12">
                Currently reading
              </h2>

              <CurrentBook
                title="Lincoln President-Elect"
                author="Harold Holzer"
                description="A deep dive into the 4-month period between Lincoln's election and when he took office."
                url="/images/books/lincoln-president-elect.jpg"
                barFraction="8/20"
              />
            </div>

            <h2 className="text-3xl xs:text-4xl font-bold mb-12">Finished</h2>

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
