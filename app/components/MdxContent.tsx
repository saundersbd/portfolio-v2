"use client";

import PostImage from "../../src/components/PostImage";
import PageNote from "../../src/components/PageNote";
import HrSection from "../../src/components/HrSection";
import Reference from "../../src/components/Reference";
import Image from "next/image";
import { MDXComponents } from "mdx/types";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

const defaultComponents = {
  PostImage,
  PageNote,
  Image,
  HrSection,
  Reference,
};

export function MdxContent({
  source,
  rawSource,
}: {
  source: MDXRemoteSerializeResult;
  rawSource?: string;
}) {
  const components = { ...defaultComponents };

  return <MDXRemote {...source} components={components as MDXComponents} />;
}
