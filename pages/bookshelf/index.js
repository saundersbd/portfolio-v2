import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import Section from "../../components/Section";
import ContainerFull from "../../components/ContainerFull";
import ContainerNarrow from "../../components/ContainerNarrow";
import Grid from "../../components/Grid";
import CurrentBook from "../../components/CurrentBook";
import DirectionLink from "../../components/DirectionLink";
import BookCategoryList from "../../components/BookCategoryList";

import { __recordsPerPageForIteration } from "airtable/lib/table";

const Bookshelf = ({ convertBack }) => {
  return (
    <Layout className="">
      <Head>
        <title>Brian Saunders | My Bookshelf</title>
      </Head>
      <Section className="py-8 bg-white sm:py-16 dark:bg-gray-900">
        <ContainerFull>
          <Grid className="grid-cols-12">
            <div className="col-span-full lg:col-start-3 lg:col-end-11">
              <DirectionLink href="/" icon="back" className="mb-12">
                Back to Home
              </DirectionLink>

              <div className="mb-6 sm:mb-12">
                <h1 className="text-3xl sm:text-5xl font-bold mb-2 sm:mb-6">
                  My bookshelf
                </h1>
                <p className="leading-relaxed">
                  This is a list of books that I've read and enjoyed.
                </p>
              </div>

              <h2 className="pb-2 mb-8 text-xl font-bold border-b-2 border-stone-200 dark:border-gray-700 xs:text-2xl">
                Currently Reading
              </h2>
              <CurrentBook
                title="Lincoln at Gettysburg: The Words that Remade America"
                author="Garry Wills"
                description="It's a long book about a short speech."
                imageUrl="/images/books/lincoln-at-gettysburg.jpeg"
                url="https://www.amazon.com/dp/B00AK78PH8"
                barClass="w-5/20"
                progressBarWidth="5/20"
                date="5/21/22"
              />

              <BookCategoryList books={convertBack} category="Design" />

              <BookCategoryList books={convertBack} category="Systems" />

              <BookCategoryList books={convertBack} category="Writing" />

              <BookCategoryList books={convertBack} category="Management" />

              <BookCategoryList
                books={convertBack}
                category="Creative Process"
              />

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
      </Section>
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
