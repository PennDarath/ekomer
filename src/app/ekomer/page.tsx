"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { fakeItem } from "@/db";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  // const { products, mutate, isLoading } = useProducts();
  const productsFilter = fakeItem;

  return (
    <div>
      <Navbar />
      <div className="bg-gray-200  max-sm:h-full pt-10  border-black min-h-screen">
        <div className="width-padding mb-14 bg-gray-200 rounded-xl relative">
          <div
            className="w-full h-[500px] brightness-50"
            style={{
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <video
              autoPlay
              muted
              preload="auto"
              loop
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                overflow: "hidden",
              }}
            >
              <source src="/video" />
            </video>
          </div>
          <div className="absolute items-center justify-center flex right-0 top-0 rounded-[20px] left-0 bottom-0 ">
            <Link href="/ekommer/products">
              <motion.div
                whileTap={{
                  scale: 0.9,
                }}
                whileHover={{
                  scale: 0.95,
                }}
                className="bg-black  py-3 px-5 rounded-lg cursor-pointer  border-2"
              >
                <div className="flex items-center gap-x-1">
                  <p className="text-2xl flex items-center  text-white font-medium gap-x-1">
                    Shop Now 
                  </p>
                  {/* <DynamicIcon
                    className="animate-pulse "
                    name="arrow_right"
                    size={23}
                    color="white"
                  /> */}
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
        <p className="underline pb-5 text-center text-2xl text-gray-900 font-medium ">
          featured products
        </p>
        {/* Banner */}
        <div className="grid max-sm:px-5 width-padding grid-cols-2 lg:grid-cols-4 gap-5 pb-10">
          {productsFilter.map((item) => (
            <div
              className="relative hover:scale-95 duration-300 cursor-pointer bg-gray-200  flex rounded-lg "
              key={item.id}
              style={{
                boxShadow: "0px 0px 0px 1px rgb(0 0 0 / 20%)",
              }}
            >
              <Image
                // fill
                className="rounded-t-xl max-sm:h-[250px] h-[280px] object-contain"
                src={item.src}
                alt="Picture of the author"
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                width={500}
                height={500}
                // unoptimized
              />
              <div>
                <div className="absolute bg-black/50 text-xl font-semibold p-4 rounded-b-lg left-0 bottom-0 w-full text-white">
                  <p
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {item.title}
                  </p>
                </div>
                <p className="text-white  absolute bottom-0 left-0 rounded-b-lg p-5"></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
