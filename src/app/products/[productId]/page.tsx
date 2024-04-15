import React from "react";
import { Metadata } from "next";
export type productPropstype = {
  params: { productId: string };
};
// Dynamic meta data
export const generateMetadata = async ({
  params,
}: productPropstype): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iphone ${params.productId}`);
    }, 100);
  });
  return {
    title: `Pro ${title}`,
  };
};

function ProductId({ params }: productPropstype) {
  return (
    <div>
      Product details {"   "}
      {params.productId}
    </div>
  );
}

export default ProductId;
