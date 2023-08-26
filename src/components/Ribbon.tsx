import React from "react";
import Link from "next/link";

const Ribbon = () => (
  <div className="flex items-center justify-center w-full py-3 font-sans text-sm leading-5 text-center text-slate-1 bg-slate-12 dark:bg-slateDark-3 dark:text-slateDark-12">
    Featured post:{" "}
    <Link
      href="/blog/2022/imposter-syndrome"
      className="px-1 mr-1 underline transition-all rounded text-jadeDark-11 focus:outline-none focus:ring focus:ring-jade-9 hover:text-jadeDark-10 dark:text-jadeDark-11 dark:hover:text-jadeDark-10 dark:focus:ring-jadeDark-11"
    >
      My Good Friend Imposter Syndrome
    </Link>{" "}
    →
  </div>
);

export default Ribbon;
