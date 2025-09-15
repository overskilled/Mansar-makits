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
    <div className="w-full min-h-screen px-8 my-30">
      <Entete SPAN={SPAN} H3={H3} P={P} BG="bg-[#ebf3fc]" TEXT="text-[#4c6cfc]" />
      <div className="flex flex-col">
        <div className="flex items-center min-h-screen overflow-hidden bg-[url('/background.svg')]">
          <div className="flex flex-col w-3/7">
            <p className="text-center text-lg font-semibold mb-0">{LEGEND}</p>
            {BLOCK.map((el, index) => (
              <div
                key={index}
                onMouseEnter={() => handleImage(index)}
                className={`border shadow-none mt-10 p-2 duration-500 hover:cursor-pointer hover:p-3 rounded-lg my-3 ml-3 ${activeIndex === index
                    ? 'bg-amber-50 '
                    : 'bg-gray-100 '
                  }`}
              >
                <div className={`-ml-5 -mb-7 rounded-lg h-45 border duration-500 shadow-none ${activeIndex === index ? 'bg-amber-100' : 'bg-gray-100'
                  }`}>
                  <div className="m-0 p-4">
                    <h3 className={`text-sm font-semibold w-[20%] text-center rounded-xl px-2 py-0.5 ${activeIndex === index ? 'bg-amber-50' : 'bg-[#ebf3fc]'
                      }`}>
                      {el.title}
                    </h3>
                  </div>
                  <div className="p-4 h-auto pt-2">
                    <p className="text-sm leading-6 font-[50]">{el.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end w-4/7 items-center min-h-full">
            <img
              src={limage}
              alt="Product visualization"
              className="right-0 scale-100 transition-opacity duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
