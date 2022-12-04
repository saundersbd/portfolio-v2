declare module "*.mdx" {
  export interface MDXFrontMatter {
    title?: string;
    shortTitle?: string;
    author?: string;
    published?: string;
    featured?: boolean;
    description?: string;
    categories?: [string];
    slug?: string;
    ogSlug?: string;
    cover?: string;
    url?: string;
  }

  export interface MDXFile {
    frontMatter: MDXFrontMatter;
    content: string;
    path: string;
  }

  let MDXComponent: (props: { [key: string]: unknown }) => JSX.Element;
  export const frontMatter: MDXFrontMatter | MDXFrontMatter[];
  export default MDXComponent;
}
