import React from "react";
import Link from "next/link";

import Button from "../components/Button";

const BookListItem = ({ slug, title, description, cover, author }) => (
  <li className="grid items-center grid-cols-12 gap-4 py-2 border-b border-gray-300">
    <div className="col-span-1 p-1">
      <div className="overflow-hidden border border-gray-300 rounded">
        <img src={cover} />
      </div>
    </div>
    <div className="col-span-5">{title}</div>
    <div className="col-span-4">{author}</div>
    <div className="col-span-2">
      <Button href={`/bookshelf/${slug.replace(/\.mdx?$/, "")}`}>
        View Notes
      </Button>
    </div>
  </li>
);

export default BookListItem;
