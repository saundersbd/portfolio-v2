import React from "react";
import Image from "next/image";

const PostImage = ({ alt, className, caption, src, width, height }) => {
  const img = (
    <>
      <Image alt={alt} height={height} src={src} width={width} />
    </>
  );

  return (
    <figure className="mx-0 md:-mx-8">
      {img}
      {caption && (
        <figcaption className="mx-0 md:mx-8 mt-1 text-base text-gray-500 dark:text-gray-300 leading-loose">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default PostImage;
