import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import Section from "../../components/Section";
import ContainerNarrow from "../../components/ContainerNarrow";
import Grid from "../../components/Grid";
import DirectionLink from "../../components/DirectionLink";

const About = () => (
  <Layout className="pb-16">
    <Head>
      <title>Brian Saunders | About</title>
      <meta
        name="description"
        content="About Brian Saunders, a Chicago-based product designer"
      />
    </Head>
    <Section className="py-6 border-b sm:py-16 bg-beige dark:bg-navy-darkest dark:text-gray-100 border-orange-light dark:border-orange-lighter">
      <ContainerNarrow>
        <Grid className="grid-cols-6">
          <div className="col-span-full lg:col-start-2 lg:col-end-6">
            <h1 className="font-sans text-3xl font-bold leading-normal tracking-wide text-center sm:text-5xl text-navy-darkest dark:text-white">
              About Me
            </h1>
          </div>
        </Grid>
      </ContainerNarrow>
    </Section>
    <Section className="py-8 bg-white sm:py-16 dark:bg-navy-darkest">
      <ContainerNarrow>
        <Grid className="grid-cols-6 gap-y-12">
          <div className="prose prose-lg col-span-full lg:col-start-2 lg:col-end-6 md:prose-xl dark:prose-dark">
            <h2>Experience</h2>

            <p>
              Right now I am a Senior Product Designer at{" "}
              <a target="_blank" href="https://www.paylocity.com">
                Paylocity
              </a>
              , where I work on a product called{" "}
              <a
                target="_blank"
                href="https://www.paylocity.com/our-products/modern-workforce-solutions/"
              >
                Community
              </a>
              . Community helps teams collaborate and stay aligned at work.
              Other product areas I've worked in at Paylocity include payroll,
              HR, and analytics.
            </p>

            <p>
              Before Paylocity I worked at an agency called{" "}
              <a target="_blank" href="https://www.vokal.io">
                Vokal
              </a>{" "}
              where I designed cross-platform experiences, and created design
              systems to support them. Before that I worked at{" "}
              <a target="_blank" href="https://www.maddockdouglas.com">
                Maddock Douglas
              </a>
              , an innovation firm in the Chicago suburbs. At MD I used my
              prototyping skills to help our clients see future opportunities
              for growth.
            </p>

            <h2>What sets me apart</h2>

            <h3>Front end knowledge</h3>

            <p>
              The best thing I ever did for myself was take the time to learn
              HTML and CSS. We were designing our first websites in school and
              were supposed to use Dreamweaver to build them. I knew that wasn't
              how real websites were made, so I spent an afternoon at the
              library teaching myself how to do it the right way. I learned HTML
              and CSS, and those skills have led to every professional
              opportunity I've had since. After school I hacked together
              wordpress themes and started learning more PHP, and eventually I
              slowly began to teach myself Javascript too. I've continued to
              expand my front end skills and I depend on them to communicate
              with engineers and prototype ideas every day. I built this website
              myself using React and{" "}
              <a target="_blank" href="https://nextjs.org">
                Next.js
              </a>
              .
            </p>

            <h3>Design background</h3>

            <p>
              I went to school for traditional graphic design and my education
              was grounded in durable principles of good design, rather than
              software skills that would become outdated the second I left
              school. NIU taught me what good looks like, and how to think like
              a designer in any medium. Early in the program I only wanted to
              learn more tools, but I've come to realize that they got it right
              by leading with design fundamentals.
            </p>

            <h3>Passion for writing</h3>

            <p>
              Writing is how I clarify my thinking. A lot of times I'll sit down
              to write something and realize that I don't know how to say what's
              on my mind. That's the test—if I can write about it clearly, that
              means I understand it.
            </p>

            <h2>About this site</h2>

            <p>
              I built this site myself using Next.js. A lot of the content comes
              from MDX files so I am using{" "}
              <a
                target="_blank"
                href="https://github.com/hashicorp/next-mdx-remote"
              >
                next-mdx-remote
              </a>{" "}
              to manage that. The site is being developed{" "}
              <a
                target="_blank"
                href="http://github.com/saundersbd/portfolio-v2/"
              >
                in the open
              </a>
              .
            </p>

            <hr className="h-px bg-gray-400 border-0 dark:bg-navy-light" />
          </div>

          <div className="col-span-full lg:col-start-2 lg:col-end-6">
            <DirectionLink href="#top" icon="top">
              Back to top
            </DirectionLink>
          </div>
        </Grid>
      </ContainerNarrow>
    </Section>
  </Layout>
);

export default About;
