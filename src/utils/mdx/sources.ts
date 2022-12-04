import * as z from "zod";
import { createSource } from ".";

export const Post = createSource({
  contentPath: "blog",
  basePath: "/blog",
  sortBy: "published",
  sortOrder: "desc",
  frontMatter: z.object({
    title: z.string(),
    published: z.string(),
    description: z.string().optional(),
    featured: z.boolean().optional(),
  }),
});

export const Book = createSource({
  contentPath: "books",
  basePath: "/bookshelf",
  sortBy: "title",
  sortOrder: "desc",
  frontMatter: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string().optional(),
    cover: z.string(),
    url: z.string(),
    edited: z.string().optional(),
  }),
});
