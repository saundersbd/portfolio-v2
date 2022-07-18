import React from "react";
import LibraryRow from "./LibraryRow";

const BookCategoryList = ({ books, category }) => (
  <div className="flex flex-col mb-8 overflow-hidden border border-gray-300 rounded-lg dark:border-gray-700">
    <div className="px-4 py-2 bg-gray-100 dark:bg-gray-700">
      <h2 className="text-sm font-bold leading-6">{category}</h2>
    </div>
    <div className="p-4 pb-2 bg-white dark:bg-gray-900 sm:p-8 sm:pb-4">
      <ul>
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
    </div>
  </div>
);

export default BookCategoryList;
