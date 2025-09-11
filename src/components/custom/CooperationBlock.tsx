"use client";
import { useI18n } from "@/locales/client";

export default function CooperationBlock() {
  const t = useI18n();

  const liste = ["/p1.avif", "/p2.avif", "/p3.avif", "/p4.png"];
  return (
    <div className="flex bg-black w-full py-10 items-center my-10 h-screen">
      <div className="flex flex-col h-80 w-full">
        <span className="bg-blue-600/20 px-3 py-1 w-35 text-indigo-800">
          {t("CooperationBlock.SPAN")}
        </span>
        <h3 className="text-4xl text-white mt-5 mb-20">
          {t("CooperationBlock.H3")}
        </h3>
        <div className="w-[95%] ml-2 h-30 flex gap-10 bgwhite">
          {liste.map((el, index) => (
            <img
              key={index}
              src={el}
              alt={`image ${index + 1}`}
              className="w-70 object-contain "
            />
          ))}
          {/* <img src="/p1.avif" alt="image" className="w-70 object-contain " /> */}
        </div>
      </div>
    </div>
  );
}
