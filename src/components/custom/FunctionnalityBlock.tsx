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
    <div className="w-full px-8 md:px-0 mb-12">
      {/* Header */}
      <Entete SPAN={SPAN} H3={H3} P={P} TEXT="text-[#6583d2]" BG="bg-[#e9e7db]" />

      {/* Cards container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {BLOCK.map((el, index) => (
          <Card
            className="border-none shadow-none rounded-md w-full"
            key={index}
          >
            <Card className="rounded-md bg-white border-none shadow-md p-4 flex flex-col justify-between h-full duration-200 hover:bg-gray-100">
              {/* Header */}
              <CardHeader className="flex flex-col items-start gap-4">
                <img src={el.image} alt={`icon-${index}`} className="w-16 h-16 object-contain" />
                <h3 className="text-xl md:text-2xl font-semibold">{el.title}</h3>
              </CardHeader>

              {/* Content */}
              <CardContent className="text-sm md:text-base leading-6">
                {el.descript}
              </CardContent>

              {/* Footer */}
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
