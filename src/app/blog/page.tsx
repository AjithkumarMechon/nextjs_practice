import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  //template
  // title: "Blog",
  //absolute
  title: {
    absolute: "Blog",
  },
};

function Blog() {
  return <div>Blog</div>;
}

export default Blog;
