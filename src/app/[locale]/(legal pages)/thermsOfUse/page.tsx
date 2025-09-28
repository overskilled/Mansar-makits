"use client"

import Footer from "@/components/custom/Footer";
import GetInTouchBlock from "@/components/custom/GetInTouchBlock";
import { useI18n } from "@/locales/client";

export default function page() {
  const t = useI18n();

    const Data = [
        t("thermsOfUse.Data.0"),
        t("thermsOfUse.Data.1"),
        t("thermsOfUse.Data.2"),
        t("thermsOfUse.Data.3"),
        t("thermsOfUse.Data.4"),
        t("thermsOfUse.Data.5"),
        t("thermsOfUse.Data.6"),
        t("thermsOfUse.Data.7"),
        t("thermsOfUse.Data.8"),
        t("thermsOfUse.Data.9"),
    ]
  return (
    <div className="min-h-screen flex flex-col">
      <div className="h-[50vh] flex items-center justify-center lg:justify-start mb-4">
        <h1 className="text-5xl my-auto">{t("thermsOfUse.H1")}</h1>
      </div>

      <h2 className="font-semibold text-3xl mt-4 lg:mb-4 my-10 text-center lg:text-start">{t("thermsOfUse.H2")}</h2>

      <div className="flex justify-center items-center lg:items-start flex-col w-full ">
        {Data.map((el, index) => (
        <p key={index} className="my-4 lg:w-[95%] px-4 lg:px-0 lg:hover:pl-2 text-center lg:text-start lg:hover:shadow duration-500 lg:hover:bg-[#1a1a1a] lg:hover:text-gray-200 py-5 rounded-r-xl ">{el}</p>
      ))}
      </div>

    <GetInTouchBlock />

        <Footer />
    </div>
  );
}
