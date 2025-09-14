"use client";
import { useI18n } from "@/locales/client";
import { Card } from "../ui/card";

export default function CooperationBlock() {
  const t = useI18n();

  const liste = ["/p1.avif", "/p4.png", "/p2.avif", "/p3.avif"];
  return (
    <div className="flex bg-black w-full py-10 items-center my-10 h-[80vh]">
      <div className="flex flex-col px-8 h-80 w-full">
        <span className="bg-blue-600/20 rounded-lg px-3 py-1 w-35 text-[#6583d2]">
          {t("CooperationBlock.SPAN")}
        </span>
        <h3 className="text-3xl text-white mt-5 mb-20">
          {t("CooperationBlock.H3")}
        </h3>
        <Card className="border border-[#3b3d40] rounded-xl p-2 bg-transparent">
          <Card className="-ml-7 -mb-7 border border-[#3b3d40] rounded-xl p-2 bg-black">
            <div className="w-[95%] ml-2 h-25 flex justify-around gap-20 bgwhite">
              {liste.map((el, index) => (
                <img
                  key={index}
                  src={el}
                  alt={`image ${index + 1}`}
                  className="w-50 object-contain "
                />
              ))}
              {/* <img src="/p1.avif" alt="image" className="w-70 object-contain " /> */}
            </div>
          </Card>
        </Card>
      </div>
    </div>
  );
}
