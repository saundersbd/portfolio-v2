import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import Grid from "../../components/Grid";
import DirectionLink from "../../components/DirectionLink";
import Button from "../../components/Button";
import Icon from "../../components/Icon";

const About = () => (
  <Layout className="pt-40 pb-12">
    <Head>
      <title>Brian Saunders | About</title>
    </Head>
    <Container size="narrow">
      <Grid className="grid-cols-6 gap-y-12">
        <div className="col-span-full lg:col-start-2 lg:col-end-6">
          <DirectionLink href="/" icon="back">
            Back to Home
          </DirectionLink>
        </div>
        <div className="col-span-full lg:col-start-2 lg:col-end-6 prose prose-lg md:prose-xl dark:prose-dark">
          <h1>About Me</h1>
          <p className="large">
            For as long as I can remember I've enjoyed solving puzzles and
            figuring things out. I get to do those things every day when I'm
            designing software and I'm thankful to have found a career that lets
            me practice what I enjoy and am good at.
          </p>
          <p className="large mb-12">
            If you want to get in touch just send me a message at{" "}
            <a href="mailto:saundersbd@gmail.com">saundersbd@gmail.com</a>.
          </p>

          <hr className="h-px my-14 bg-gray-400 dark:bg-gray-600 border-0" />

          <h2>Experience</h2>

          <p>
            I'm a designer living and working in Chicago. I have over 10 years
            of experience designing software. In that time I've worked at many
            levels of scale, from small mobile apps to enterprise software used
            by millions of people.
          </p>

          <p>
            Right now I am a Senior Product Designer at Paylocity, were I work
            on a product called Community. Community helps teams collaborate and
            stay aligned at work. Other areas I've worked in at Paylocity
            include payroll, HR, and analytics.
          </p>

          <p>
            Before Paylocity I worked at an agency called Vokal where I designed
            cross-platform experiences, and created design systems to support
            them. Before that I worked at Maddock Douglas, an innovation firm in
            the Chicago suburbs. At MD I used my prototyping skills to help our
            clients see future opportunities for growth.
          </p>

          <h2>What sets me apart</h2>

          <h3>Front end knowledge</h3>

          <p>
            The best thing I ever did for myself was take the time to learn HTML
            and CSS. We were designing architect websites in school and had to
            use Dreamweaver to build our website. I knew that wasn't how real
            websites were made, so I spent an afternoon at the library teaching
            myself how to do it the right way. I taught myself HTML and CSS, and
            those skills have led to every professional opportunity I've had
            since. Today I've expanded my front end skills I depend on them to
            communicate with engineers and prototype ideas.
          </p>

          <h3>Formal design background</h3>

          <p>
            I went to school for traditional graphic design and therefore my
            education was based on durable principles of good design, rather
            than software skills that would become outdated the second I left
            school. NIU taught me what good looks like, and how to think like a
            designer across any medium. Early on in the program I only wanted to
            learn more software tools, but I've come to realize that they got it
            right by leading with principles.
          </p>

          <h3>Passion for writing</h3>

          <p>
            Writing is how I clarify my thinking. A lot of times I'll sit down
            to write documentation and realize that I don't know how to say
            what's on my mind. And I realize that if I can't write clearly about
            something it's a sign I'm not thinking about it clearly. For me
            writing is a test of sorts—if I can write about it, that means I
            understand it.
          </p>
        </div>
        <div className="col-span-full lg:col-start-2 lg:col-end-6">
          <DirectionLink href="#top" icon="top">
            Back to top
          </DirectionLink>
        </div>
      </Grid>
    </Container>
  </Layout>
);

export default About;
