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
            className="overflow-hidden bg-gray-200 py-16 sm:py-24"
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid items-center max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div
                  className={`${data.alt ? "order-2" : ""} lg:pr-8 lg:pt-2 `}
                >
                  <div className="lg:max-w-lg">
                    <h2 className="text-3xl font-semibold leading-7 text-gray-900 sm:text-3xl">
                      {data.heading}
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                      {data.description}
                    </p>
                  </div>
                </div>
                <div>
                  <Image
                    src={data.img}
                    width={600}
                    height={600}
                    alt=""
                    className="rounded-lg"
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
