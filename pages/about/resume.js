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
      <DirectionLink href="/" icon="arrow-left" className="mb-12">
        Back to Home
      </DirectionLink>
      <div className="leading-relaxed dark:text-gray-200">
        <h1 className="font-bold text-5xl mb-4 dark:text-white leading-tight sm:leading-relaxed">
          Brian Saunders
        </h1>
        <div className="flex flex-col sm:flex-row text-transparent mb-12 text-gray-600 dark:text-gray-300">
          <div className="flex items-center mr-3">
            <Icon icon="ID" className="w-5 mr-1" />
            Product Design Lead
          </div>
          <div className="flex items-center mr-3">
            <Icon icon="globe" className="w-5 mr-1" />
            Chicago, IL
          </div>
          <div className="flex items-center">
            <Icon icon="mailSolid" className="w-5 mr-1" />
            saundersbd@gmail.com
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 dark:text-white">Experience</h2>

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2 dark:text-white">
            Product Design Lead, Paylocity
          </h3>
          <p className="mb-3 text-gray-500 dark:text-gray-400 font-bold text-sm">
            June 2016–Present (Chicago, IL/Remote)
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
          <h3 className="text-xl font-bold mb-2 dark:text-white">
            Interaction Designer, Vokal
          </h3>
          <p className="mb-3 text-gray-500 dark:text-gray-400 font-bold text-sm">
            April 2014–February 2016 (Chicago, IL)
          </p>
          <p>
            Vokal is a design agency in Chicago that focuses creating mobile
            apps, but most often I was asked to design flexible systems for
            products with Android, iOS, and web components. The tight timelines
            and design constraints necessitated that we work with design systems
            in order to apply a design langauge to apps on many platforms. Much
            of my work was around designing these systems, and figuring out how
            to make them work in the early days of design systems.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-bold mb-2 dark:text-white">
            User Experience Designer, Maddock Douglas
          </h3>
          <p className="mb-3 text-gray-500 dark:text-gray-400 font-bold text-sm">
            2010–2014 (Elmhurst, IL)
          </p>
          <p>
            Maddock Douglas was a creative agency that specialized in helping
            their clients identify market opportunities and see future trends
            before they happened. It was a great first job for me because I got
            to do a little bit of everything. Most of my work involved using my
            front-end prototyping and design skills to visualize conceptual
            products for our clients. I also worked on an extensive design
            system for the Blue Cross and Blue Shield of Michigan retail and
            consumer portals.
          </p>
        </div>

        <HrSection className="text-lg" />

        <h2 className="text-3xl font-bold mb-6 dark:text-white">
          Education &amp; Skills
        </h2>
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2 dark:text-white">
            BFA Visual Communications, Northern Illinois University
          </h3>
          <p className="mb-3">
            My design education was grounded in durable principles that helped
            me be an effective designer in any medium or tool.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-bold mb-2 dark:text-white">Skills</h3>
          <div className="flex flex-wrap bg-clip-content">
            <Tag>Figma</Tag>
            <Tag>Design Systems</Tag>
            <Tag>JavaScript</Tag>
            <Tag>React</Tag>
            <Tag>Next.js</Tag>
          </div>
        </div>
      </div>

      <hr className="border-none h-px bg-gray-300 dark:bg-gray-700" />

      <DirectionLink href="#top" icon="arrow-up" className="mt-12">
        Back to top
      </DirectionLink>
    </div>
  </Layout>
);

export default Resume;
