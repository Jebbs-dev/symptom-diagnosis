import React from "react";
import Image from "next/image";
import { foot_wigs } from "./data/widgets";

import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa6";

export const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 p-10 text-white">
        <div className=" max-w-7xl mx-auto grid lg:grid-cols-footer gap-5 md:grid-cols-3 md:gap-10 ">
          <div className="">
            <a href="/" className="flex items-center mb-4">
              <Image
                src="/images/img-bg-logo.png"
                width={40}
                height={40}
                alt="deliLogo"
                className="mr-2"
              />
              <span className="font-semibold text-lg">
                Sanita
              </span>
            </a>
            <p className="opacity-40">
              Indulge in a culinary journey of exquisite flavors at Jebbs Deli,
              where passion meets the plate. Discover a symphony of taste in
              every bite.
            </p>
            <div className="flex flex-row mt-5">
              <div className="flex rounded-full h-8 w-8 items-center justify-around bg-violet-600 text-white mr-3">
                <FaFacebookF className="align-middle" />
              </div>
              <div className="flex rounded-full h-8 w-8 items-center justify-around bg-violet-600 text-white mr-3">
                <FaTwitter className="align-middle" />
              </div>
              <div className="flex rounded-full h-8 w-8 items-center justify-around bg-violet-600 text-white">
                <FaInstagram />
              </div>
            </div>
          </div>

          <div className="">
            <h3 className="text-[18px] font-semibold mb-7">
              Quick Links
            </h3>
            <div className="flex flex-col justify-around opacity-40 space-y-2">
              <a href="/">
                <span>Popular dishes</span>
              </a>
              <a href="/">
                <span>Menu</span>
              </a>
              <a href="/">
                <span>Reservations</span>
              </a>
              <a href="/">
                <span>Review</span>
              </a>
            </div>
          </div>

          <div className="">
            <h3 className="text-[18px] font-semibold mb-7">
              About Us
            </h3>
            <div className="flex flex-col justify-around opacity-40  space-y-2">
              <a href="/" className="">
                <span>Terms and condtions</span>
              </a>
              <a href="/">
                <span>Privacy policy</span>
              </a>
              <a href="/">
                <span>Contact</span>
              </a>
              <a href="/">
                <span>About us</span>
              </a>
            </div>
          </div>

          <div className="">
            <h3 className="text-[18px] font-semibold mb-7">
              Get in Touch
            </h3>

            {foot_wigs.map((foot) => {
              return (
                <>
                  <div
                    className="flex items-center space-x-2 mb-2 opacity-40"
                    key={foot.id}
                  >
                    <div className="shrink-0 text-white stroke-violet-600">
                      <foot.icon style={{ color: "#7c3aed" }} />
                    </div>
                    <div>
                      <p className="">{foot.text}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>

          <div className="">
            <div>
              <p className="opacity-40">
                &copy; Sanita 2023. All rights reserved{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
