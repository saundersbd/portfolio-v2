import hydrate from "next-mdx-remote/hydrate";

import { getFiles, getFileBySlug } from "../../lib/mdx";
import Head from "next/head";
import ProjectLayout from "../../layouts/ProjectLayout";
import MDXComponents from "../../components/MDXComponents";

const Project = ({ mdxSource, frontMatter }) => {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  });

  return (
    <ProjectLayout frontMatter={frontMatter}>
      <Head>
        <title>Brian Saunders | {frontMatter.title}</title>
      </Head>
      {content}
    </ProjectLayout>
  );
};

export default Project;

export async function getStaticPaths() {
  const projects = await getFiles("projects");

  return {
    paths: projects.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = await getFileBySlug("projects", params.slug);

  return { props: project };
}
