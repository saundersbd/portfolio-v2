import DirectionLink from "../../src/components/DirectionLink";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="py-24">
      <article className="prose dark:prose-invert prose-blockquote:font-normal prose-h1:font-semibold prose-h2:font-semibold">
        {children}
      </article>
      <hr className="my-8" />
      <DirectionLink direction="top" href="#top">
        Back to top
      </DirectionLink>
    </section>
  );
}
