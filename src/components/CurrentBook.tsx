import React from "react";
import Image from "next/image";

interface BookProps {
  title: string;
  author: string;
  imageUrl: string;
  url: string;
  progressBarWidth: string;
  barClass: string;
  date: string;
}

const CurrentBook = ({
  title,
  author,
  imageUrl,
  url,
  progressBarWidth,
  barClass,
  date,
}: BookProps) => {
  const toPercent = (a: string) => {
    let split = a.split("/");
    let result = parseInt(split[0], 10) / parseInt(split[1], 10);
    return result * 100;
  };

  return (
    <div className="flex flex-col mb-12 overflow-hidden border rounded-lg shadow-sm bg-slate-1 border-slate-6 col-span-full xs:flex-row dark:bg-slateDark-1 dark:border-slateDark-4">
      <div className="flex items-center justify-center p-4 bg-slate-3 dark:bg-slateDark-3 sm:w-1/5">
        <div className="flex-shrink-0 w-16 h-24 overflow-hidden rounded shadow-md book-image dark:border-slateDark-4">
          <Image
            src={imageUrl}
            fill
            className="object-cover"
            alt="An image of the book cover"
            sizes="(min-width: 60em) 24vw,
            (min-width: 28em) 45vw,
            100vw"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center flex-grow p-4 bg-slate-1 sm:p-6 dark:bg-slateDark-1">
        <h3 className="mb-3 text-lg tracking-wide">
          <a
            className="mb-2 text-sm underline transition-all rounded text-slate-12 underline-offset-2 dark:text-slateDark-12 focus:outline-none focus:ring focus:ring-orange focus:bg-slate-2 dark:focus:bg-slateDark-3"
            href={url}
          >
            {title}
          </a>
          <span className="ml-1.5 text-sm font-normal text-slate-12 dark:text-slateDark-12">
            by {author}
          </span>
        </h3>

        <div className="progress">
          <p className="font-sans mb-1.5 text-xs text-slate-11 dark:text-slateDark-11">{`${toPercent(
            progressBarWidth
          )}% complete (${date})`}</p>
          <div className="w-full h-2 overflow-hidden rounded-sm bg-slate-4 sm:w-1/3 progress-bar dark:bg-slateDark-3">
            <div
              className={`progress h-2 bg-mint-400 dark:bg-mint-300 ${barClass}`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentBook;
