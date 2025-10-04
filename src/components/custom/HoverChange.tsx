import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";
import { useI18n } from "@/locales/client";
import { useState } from "react";
import Entete from "./Entete";

interface HoverItem {
  label: string;
  icon: string;
  header: string;
  h5: string;
  ul: string[];
}

interface titleListe{
    titre: string,
    smallTitle: string,
    texte: string,
}

interface props {
  hoverItems: HoverItem[];
  titleListe: titleListe[];
  span: string;
  title: string;
  text: string
}

export default function HoverChange({ hoverItems, titleListe, span, title, text }: props) {
  const t = useI18n();
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeIndex1, setActiveIndex1] = useState(0);
  
    const activeItem = titleListe[activeIndex] ?? null;
    const activeItem1 = hoverItems[activeIndex1] ?? null;
  return (
    <>
      <section className="container mx-auto flex flex-col px-4 sm:px-6 lg:px-0 my-20">
        {/* <span className="text-[#3a5af9] bg-[#eff2ff] w-45 text-center rounded-3xl py-1 px-2">
          {t("banks.section4.span")}
        </span>
        <h2 className="text-4xl my-5">{t("banks.section4.h2")}</h2>
        <p className="">{t("banks.section4.p")}</p> */}
        <Entete 
            SPAN={span}
            H3={title}
            P={text}
            TEXT="text-[#3a5af9]"
            BG="bg-[#eff2ff]"
        />
        <div className="flex flex-col lg:flex-row w-full my-10 gap-8">
          <div className="flex flex-col w-full lg:w-2/5 gap-4">
            {/* Hover triggers */}
            <div className="flex flex-wrap lg:flex-row py-2 px-2 gap-4 w-full">
              {hoverItems.map((item, index) => (
                <span
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`cursor-pointer px-2 py-1 transition text-sm sm:text-lg gap-2 flex items-center
                  ${
                    index === activeIndex
                      ? "font-semibold text-black font-semibold"
                      : "text-gray-700 hover:text-black"
                  }`}
                >
                  <Image
                    alt={`icon ${index}`}
                    src={`/${item.icon}`}
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain"
                  />
                  {item.label}
                </span>
              ))}
            </div>

            {/* Card content */}
            <div className="w-full h-auto py-2">
              <Card className="p-0 pt-4 w-full  shadow-none relative bg-gray-50 min-h-[220px]">
                <Card className="shadow-none -ml-5 w-full bg-gray-50 hover:bg-amber-50 absolute duration-500 min-h-[220px]">
                  <CardHeader>{activeItem1.header}</CardHeader>
                  <CardContent className="gap-4">
                    <h5>{activeItem1.h5}</h5>
                    <ul className="list-disc pl-4 mt-2">
                      {activeItem1.ul.map((u, i) => (
                        <li key={i}>{u}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Card>
            </div>
          </div>

          <div className="flex flex-col w-full lg:w-3/5 gap-4  w-full lg:-ml-16">
            <Image
              src={"/software-companies/side-image.svg"}
              alt="side-image"
              width={960}
              height={520}
            />
          </div>
        </div>
      </section>
    </>
  );
}
