import React from "react";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Head from "next/head";
import Layout from "../../components/Layout";
import ContainerFull from "../../components/ContainerFull";
import Grid from "../../components/Grid";
import CurrentBook from "../../components/CurrentBook";
import DirectionLink from "../../components/DirectionLink";
import BookCategoryList from "../../components/BookCategoryList";

import { bookFilePaths, BOOKS_PATH } from "../../lib/mdx";
import { __recordsPerPageForIteration } from "airtable/lib/table";

const Bookshelf = ({ books, convertBack }) => {
  return (
    <Layout className="pt-40 pb-12">
      <Head>
        <title>Brian Saunders | My Bookshelf</title>
      </Head>
      <ContainerFull>
        <Grid className="grid-cols-12">
          <div className="col-span-full md:col-start-3 md:col-end-11">
            <DirectionLink href="/" icon="back" className="mb-8">
              Back to Home
            </DirectionLink>
            <h1 className="mb-10 font-sans text-4xl font-bold leading-normal sm:text-5xl">
              My Bookshelf
            </h1>
            <p className="mb-12 text-xl font-normal leading-loose">
              This is a place to collect a list of books I've read and enjoyed.
            </p>

            {/* <h2 className="mb-12 text-3xl font-bold xs:text-4xl">
              Currently reading
            </h2>
            <CurrentBook
              title="Lincoln President-Elect"
              author="Harold Holzer"
              description="A deep dive into the 4-month period between Lincoln's election and when he took office."
              url="/images/books/lincoln-president-elect.jpg"
              barClass="w-8/20"
              progressBarWidth="8/20"
            /> */}

            {/* <h2 className="mb-12 text-3xl font-bold xs:text-4xl">Bookshelf</h2> */}

            <BookCategoryList books={convertBack} category="Design" />

            <BookCategoryList books={convertBack} category="Systems" />

            <BookCategoryList books={convertBack} category="Writing" />

            <BookCategoryList books={convertBack} category="Business" />

            <BookCategoryList books={convertBack} category="Creative Process" />

            <BookCategoryList books={convertBack} category="Fiction" />

            <BookCategoryList books={convertBack} category="History" />

            <BookCategoryList books={convertBack} category="Language" />

            <BookCategoryList books={convertBack} category="Life" />

            <DirectionLink href="#top" icon="top">
              Back to top
            </DirectionLink>
          </div>
        </Grid>
      </ContainerFull>
    </Layout>
  );
};

export default Bookshelf;

export async function getStaticProps() {
  const books = bookFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(BOOKS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  const Airtable = require("airtable");

  const base = new Airtable({
    apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
  }).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID);

  const table = base(process.env.NEXT_PUBLIC_AIRTABLE_TABLE_NAME);

  const records = await table.select({ sort: [{ field: "Title" }] }).all();

  const allBooks = JSON.stringify(records);
  const convertBack = JSON.parse(allBooks);

  return { props: { books, convertBack } };
}
