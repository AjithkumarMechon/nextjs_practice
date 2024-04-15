// "use client";
import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ReviewData",
};
function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}
const ReviewDetail = ({
  params,
}: {
  params: { reviewId: string; productId: string };
}) => {
  const random = getRandomInt(3);
  if (random === 1) {
    throw new Error("Error loading review");
  }
  if (parseInt(params.reviewId) > 100) {
    notFound();
  }
  return (
    <div>
      <h1>
        Review {params.reviewId} for product {params.productId}
      </h1>
    </div>
  );
};

export default ReviewDetail;
