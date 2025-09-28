"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import Entete from "./Entete";

interface Block {
  title: string;
  content: string;
  image: string;
}

interface Receive {
  SPAN: string;
  H3: string;
  P: string;
  LEGEND: string;
  BLOCK: Block[];
}

export default function DoubleBlockWithImage({
  SPAN,
  H3,
  P,
  LEGEND,
  BLOCK,
}: Receive) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [limage, setLImage] = useState<string>(BLOCK[0].image);

  const handleImage = (index: number) => {
    setActiveIndex(index);
    setLImage(BLOCK[index].image);
  };

  return (
    <div className="w-full px-4 md:px-8 my-12">
      {/* Header */}
      <Entete
        SPAN={SPAN}
        H3={H3}
        P={P}
        BG="bg-[#ebf3fc]"
        TEXT="text-[#4c6cfc]"
      />

      {/* Cards and image container */}
      <div className="flex flex-col container mx-auto md:flex-row items-start md:items-center gap-8">
        {/* Cards */}
        <div className="flex flex-col w-full md:w-3/7">
          <p className="text-center text-lg font-semibold mb-4">{LEGEND}</p>

          {BLOCK.map((el, index) => (
            <div
              key={index}
              onMouseEnter={() => handleImage(index)}
              className={`border shadow-none p-4 rounded-lg mb-10 cursor-pointer transition-all duration-300 ${activeIndex === index ? "bg-amber-50" : "bg-gray-100"
                }`}
            >
              <div
                className={`-ml-5 -mb-7 rounded-lg border duration-500 shadow-none transition-colors ${activeIndex === index ? "bg-amber-100" : "bg-gray-100"
                  }`}
              >
                {/* Title */}
                <div className="m-0 p-4">
                  <h3 className="text-sm font-semibold w-auto text-left rounded-xl px-2 py-0.5">
                    {el.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-4 pt-2">
                  <p className="text-sm md:text-base leading-relaxed text-gray-700">
                    {el.content}
                  </p>
                </div>
              </div>
            </div>

          ))}
        </div>

        {/* Image */}
        <div className="w-full md:w-4/7 flex justify-center md:justify-end mt-6 md:mt-0">
          <img
            src={limage}
            alt="Product visualization"
            className="w-full max-w-md md:max-w-full h-auto object-contain transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
}
