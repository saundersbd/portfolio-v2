import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useTheme } from "next-themes";

interface ImageProps {
  alt: string;
  caption?: string;
  src: string;
  width: number;
  height: number;
}

const PostImage = ({ alt, caption, src, width, height }: ImageProps) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  if (mounted) {
    return (
      <figure className={`mx-0 md:-mx-8 ${resolvedTheme}-mode-image not-prose`}>
        <Zoom>
          <Image
            alt={alt}
            height={height}
            src={`${src}${resolvedTheme}.png`}
            width={width}
            className="not-prose dark:border dark:border-gray-700"
          />
        </Zoom>
        {caption && (
          <figcaption className="mx-0 mt-2 text-base leading-loose text-gray-500 md:mx-8 dark:text-gray-300">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <figure className={`mx-0 md:-mx-8 light-mode-image`}>
      <Zoom>
        <Image
          alt={alt}
          height={height}
          src={`${src}light.png`}
          width={width}
          className="not-prose dark:border dark:border-gray-700"
        />
      </Zoom>
      {caption && (
        <figcaption className="mx-0 text-base leading-loose text-gray-500 md:mx-8 dark:text-gray-300">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default PostImage;
