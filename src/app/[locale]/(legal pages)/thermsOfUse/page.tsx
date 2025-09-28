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
      <div className="h-[50vh] flex items-center mb-4">
        <h1 className="text-5xl my-auto">{t("thermsOfUse.H1")}</h1>
      </div>

      <h2 className="font-semibold text-3xl my-4">{t("thermsOfUse.H2")}</h2>

      <div className="*:w-[95%] ">
        {Data.map((el, index) => (
        <p key={index} className="my-4 hover:ml-2 hover:shadow duration-500 hover:bg-amber-50 ">{el}</p>
      ))}
      </div>

    <GetInTouchBlock />

        <Footer />
    </div>
  );
}
