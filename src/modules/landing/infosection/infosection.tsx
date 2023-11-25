"use client";

import Image from "next/image";
import { sectionData } from "./data/section-data";

export const InfoSection = () => {
  return (
    <>
      {sectionData.map((data) => (
        <>
          <div
            key={data.id}
            id="explore"
            className="overflow-hidden bg-gray-200 py-20 sm:py-32"
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid items-center max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div
                  className={`${data.alt ? "order-2" : ""} lg:pr-8 lg:pt-2 `}
                >
                  <div className="lg:max-w-lg">
                    <h2 className="text-3xl font-semibold leading-7 text-gray-900 sm:text-3xl font-montserrat">
                      {data.heading}
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                      {data.description}
                    </p>
                  </div>
                </div>
                <div>
                  {/* <img
                  src="https://images.unsplash.com/photo-1583912086296-be5b665036d3?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Product screenshot"
                  className={`${
                    data.alt
                      ? "order-1 right-40"
                      : " md:-ml-4 lg:-ml-0"
                  }  rounded-xl max-w-xl max-h-none h- shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]`}
                  width={700}
                  height={700}
                /> */}
                  <Image
                    src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={600}
                    height={600}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};
