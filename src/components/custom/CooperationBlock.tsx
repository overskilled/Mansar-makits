"use client";
import { useI18n } from "@/locales/client";
import { Card } from "../ui/card";

export default function CooperationBlock() {
  const t = useI18n();

  const liste = ["/p1.avif", "/p4.png", "/p2.avif", "/p3.avif"];
  return (
    <div className="flex bg-black w-full py-10 items-center my-10 min-h-[80vh]">
      <div className="flex flex-col px-8 w-full">
        {/* Heading */}
        <span className="bg-blue-600/20 rounded-lg px-3 py-1 w-fit text-[#6583d2]">
          {t("CooperationBlock.SPAN")}
        </span>
        <h3 className="text-3xl text-white mt-5 mb-20">
          {t("CooperationBlock.H3")}
        </h3>

        {/* Double card */}
        <Card className="border border-[#3b3d40] rounded-xl p-2 bg-transparent">
          <Card className="-ml-7 -mb-7 border border-[#3b3d40] rounded-xl p-8 bg-black">
            <div className="w-[95%] ml-2 grid grid-cols-2 grid-rows-2 gap-6 md:flex md:justify-around md:gap-20">
              {liste.slice(0, 4).map((el, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center"
                >
                  <img
                    src={el}
                    alt={`logo-${index + 1}`}
                    className="max-w-[120px] md:max-w-[150px] object-contain"
                  />
                </div>
              ))}
            </div>
          </Card>
        </Card>
      </div>
    </div>

  );
}
