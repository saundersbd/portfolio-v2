import DirectionLink from "../../src/components/DirectionLink";

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="py-8 sm:py-24">
      <article className="prose dark:prose-invert prose-blockquote:font-normal">
        {children}
      </article>
      <hr className="h-px my-8 border-none dark:bg-gray-800" />
      <DirectionLink direction="top" href="#top">
        Back to top
      </DirectionLink>
    </section>
  );
}
