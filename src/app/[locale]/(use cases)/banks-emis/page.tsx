"use client";

import CooperationBlock from "@/components/custom/CooperationBlock";
import DoubleBlockWithImage from "@/components/custom/DoubleBlockWithImage";
import Entete from "@/components/custom/Entete";
import FlexWrapRight from "@/components/custom/FlexWrapRight";
import Footer from "@/components/custom/Footer";
import GetInTouchBlock from "@/components/custom/GetInTouchBlock";
import Hero from "@/components/custom/Hero";
import HoverChange from "@/components/custom/HoverChange";
import {
  ProgressiveTimeline,
  TimelineSection,
} from "@/components/custom/progressive-timeline";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useI18n } from "@/locales/client";
import Image from "next/image";
import { useState } from "react";

interface HoverItem {
  label: string;
  icon: string;
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
      label: t("banks.section4.liste.0.title"),
      icon: "icon-etf.svg",
      header: t("banks.section4.liste.0.title"),
      h5: t("banks.section4.liste.0.h5"),
      ul: [
        t("banks.section4.liste.0.liste.first"),
        t("banks.section4.liste.0.liste.second"),
        t("banks.section4.liste.0.liste.third"),
      ],
    },
    {
      label: t("banks.section4.liste.1.title"),
      icon: "icon-stocks.svg",
      header: t("banks.section4.liste.1.title"),
      h5: t("banks.section4.liste.1.h5"),
      ul: [
        t("banks.section4.liste.1.liste.first"),
        t("banks.section4.liste.1.liste.second"),
        t("banks.section4.liste.1.liste.third"),
      ],
    },
    {
      label: t("banks.section4.liste.2.title"),
      icon: "icon-funds.svg",
      header: t("banks.section4.liste.2.title"),
      h5: t("banks.section4.liste.2.h5"),
      ul: [
        t("banks.section4.liste.2.liste.first"),
        t("banks.section4.liste.2.liste.second"),
        t("banks.section4.liste.2.liste.third"),
      ],
    },
  ];

  const titleListe = [
    {
      titre: t("banks.section1.left.0.legend"),
      smallTitle: t("banks.section1.left.0.h2"),
      texte: t("banks.section1.left.0.p"),
    },
    {
      titre: t("banks.section1.left.1.legend"),
      smallTitle: t("banks.section1.left.1.h2"),
      texte: t("banks.section1.left.1.p"),
    },
    {
      titre: t("banks.section1.left.2.legend"),
      smallTitle: t("banks.section1.left.2.h2"),
      texte: t("banks.section1.left.2.p"),
    },
    {
      titre: t("banks.section1.left.3.legend"),
      smallTitle: t("banks.section1.left.3.h2"),
      texte: t("banks.section1.left.3.p"),
    },
    {
      titre: t("banks.section1.left.4.legend"),
      smallTitle: t("banks.section1.left.4.h2"),
      texte: t("banks.section1.left.4.p"),
    },
  ];

  const ListeDoubleBlock = {
    SPAN: t("banks.doubleBlock.span"),
    H3: t("banks.doubleBlock.h3"),
    P: t("banks.doubleBlock.p"),
    LEGEND: t("banks.doubleBlock.legend"),
    BLOCK: [
      {
        title: t("banks.doubleBlock.block.0.title"),
        content: t("banks.doubleBlock.block.0.p"),
        image: "/brokers-and-wealth-managers/3.svg",
      },
      {
        title: t("banks.doubleBlock.block.1.title"),
        content: t("banks.doubleBlock.block.1.p"),
        image: t("brokers.ListeDoubleBlock.BLOCK.0.image"),
      },
      {
        title: t("banks.doubleBlock.block.2.title"),
        content: t("banks.doubleBlock.block.2.p"),
        image: "/brokers-and-wealth-managers/3.svg",
      },
    ],
  };

  const flexWrapRightData = {
    Image: "/logo-mansar.webp",
    SPAN: t("banks.flexWrap.span"),
    H3: t("banks.flexWrap.h3"),
    P: t("banks.flexWrap.p"),
    BLOCK: [
      {
        icone: "/user.svg",
        title: t("banks.flexWrap.block.0.title"),
        content: t("banks.flexWrap.block.0.content"),
      },
      {
        icone: "/dashboard.svg",
        title: t("banks.flexWrap.block.1.title"),
        content: t("banks.flexWrap.block.1.content"),
      },
      {
        icone: "/balise.svg",
        title: t("banks.flexWrap.block.2.title"),
        content: t("banks.flexWrap.block.2.content"),
      },
      {
        icone: "/bank-checkmark.svg",
        title: t("banks.flexWrap.block.3.title"),
        content: t("banks.flexWrap.block.3.content"),
      },
    ],
  };

  const heroData = {
    H2: t("banks.hero.H2"),
    P: t("banks.hero.P"),
    B: t("banks.hero.B"),
    image1: "/banks-emis/bank1.svg",
    image2: "/banks-emis/bank2.svg",
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
      <Hero
        H2={heroData.H2}
        P={heroData.P}
        B={heroData.B}
        image1={heroData.image1}
        image2={heroData.image2}
      />

      <section className="w-full my-20 px-8 mx-auto relative">
        <Entete
          SPAN={t("banks.section1.entete.SPAN")}
          H3={t("banks.section1.entete.H3")}
          P={t("banks.section1.entete.P")}
          TEXT="text-[#3a5af9]"
          BG="bg-[#eff2ff]"
        />
        <div className="container mx-auto mt-10 flex flex-col lg:flex-row w-full gap-6">
          <div className="flex flex-col mx-auto w-full gap-4 py-4 rounded-lg w-[60%]">
            {/* Navigation */}
            <nav className="flex flex-wrap lg:flex-nowrap w-full justify-center gap-2 ">
              {titleListe.map((el, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`py-2 flex-1 text-xs sm:text-sm md:text-base rounded-lg transition hover:cursor-pointer
            ${
              index === activeIndex
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
          <div className="mx-auto w-[40%]">
            <span className="bg-[#fffb9e] flex items-center justify-center gap-2 px-2 py-0.5 mb-2 mt-10 max-w-max rounded-3xl text-sm text-center">
              <div className="w-2 h-2 rounded-full bg-[#d5ce1c]"></div>
              {t("banks.section1.right.0.span")}
            </span>

            <ul className="list-disc list-inside text-xs/6 mt-2 space-y-0">
              <li>{t("banks.section1.right.0.first")}</li>
              <li>{t("banks.section1.right.0.second")}</li>
              <li>{t("banks.section1.right.0.third")}</li>
            </ul>

            <span className="max-w-max bg-[#e3ffd9] flex items-center justify-center gap-2 px-2 py-0.5 mb-2 mt-5 rounded-3xl text-sm text-center">
              <div className="w-2 h-2 rounded-full bg-[#1c8e12]"></div>
              {t("banks.section1.right.1.span")}
            </span>
            <ul className="list-disc list-inside text-xs/6 mt-2 space-y-0">
              <li>{t("banks.section1.right.1.first")}</li>
              <li>{t("banks.section1.right.1.second")}</li>
              <li>{t("banks.section1.right.1.third")}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container mx-auto flex items-center -mt-[100px] w-full min-h-screen bg-[url('/background.svg')] bg-cover">
        <img
          src="/brokers-and-wealth-managers/4.svg"
          alt="image"
          className="w-full h-full object-cover"
        />
      </section>

      <section className="flex flex-col min-h-screen bg-black px-8 justify-center">
        <ProgressiveTimeline
          span={t("banks.section3.span")}
          title={t("banks.section3.title")}
          sections={timelineSections}
          autoProgress={true}
          progressInterval={5000}
          onSectionChange={(sectionId, index) => {
            console.log(`Active section: ${sectionId} (${index})`);
          }}
          className="lg:h-screen"
        />
      </section>

      <HoverChange 
        titleListe={titleListe}
        hoverItems={hoverItems}
        text={t("banks.section4.p")}
        title={t("banks.section4.h2")}
        span= {t("banks.section4.span")}
      />

      <CooperationBlock />

      <DoubleBlockWithImage
        SPAN={ListeDoubleBlock.SPAN}
        H3={ListeDoubleBlock.H3}
        P={ListeDoubleBlock.P}
        LEGEND={ListeDoubleBlock.LEGEND}
        BLOCK={ListeDoubleBlock.BLOCK}
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
