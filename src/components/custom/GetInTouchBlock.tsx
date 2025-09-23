"use client";

import { MoveUpRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { useI18n } from "@/locales/client";

export default function GetInTouchBlock() {
  const t = useI18n();
  return (
    <div className="w-full flex flex-col lg:flex-row px-20 py-20 lg:*:w-1/2 bg-black linear min-h-screen items-center mb-20 mt-10 lg:px-8 relative">
      <div className="pl-4">
        <span className="py-1 px-4 bg-[#171c30] text-[#6b87e5] rounded-2xl text-center">
          {t("GetInTouch.SPAN")}
        </span>
        <h1 className="text-5xl text-white mt-5">{t("GetInTouch.H1")}</h1>
        <p className="mb-10 text-gray-400 w-[75%] mt-5">{t("GetInTouch.P")}</p>
        <button className="py-3 px-9 rounded-xl bg-white hover:cursor-pointer hover:bg-[#e9e7db]">
          {t("GetInTouch.B")}
        </button>
      </div>
      <section className="flex flex-col mt-10 justify-center items-center gap-8 px-5 *:cursor-pointer ">
        <Card className="border border-[#3b3d40] rounded-xl p-1 bg-transparent lg:w-[80%]">
          <Card className="-ml-2 -mb-3 border border-[#3b3d40] rounded-xl p-1 bg-black w-full ">
            <CardHeader className="-mb-2 ">
              <h3 className="text-2xl mt-4 text-white flex gap-3 items-center">
                {t("GetInTouch.section1.H3_1")}
                <MoveUpRight className="group-hover:flex w-5 duration-300" />
              </h3>
            </CardHeader>
            <CardContent className="text-gray-500 pb-2 p-0 pl-6">
              {t("GetInTouch.section1.content_1")}
            </CardContent>
          </Card>
        </Card>
       <Card className="border w-full border-[#3b3d40] rounded-xl p-1 bg-transparent lg:w-[80%]">
          <Card className="-ml-2 -mb-3 border border-[#3b3d40] rounded-xl p-1 bg-black w-full ">
            <CardHeader className="gap-  ">
              <h3 className="text-2xl mt-4 text-white flex gap-3 items-center">
                {t("GetInTouch.section1.H3_2")}
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
