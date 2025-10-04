"use client";

import { MoveUpRight } from "lucide-react";
import { useI18n } from "@/locales/client";
import { Card, CardHeader, CardContent } from "../ui/card";

export default function GetInTouchBlock() {
  const t = useI18n();

  return (
    <div className="relative bg-black px-4 py-10 mb-20">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 h-full w-full opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Responsive Grid Container */}
      <div className="relative w-full container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20 mt-10 px-4 md:px-8">
        {/* Left text */}
        <div className="flex flex-col">
          <span className="py-1 px-4 bg-[#171c30] max-w-max text-[#6b87e5] rounded-2xl text-center inline-block">
            {t("GetInTouch.SPAN")}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white mt-5 leading-snug">
            {t("GetInTouch.H1")}
          </h1>
          <p className="text-gray-400 mt-5 mb-10 md:w-3/4 text-base md:text-lg">
            {t("GetInTouch.P")}
          </p>
          <button className="py-3 px-9 rounded-xl bg-white hover:bg-[#e9e7db] transition-colors duration-300 w-fit">
            {t("GetInTouch.section1.content_1")}
          </button>
        </div>

        {/* Right cards */}
        <section className="grid grid-cols-1 sm:grid-cols-1 gap-6 w-full">
          {/* Card 1 */}
          <Card className="border border-[#3b3d40] rounded-xl p-1 bg-transparent w-full group cursor-pointer hover:border-[#6b87e5] transition-all duration-300">
            <Card className="-ml-2 -mb-3 border border-[#3b3d40] rounded-xl p-1 bg-black w-full group-hover:transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:border-[#6b87e5] transition-all duration-300">
              <CardHeader className="-mb-2">
                <h3 className="text-xl md:text-2xl mt-4 text-white flex gap-3 items-center group">
                  {t("GetInTouch.section1.H3_1")}
                  <MoveUpRight className="w-5 opacity-0 group-hover:opacity-100 group-hover:rotate-45 group-hover:scale-110 transition-all duration-300" />
                </h3>
              </CardHeader>
              <CardContent className="text-gray-500 pb-2 p-0 pl-6 group-hover:text-gray-300 transition-colors duration-300 text-sm md:text-base">
                {t("GetInTouch.section1.content_1")}
              </CardContent>
            </Card>
          </Card>

          {/* Card 2 */}
          <Card className="border border-[#3b3d40] rounded-xl p-1 bg-transparent w-full group cursor-pointer hover:border-[#6b87e5] transition-all duration-300">
            <Card className="-ml-2 -mb-3 border border-[#3b3d40] rounded-xl p-1 bg-black w-full group-hover:transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:border-[#6b87e5] transition-all duration-300">
              <CardHeader>
                <h3 className="text-xl md:text-2xl mt-4 text-white flex gap-3 items-center group">
                  {t("GetInTouch.section1.H3_2")}
                  <MoveUpRight className="w-5 opacity-0 group-hover:opacity-100 group-hover:rotate-45 group-hover:scale-110 transition-all duration-300" />
                </h3>
              </CardHeader>
              <CardContent className="text-gray-500 pb-2 p-0 pl-6 group-hover:text-gray-300 transition-colors duration-300 text-sm md:text-base">
                {t("GetInTouch.section1.content_2")}
              </CardContent>
            </Card>
          </Card>
        </section>
      </div>
    </div>
  );
}
