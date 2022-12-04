import DirectionLink from "../../src/components/DirectionLink";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="py-8 sm:py-24">
      {children}
      <DirectionLink direction="top" href="#top">
        Back to top
      </DirectionLink>
    </section>
  );
}
