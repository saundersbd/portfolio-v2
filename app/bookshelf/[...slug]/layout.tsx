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
      <article className="prose dark:prose-invert prose-blockquote:font-normal prose-h1:font-semibold prose-h2:font-semibold">
        {children}
      </article>
      <hr className="my-8" />
    </>
  );
}
