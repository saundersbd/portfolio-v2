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
            If you want to get in touch just send me a message at the address
            listed below.
          </p>
          <Button
            href="mailto:saundersbd@gmail.com"
            size="normal"
            type="secondary"
            className="sm:w-max w-full"
          >
            <Icon icon="mail" className="w-5 mr-2" />
            Send a message
          </Button>

          <hr className="h-px my-14 bg-gray-400 dark:bg-gray-600 border-0" />

          <h2>Overview</h2>

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
            Before Paylocity I worked at an agency called Vokal where I focused
            on designing mobile apps a creating design systems to support
            cross-platform experiences. Prior to that I worked at Maddock
            Douglas, an innovation firm in the Chicago suburbs, where I used my
            prototyping skills to help clients see future opportunities for
            growth.
          </p>

          <p>
            My personal interests include playing musical instruments and
            reading. I can't always listen to classical music while I work
            because there's a real risk of getting "too into it."
          </p>

          <h2>What sets me apart</h2>

          <h3>Front end knowledge</h3>

          <p>
            The best thing I ever did for myself was take the time to learn HTML
            and CSS. We were designing architecture websites in school and were
            supposed to use Dreamweaver to build our website. I wasn't satisfied
            because I knew that wasn't the best way to build a website. I spent
            an afternoon at the library teaching myself how to make a basic
            website by writing HTML and CSS, and those skills have led to every
            professional opportunity I've ever had. Today I've expanded my front
            end skills to include JavaScript frameworks like React and I depend
            on those skills every day to communicate better with engineers and
            prototype ideas.
          </p>

          <h3>Formal design background</h3>

          <p>
            I went to school for traditional graphic design and therefore my
            education was based on durable principles of good design, rather
            than software skills that would become outdated the second I left
            school. NIU taught me what good looks like, and how to think like a
            designer across any medium. Typography, grid layouts, and use of
            color were all core parts of the curriculum. Early on in the program
            I only wanted to learn more about technology and software, but I've
            since discovered that they got it right by training me as a designer
            first. I rely on my passion for learning to teach myself whatever
            the latest tool happens to be.
          </p>

          <h3>Passion for writing</h3>

          <p>
            Writing is the way I clarify my thinking. A lot of times I'll sit
            down to write documentation and realize that I don't know how to say
            what's on my mind. That's a red flag, because if I can't write
            clearly about something it's a sign I'm not thinking about it
            clearly. For me writing is a test of sorts—if I can write about it,
            that means I understand it.
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
