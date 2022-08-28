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
        <h1>About me</h1>
        <p>
          My whole life has been defined by a sense of curiosity and a
          excitement about learning new things. I came by a lot of my curiosity
          naturally as a side effect of growing up with teachers for parents. My
          parents encouraged me to read and took me and my sister on lots of
          educational vacations, and that sparked a lifelong interest in
          history. Music was also important in our house growing up, and music
          education is a tradition that goes back for generations on both sides
          of the family.
        </p>

        <p>
          I'm the designer who is always experimenting with new tools and
          reading constantly so that I can become a more well-rounded thinker.
          Design is a learning profession—if you don't absolutely love to learn
          new things I don't believe you can be successful in the long run. It
          brings me a lot of joy to learn something exciting and then share that
          knowledge with my coworkers.
        </p>

        <h2>Experience</h2>

        <p>
          Right now I'm a Principal Product Designer at{" "}
          <a target="_blank" href="https://www.paylocity.com">
            Paylocity
          </a>
          , where I'm leading the design for the company's new native mobile
          apps as we transition away from a hybrid app.
        </p>

        <p>
          Before Paylocity I worked at an agency called{" "}
          <a target="_blank" href="https://www.vokal.io">
            Vokal
          </a>{" "}
          where I created cross-platform experiences, and the design systems
          required to support them. Before that I worked at Maddock Douglas, an
          innovation firm in the Chicago suburbs. At MD I used my prototyping
          skills to help our clients see future opportunities for growth.
        </p>

        <h2>My background</h2>

        <h3>Front-end knowledge</h3>

        <p>
          The best thing I ever did for myself was take the time to learn HTML
          and CSS. We were designing our first websites in school and were
          supposed to use Dreamweaver to build them. I knew that wasn't the
          proper way to make a website, so rather than learn Dreamweaver I
          learned how to write HTML and CSS. After school I taught myself PHP by
          hacking together Wordpress themes, and eventually I taught learned
          Javascript. These skills have led to every professional opportunity
          I've ever had. I've continued to expand my front end skills and depend
          on them to communicate with engineering teams and prototype ideas
          every day. I built this website using React and{" "}
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
          something clearly, that usually means I understand it. I know I have a
          long way to go on my writing journey, but I'm passionate about it and
          enjoy the process.
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
