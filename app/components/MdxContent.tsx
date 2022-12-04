"use client";

import PostImage from "../../src/components/PostImage";
import Image from "next/image";
import { MDXComponents } from "mdx/types";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

const defaultComponents = {
  PostImage,
  Image,
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
