"use client";

import { MoveUpRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Entete from "./Entete";

interface Block {
  image: string;
  title: string;
  descript: string;
}

interface Liste {
  SPAN: string;
  H3: string;
  P: string;
  BLOCK: Block[];
}

export default function FunctionnalityBlock({ SPAN, H3, P, BLOCK }: Liste) {
  return (
    <div className="px-8 md:px-0 mb-12">
      {/* Header */}
      <Entete SPAN={SPAN} H3={H3} P={P} TEXT="text-[#6583d2]" BG="bg-[#e9e7db]" />

      {/* Cards container */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-20">
        {BLOCK.map((el, index) => (
          <Card key={index} className="border shadow-lg p-2 rounded-md w-full">
            <Card className="-ml-2 md:-ml-4 hover:cursor-pointer -mb-5 pb-4 gap-2 duration-300 rounded-md h-72 md:h-80 hover:bg-gray-100">
              <CardHeader className="flex flex-col items-start gap-4">
                <img src={el.image} alt={`icon-${index}`} className="w-16 h-16 object-contain" />
                <h3 className="text-xl md:text-2xl font-semibold">{el.title}</h3>
              </CardHeader>
              <CardContent className="text-sm md:text-base leading-6">
                {el.descript}
              </CardContent>
              <CardFooter>
                <span className="flex gap-2 items-center group text-sm md:text-base cursor-pointer hover:text-amber-400 duration-300">
                  learn more
                  <MoveUpRight className="w-4 md:w-5 group-hover:w-6 duration-300" />
                </span>
              </CardFooter>
            </Card>
          </Card>
        ))}
      </div>
    </div>

  );
}
