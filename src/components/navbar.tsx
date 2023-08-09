"use client";
import { DynamicIcon } from "@/components/icon";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

function Navbar() {
  const fakeNav = [
    {
      id: 1,
      label: "Home",
      href: "/ekomer",
    },
    {
      id: 2,
      label: "Products",
      href: "/ekomer/products",
    },
    {
      id: 3,
      label: "ContactUs",
      href: "/ekomer/contact",
    },
  ];
  //   const [active, setActive] = React.useState(fakeNav[0].id);
  //   const handleChoose = (id: number) => {
  //     setActive(id);
  //   };
  const pathname = usePathname();
  const handleClose = () => {
    const elem = document.activeElement as HTMLInputElement;
    if (elem) {
      elem?.blur();
    }
  };
  return (
    <React.Fragment>
      <div className="bg-gray-200 ">
        <div className="width-padding flex items-center pt-2 justify-between lg:pt-7">
          <p className="flex items-center max-sm:justify-center text- text-2xl text-black font-medium w-40">
            Tevada
          </p>
          <div className="flex items-center justify-center space-x-5 max-lg:hidden">
            {fakeNav.map((item) => {
              const isActive = pathname === item.href;
              
              
              return (
                <div key={item.id}>
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-center  rounded-lg cursor-pointer duration-300"
                    style={{
                      backgroundColor: isActive ? " rgb(209 213 219)" : "",
                    }}
                  >
                    {item.label}
                  </Link>
                </div>
              );
            })}
          </div>
          <div className=" w-40 justify-end flex max-lg:hidden">
            <motion.div
              whileTap={{
                scale: 0.9,
              }}
              whileHover={{
                scale: 0.95,
              }}
              className=" border-black py-2 px-4 rounded-xl cursor-pointer  border"
            >
              <p

                className="flex items-center  text-black font-semibold gap-x-1"
              >
                Login
              </p>
            </motion.div>
          </div>
          {/* mobile */}
          <div className="drawer z-50 lg:hidden flex justify-end ">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
              {/* Navbar */}
              <div className="w-full navbar ">
                <div className="flex-none lg:hidden">
                  <label
                    htmlFor="my-drawer-3"
                    className="btn btn-square btn-ghost"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-6 h-6 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </label>
                </div>
              </div>
              {/* Page content here */}
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
              <ul className="menu p-4 w-80 h-full bg-base-200">
                {/* Sidebar content here */}
                <div className="flex items-center justify-between pb-5">
                  <p className="font-serif text-black font-medium cursor-default">
                    tevada
                  </p>

                  <label htmlFor="my-drawer-3" className="drawer-overlay">
                    <DynamicIcon
                      name="x"
                      size={22}
                      color="black"
                      className="border border-gray-300 cursor-pointer rounded-sm p-0.5"
                    />
                  </label>
                </div>
                <li>
                  <p>Home</p>
                </li>
                <li>
                  <p>Products</p>
                </li>
                <li>
                  <p>Products</p>
                </li>
              </ul>
            </div>
          </div>

          {/* mobile */}
        </div>
        <div className="border-b-[1px] border-gray-300 pt-2 lg:pt-7" />
      </div>

    </React.Fragment>
  );
}

export default Navbar;
