"use client";
import { useRouter } from "next/navigation";
import React from "react";

const OrderProduct = () => {
  const router = useRouter();

  const handleClick = () => {
    console.log("Placing your order");
    router.push("/"); // navigate
    // router.replace("/"); // it clear all the back history  of router
    // router.back(); // history back
    // router.forward(); //history forward
  };

  return (
    <div>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place order</button>
    </div>
  );
};

export default OrderProduct;
