"use client";

import { MoveUpRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { useI18n } from "@/locales/client";

export default function GetInTouchBlock() {
  const t = useI18n();
  return (
    <div className="w-full flex flex-col md:flex-row items-start md:items-center bg-black min-h-screen mb-20 mt-10 px-20 py-20 lg:py-0 md:px-8 gap-8">
      
      {/* Left text */}
      <div className="md:w-1/2 
      ">
        {/* // flex flex-col */}
        <span className="py-1 px-4 bg-[#171c30] text-[#6b87e5] rounded-2xl text-center inline-block">
          {t("GetInTouch.SPAN")}
        </span>
        <h1 className="text-3xl md:text-5xl text-white mt-5">{t("GetInTouch.H1")}</h1>
        <p className="text-gray-400 mt-5 mb-10 md:w-3/4">{t("GetInTouch.P")}</p>
        <button className="py-3 px-9 rounded-xl bg-white hover:bg-[#e9e7db] transition-colors duration-300">
          {t("GetInTouch.B")}
        </button>
      </div>

      {/* Right cards */}
      <section className="md:w-1/2 flex flex-col gap-6 w-full">
        <Card className="border border-[#3b3d40] rounded-xl p-1 bg-transparent w-full md:w-[80%] self-center">
          <Card className="-ml-2 -mb-3 border border-[#3b3d40] rounded-xl p-1 bg-black w-full">
            <CardHeader className="-mb-2">
              <h3 className="text-2xl mt-4 text-white flex gap-3 items-center group">
                {t("GetInTouch.section1.H3_1")}
                <MoveUpRight className="w-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </h3>
            </CardHeader>
            <CardContent className="text-gray-500 pb-2 p-0 pl-6">
              {t("GetInTouch.section1.content_1")}
            </CardContent>
          </Card>
        </Card>


        <Card className="border border-[#3b3d40] rounded-xl p-1 bg-transparent w-full md:w-[80%] self-center">
          <Card className="-ml-2 -mb-3 border border-[#3b3d40] rounded-xl p-1 bg-black w-full">
            <CardHeader>
              <h3 className="text-2xl mt-4 text-white flex gap-3 items-center group">

                {t("GetInTouch.section1.H3_2")}
                <MoveUpRight className="w-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </h3>
            </CardHeader>
            <CardContent className="text-gray-500 pb-2 p-0 pl-6">
              {t("GetInTouch.section1.content_2")}
            </CardContent>
          </Card>
        </Card>
      </section>
    </div>
  );
}
