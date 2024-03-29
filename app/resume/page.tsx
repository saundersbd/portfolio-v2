import Icon from "../../src/components/Icon";
import Tag from "../../src/components/Tag";
import ScrollUp from "../components/ScrollUp";

export default function AboutPage() {
  return (
    <>
      <ScrollUp />
      <h1 className="mb-4 text-4xl font-bold leading-tight dark:text-white sm:leading-relaxed">
        Brian Saunders
      </h1>
      <div className="flex flex-col mb-12 font-sans text-slate-11 sm:flex-row dark:text-slateDark-11">
        <div className="flex items-center mr-3">
          <Icon icon="ID" className="w-5 mr-1.5" />
          Principal Product Designer
        </div>
        <div className="flex items-center mr-3">
          <Icon icon="globe" className="w-5 mr-1.5" />
          Chicago, IL
        </div>
        <div className="flex items-center">
          <Icon icon="mailOutline" className="w-5 mr-1.5" />
          saundersbd@gmail.com
        </div>
      </div>

      <h2 className="mb-6 text-3xl font-medium dark:text-slateDark-12">
        Experience
      </h2>

      <div className="mb-6">
        <h3 className="mb-2 text-xl leading-snug dark:text-slateDark-12">
          Principal Product Designer, Paylocity
        </h3>
        <p className="mb-3 font-sans text-sm text-slate-11 dark:text-slateDark-11">
          June 2016–Present (Chicago, IL / Remote)
        </p>
        <p className="mb-3">
          I&rsquo;m a Principal Product Designer at Paylocity. Right now
          I&rsquo;m leading the design for our next generation of mobile apps.
          This is a full stack project that involves extensive design systems
          work.
        </p>
        <p>
          Previously I helped grow Paylocity&rsquo;s Community product from
          around 20k MAU to over 1M MAU, created a new design system for a suite
          of video tools, designed a dashboard for helping companies understand
          and improve employee retention, designed a tool to calculate prorated
          and retro pay amounts, and devised an aggregated employee record
          experience. I also contributed components and documentation to Citrus,
          Paylocity&rsquo;s internal design system.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="mb-2 text-xl font-medium leading-snug dark:text-slateDark-12">
          Interaction Designer, Vokal
        </h3>
        <p className="mb-3 font-sans text-sm text-slate-11 dark:text-slateDark-11">
          April 2014–February 2016 (Chicago, IL)
        </p>
        <p>
          <a
            className="underline text-jade-10 dark:text-jadeDark-11"
            href="https://www.vokal.io/"
          >
            Vokal
          </a>{" "}
          is a design agency in Chicago that focuses creating mobile apps, but
          most often I was asked to design flexible systems for products with
          Android, iOS, and web components. The tight timelines and design
          constraints necessitated that we work with design systems in order to
          apply a design language to apps on many platforms. Much of my work was
          around designing these systems, and figuring out how to make them work
          in the early days of design systems when not a lot of standards were
          established.
        </p>
      </div>

      <div className="mb-10">
        <h3 className="mb-2 text-xl font-medium leading-snug dark:text-slateDark-12">
          User Experience Designer, Maddock Douglas
        </h3>
        <p className="mb-3 font-sans text-sm text-slate-11 dark:text-slateDark-11">
          2010–2014 (Elmhurst, IL)
        </p>
        <p>
          Maddock Douglas was a creative agency that specialized in helping
          their clients identify market opportunities and see future trends
          before they happened. It was a great first job because I got to do a
          little bit of everything. Most of my work involved design and
          front-end prototyping to visualize product concepts for our clients. I
          also worked on a comprehensive design system for the Blue Cross and
          Blue Shield of Michigan retail and consumer portals.
        </p>
      </div>

      <h2 className="mb-6 text-3xl font-medium dark:text-slateDark-12">
        Education
      </h2>
      <div className="mb-10">
        <h3 className="mb-2 text-xl font-medium leading-snug dark:text-slateDark-12">
          BFA Visual Communications, Northern Illinois University
        </h3>
        <p className="mb-3">
          My design education was grounded in durable principles that helped me
          be an effective designer in any medium or tool.
        </p>
      </div>

      <h2 className="mb-6 text-3xl font-medium dark:text-slateDark-12">
        Skills &amp; interests
      </h2>
      <div className="mb-12">
        <div className="flex flex-wrap bg-clip-content">
          <Tag>Figma</Tag>
          <Tag>Design Systems</Tag>
          <Tag>JavaScript</Tag>
          <Tag>React</Tag>
          <Tag>Next.js</Tag>
        </div>
      </div>
    </>
  );
}
