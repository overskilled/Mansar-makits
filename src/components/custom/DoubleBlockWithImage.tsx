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
  const [limage, setLImage] = useState<string>(BLOCK[0].image);
  const handleImage = (index:number) => {
    setLImage(BLOCK[index].image);
    console.log(index)
  };
  return (
    <div className="w-full min-h-screen px-8 my-30">
      <Entete SPAN={SPAN} H3={H3} P={P} BG="bg-[#e9e7db]" TEXT="text-[#6583d2]" />
      <div className="flex flex-col">
        <div className="flex items-center min-h-screen overflow-hidden bg-[url('/background.svg')]">
          <div className="flex flex-col w-3/7">
            <p className="text-center">{LEGEND}</p>
            {BLOCK.map((el, index) => (
              <Card
                onMouseEnter ={() => handleImage(index)}
                key={index}
                className=" border shadow-none p-2 bg-gray-100 duration-500 hover:bg-gray-200 hover:cursor-pointer hover:p-3 hover:bg-amber-50 rounded-md my-5 ml-3"
              >
                <Card className="-ml-7 -mb-7 rounded-md h-45 bg-gray-100 duration-500 shadow-none hover:bg-amber-100">
                  <CardHeader className="m-0">
                    <h3 className="text-md font-semibold">{el.title}</h3>
                  </CardHeader>
                  <CardContent className=" h-auto">
                    <p className="text-xs">{el.content}</p>
                  </CardContent>
                </Card>
              </Card>
            ))}
          </div>
          <div className="flex justify-end w-4/7 items-center min-h-full">
            <img
              // src="https://lemonmarkets2.cdn.prismic.io/lemonmarkets2/Z3KHhpbqstJ984vu_bundledoperatingmodel.svg?fit=max&w=1200"
              src={limage}
              alt="image"
              className="right-0 scale-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
