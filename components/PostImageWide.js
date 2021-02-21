import React from "react";
import Image from "next/image";

const PostImageWide = ({ alt, className, caption, src, width, height }) => {
  const img = (
    <>
      <Image alt={alt} height={height} src={src} width={width} />
    </>
  );

  return (
    <div className="col-span-full">
      <figure className="grid grid-cols-6 mb-4">
        <div className="col-span-full">{img}</div>
        {caption && (
          <figcaption className="col-span-full lg:col-start-2 lg:col-end-6 mt-2 text-base text-gray-500 dark:text-gray-300">
            {caption}
          </figcaption>
        )}
      </figure>
    </div>
  );
};

export default PostImageWide;
