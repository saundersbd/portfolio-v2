import DirectionLink from "../../src/components/DirectionLink";

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="py-8 sm:py-24">
      <article>{children}</article>
      <hr className="my-8" />
      <DirectionLink direction="top" href="#top">
        Back to top
      </DirectionLink>
    </section>
  );
}
