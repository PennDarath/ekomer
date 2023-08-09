"use client";

import Footer from "@/components/footer";
import { DynamicIcon } from "@/components/icon";
import Navbar from "@/components/navbar";
import useProducts from "@/hooks/use-products";
import { imageUrl } from "@/libs/helper";
import Image from "next/image";
import { useEffect, useState } from "react";

const fakeFilter = [
  {
    id: 1,
    label: "All",
  },
  {
    id: 2,
    label: "Iphone  ",
  },
  {
    id: 3,
    label: "Keyboard",
  },
  {
    id: 4,
    label: "Mouse",
  },
  {
    id: 5,
    label: "Airpod",
  },
  {
    id: 6,
    label: "Mac",
  },
];
const FakeSort = [
  {
    id: 1,
    label: "Featured",
    value: "featured",
  },
  {
    id: 2,
    label: "Newest",
    value: "created",
  },
  {
    id: 3,
    label: "Price: High -> Low",
    value: "-price",
  },
  {
    id: 4,
    label: "Price: Low -> High",
    value: "price",
  },
] as const;

export default function Product() {
  const { isLoading, products, mutate } = useProducts();
  const [sort, setSort] =
    useState<(typeof FakeSort)[number]["value"]>("featured");
  const [sortValue, setSortValue] =
    useState<(typeof FakeSort)[number]["label"]>("Featured");
  const handleClose = () => {
    const elem = document.activeElement as HTMLInputElement;
    if (elem) {
      elem?.blur();
    }
  };

  useEffect(() => {
    console.log("sort", sort);
    switch (sort) {
      case "featured":
        const featured = [...products].sort((a, b) => {
          return b.featured - a.featured;
        });
        mutate(featured, false);
        break;
      case "created":
        const newest = [...products].sort((a, b) => {
          return new Date(b.created).getTime() - new Date(a.created).getTime();
        });
        mutate(newest, false);
        console.log(newest, false);
        break;
      case "-price":
        const priceHigh = [...products].sort((a, b) => {
          return b.price - a.price;
        });
        mutate(priceHigh, false);
        console.log(priceHigh, false);
        break;
      case "price":
        const priceLow = [...products].sort((a, b) => {
          return a.price - b.price;
        });
        mutate(priceLow, false);
        console.log(priceLow, false);
    }
  }, [sort, products, mutate]);

  return (
    <>
      <Navbar />
      <div className="bg-gray-200 min-h-screen width-padding">
        <div className=" pb-16">
          <div className="border-b-[1px] border-gray-300 sticky top-0 z-20 bg-gray-200">
            <div className="py-6 flex max-sm:px-5  items-center duration-300 justify-between">
              <div className="w-50 max-lg:hidden">
                <div className="flex  cursor-pointer items-center hover:text-gray-900 hover:border-gray-300 bg-gray-100 border border-gray-300 w-fit py-2 px-4 rounded-lg gap-x-1">
                  <p>Hide filter</p>
                  <DynamicIcon name="filter" size={18} />
                </div>
              </div>
              <div className="flex items-center ">
                <div className="relative ">
                  <input
                    type="text"
                    className="bg-gray-100 border outline-none  border-gray-300  w-[40vw] py-2 px-4 rounded-lg"
                    placeholder="Search..."
                  />
                  <DynamicIcon
                    className="absolute right-3 bottom-3 cursor-pointer flex items-center"
                    color="gray"
                    name="search"
                    size={18}
                  />
                </div>
              </div>

              <div className="dropdown dropdown-end ">
                <div className="w-50 flex justify-end">
                  <div
                    tabIndex={0}
                    className="flex cursor-pointer items-center hover:text-gray-900 hover:border-gray-300 bg-gray-100 border border-gray-300 w-fit py-2 px-4 rounded-lg gap-x-2"
                  >
                    <p className="text-gray-500">Sort by</p>
                    <p className="text-black font-medium"> {sortValue}</p>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {FakeSort.map((item) => (
                    <li
                      key={item.id}
                      className="hover:bg-gray-200  hover:text-gray-900"
                      style={{}}
                    >
                      {sortValue === item.label ? (
                        <p className="text-black font-medium">{item.label}</p>
                      ) : (
                        <p
                          onClick={() => {
                            setSortValue(item.label);
                            setSort(item.value);
                            handleClose();
                          }}
                          className="text-gray-500"
                        >
                          {item.label}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-6 pt-6 lg:space-x-8">
            <div className=" border h-fit max-lg:hidden border-gray-100 bg-gray-100 sticky top-[114px] rounded-xl p-4 ">
              <p className="text-xl text-black font-semibold pb-7 px-2  ">
                categories
              </p>
              {fakeFilter.map((item) => (
                <label
                  htmlFor={item.id.toString()}
                  key={item.id}
                  className="flex cursor-pointer items-center p-2 rounded-lg mb-5 justify-between "
                >
                  <label
                    htmlFor={item.id.toString()}
                    className="cursor-pointer text-gray-600"
                  >
                    {item.label}
                  </label>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <input
                        id={item.id.toString()}
                        type="checkbox"
                        className="checkbox h-5 w-5"
                      />
                    </label>
                  </div>
                </label>
              ))}
            </div>
            <div className="grid col-span-5 max-lg:col-span-6 bg-gray-100 border rounded-lg">
              <div className="grid lg:grid-cols-3 max-lg:grid-cols-2 gap-7 p-7 ">
                {products.map((item: any) => (
                  <div
                    key={item.id}
                    className="group hover:scale-95 duration-300 bg-gray-200 cursor-pointer shadow rounded-lg "
                    style={{
                      boxShadow: "0px 0px 0px 1px rgb(0 0 0 / 20%)",
                    }}
                  >
                    <div className="bg-gray-300/50 h-64 max-sm:h-40 relative rounded-t-lg">
                      <Image
                        // fill
                        className="rounded-t-xl h-full w-full object-contain"
                        src={imageUrl(item, item.image)}
                        alt="Picture of the author"
                        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        width={500}
                        height={500}
                        // unoptimized
                      />
                    </div>
                    <div className="px-3 py-4">
                      <p
                        className="font-semibold underline group-hover:text-yellow-600"
                        style={{
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 1,
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                        }}
                      >
                        {item.title}
                      </p>
                      <p className="font-bold text-black text-xl pt-1.5">
                        $ {item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
