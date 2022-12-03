import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import DirectionLink from "../../components/DirectionLink";

const ProjectsPage = () => (
  <Layout>
    <Head>
      <title>Brian Saunders | Projects</title>
    </Head>

    <div className="py-8 sm:py-16">
      <DirectionLink href="/" className="mb-12" direction="left">
        Back to Home
      </DirectionLink>
      <div className="mb-8 prose dark:prose-invert prose-blockquote:font-normal prose-h1:font-semibold prose-h2:font-semibold">
        <h1>Projects</h1>
        <p>
          I have more than a decade of experience designing web and mobile apps,
          and design systems, at all kinds of scale. Here's summary of my
          favorite projects and experiences throughout my career.
        </p>

        <h2>Paylocity</h2>

        <h4>Next generation native mobile apps</h4>

        <p>
          I am the lead designer for Paylocity's mobile products of the future.
          The project encompasses a ground-up redesign of our current hybrid
          mobile app, and definition of a brand new mobile design system as we
          transition to native apps. We have also been tasked with evolving
          Paylocity's visual language as a part of this effort.
        </p>

        <p>
          The biggest challenge has been designing iOS and Android apps that
          honor the design patterns and guidelines of each platform, while
          retaining the feel that they are Paylocity apps. We're trying to
          create a universal design system that can be used to deliver cohesive
          experiences for all platforms.
        </p>

        <h4>North star conceptual work</h4>

        <p>
          I partnered directly with executive leadership to evolve the product
          and business stories for all of Paylocity. The goal was to create
          visual concepts and prototypes that would challenge the way Paylocity
          positions its products and inspire the product roadmap for the next
          several years. My work, particularly on north star mobile concepts,
          influenced the organization on several levels.
        </p>

        <h4>Work on Community</h4>

        <p>
          Community is an communication platform product that Paylocity offers
          to its customers. I was the lead designer of Community for 3 years and
          in that time helped the product grow from 20k MAU to over 1M MAU. In
          that time I designed an announcements manager feature, a groups
          feature with collaborative documents, and a news feed.
        </p>

        <h4>Single employee record</h4>

        <p>
          I designed the first version of Paylocity's single employee record,
          which is a unified view of all of an employee's information in
          Paylocity. This project involved combining disparate information from
          all of Paylocity's products, which each had their own existing version
          of an employee profile.
        </p>

        <h2>Vokal Interactive</h2>

        <p>
          Vokal at the time was a small agency that specialized in creating
          native mobile apps for its clients. Almost all of the projects I
          worked on spanned web, iOS, and Android platforms, and required a full
          complement of design skills. At Vokal we were designing and building
          design systems to support multi-platform experiences before design
          systems really took off in the industry.
        </p>

        <h4>CampUSA mobile apps</h4>

        <p>
          My favorite project at Vokal involved building apps that helped people
          book campsites. I collaborated with back-end engineers to define the
          underlying data structure, created a system that supported the design
          of Android and iOS apps, and then supported the apps through
          development and delivery.
        </p>

        <h2>Maddock Douglas</h2>

        <h4>Blue Cross Blue Shield of Michigan</h4>

        <p>
          The biggest project I worked on at MD was a complete redesign of the
          member and retail web portals. This work exposed me early in my career
          to design systems work, as we had to define components that would be
          used in a CMS to build and maintain the portals.
        </p>

        <hr />
      </div>
      <DirectionLink href="#top" direction="top">
        Back to top
      </DirectionLink>
    </div>
  </Layout>
);

export default ProjectsPage;
