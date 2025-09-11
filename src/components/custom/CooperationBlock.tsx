"use client"
import { useI18n } from "@/locales/client";

export default function CooperationBlock() {
  const t = useI18n()
  return (
    <div className="flex bg-black w-full py-10 items-center my-10">
      <div className="flex flex-col h-80 w-full">
        <span className="bg-blue-600/20 px-3 py-1 w-35 text-indigo-800">
          {t("CooperationBlock.SPAN")}
        </span>
        <h3 className="text-4xl text-white mt-5 mb-20">
          {t("CooperationBlock.H3")}
        </h3>
        <div className="w-[95%] ml-2 bg-gray-300 h-30 ">d</div>
      </div>
    </div>
  );
}
