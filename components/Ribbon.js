import React from "react";
import Link from "next/link";

const Ribbon = () => (
  <div className="flex items-center justify-center w-full py-2 text-xs leading-5 text-center text-white dark:text-gray-200">
    Latest post:{" "}
    <Link href="/posts/noticing-habit">
      <a className="mr-1 underline transition-all focus:outline-none focus:ring focus:ring-blue-500 hover:opacity-80">
        Developing a Noticing Habit
      </a>
    </Link>{" "}
    →
  </div>
);

export default Ribbon;
