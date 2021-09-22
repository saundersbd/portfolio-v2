import React from "react";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

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
  const img = (
    <>
      <Image
        alt={alt}
        height={height}
        src={darkMode ? darkSrc : src}
        width={width}
      />
    </>
  );

  if (darkMode) {
    return (
      <figure className="mx-0 md:-mx-8 dark-mode-image">
        <Zoom
          overlayBgColorStart="rgba(6, 6, 6, 0)"
          overlayBgColorEnd="rgba(6, 6, 6, 0.95)"
        >
          {img}
        </Zoom>
        {caption && (
          <figcaption className="mx-0 mt-1 text-base leading-loose text-gray-500 md:mx-8 dark:text-gray-300">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <figure className="mx-0 md:-mx-8 light-mode-image">
      <Zoom>{img}</Zoom>
      {caption && (
        <figcaption className="mx-0 mt-1 text-base leading-loose text-gray-500 md:mx-8 dark:text-gray-300">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default PostImage;
