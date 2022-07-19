import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import DirectionLink from "../../components/DirectionLink";

const About = () => (
  <Layout>
    <Head>
      <title>Brian Saunders | About</title>
      <meta
        name="description"
        content="About Brian Saunders, a Chicago-based product designer"
      />
    </Head>
    <div className="py-8 sm:py-16">
      <DirectionLink href="/" className="mb-12" direction="left">
        Back to Home
      </DirectionLink>
      <div className="prose dark:prose-dark">
        <h2>Experience</h2>

        <p>
          Right now I am a Product Design Lead at{" "}
          <a target="_blank" href="https://www.paylocity.com">
            Paylocity
          </a>
          , where I am leading the design of the new mobile apps.
        </p>

        <p>
          Before Paylocity I worked at an agency called{" "}
          <a target="_blank" href="https://www.vokal.io">
            Vokal
          </a>{" "}
          where I designed cross-platform experiences, and created design
          systems to support them. Before that I worked at Maddock Douglas, an
          innovation firm in the Chicago suburbs. At MD I used my prototyping
          skills to help our clients see future opportunities for growth.
        </p>

        <h2>My background</h2>

        <h3>Front-end knowledge</h3>

        <p>
          The best thing I ever did for myself was take the time to learn HTML
          and CSS. We were designing our first websites in school and were
          supposed to use Dreamweaver to build them. I knew that wasn't the
          proper way to make a website, so I spent an afternoon at the library
          teaching myself how to write HTML and CSS. After school I learned PHP
          through designing and building Wordpress themes, and eventually I
          taught myself Javascript. These skills have led to every professional
          opportunity I've had since. I've continued to expand my front end
          skills and depend on them to communicate with developers and prototype
          ideas every day. I built this website my using React and{" "}
          <a target="_blank" href="https://nextjs.org">
            Next.js
          </a>
          .
        </p>

        <h3>Design education</h3>

        <p>
          I went to school for traditional graphic design. My education was
          grounded in durable principles of good design, rather than software
          skills that would become outdated the second I left school. NIU taught
          me what good looks like, and how to think like a designer in any
          medium. Early in the program I only wanted to learn about more design
          tools, but I've realized that they got it right by leading with design
          fundamentals.
        </p>

        <h3>Passion for writing</h3>

        <p>
          Writing is a sort of test for me. If I find that I can write about
          something clearly, that usually means I understand it.
        </p>
      </div>
      <hr className="mt-12" />
      <DirectionLink href="#top" className="mt-12" direction="top">
        Back to top
      </DirectionLink>
    </div>
  </Layout>
);

export default About;
