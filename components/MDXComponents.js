import Link from "next/link";
import Button from "../components/Button";
import Icon from "../components/Icon";
import PostImageWide from "../components/PostImageWide";
import PostImageNarrow from "../components/PostImageNarrow";
import PageNote from "../components/PageNote";
import HrSection from "../components/HrSection";

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents = {
  a: CustomLink,
  PostImageWide,
  PostImageNarrow,
  PageNote,
  Button,
  Icon,
  HrSection,
};

export default MDXComponents;
