import React from "react";
import Image from "next/image";

const PostImageWide = ({ alt, className, caption, src, width, height }) => {
  const img = (
    <>
      <Image alt={alt} height={height} src={src} width={width} />
    </>
  );

  return (
    <figure>
      {img}
      {caption && (
        <figcaption className="mt-2 text-base text-gray-500 dark:text-gray-300">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default PostImageWide;
