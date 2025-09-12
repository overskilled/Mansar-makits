"use client";

import CooperationBlock from "@/components/custom/CooperationBlock";
import DoubleBlockWithImage from "@/components/custom/DoubleBlockWithImage";
import Entete from "@/components/custom/Entete";
import FlexWrapRight from "@/components/custom/FlexWrapRight";
import Footer from "@/components/custom/Footer";
import GetInTouchBlock from "@/components/custom/GetInTouchBlock";
import Hero from "@/components/custom/Hero";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useI18n } from "@/locales/client";

export default function page() {
  const t = useI18n();
  const titleListe = [
    { titre: t("brokers.section1.titleListe.0.titre") },
    { titre: t("brokers.section1.titleListe.1.titre") },
    { titre: t("brokers.section1.titleListe.2.titre") },
    { titre: t("brokers.section1.titleListe.3.titre") },
    { titre: t("brokers.section1.titleListe.4.titre") },
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
        image: t("brokers.ListeDoubleBlock.BLOCK.0.image"),
      },
      {
        title: t("brokers.ListeDoubleBlock.BLOCK.1.title"),
        content: t("brokers.ListeDoubleBlock.BLOCK.1.content"),
        image: t("brokers.ListeDoubleBlock.BLOCK.1.image"),
      },
      {
        title: t("brokers.ListeDoubleBlock.BLOCK.2.title"),
        content: t("brokers.ListeDoubleBlock.BLOCK.2.content"),
        image: t("brokers.ListeDoubleBlock.BLOCK.2.image"),
      },
    ],
  };
  const flexWrapRightData = {
    Image: "/gauche.svg",
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

  return (
    <div className="flex flex-col min-h-screen">
      <Hero H2={heroData.H2} P={heroData.P} B={heroData.B} />

      <section className="w-full my-20 relative">
        <Entete  SPAN={t("brokers.section1.SPAN")} H3={t("brokers.section1.h1")} P={t("brokers.section1.P")} TEXT="text-blue-500" BG="bg-blue-300" />
        <div className="mt-10 flex w-full pl6">
          <div className="flex flex-col w-5/8 gap- bg-green500 py-4">
            <nav className="flex w-full justify-center gap2 flex-wrap">
              {titleListe.map((el, index) => (
                <button
                  key={index}
                  className="py-1 hover:border-gray-400 border w-1/5 text-sm bg-gray-100 rounded-3xl"
                >
                  {el.titre}
                </button>
              ))}
            </nav>
            <div className="bg-white border pt-4 ml-4 pr-4 mt-4 rounded-lg">
              <div className="bg-white border hover:bg-amber-50 -ml-4 px-8 py-7 -mb-4 rounded-lg">
                <div className="w-full h-full">
                  <h2 className="text-xl font-semibold mb-6">
                    {items.smallTitle}
                  </h2>
                  <p className="text-sm">{items.texte}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pl-10 pt-6 ">
            <span className="w-35 bg-amber-200 px-2 mb-2 mt-10 rounded-3xl text-center">
              {t("brokers.section2.SPAN1")}
            </span>
            <ul className="*:list-dict *:text-sm *:my-2 mt-2">
              <li>{t("brokers.section2.UL1.0")}</li>
              <li>{t("brokers.section2.UL1.1")}</li>
              <li>{t("brokers.section2.UL1.2")}</li>
            </ul>
            <span className="w-35 bg-amber-200 px-2 mb-5 mt-5 rounded-3xl text-center">
              {t("brokers.section2.SPAN2")}
            </span>
            <ul className="list-dict *:text-sm *:my-2 mt-2">
              <li>{t("brokers.section2.UL2.0")}</li>
              <li>{t("brokers.section2.UL2.1")}</li>
              <li>{t("brokers.section2.UL2.2")}</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="flex items-center w-full min-h-screen bg-[url('/background.svg')] bg-cover">
        <img
          src="/investment2.svg"
          alt="image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col min-h-screen bg-black justify-center">
        <span className="bg-violet-800/40 text-violet-700 w-45 text-center rounded-3xl py-1 px-2">
          {t("brokers.section3.SPAN")}
        </span>
        <h2 className="text-4xl font-semibold text-white my-10">
          {t("brokers.section3.H2.0")} <br />
          {t("brokers.section3.H2.1")} <br />
          {t("brokers.section3.H2.2")} <br />
          {t("brokers.section3.H2.3")}
        </h2>
        <div className="flex w-full h-30 bg-gray-300">s</div>
      </div>

      <div className="flex flex-col h-[130vh] my-20">
        <span className="bg-blue-300 text-blue-500 w-45 text-center rounded-3xl py-1 px-2">
          {t("brokers.section4.SPAN")}
        </span>
        <h2 className="text-4xl my-10">{t("brokers.section4.H2")}</h2>
        <p>{t("brokers.section4.P")}</p>
        <div className="flex w-full my-10">
          <div className="flex flex-col w-2/5 gap-4 ">
            <div className="flex py-2 px-4 justify-between w-full *:cursor-pointer">
              <span>{t("brokers.section4.SPANS.0")}</span>
              <span>{t("brokers.section4.SPANS.1")}</span>
              <span>{t("brokers.section4.SPANS.2")}</span>
            </div>
            <div className="w-full h-full pl-0 py-2 ml-4">
              <Card className="p-0 pt-4  shadow-none relative bg-gray-50 h-60">
                <Card className="shadow-none w-full -ml-4 bg-gray-50 hover:bg-amber-50 absolute duration-500 h-60">
                  <CardHeader>{t("brokers.section4.CardHeader")}</CardHeader>
                  <CardContent className="gap-4">
                    <h5 className="">{t("brokers.section4.H5")}</h5>
                    <ul className="list-disc pl-4 mt-2">
                      <li>{t("brokers.section4.UL.0")}</li>
                      <li>{t("brokers.section4.UL.1")}</li>
                      <li>{t("brokers.section4.UL.2")}</li>
                    </ul>
                  </CardContent>
                </Card>
              </Card>
            </div>
          </div>
        </div>
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
