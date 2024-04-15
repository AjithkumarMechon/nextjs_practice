import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      <h1>Page Heading</h1>
      <Link href="/products">Products</Link>
      <br />
      <Link href="/blog">Blog</Link>
      <br />
      <Link href="/register">register</Link>
      <br />
      <Link href="/order-product">Order Product</Link>
    </div>
  );
}

export default page;
