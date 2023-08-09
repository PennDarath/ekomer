"use client";
import { fakeItem } from "@/db";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

export default function Page() {
    const pathname = useParams();


  const product = fakeItem.find((item) => item.id === Number(pathname.id));
  if (!product) return <div>not found</div>;
  return (
    <>
      <div>
        {/* <Image
          src={product.src}
          width={500}
          alt="Picture of the author"
          height={500}
        />
        <h1>{product?.title}</h1>
        <p className="text-3xl font-medium">${product?.price}</p> */}
      </div>
    </>
  );
}
