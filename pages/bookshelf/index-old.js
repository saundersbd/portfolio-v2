import React from "react";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Head from "next/head";
import Layout from "../../components/Layout";
import ContainerNarrow from "../../components/ContainerNarrow";
import ContainerFull from "../../components/ContainerFull";
import Grid from "../../components/Grid";
import CurrentBook from "../../components/CurrentBook";
import Book from "../../components/Book";
import LibraryRow from "../../components/LibraryRow";
import DirectionLink from "../../components/DirectionLink";

import DATA from "../../data/bookshelf/books";
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

  const sortedBookshelf = DATA.sort((a, b) => {
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
      <ContainerNarrow>
        <Grid className="grid-cols-6">
          <div className="col-span-full lg:col-start-2 lg:col-end-6">
            {/* <div className="mb-16">
              <h2 className="mb-12 text-3xl font-bold xs:text-4xl">
                Currently reading
              </h2>

              <CurrentBook
                title="Lincoln President-Elect"
                author="Harold Holzer"
                description="A deep dive into the 4-month period between Lincoln's election and when he took office."
                url="/images/books/lincoln-president-elect.jpg"
                barClass="w-8/20"
                progressBarWidth="8/20"
              />
            </div> */}
          </div>
        </Grid>
      </ContainerNarrow>

      <ContainerFull>
        <DirectionLink href="/" icon="back" className="mb-8">
          Back to Home
        </DirectionLink>
        <h1 className="mb-10 font-sans text-4xl font-bold leading-normal sm:text-5xl">
          My Bookshelf
        </h1>
        <p className="mb-12 text-xl font-normal leading-loose">
          My reading is usually a mix of design and history. Each page here
          contains some notes and highlights from the book, just so I can keep
          track of things that inspire me.
        </p>
        <div className="grid grid-cols-12 gap-8 mb-16">
          {filteredBooks.map((book) => (
            <Book
              key={book.data.title}
              slug={book.filePath}
              {...book.data}
            ></Book>
          ))}
        </div>

        <h2 className="mb-12 text-3xl font-bold xs:text-4xl">
          Extended Bookshelf
        </h2>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-6">
            <h3 className="pb-2 mb-4 text-xl font-bold border-b-2 border-gray-300 xs:text-2xl">
              Design
            </h3>

            <ul className="mb-8">
              {sortedBookshelf
                .filter((book) => book.category === "design")
                .map((book) => (
                  <LibraryRow
                    title={book.title}
                    author={book.author}
                    date={book.date}
                    url={book.url}
                  />
                ))}
            </ul>
          </div>

          <div className="col-span-6">
            <h3 className="pb-2 mb-4 text-xl font-bold border-b-2 border-gray-300 xs:text-2xl">
              History
            </h3>

            <ul className="mb-8">
              {sortedBookshelf
                .filter((book) => book.category === "history")
                .map((book) => (
                  <LibraryRow
                    title={book.title}
                    author={book.author}
                    date={book.date}
                    url={book.url}
                  />
                ))}
            </ul>
          </div>
        </div>

        <DirectionLink href="#top" icon="top">
          Back to top
        </DirectionLink>
      </ContainerFull>
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
