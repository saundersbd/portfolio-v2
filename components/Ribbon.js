import React from "react";
import Link from "next/link";

const Ribbon = () => (
  <div className="flex items-center justify-center w-full py-3 text-sm leading-5 text-center text-white dark:text-gray-200">
    Featured post:{" "}
    <Link href="/posts/noticing-habit">
      <a className="px-1 mr-1 font-medium underline transition-all rounded focus:outline-none focus:ring focus:ring-blue-400 hover:opacity-80">
        Developing a Noticing Habit
      </a>
    </Link>{" "}
    →
  </div>
);

export default Ribbon;
