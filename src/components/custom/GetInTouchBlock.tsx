"use client";

import { MoveUpRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { useI18n } from "@/locales/client";

export default function GetInTouchBlock() {
  const t = useI18n();
  return (
    <div className="w-full flex *:w-1/2 bg-black linear min-h-screen items-center mb-20 mt-10">
      <div className="flex flex-col pl-4">
        <span className="py-1 px-2 bg-blue-600/20 text-indigo-700 rounded-2xl w-40 text-center">
          {t("GetInTouch.SPAN")}
        </span>
        <h1 className="text-6xl text-white mt-5">{t("GetInTouch.H1")}</h1>
        <p className="text-gray-200 mb-10 mt-5">{t("GetInTouch.P")}</p>
        <button className="py-3 px-6 rounded-lg bg-white w-50">
          {t("GetInTouch.B")}
        </button>
      </div>
      <section className="flex flex-col justify-center items-center gap-6 px-5 *:cursor-pointer ">
        <Card className="bg-black w-full  p-0 border-[1px] ml-4 chadowX border-none ">
          <CardHeader className="gap-  ">
            <h3 className="text-xl mt-4 text-white flex gap-3 items-center">
              {t("GetInTouch.section1.H3_1")}
              <MoveUpRight className="hidden group-hover:flex w-5 duration-300" />
            </h3>
          </CardHeader>
          <CardContent className="text-gray-500 pb-2 p-0 pl-6">
            {t("GetInTouch.section1.H3_2")}
          </CardContent>
        </Card>
        <Card className="bg-black w-full p-0 border-[1px]  ml-4 chadowX border-none ">
          <CardHeader className="gap2 ">
            <h3 className="text-xl mt-4 text-white  flex gap-3 items-center">
              {t("GetInTouch.section1.H3_2")}
              <MoveUpRight className="hidden group-hover:flex w-5 duration-300" />
            </h3>
          </CardHeader>
          <CardContent className="text-gray-500 pb-2 p-0 pl-6">
            {t("GetInTouch.section1.content_2")}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
