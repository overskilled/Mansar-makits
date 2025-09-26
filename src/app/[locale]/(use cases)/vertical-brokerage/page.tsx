"use client";

import Entete from "@/components/custom/Entete";
import FlexWrapRight from "@/components/custom/FlexWrapRight";
import Footer from "@/components/custom/Footer";
import GetInTouchBlock from "@/components/custom/GetInTouchBlock";
import Hero from "@/components/custom/Hero";
import { ProgressiveTimeline } from "@/components/custom/progressive-timeline";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useI18n } from "@/locales/client";
import Image from "next/image";
import { useState } from "react";

interface threeDoubleType {
  title: string;
  smallTitle: string;
  liste: {
    0: string;
    1: string;
    2: string;
  };
}

interface HoverItem {
  label: string;
  icon: string;
  header: string;
  h5: string;
  ul: string[];
}

export interface TimelineSection {
  id: string;
  number: string;
  title: string;
  description: string;
}

export default function page() {
  const t = useI18n();

  const titleListe = [
    {
      titre: t("verticalBrokerage.section1.BLOCK.0.title"),
      legend: t("verticalBrokerage.section1.BLOCK.0.legend"),
      content: t("verticalBrokerage.section1.BLOCK.0.content"),
    },
    {
      titre: t("verticalBrokerage.section1.BLOCK.1.title"),
      legend: t("verticalBrokerage.section1.BLOCK.1.legend"),
      content: t("verticalBrokerage.section1.BLOCK.1.content"),
    },
    {
      titre: t("verticalBrokerage.section1.BLOCK.2.title"),
      legend: t("verticalBrokerage.section1.BLOCK.2.legend"),
      content: t("verticalBrokerage.section1.BLOCK.2.content"),
    },
    {
      titre: t("verticalBrokerage.section1.BLOCK.3.title"),
      legend: t("verticalBrokerage.section1.BLOCK.3.legend"),
      content: t("verticalBrokerage.section1.BLOCK.3.content"),
    },
    {
      titre: t("verticalBrokerage.section1.BLOCK.4.title"),
      legend: t("verticalBrokerage.section1.BLOCK.4.legend"),
      content: t("verticalBrokerage.section1.BLOCK.4.content"),
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
        t("brokers.section4.CARDS.0.UL.2"),
      ],
    },
    {
      label: t("brokers.section4.SPANS.1"),
      icon: "icon-stocks.svg",
      header: t("brokers.section4.CARDS.1.CardHeader"),
      h5: t("brokers.section4.CARDS.1.H5"),
      ul: [
        t("brokers.section4.CARDS.1.UL.0"),
        t("brokers.section4.CARDS.1.UL.1"),
        t("brokers.section4.CARDS.1.UL.2"),
      ],
    },
    {
      label: t("brokers.section4.SPANS.2"),
      icon: "icon-funds.svg",
      header: t("brokers.section4.CARDS.2.CardHeader"),
      h5: t("brokers.section4.CARDS.2.H5"),
      ul: [
        t("brokers.section4.CARDS.2.UL.0"),
        t("brokers.section4.CARDS.2.UL.1"),
        t("brokers.section4.CARDS.2.UL.2"),
      ],
    },
  ];

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

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndex1, setActiveIndex1] = useState(0);

  const activeItem = titleListe[activeIndex];
  const activeItem1 = hoverItems[activeIndex];

  const threeDouble: threeDoubleType[] = [
    {
      title: t("verticalBrokerage.section3.block.0.title"),
      smallTitle: t("verticalBrokerage.section3.block.0.smallTitle"),
      liste: {
        0: t("verticalBrokerage.section3.block.0.liste.1"),
        1: t("verticalBrokerage.section3.block.0.liste.2"),
        2: t("verticalBrokerage.section3.block.0.liste.3"),
      },
    },
    {
      title: t("verticalBrokerage.section3.block.1.title"),
      smallTitle: t("verticalBrokerage.section3.block.1.smallTitle"),
      liste: {
        0: t("verticalBrokerage.section3.block.1.liste.1"),
        1: t("verticalBrokerage.section3.block.1.liste.2"),
        2: t("verticalBrokerage.section3.block.1.liste.3"),
      },
    },
    {
      title: t("verticalBrokerage.section3.block.2.title"),
      smallTitle: t("verticalBrokerage.section3.block.2.smallTitle"),
      liste: {
        0: t("verticalBrokerage.section3.block.2.liste.1"),
        1: t("verticalBrokerage.section3.block.2.liste.2"),
        2: t("verticalBrokerage.section3.block.2.liste.3"),
      },
    },
  ];

  const flexWrapBlock = [
      {
        icone: "/user.svg",
        title: t("verticalBrokerage.flexWrap.block.0.title"),
        content: t("verticalBrokerage.flexWrap.block.0.content"),
      },
      {
        icone: "/dashboard.svg",
        title: t("verticalBrokerage.flexWrap.block.1.title"),
        content: t("verticalBrokerage.flexWrap.block.1.content"),
      },
      {
        icone: "/balise.svg",
        title: t("verticalBrokerage.flexWrap.block.2.title"),
        content: t("verticalBrokerage.flexWrap.block.2.content"),
      },
      {
        icone: "/bank-checkmark.svg",
        title: t("verticalBrokerage.flexWrap.block.3.title"),
        content: t("verticalBrokerage.flexWrap.block.3.content"),
      },
  ];

  return (
    <div className="min-h-screen w-full">
      <Hero
        H2={t("verticalBrokerage.hero.H2")}
        P={t("verticalBrokerage.hero.P")}
        B={t("verticalBrokerage.hero.B")}
      />

      <section className="mt-50 mb-15">
        <Entete
          SPAN={t("verticalBrokerage.section1.SPAN")}
          BG="bg-[#eff2ff]"
          TEXT="text-[#3a5af9]"
          H3={t("verticalBrokerage.section1.H3")}
          P={t("verticalBrokerage.section1.P")}
        />

        <div className="mt-10 flex w-full px-4 lg:px-0">
          <div className="flex flex-col w-full gap-4 py-4 rounded-lg">
            {/* Navigation */}
            <nav className="flex flex-nowrap overflow-auto lg:*:float-left gap-4 px-4 bg-gray-100 py-2 rounded-xl w-full lg:w-max ">
              {titleListe.map((el, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  //   className={`py-2 px-2 min-w-40 w-1/5 text-sm rounded-lg transition hover:cursor-pointer
                  className={`py-3 px-8 min-w-max w1/5 text-sm mx2 rounded-lg transition hover:cursor-pointer
              ${
                index === activeIndex
                  ? "bg[#f9fafb] bg-white border border-gray400 font-semibold"
                  : "bg-transaparent hover:bg-[#f9fafb]"
              }`}
                >
                  {el.titre}
                </button>
              ))}
            </nav>

            {/* Content */}
            <div className="bg-[#f9fafb] border pt-4 ml-4 pr-4 mt-4 rounded-lg mx-4">
              <div className="bg-[#f9fafb] border -ml-4 px-8 py-7 -mb-4 rounded-lg">
                <div className="w-full h-full">
                  <h2 className="text-3xl font-meduim mb-6">
                    {activeItem.legend}
                  </h2>
                  <p className="text-md font-thin leading-8 text-gray-600">
                    {activeItem.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:pr-10">
          <Image
            src="/finacialInvest.png"
            width={1920}
            height={1080}
            alt="social invest"
            className="w-full h-auto mt-10"
          />
        </div>
      </section>

      <section className="w-full my-15">
        <section className="flex flex-col min-h-screen bg-black px-8 justify-center">
          <ProgressiveTimeline
            span={t("verticalBrokerage.section2.span")}
            title={t("verticalBrokerage.section2.title")}
            sections={timelineSections}
            autoProgress={true}
            progressInterval={5000}
            onSectionChange={(sectionId, index) => {
              console.log(`Active section: ${sectionId} (${index})`);
            }}
          />
        </section>
      </section>

      <section className="w-full my-15">
        <Entete
          SPAN={t("verticalBrokerage.section3.span")}
          P={t("verticalBrokerage.section3.p")}
          H3={t("verticalBrokerage.section3.h3")}
          BG="bg-[#eff2ff]"
          TEXT="text-[#3a5af9]"
        />
        <div className="flex flex-col lg:flex-row items-center w-full gap-8">
          {threeDouble.map((el, index) => (
            <Card key={index} className="w-2/3 lg:w-1/3 p-0 mx-8 lg:mx-0 shadow-none pt-2 pr-2 ml-2">
              <Card className="pl-10 p-0 shadow-none h-76 -ml-2 gap-6 py-6 -mb-2">
                <CardHeader>
                  <h3 className="text-2xl font-medium">{el.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="mb-8 text-[15px]">{el.smallTitle}</p>
                  <ul className="pl-4 *:my-2 *:text-[15px]">
                    <li>{el.liste[0]}</li>
                    <li>{el.liste[1]}</li>
                    <li>{el.liste[2]}</li>
                  </ul>
                </CardContent>
              </Card>
            </Card>
          ))}
        </div>
      </section>

      <section className="w-full my-15">
        <div className="flex flex-col lg:flex-row w-full h-full lg:pb-10 grille lg:pr20 min-h-screen *:w-full lg:*:w-1/2 bg-black gap-30 pt-25">
          <div className="lg:pl-5 text-gray-400 px-20 lg:px-0">
            <span className="bg-[#171c30] text-[#3a5af9] px-4 text-[14px] py-2 rounded-2xl">{t("verticalBrokerage.section4.span")}</span>
            <h3 className="text-white mb-15 mt-6 text-3xl">{t("verticalBrokerage.section4.h3")}</h3>
            <div className="flex gap-4 mb-6 items-center">
                <div className="flex rounded-full w-2 h-2 bg-gray-400"></div>
                <div>{t("verticalBrokerage.section4.pu1")}</div>
            </div>
            <div className="flex gap-4 mb-6 items-center">
                <div className="flex rounded-full w-2 h-2 bg-gray-400"></div>
                <div>{t("verticalBrokerage.section4.pu2")}</div>
            </div>
            <p className="text-[16px] leading-7.5">{t("verticalBrokerage.section4.p")}</p>
          </div>
          <div className="flex justify-center items-center"></div>
        </div>
      </section>

      <section className="w-full my-15">
          <FlexWrapRight 
            SPAN={t("verticalBrokerage.flexWrap.span")}
            H3={t("verticalBrokerage.flexWrap.h3")}
            P={t("verticalBrokerage.flexWrap.p")}
            Image="/gauche.svg"
            BLOCK={flexWrapBlock}
          />
      </section>
      
      <section className="w-full my-15">
        <GetInTouchBlock />
      </section>

      <Footer />
    </div>
  );
}
