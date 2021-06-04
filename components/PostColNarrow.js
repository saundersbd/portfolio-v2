import React from "react";

const PostColNarrow = ({ children }) => (
  <div className="col-span-full lg:col-start-2 lg:col-end-6 prose prose-lg md:prose-xl dark:prose-dark max-w-none">
    {children}
  </div>
);

export default PostColNarrow;
