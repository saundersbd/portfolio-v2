import React from "react";
import { useState, useEffect } from "react";
import Image from "next/future/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useTheme } from "next-themes";

const PostImage = ({
  alt,
  className,
  caption,
  src,
  width,
  height,
  darkMode,
  darkSrc,
}) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  const img = (
    <>
      <Image
        alt={alt}
        height={height}
        src={`${src}${resolvedTheme}.png`}
        width={width}
        className="not-prose dark:border dark:border-gray-700"
      />
    </>
  );
  if (mounted) {
    return (
      <figure className={`mx-0 md:-mx-8 ${resolvedTheme}-mode-image`}>
        <Zoom>{img}</Zoom>
        {caption && (
          <figcaption className="mx-0 text-base leading-loose text-gray-500 md:mx-8 dark:text-gray-400">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <figure className={`mx-0 md:-mx-8 ${resolvedTheme}-mode-image`}>
      <Zoom>{img}</Zoom>
      {caption && (
        <figcaption className="mx-0 text-base leading-loose text-gray-500 md:mx-8 dark:text-navy-lighter">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default PostImage;
