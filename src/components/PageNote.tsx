import React from "react";

interface NoteProps {
  title: string;
  description: string;
}

const PageNote = ({ title, description }: NoteProps) => (
  <div className="px-4 py-3 mt-8 font-sans border rounded-lg border-jade-5 bg-jade-2 dark:bg-jadeDark-3 dark:border dark:border-jadeDark-4">
    {title && (
      <h3 className="mt-0 mb-2 !text-base text-semibold dark:text-white">
        {title}
      </h3>
    )}
    <p className="mt-0 mb-0 !text-base !leading-loose">{description}</p>
  </div>
);

export default PageNote;
