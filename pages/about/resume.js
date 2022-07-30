import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import DirectionLink from "../../components/DirectionLink";
import Icon from "../../components/Icon";
import Tag from "../../components/Tag";
import HrSection from "../../components/HrSection";

const Resume = () => (
  <Layout>
    <Head>
      <title>Brian Saunders | Resume</title>
      <meta
        name="description"
        content="The resume for Brian Saunders, a product designer from Chicago"
      />
    </Head>
    <div className="py-8 sm:py-16">
      <DirectionLink href="/" className="mb-12" direction="left">
        Back to Home
      </DirectionLink>
      <div className="leading-relaxed dark:text-gray-200">
        <h1 className="mb-4 text-5xl font-bold leading-tight dark:text-white sm:leading-relaxed font-display">
          Brian Saunders
        </h1>
        <div className="flex flex-col mb-12 text-transparent text-gray-600 sm:flex-row dark:text-gray-300">
          <div className="flex items-center mr-3">
            <Icon icon="ID" className="w-5 mr-1.5" />
            Product Design Lead
          </div>
          <div className="flex items-center mr-3">
            <Icon icon="globe" className="w-5 mr-1.5" />
            Chicago, IL
          </div>
          <div className="flex items-center">
            <Icon icon="mailSolid" className="w-5 mr-1.5" />
            <a className="hover:underline" href="mailto:saundersbd@gmail.com">
              saundersbd@gmail.com
            </a>
          </div>
        </div>

        <h2 className="mb-6 text-3xl font-bold font-display dark:text-white">
          Experience
        </h2>

        <div className="mb-6">
          <h3 className="mb-2 text-xl font-bold font-display dark:text-white">
            Product Design Lead, Paylocity
          </h3>
          <p className="mb-3 text-sm font-bold text-gray-500 dark:text-gray-400">
            June 2016–Present (Chicago, IL / Remote)
          </p>
          <p className="mb-3">
            I'm a Product Design Lead at Paylocity. Right now I'm leading the
            design for the company's next generation mobile apps.
          </p>
          <p>
            Previously I helped grow Paylocity's Community product from around
            20k MAU to over 1M MAU, created a new design system for a suite of
            video tools, designed a dashboard for helping companies understand
            and improve employee retention, designed a tool to calculate
            prorated and retro pay amounts, and devised an aggregated employee
            record experience. I also contributed components and documentation
            to Citrus, Paylocity’s internal design system.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="mb-2 text-xl font-bold font-display dark:text-white">
            Interaction Designer, Vokal
          </h3>
          <p className="mb-3 text-sm font-bold text-gray-500 dark:text-gray-400">
            April 2014–February 2016 (Chicago, IL)
          </p>
          <p>
            Vokal is a design agency in Chicago that focuses creating mobile
            apps, but most often I was asked to design flexible systems for
            products with Android, iOS, and web components. The tight timelines
            and design constraints necessitated that we work with design systems
            in order to apply a design language to apps on many platforms. Much
            of my work was around designing these systems, and figuring out how
            to make them work in the early days of design systems when not a lot
            of standards were established.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="mb-2 text-xl font-bold font-display dark:text-white">
            User Experience Designer, Maddock Douglas
          </h3>
          <p className="mb-3 text-sm font-bold text-gray-500 dark:text-gray-400">
            2010–2014 (Elmhurst, IL)
          </p>
          <p>
            Maddock Douglas was a creative agency that specialized in helping
            their clients identify market opportunities and see future trends
            before they happened. It was a great first job because I got to do a
            little bit of everything. Most of my work involved design and
            front-end prototyping to visualize product concepts for our clients.
            I also worked on a comprehensive design system for the Blue Cross
            and Blue Shield of Michigan retail and consumer portals.
          </p>
        </div>

        <h2 className="mb-6 text-3xl font-bold font-display dark:text-white">
          Education
        </h2>
        <div className="mb-6">
          <h3 className="mb-2 text-xl font-bold dark:text-white">
            BFA Visual Communications, Northern Illinois University
          </h3>
          <p className="mb-3">
            My design education was grounded in durable principles that helped
            me be an effective designer in any medium or tool.
          </p>
        </div>

        <h2 className="mb-6 text-3xl font-bold font-display dark:text-white">
          Skills
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
      </div>

      <hr className="h-px bg-gray-300 border-none dark:bg-gray-700" />

      <DirectionLink href="#top" className="mt-12" direction="top">
        Back to top
      </DirectionLink>
    </div>
  </Layout>
);

export default Resume;
