import Link from "next/link";
import Icon from "../../src/components/Icon";
import ScrollUp from "../components/ScrollUp";

interface MediaData {
  Title: string;
  Author: string;
  Date: string;
  URL: string;
  NotesLink?: string;
  Recommended?: string;
  Category: string;
}

interface AirtableRecord {
  fields: MediaData;
}

const AIRTABLE_URL = "https://api.airtable.com/v0/appE5q86NOr9mIJuq/Books";

const strippedTitle = (str: string): string =>
  str.replace(/^(the|a) /i, "").toLowerCase();

export default async function BookshelfPage() {
  const mediaDataSource = await fetch(AIRTABLE_URL, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
    },
    next: { revalidate: 60 },
  })
    .then((d) => d.json())
    .then((d) => d.records)
    .then((d) =>
      d.map((airtableRecord: AirtableRecord) => {
        const { fields } = airtableRecord;

        return {
          ...fields,
        };
      })
    );

  const entries = (mediaDataSource as MediaData[])
    .map((media: MediaData) => {
      return {
        ...media,
      };
    })
    .sort((a, b) =>
      strippedTitle(a.Title).localeCompare(strippedTitle(b.Title))
    );

  function groupBy<T extends Record<string, any>, K extends keyof T>(
    array: T[],
    key: K | { (obj: T): string }
  ): Record<string, T[]> {
    const keyFn = key instanceof Function ? key : (obj: T) => obj[key];
    return array.reduce((objectsByKeyValue, obj) => {
      const value = keyFn(obj);
      objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
      return objectsByKeyValue;
    }, {} as Record<string, T[]>);
  }

  const books: Record<
    string,
    {
      Title: string;
      Author: string;
      Date: string;
      URL: string;
      NotesLink?: string | undefined;
      Recommended?: string | undefined;
      Category: string;
    }[]
  > = groupBy(entries, (obj) => obj.Category);

  const booksArray: [
    string,
    {
      Title: string;
      Author: string;
      Date: string;
      URL: string;
      NotesLink?: string | undefined;
      Recommended?: string | undefined;
      Category: string;
    }[]
  ][] = Object.entries(books).sort((a, b) =>
    strippedTitle(a[0]).localeCompare(strippedTitle(b[0]))
  );

  return (
    <>
      <ScrollUp />
      <h1 className="mb-4 text-4xl">My bookshelf</h1>
      <p className="mb-12 leading-relaxed">
        This is a collection of books I&rsquo;ve read and enjoyed. Some of the
        books have notes or highlights that stood out to me.
      </p>

      {/* <h2 className="pb-1 mb-8 text-xl border-b border-slate-6 dark:border-slateDark-4 dark:text-slateDark-12">
        Currently reading
      </h2>

      <CurrentBook
        title="The Search for Form in Art and Architecture"
        author="Eliel Saarinen"
        imageUrl="/images/books/search-for-form.jpg"
        url="https://www.amazon.com/Search-Form-Architecture-Paperback-August/dp/B010EVWX1I"
        barClass="w-1/6"
        progressBarWidth="3/20"
        date="10/28/23"
      /> */}

      <h2 className="pb-1 mb-8 text-xl border-b border-slate-6 dark:border-slateDark-4 dark:text-slateDark-12">
        Bookshelf
      </h2>

      <div>
        {booksArray &&
          booksArray.map((category) => (
            <div
              key={category[0]}
              className="flex flex-col mb-8 overflow-hidden border rounded-lg shadow-sm border-slate-6 dark:border-slateDark-4"
            >
              <div className="px-4 py-2 bg-slate-3 dark:bg-slateDark-3">
                <h2 className="text-sm leading-6">{category[0]}</h2>
              </div>
              <div className="p-4 pb-2 bg-slate-1 dark:bg-slateDark-1 sm:p-8 sm:pb-4">
                <ul>
                  {category[1].map(
                    ({ Title, Author, Date, Recommended, NotesLink, URL }) => (
                      <li
                        key={Title}
                        className="flex flex-col items-start pb-4 mb-4 border-b border-slate-5 sm:flex-row sm:items-center dark:border-slateDark-4 last:border-none last:mb-0"
                      >
                        <div className="flex-grow mb-0 mr-0 sm:mr-4">
                          <div className="flex items-center mb-1">
                            {URL ? (
                              <a
                                className="sm:w-max text-sm font-medium font-sans text-slate-12 dark:text-slateDark-12 dark:hover:bg-slateDark-3 rounded -mx-1 -my-0.5 px-1 py-0.5 mb-0 underline underline-offset-2 focus:outline-none transition-all"
                                href={URL}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {Title}
                                {Recommended ? (
                                  <Icon
                                    icon="star"
                                    className="inline-block w-4 h-4 pt-1 ml-1 text-yellow-400 dark:text-yellow-300"
                                  />
                                ) : null}
                              </a>
                            ) : (
                              Title
                            )}
                          </div>
                          <div className="flex items-center text-sm text-slate-11 dark:text-slateDark-11">
                            {Author} ({Date})
                          </div>
                        </div>

                        {NotesLink ? (
                          <Link
                            href={NotesLink}
                            className="flex items-center justify-center px-2 py-2 mt-3 font-sans text-sm font-medium no-underline transition-all border rounded-lg shadow-sm border-slate-6 text-slate-12 sm:mt-0 w-max hover:shadow-none hover:no-underline focus:outline-none focus:ring hover:bg-slate-3 dark:border-slateDark-4 dark:bg-slateDark-3 dark:text-slateDark-12 dark:hover:bg-slateDark-4 dark:hover:text-slateDark-12"
                            passHref
                          >
                            <Icon
                              icon="doc"
                              className="w-4 mr-1.5 dark:text-slateDark-11"
                            />
                            Notes
                          </Link>
                        ) : null}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
