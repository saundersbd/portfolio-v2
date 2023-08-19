import DirectionLink from "../../../src/components/DirectionLink";

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DirectionLink direction="left" href="/bookshelf" className="mb-8">
        Back to bookshelf
      </DirectionLink>
      <article className="prose dark:prose-invert prose-blockquote:font-normal prose-h1:font-medium prose-h2:font-medium">
        {children}
      </article>
      <hr className="h-px my-8 border-none dark:bg-gray-800" />
    </>
  );
}
