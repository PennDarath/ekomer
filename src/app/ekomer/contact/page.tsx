import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

export default async function Contact() {
  return (
    <>
      <Navbar />
      <div className=" pt-10 bg-gray-200 min-h-screen">
        <div className="width-padding pb-10 max-sm:px-5 grayscale ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d683.0512844795735!2d104.89381824882332!3d11.567494966257506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2skh!4v1689568345525!5m2!1sen!2skh"
            width={"100%"}
            height="450"
            style={{ border: 0, borderRadius: "10px" }}
            loading="lazy"
          ></iframe>
        </div>
        <div className="width-padding text-center text-2xl font-medium font-serif ">
          <p className="text-gray-700 pt-5">Get in touch with us!</p>
          <div className="pt-16 grid grid-cols-3">
            <div className=" h-32 border-r border-black">
              <p className="text-gray-500 ">Benjamin Disraeli</p>
            </div>
            <div className=" h-32 border-r border-black">
              <p className="text-gray-500 ">Benjamin Disraeli</p>
            </div>
            <div className=" h-32">
              <p className="text-gray-500 ">Benjamin Disraeli</p>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}
