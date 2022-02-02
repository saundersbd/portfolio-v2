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
      <Section className="py-6 border-b sm:py-16 bg-beige dark:bg-navy-darkest dark:text-gray-100 border-orange-light dark:border-orange-lighter">
        <ContainerNarrow>
          <Grid className="grid-cols-6">
            <div className="col-span-full lg:col-start-2 lg:col-end-6">
              <h1 className="mb-2 font-sans text-3xl font-bold leading-normal tracking-wide text-center sm:mb-6 sm:text-5xl">
                My Bookshelf
              </h1>
              <p className="text-lg leading-loose text-center sm:leading-loose sm:text-xl">
                This is a place to collect a list of books and articles I've
                read and enjoyed.
              </p>
            </div>
          </Grid>
        </ContainerNarrow>
      </Section>
      <Section className="py-8 bg-white sm:py-16 dark:bg-navy-darkest">
        <ContainerFull>
          <Grid className="grid-cols-12">
            <div className="col-span-full lg:col-start-3 lg:col-end-11">
              <DirectionLink href="/" icon="back" className="mb-12">
                Back to Home
              </DirectionLink>

              <h2 className="pb-2 mb-8 text-xl font-bold border-b-2 border-stone-200 dark:border-navy xs:text-2xl">
                Currently Reading
              </h2>
              <CurrentBook
                title="The Timeless Way of Building"
                author="Christopher Alexander"
                description="Revisiting one of my favorites."
                imageUrl="/images/books/timeless-way.jpg"
                url="https://www.amazon.com/dp/0195024028"
                barClass="w-16/20"
                progressBarWidth="16/20"
                date="2/01/2022"
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
