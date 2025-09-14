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
      id: "account-opening",
      number: "01",
      title: "Account opening",
      description:
        "End-to-end digital onboarding for your new customers with comprehensive KYC and security checks (PEP/Sanction Screening & Risk checks). Already have KYC’ed customers? No worries - we support KYC-sharing, so your customers don’t have to start another authentication process.",
    },
    {
      id: "account-funding",
      number: "02",
      title: "Account funding",
      description:
        "Your customers will receive a German IBAN that supports different pay-in methods and flexible pay-outs. Deposits are ensured for each cash account of up to €100,000. You already provide your customers with a cash account? No worries - we can integrate into your platform and operate modular around your existing setup.",
    },
    {
      id: "order-management",
      number: "03",
      title: "Order management",
      description:
        "Offer a wide range of Stocks and ETFs. Supporting multiple order types like direct execution, block orders and savings plans to accommodate any investing behaviour. Orders are routed to an exchange or the issuer directly to ensure best execution. All regulatory required price and cost information is provided before an order is executed.",
    },
    {
      id: "settlement-custody",
      number: "04",
      title: "Settlement & Custody",
      description:
        "We provide the mandatory custody services to ensure the safekeeping and administration of your customers' securities accounts. With us, all corporate actions are taken care of with diligence and precision, such as ensuring timely and accurate dividend payments, managing stock splits and mergers, and handling shareholder voting.",
    },
    {
      id: "taxation-reporting",
      number: "05",
      title: "Taxation and Reporting",
      description:
        "Our comprehensive tax and reporting services include the automatic calculation and deduction of settlement and withholding tax, making it easier for you and your customers to stay compliant with tax regulations. We create the tax documents for end customers, and deliver all relevant information to the financial authorities.",
    },
  ]


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


  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndex1, setActiveIndex1] = useState(0);

  const activeItem = titleListe[activeIndex];
  const activeItem1 = hoverItems[activeIndex];



  return (
    <div className="flex flex-col min-h-screen">
      <Hero H2={heroData.H2} P={heroData.P} B={heroData.B} />

      <section className="w-full my-20 px-8 relative">
        <Entete SPAN={t("brokers.section1.SPAN")} H3={t("brokers.section1.h1")} P={t("brokers.section1.P")} TEXT="text-[#3a5af9]" BG="bg-[#eff2ff]" />
        <div className="mt-10 flex w-full pl6">
          <div className="flex flex-col w-3/5 gap-4 py-4 rounded-lg">
            {/* Navigation */}
            <nav className="flex w-[90%] justify-center gap-2 ml-5 mr-5 flex-wrap lg:flex-nowrap ">
              {titleListe.map((el, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`py-2  w-1/5 text-sm rounded-lg transition hover:cursor-pointer
              ${index === activeIndex
                      ? "bg-[#f9fafb] border border-gray-400 font-semibold"
                      : "bg-transaparent hover:bg-[#f9fafb]"
                    }`}
                >
                  {el.titre}
                </button>
              ))}
            </nav>

            {/* Content */}
            <div className="bg-[#f9fafb] border pt-4 ml-4 pr-4 mt-4 rounded-lg">
              <div className="bg-[#f9fafb] border -ml-4 px-8 py-7 -mb-4 rounded-lg">
                <div className="w-full h-full">
                  <h2 className="text-3xl font-meduim mb-6">{activeItem.smallTitle}</h2>
                  <p className="text-md font-thin leading-8 text-gray-600">{activeItem.texte}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto">
            <span className="w-40 bg-[#fffb9e] flex items-center justify-center gap-2 px-2 py-0.5 mb-2 mt-10 rounded-3xl text-sm text-center">
              <div className="w-2 h-2 rounded-full bg-[#d5ce1c]"></div>
              {t("brokers.section2.SPAN1")}
            </span>

            <ul className="list-disc list-inside text-xs/6 mt-2 space-y-0">
              <li>{t("brokers.section2.UL1.0")}</li>
              <li>{t("brokers.section2.UL1.1")}</li>
              <li>{t("brokers.section2.UL1.2")}</li>
            </ul>

            <span className="w-60 bg-[#e3ffd9] flex items-center justify-center gap-2 px-2 py-0.5 mb-2 mt-5 rounded-3xl text-sm text-center">
              <div className="w-2 h-2 rounded-full bg-[#1c8e12]"></div>
              {t("brokers.section2.SPAN2")}
            </span>
            <ul className="list-disc list-inside text-xs/6 mt-2 space-y-0">
              <li>{t("brokers.section2.UL2.0")}</li>
              <li>{t("brokers.section2.UL2.1")}</li>
              <li>{t("brokers.section2.UL2.2")}</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="flex items-center -mt-[100px] w-full min-h-screen bg-[url('/background.svg')] bg-cover">
        <img
          src="/investment2.svg"
          alt="image"
          className="w-full h-full object-cover"
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
          title={t("brokers.section3.H2.0")}
          sections={timelineSections}
          autoProgress={true}
          progressInterval={5000}
          badgeText={"Customer Journey"}
          onSectionChange={(sectionId, index) => {
            console.log(`Active section: ${sectionId} (${index})`)
          }}
        />
      </div>

      <div className="flex flex-col h-[130vh] px-8 my-20">
        <span className="text-[#3a5af9] bg-[#eff2ff] w-45 text-center rounded-3xl py-1 px-2">
          {t("brokers.section4.SPAN")}
        </span>
        <h2 className="text-4xl my-5">{t("brokers.section4.H2")}</h2>
        <p className="">{t("brokers.section4.P")}</p>
        <div className="flex w-full my-10">
          <div className="flex flex-col w-2/5 gap-4">
            {/* Hover triggers */}
            <div className="flex py-2 px-2 justify-center gap-4  w-full">
              {hoverItems.map((item, index) => (
                <span
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`cursor-pointer px-2 py-1 transition text-lg gap-2 flex items-center flex-row 
              ${index === activeIndex
                      ? "font-semibold text-black font-semibold"
                      : "text-gray-700 hover:text-black"
                    }`}
                >
                  <Image
                    alt={`icon ${index}`}
                    width={30}
                    height={10}
                    src={`/${item.icon}`}
                  />
                  {item.label}
                </span>
              ))}
            </div>

            {/* Card content */}
            <div className="w-full h-full pl-0 py-2 ml-4">
              <Card className="p-0 pt-4 shadow-none relative bg-gray-50 h-60">
                <Card className="shadow-none w-full -ml-4 bg-gray-50 hover:bg-amber-50 absolute duration-500 h-60">
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
