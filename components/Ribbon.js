import React from "react";
import Link from "next/link";

const Ribbon = () => (
  <div className="flex items-center justify-center w-full py-3 text-sm leading-5 text-center text-white bg-gray-900 dark:bg-gray-800 dark:text-gray-200">
    Featured post:{" "}
    <Link
      href="/posts/imposter-syndrome"
      className="px-1 mr-1 font-medium underline transition-all rounded text-mint-300 focus:outline-none focus:ring focus:ring-mint-400 hover:text-mint-200"
    >
      My Good Friend Imposter Syndrome
    </Link>{" "}
    →
  </div>
);

export default Ribbon;
