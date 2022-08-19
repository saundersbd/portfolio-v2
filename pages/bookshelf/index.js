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
        <DirectionLink href="/" className="mb-12" direction="left">
          Back to Home
        </DirectionLink>
        <div className="mb-8 sm:mb-12">
          <h1 className="mb-4 text-2xl font-bold sm:text-4xl sm:mb-6">
            My bookshelf
          </h1>
          <p className="text-sm sm:text-base sm:leading-relaxed">
            This is a collection of books I've read and enjoyed. Some of the
            books have notes or highlights that stood out to me.
          </p>
        </div>
        <div>
          <CurrentBook
            title="Scene & Structure"
            author="Jack M. Bickham"
            imageUrl="/images/books/scene-and-structure.jpg"
            url="https://www.amazon.com/Scene-Structure-Elements-Fiction-Writing/dp/0898799066"
            barClass="w-5/20"
            progressBarWidth="5/20"
            date="8/19/22"
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
        <DirectionLink href="#top" className="mt-12" direction="top">
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
