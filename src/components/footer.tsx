import { DynamicIcon } from "@/components/icon";
import React from "react";

export default function Footer() {
  return (
    <div className=" width-padding bg-gray-200">
      <div className=" py-7 bg-black px-5 grid gap-x-32 lg:grid-cols-3 md:grid-cols-2 max-md:gap-y-10">
        <div className="cursor-pointer space-y-2">
          <p className="text-white font-semibold text-xl pb-2">Tevada</p>
          <p className="text-white">
            Website built for selling pructs and services online from all
            bandits. We are here to help you to find the best products and
            services that you need however the police will catch us soon.
          </p>
        </div>
        <div className="cursor-pointer space-y-2">
          <p className="text-white font-semibold text-xl pb-2">ContactUs</p>
          <p className="text-white">info@tevada.dev</p>
          <div className="flex items-center gap-x-1">
            <DynamicIcon size={18} name="phone" color="white" />
            <p className="text-white">+855 10441614</p>
          </div>

          <div className="text-white flex items-center gap-x-2 ">
            <DynamicIcon size={18} name="mail" color="white" />
            <p>darathpenn@gmail.com</p>
          </div>
          <div className="text-white flex items-center  gap-x-2 ">
            <DynamicIcon name="map" size={18} color="white" />
            <p>St18z, 7Makara, Toulkork, Phnom Penh</p>
          </div>
        </div>
        <div className="cursor-pointer space-y-2">
          <p className="text-white font-semibold text-xl pb-2">Follow US</p>
          <p className="text-white">here our social link</p>
          <div className="flex items-center gap-x-3 ">
            <DynamicIcon size={18} name="facebook" color="white" />
            <DynamicIcon size={18} name="linkin" color="white" />
            <DynamicIcon size={18} name="instagram" color="white" />
          </div>
        </div>
      </div>
    </div>
  );
}
