import Link from "next/link";
import React from "react";

function Product() {
  const productID = 10;
  return (
    <div>
      {/* Normal link navigate */}
      <Link href="/">Home</Link>
      <h3>Products List</h3>
      <p>
        <Link href="products/1">Product 1</Link>
      </p>
      <p>
        <Link href="products/2">Product 2</Link>
      </p>
      {/* Replace prop remove href history ex: href="products/3"   after click it remove history so click back directly navigate back href="/" */}
      <p>
        <Link href="products/3" replace>
          Product 3
        </Link>
      </p>
      {/* dynamic route link */}
      <p>
        <Link href={`products/${productID}`}>Product {productID}</Link>
      </p>
    </div>
  );
}

export default Product;
