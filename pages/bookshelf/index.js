import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import CurrentBook from "../../components/CurrentBook";
import DirectionLink from "../../components/DirectionLink";
import BookCategoryList from "../../components/BookCategoryList";

import { __recordsPerPageForIteration } from "airtable/lib/table";

const Bookshelf = ({ convertBack }) => {
  return (
    <Layout>
      <Head>
        <title>Brian Saunders | My Bookshelf</title>
      </Head>
      <div className="py-8 sm:py-16">
        <DirectionLink href="/" icon="back" className="mb-12">
          Back to Home
        </DirectionLink>
        <div>
          <CurrentBook
            title="Team of Rivals"
            author="Doris Kearns Goodwin"
            description="Revisiting one of my favorites."
            imageUrl="/images/books/team-of-rivals.jpg"
            url="https://www.amazon.com/Team-Rivals-Political-Abraham-Lincoln-ebook/dp/B000N2HBSO"
            barClass="w-5/20"
            progressBarWidth="5/20"
            date="7/04/22"
          />

          <BookCategoryList books={convertBack} category="Design" />

          <BookCategoryList books={convertBack} category="Systems" />

          <BookCategoryList books={convertBack} category="Writing" />

          <BookCategoryList books={convertBack} category="Management" />

          <BookCategoryList books={convertBack} category="Creative Process" />

          <BookCategoryList books={convertBack} category="Fiction" />

          <BookCategoryList books={convertBack} category="History" />

          <BookCategoryList books={convertBack} category="Language" />

          <BookCategoryList books={convertBack} category="Life" />
        </div>
        <DirectionLink href="#top" icon="top" className="mt-12">
          Back to top
        </DirectionLink>
      </div>
    </Layout>
  );
};

export default Bookshelf;

export async function getStaticProps() {
  const Airtable = require("airtable");

  const base = new Airtable({
    apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
  }).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID);

  const table = base(process.env.NEXT_PUBLIC_AIRTABLE_TABLE_NAME);

  const records = await table.select({ sort: [{ field: "Title" }] }).all();

  const allBooks = JSON.stringify(records);
  const convertBack = JSON.parse(allBooks);

  return { props: { convertBack } };
}
