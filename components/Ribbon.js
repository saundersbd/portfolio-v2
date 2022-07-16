import React from "react";
import Link from "next/link";

const Ribbon = () => (
  <div className="w-full py-3 flex items-center justify-center text-center text-white text-xs dark:text-gray-200 leading-5">
    Latest post:{" "}
    <Link href="/posts/noticing-habit">
      <a className="mr-1 underline focus:outline-none focus:ring focus:ring-blue-500 hover:opacity-80 transition-all">
        Developing a Noticing Habit
      </a>
    </Link>{" "}
    →
  </div>
);

export default Ribbon;
