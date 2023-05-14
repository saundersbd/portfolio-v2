import Link from "next/link";
import CurrentBook from "../../src/components/CurrentBook";
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
      <h1 className="mb-4 text-4xl font-semibold">My bookshelf</h1>
      <p className="mb-12">
        This is a collection of books I&rsquo;ve read and enjoyed. Some of the
        books have notes or highlights that stood out to me.
      </p>

      <h2 className="pb-1 mb-8 text-xl font-bold border-b border-gray-200 dark:border-gray-700 dark:text-gray-100">
        Currently reading
      </h2>

      <CurrentBook
        title="Lincoln at Cooper Union"
        author="Harold Holzer"
        imageUrl="/images/books/cooper-union.jpeg"
        url="https://www.amazon.com/There-Was-Light-American-Struggle/dp/0553393960"
        barClass="w-1/6"
        progressBarWidth="3/20"
        date="04/09/23"
      />

      <h2 className="pb-1 mb-8 text-xl font-bold border-b border-gray-200 dark:border-gray-700 dark:text-gray-100">
        Bookshelf
      </h2>

      <div>
        {booksArray.map((category) => (
          <div
            key={category[0]}
            className="flex flex-col mb-8 overflow-hidden border border-gray-300 rounded-lg shadow-sm dark:border-gray-800"
          >
            <div className="px-4 py-2 bg-gray-100 dark:bg-gray-800">
              <h2 className="text-sm font-bold leading-6">{category[0]}</h2>
            </div>
            <div className="p-4 pb-2 bg-white dark:bg-gray-900 sm:p-8 sm:pb-4">
              <ul>
                {category[1].map(
                  ({ Title, Author, Date, Recommended, NotesLink, URL }) => (
                    <li
                      key={Title}
                      className="flex flex-col items-start pb-4 mb-4 border-b border-gray-200 sm:flex-row sm:items-center dark:border-gray-800 last:border-none last:mb-0"
                    >
                      <div className="flex-grow mb-0 mr-0 sm:mr-4">
                        <div className="flex items-center mb-1">
                          {URL ? (
                            <a
                              className="sm:w-max text-sm font-semibold text-black dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded -mx-1 -my-0.5 px-1 py-0.5 mb-0 underline underline-offset-2 focus:outline-none focus:ring focus:ring-orange transition-all focus:bg-blue-50 dark:focus:bg-gray-900"
                              href={URL}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {Title}
                              {Recommended ? (
                                <Icon
                                  icon="thumbs-up"
                                  className="inline-block w-5 h-5 pt-1 ml-1 text-mint-400 dark:text-mint-300"
                                />
                              ) : null}
                            </a>
                          ) : (
                            Title
                          )}
                        </div>
                        <div className="flex items-center text-sm text-gray-700 dark:text-gray-400">
                          {Author} ({Date})
                        </div>
                      </div>

                      {NotesLink ? (
                        <Link
                          href={NotesLink}
                          className="flex items-center justify-center px-2 py-2 mt-3 text-sm font-semibold tracking-wide text-black no-underline transition-all border border-gray-300 rounded-lg shadow-sm sm:mt-0 w-max hover:shadow-none hover:no-underline focus:outline-none focus:ring hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white"
                          passHref
                        >
                          <Icon
                            icon="doc"
                            className="w-4 mr-1.5 dark:text-gray-200"
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
