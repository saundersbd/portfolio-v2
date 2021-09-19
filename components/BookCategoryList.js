import React from "react";
import LibraryRow from "./LibraryRow";

const BookCategoryList = ({ books, category, description }) => (
  <>
    <h2 className="pb-2 mb-4 text-xl font-bold border-b-2 border-gray-300 dark:border-gray-600 xs:text-2xl">
      {category}
    </h2>
    {description && (
      <p className="mb-4 -mt-1 leading-loose text-gray-500 dark:text-gray-400">
        {description}
      </p>
    )}
    <ul className="mb-12">
      {books
        .filter((book) => book.fields.Category === category)
        .map((book) => (
          <LibraryRow
            title={book.fields.Title}
            author={book.fields.Author}
            date={book.fields.Date}
            notes={book.fields.NotesLink}
            url={book.fields.URL}
            recommended={book.fields.Recommended}
            key={book.fields.Title}
          />
        ))}
    </ul>
  </>
);

export default BookCategoryList;
