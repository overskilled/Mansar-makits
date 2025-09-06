"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";

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
  const [limage, setLtmage] = useState<string>(BLOCK[0].image);
  const handleImage = (index:number) => {
    setLtmage(BLOCK[index].image);
  };
  return (
    <div className="flex w-full flex-col minh-screen min-h-screen my-30">
      <span className="py-1 px-2 bg-blue-600/20 rounded-2xl min-w-40 w-40 max-w-70 text-center">{SPAN}</span>
      <h3 className="text-4xl font-semibold text-shadow-xl my-10">{H3}</h3>
      <p className="text-xl">{P}</p>
      <div className="flex flex-col">
        <div className="flex items-center min-h-screen overflow-hidden mt-10">
          <div className="flex flex-col w-3/7">
            <p className="text-center">{LEGEND}</p>
            {BLOCK.map((el, index) => (
              <Card
                onMouseEnter={() => handleImage(index + 1)}
                key={index}
                className=" border shadow-none p-1 bg-gray-100 duration-500 hover:bg-gray-200 rounded-md my-5"
              >
                <Card className="-ml-6 -mb-6 rounded-md h-45 bg-gray-100 duration-500 shadow-none hover:bg-amber-100">
                  <CardHeader className="m-0">
                    <h3 className="text-md font-semibold">{el.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{el.content}</p>
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
