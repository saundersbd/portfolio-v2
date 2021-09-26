import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import ContainerFull from "../../components/ContainerFull";
import Grid from "../../components/Grid";
import CurrentBook from "../../components/CurrentBook";
import DirectionLink from "../../components/DirectionLink";
import BookCategoryList from "../../components/BookCategoryList";

import { __recordsPerPageForIteration } from "airtable/lib/table";

const Bookshelf = ({ convertBack }) => {
  return (
    <Layout className="pt-40 pb-12">
      <Head>
        <title>Brian Saunders | My Bookshelf</title>
      </Head>
      <ContainerFull>
        <Grid className="grid-cols-12">
          <div className="col-span-full lg:col-start-3 lg:col-end-11">
            <DirectionLink href="/" icon="back" className="mb-8">
              Back to Home
            </DirectionLink>
            <h1 className="mb-10 font-sans text-4xl font-bold leading-normal sm:text-5xl">
              My Bookshelf
            </h1>
            <p className="mb-12 text-xl font-normal leading-loose">
              This is a place to collect a list of books and articles I've read
              and enjoyed. If a book or article has a notes link that means I've
              written a little about why I like it.
            </p>

            <h2 className="pb-2 mb-6 text-xl font-bold border-b-2 border-gray-300 dark:border-gray-600 xs:text-2xl">
              Currently Reading
            </h2>
            <CurrentBook
              title="Conceptual Models: Core to Good Design"
              author="Jeff Johnson"
              description="Saw a rec for this on Twitter and it seems like an interesting angle to take early in the design process."
              imageUrl="/images/books/conceptual-models.jpeg"
              url="https://www.amazon.com/dp/1608457494/"
              barClass="w-18/20"
              progressBarWidth="18/20"
              date="9/26/2021"
            />

            <BookCategoryList books={convertBack} category="Design" />

            <BookCategoryList books={convertBack} category="Systems" />

            <BookCategoryList books={convertBack} category="Writing" />

            <BookCategoryList
              books={convertBack}
              category="Management"
              description="I'm not a manager yet but if I am one day I want to be a good one."
            />

            <BookCategoryList
              books={convertBack}
              category="Creative Process"
              description="Making Music is worth checking out. It's amazing how many creative techniques from music production are also relevant for product design."
            />

            <BookCategoryList
              books={convertBack}
              category="Fiction"
              description="I'd like to read more fiction over the next year. If you've got any recommendations go ahead and send them over! The following are all books that I've read and enjoyed in the last year."
            />

            <BookCategoryList
              books={convertBack}
              category="History"
              description="You might notice I enjoy reading about Abraham Lincoln. At this point I've run out of books to read about him and have started going directly to the source material."
            />

            <BookCategoryList
              books={convertBack}
              category="Language"
              description="Most of these books are about the nature of language and communication. Garner's is more of a reference but I use it a lot and wanted to call it out."
            />

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
