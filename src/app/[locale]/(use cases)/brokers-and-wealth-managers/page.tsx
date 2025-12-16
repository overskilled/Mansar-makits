"use client";

import CooperationBlock from "@/components/custom/CooperationBlock";
import DoubleBlockWithImage from "@/components/custom/DoubleBlockWithImage";
import Entete from "@/components/custom/Entete";
import FlexWrapRight from "@/components/custom/FlexWrapRight";
import Footer from "@/components/custom/Footer";
import GetInTouchBlock from "@/components/custom/GetInTouchBlock";
import Hero from "@/components/custom/Hero";
import { ProgressiveTimeline, TimelineSection } from "@/components/custom/progressive-timeline";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useI18n } from "@/locales/client";
import Image from "next/image";
import { useState } from "react";

interface HoverItem {
  label: string;
  icon: string
  header: string;
  h5: string;
  ul: string[];
}

export default function page() {
  const t = useI18n();

    const timelineSections: TimelineSection[] = [
    {
      id: t("banks.section3.block.0.legend"),
      number: "01",
      title: t("banks.section3.block.0.legend"),
      description: t("banks.section3.block.0.p"),
    },
    {
      id: t("banks.section3.block.1.legend"),
      number: "02",
      title: t("banks.section3.block.1.legend"),
      description: t("banks.section3.block.1.p"),
    },
    {
      id: t("banks.section3.block.2.legend"),
      number: "03",
      title: t("banks.section3.block.2.legend"),
      description: t("banks.section3.block.2.p"),
    },
    {
      id: t("banks.section3.block.3.legend"),
      number: "04",
      title: t("banks.section3.block.3.legend"),
      description: t("banks.section3.block.3.p"),
    },
    {
      id: t("banks.section3.block.4.legend"),
      number: "05",
      title: t("banks.section3.block.4.legend"),
      description: t("banks.section3.block.4.p"),
    },
  ];

  const hoverItems: HoverItem[] = [
    {
      label: t("brokers.section4.SPANS.0"),
      icon: "icon-etf.svg",
      header: t("brokers.section4.CARDS.0.CardHeader"),
      h5: t("brokers.section4.CARDS.0.H5"),
      ul: [
        t("brokers.section4.CARDS.0.UL.0"),
        t("brokers.section4.CARDS.0.UL.1"),
        t("brokers.section4.CARDS.0.UL.2")
      ]
    },
    {
      label: t("brokers.section4.SPANS.1"),
      icon: "icon-stocks.svg",
      header: t("brokers.section4.CARDS.1.CardHeader"),
      h5: t("brokers.section4.CARDS.1.H5"),
      ul: [
        t("brokers.section4.CARDS.1.UL.0"),
        t("brokers.section4.CARDS.1.UL.1"),
        t("brokers.section4.CARDS.1.UL.2")
      ]
    },
    {
      label: t("brokers.section4.SPANS.2"),
      icon: "icon-funds.svg",
      header: t("brokers.section4.CARDS.2.CardHeader"),
      h5: t("brokers.section4.CARDS.2.H5"),
      ul: [
        t("brokers.section4.CARDS.2.UL.0"),
        t("brokers.section4.CARDS.2.UL.1"),
        t("brokers.section4.CARDS.2.UL.2")
      ]
    }
  ];

  const titleListe = [
    {
      titre: t("brokers.section1.titleListe.0.titre"),
      smallTitle: t("brokers.section1.titleListe.0.smallTitle"),
      texte: t("brokers.section1.titleListe.0.texte"),
    },
    {
      titre: t("brokers.section1.titleListe.1.titre"),
      smallTitle: t("brokers.section1.titleListe.1.smallTitle"),
      texte: t("brokers.section1.titleListe.1.texte"),
    },
    {
      titre: t("brokers.section1.titleListe.2.titre"),
      smallTitle: t("brokers.section1.titleListe.2.smallTitle"),
      texte: t("brokers.section1.titleListe.2.texte"),
    },
    {
      titre: t("brokers.section1.titleListe.3.titre"),
      smallTitle: t("brokers.section1.titleListe.3.smallTitle"),
      texte: t("brokers.section1.titleListe.3.texte"),
    },
    {
      titre: t("brokers.section1.titleListe.4.titre"),
      smallTitle: t("brokers.section1.titleListe.4.smallTitle"),
      texte: t("brokers.section1.titleListe.4.texte"),
    },
  ];

  const ListeDoubleBlock = {
    SPAN: t("brokers.ListeDoubleBlock.SPAN"),
    H3: t("brokers.ListeDoubleBlock.H3"),
    P: t("brokers.ListeDoubleBlock.P"),
    LEGEND: t("brokers.ListeDoubleBlock.LEGEND"),
    BLOCK: [
      {
        title: t("brokers.ListeDoubleBlock.BLOCK.0.title"),
        content: t("brokers.ListeDoubleBlock.BLOCK.0.content"),
        image: "/brokers-and-wealth-managers/3.svg",
      },
      {
        title: t("brokers.ListeDoubleBlock.BLOCK.1.title"),
        content: t("brokers.ListeDoubleBlock.BLOCK.1.content"),
        image: "/software-companies/side-two.svg",
      },
      {
        title: t("brokers.ListeDoubleBlock.BLOCK.2.title"),
        content: t("brokers.ListeDoubleBlock.BLOCK.2.content"),
        image: "/brokers-and-wealth-managers/3.svg",
      },
    ],
  };

  const flexWrapRightData = {
    Image: "/logo-mansar.webp",
    SPAN: t("brokers.flexWrapRightData.SPAN"),
    H3: t("brokers.flexWrapRightData.H3"),
    P: t("brokers.flexWrapRightData.P"),
    BLOCK: [
      {
        icone: '/user.svg',
        title: t("brokers.flexWrapRightData.BLOCK.0.title"),
        content: t("brokers.flexWrapRightData.BLOCK.0.content"),
      },
      {
        icone: '/dashboard.svg',
        title: t("brokers.flexWrapRightData.BLOCK.1.title"),
        content: t("brokers.flexWrapRightData.BLOCK.1.content"),
      },
      {
        icone: '/balise.svg',
        title: t("brokers.flexWrapRightData.BLOCK.2.title"),
        content: t("brokers.flexWrapRightData.BLOCK.2.content"),
      },
      {
        icone: '/bank-checkmark.svg',
        title: t("brokers.flexWrapRightData.BLOCK.3.title"),
        content: t("brokers.flexWrapRightData.BLOCK.3.content"),
      },
    ],
  };

  const heroData = {
    H2: t("brokers.hero.H2"),
    P: t("brokers.hero.P"),
    B: t("brokers.hero.B"),
    image1: "/brokers-and-wealth-managers/1.svg",
    image2: "/brokers-and-wealth-managers/2.svg",
  };
  
  const liste = [
    {
      smallTitle: t("brokers.liste.0.smallTitle"),
      texte: t("brokers.liste.0.texte"),
    },
    {
      smallTitle: t("brokers.liste.1.smallTitle"),
      texte: t("brokers.liste.1.texte"),
    },
    {
      smallTitle: t("brokers.liste.2.smallTitle"),
      texte: t("brokers.liste.2.texte"),
    },
    {
      smallTitle: t("brokers.liste.3.smallTitle"),
      texte: t("brokers.liste.3.texte"),
    },
    {
      smallTitle: t("brokers.liste.4.smallTitle"),
      texte: t("brokers.liste.4.texte"),
    },
  ];

  const items = liste[0];


  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndex1, setActiveIndex1] = useState(0);

  const activeItem = titleListe[activeIndex] ?? null;
  const activeItem1 = hoverItems[activeIndex1] ?? null;



  return (
    <div className="flex flex-col min-h-screen">
      <Hero H2={heroData.H2} P={heroData.P} B={heroData.B} image1={heroData.image1} image2={heroData.image2} />

      <section className="w-full my-20 mx-auto px-8 relative">
        <Entete SPAN={t("brokers.section1.SPAN")} H3={t("brokers.section1.h1")} P={t("brokers.section1.P")} TEXT="text-[#3a5af9]" BG="bg-[#eff2ff]" />
        <div className="container mx-auto mt-10 flex flex-col lg:flex-row w-full gap-6 ">
          {/* Left Section */}
          <div className="flex flex-col w-full lg:w-3/5 gap-4 py-4 rounded-lg">
            {/* Navigation */}
            <nav className="flex flex-wrap lg:flex-nowrap w-full justify-center gap-2">
              {titleListe.map((el, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`py-2 flex-1 text-xs sm:text-sm md:text-base rounded-lg transition hover:cursor-pointer
            ${index === activeIndex
                      ? "bg-[#f9fafb] border border-gray-400 font-semibold"
                      : "bg-transparent hover:bg-[#f9fafb]"
                    }`}
                >
                  {el.titre}
                </button>
              ))}
            </nav>

            {/* Content */}
            <div className="bg-[#f9fafb] border pt-4 pr-4 rounded-lg">
              <div className="bg-[#f9fafb] border px-8 py-7 -ml-6 -mb-6 rounded-lg">
                <div className="w-full h-full">
                  <h2 className="text-3xl font-meduim mb-6">
                    {activeItem.smallTitle}
                  </h2>
                  <p className="text-md font-thin leading-8 text-gray-600">
                    {activeItem.texte}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-2/5 flex flex-col items-start">
            {/* First Badge + List */}
            <span className="w-full sm:w-auto bg-[#fffb9e] flex items-center justify-center gap-2 px-3 py-1 mb-2 mt-4 rounded-3xl text-xs sm:text-sm text-center">
              <div className="w-2 h-2 rounded-full bg-[#d5ce1c]"></div>
              {t("brokers.section2.SPAN1")}
            </span>
            <ul className="list-disc list-inside text-xs sm:text-sm mt-2 space-y-1">
              <li>{t("brokers.section2.UL1.0")}</li>
              <li>{t("brokers.section2.UL1.1")}</li>
              <li>{t("brokers.section2.UL1.2")}</li>
            </ul>

            {/* Second Badge + List */}
            <span className="w-full sm:w-auto bg-[#e3ffd9] flex items-center justify-center gap-2 px-3 py-1 mb-2 mt-6 rounded-3xl text-xs sm:text-sm text-center">
              <div className="w-2 h-2 rounded-full bg-[#1c8e12]"></div>
              {t("brokers.section2.SPAN2")}
            </span>
            <ul className="list-disc list-inside text-xs sm:text-sm mt-2 space-y-1">
              <li>{t("brokers.section2.UL2.0")}</li>
              <li>{t("brokers.section2.UL2.1")}</li>
              <li>{t("brokers.section2.UL2.2")}</li>
            </ul>
          </div>
        </div>

      </section>

      <div className="container mx-auto flex items-center justify-center w-full min-h-[400px] bg-[url('/background.svg')] bg-cover bg-center px-4">
        <img
          src="/brokers-and-wealth-managers/4.svg"
          alt="Investment"
          className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-4xl xl:max-w-5xl h-auto object-contain"
        />
      </div>


      <div className="flex flex-col min-h-screen bg-black px-8 justify-center">
        {/* <span className="bg-violet-800/40 text-violet-700 w-45 text-center rounded-3xl py-1 px-2">
          {t("brokers.section3.SPAN")}
        </span>
        <h2 className="text-4xl font-semibold text-white my-10">
          {t("brokers.section3.H2.0")} <br />
          {t("brokers.section3.H2.1")} <br />
          {t("brokers.section3.H2.2")} <br />
          {t("brokers.section3.H2.3")}
        </h2>
        <div className="flex w-full h-30 bg-gray-300">s</div> */}
        <ProgressiveTimeline
          title={t("banks.section3.title")}
          sections={timelineSections}
          autoProgress={true}
          progressInterval={5000}
          span={"Customer Journey"}
          onSectionChange={(sectionId, index) => {
            console.log(`Active section: ${sectionId} (${index})`)
          }}
        />
      </div>

      <div className="container mx-auto flex flex-col px-4 sm:px-6 lg:px-0 my-20">
        {/* Badge */}
        <span className="text-[#3a5af9] bg-[#eff2ff] inline-block w-fit text-center rounded-3xl py-1 px-4 text-xs sm:text-sm">
          {t("brokers.section4.SPAN")}
        </span>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl my-5 font-semibold">
          {t("brokers.section4.H2")}
        </h2>

        {/* Paragraph */}
        <p className="text-sm sm:text-base text-gray-700 max-w-prose">
          {t("brokers.section4.P")}
        </p>

        {/* Main Flex Section */}
        <div className="flex flex-col lg:flex-row w-full my-10 gap-8">
          {/* Left Section */}
          <div className="flex flex-col w-full lg:w-2/5 gap-4">
            {/* Hover triggers */}
            <div className="flex flex-wrap lg:flex-row py-2 px-2 gap-4 w-full">
              {hoverItems.map((item, index) => (
                <span
                  key={index}
                  onMouseEnter={() => setActiveIndex1(index)}
                  className={`cursor-pointer px-2 py-1 transition text-sm sm:text-lg gap-2 flex items-center 
              ${index === activeIndex1
                      ? "font-semibold text-black"
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
              <Card className="p-0 pt-4 shadow-none relative bg-gray-50 min-h-[220px]">
                <Card className="shadow-none w-full bg-gray-50 hover:bg-amber-50 absolute duration-500 -ml-5 min-h-[220px]">
                  <CardHeader>{activeItem1.header}</CardHeader>
                  <CardContent className="gap-4">
                    <h5 className="text-base sm:text-lg font-medium">{activeItem1.h5}</h5>
                    <ul className="list-disc pl-4 mt-2 space-y-1 text-sm sm:text-base">
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

        <div className="flex items-center -mt-[370px] w-full min-h-screen bg-[url('/background.svg')] bg-cover"></div>

      </div>


      <CooperationBlock />

      <DoubleBlockWithImage
        SPAN={ListeDoubleBlock.SPAN}
        H3={ListeDoubleBlock.H3}
        LEGEND={ListeDoubleBlock.LEGEND}
        BLOCK={ListeDoubleBlock.BLOCK}
        P={ListeDoubleBlock.P}
      />

      <FlexWrapRight
        SPAN={flexWrapRightData.SPAN}
        H3={flexWrapRightData.H3}
        P={flexWrapRightData.P}
        BLOCK={flexWrapRightData.BLOCK}
        Image={flexWrapRightData.Image}
      />

      <GetInTouchBlock />

                      <Footer />
    </div>
  );
}
