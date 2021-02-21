import React from "react";
import tw from "twin.macro";

const StyledContainer = ({ size }) => [
  size === "normal" &&
    tw`w-full max-w-full lg:max-w-5xl xl:max-w-7xl sm:mx-auto px-8`,
  size === "narrow" &&
    tw`w-full max-w-full md:max-w-3xl lg:max-w-5xl sm:mx-auto px-8`,
];

const Container = ({ className, children, ...props }) => (
  <div className={className} css={StyledContainer(props)} {...props}>
    {children}
  </div>
);

export default Container;
