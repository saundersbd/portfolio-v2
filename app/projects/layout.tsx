import DirectionLink from "../../src/components/DirectionLink";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="py-8 sm:py-24">
      <article className="prose dark:prose-invert prose-blockquote:font-normal prose-h1:font-semibold prose-h2:font-semibold">
        {children}
      </article>
      <hr className="h-px my-8 border-none dark:bg-slateDark-6" />
      <DirectionLink direction="top" href="#top">
        Back to top
      </DirectionLink>
    </section>
  );
}
