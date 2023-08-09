"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
const fakeData = [
  {
    id: 1,
    name: "Slide 1",
    img: "https://i.pinimg.com/564x/b7/44/7c/b7447c43cc1c874a70a37c0fccf2fcf8.jpg",
  },
  {
    id: 2,
    name: "Slide 2",
    img: "https://i.pinimg.com/564x/d5/4b/dd/d54bdd5bb1fb30b8d5f1858b65c5b274.jpg",
  },
];

export default function App() {
  return (
    <div className="width-padding">
      <Swiper
        centeredSlides={true}
        pagination={{
          dynamicBullets: true,
        }}
        loop
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper lg:h-[65vh]  flex bg-gray-700"
      >
        {fakeData.map((item) => (
          <div key={item.id}>
            <SwiperSlide>
              <img className="w-[50vw] " src={item.img} alt={item.name} />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
}
