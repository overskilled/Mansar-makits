"use client";

import CooperationBlock from "@/components/custom/CooperationBlock";
import DoubleBlockWithImage from "@/components/custom/DoubleBlockWithImage";
import Entete from "@/components/custom/Entete";
import FlexWrapRight from "@/components/custom/FlexWrapRight";
import Footer from "@/components/custom/Footer";
import GetInTouchBlock from "@/components/custom/GetInTouchBlock";
import Hero from "@/components/custom/Hero";
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
            id: t("software.section3.block.0.legend"),
            number: "01",
            title: t("software.section3.block.0.legend"),
            description: t("software.section3.block.0.p"),
        },
        {
            id: t("software.section3.block.1.legend"),
            number: "02",
            title: t("software.section3.block.1.legend"),
            description: t("software.section3.block.1.p"),
        },
        {
            id: t("software.section3.block.2.legend"),
            number: "03",
            title: t("software.section3.block.2.legend"),
            description: t("software.section3.block.2.p"),
        },
        {
            id: t("software.section3.block.3.legend"),
            number: "04",
            title: t("software.section3.block.3.legend"),
            description: t("software.section3.block.3.p"),
        },
        {
            id: t("software.section3.block.4.legend"),
            number: "05",
            title: t("software.section3.block.4.legend"),
            description: t("software.section3.block.4.p"),
        },
    ];

    const hoverItems: HoverItem[] = [
        {
            label: t("software.section4.liste.0.title"),
            icon: "icon-etf.svg",
            header: t("software.section4.liste.0.title"),
            h5: t("software.section4.liste.0.h5"),
            ul: [
                t("software.section4.liste.0.liste.first"),
                t("software.section4.liste.0.liste.second"),
                t("software.section4.liste.0.liste.third"),
            ],
        },
        {
            label: t("software.section4.liste.1.title"),
            icon: "icon-stocks.svg",
            header: t("software.section4.liste.1.title"),
            h5: t("software.section4.liste.1.h5"),
            ul: [
                t("software.section4.liste.1.liste.first"),
                t("software.section4.liste.1.liste.second"),
                t("software.section4.liste.1.liste.third"),
            ],
        },
        {
            label: t("software.section4.liste.2.title"),
            icon: "icon-funds.svg",
            header: t("software.section4.liste.2.title"),
            h5: t("software.section4.liste.2.h5"),
            ul: [
                t("software.section4.liste.2.liste.first"),
                t("software.section4.liste.2.liste.second"),
                t("software.section4.liste.2.liste.third"),
            ],
        },
    ];

    const titleListe = [
        {
            titre: t("software.section1.left.0.title"),
            smallTitle: t("software.section1.left.0.smallTitle"),
            texte: t("software.section1.left.0.text"),
        },
        {
            titre: t("software.section1.left.1.title"),
            smallTitle: t("software.section1.left.1.smallTitle"),
            texte: t("software.section1.left.1.text"),
        },
        {
            titre: t("software.section1.left.2.title"),
            smallTitle: t("software.section1.left.2.smallTitle"),
            texte: t("software.section1.left.2.text"),
        },
        {
            titre: t("software.section1.left.3.title"),
            smallTitle: t("software.section1.left.3.smallTitle"),
            texte: t("software.section1.left.3.text"),
        },
        {
            titre: t("software.section1.left.4.title"),
            smallTitle: t("software.section1.left.4.smallTitle"),
            texte: t("software.section1.left.4.text"),
        },
    ];

    const ListeDoubleBlock = {
        SPAN: t("software.doubleBlock.span"),
        H3: t("software.doubleBlock.h3"),
        P: t("software.doubleBlock.p"),
        LEGEND: t("software.doubleBlock.legend"),
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
        SPAN: t("software.flexWrap.span"),
        H3: t("software.flexWrap.h3"),
        P: t("software.flexWrap.p"),
        BLOCK: [
            {
                icone: "/user.svg",
                title: t("software.flexWrap.block.0.title"),
                content: t("software.flexWrap.block.0.content"),
            },
            {
                icone: "/dashboard.svg",
                title: t("software.flexWrap.block.1.title"),
                content: t("software.flexWrap.block.1.content"),
            },
            {
                icone: "/balise.svg",
                title: t("software.flexWrap.block.2.title"),
                content: t("software.flexWrap.block.2.content"),
            },
            {
                icone: "/bank-checkmark.svg",
                title: t("software.flexWrap.block.3.title"),
                content: t("software.flexWrap.block.3.content"),
            },
        ],
    };

    const heroData = {
        H2: t("software.hero.h2"),
        P: t("software.hero.p"),
        B: t("software.hero.b"),
        image1: "/software-companies/left.svg",
        image2: "/software-companies/right.svg",
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
    const activeItem1 = hoverItems[activeIndex1];

    return (
        <div className="">
            <Hero H2={heroData.H2} P={heroData.P} B={heroData.B} image1={heroData.image1} image2={heroData.image2} />

            <section className=" my-20 max-x-4xl mx-auto px-8 relative">
                <Entete
                    SPAN={t("software.section1.entete.SPAN")}
                    H3={t("software.section1.entete.H3")}
                    P={t("software.section1.entete.P")}
                    TEXT="text-[#3a5af9]"
                    BG="bg-[#eff2ff]"
                />
                <div className="container mx-auto flex justify-between w-full">

                    <div className="mt-10 flex w-full pr-6">
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
                        <div className="mx-auto ml-10 w-full max-w-lg">
                            <span className="inline-flex items-center justify-start gap-2 bg-[#fffb9e] px-2 py-0.5 mb-2 mt-10 rounded-3xl text-sm">
                                <div className="w-2 h-2 rounded-full bg-[#d5ce1c]"></div>
                                {t("software.section1.rigth.0.span")}
                            </span>


                            <ul className="list-disc list-inside text-xs/5 mt-2 space-y-0">
                                <li>{t("software.section1.rigth.0.list.first")}</li>
                                <li>{t("software.section1.rigth.0.list.second")}</li>
                                <li>{t("software.section1.rigth.0.list.third")}</li>
                            </ul>

                            <span className="inline-flex items-center justify-start gap-2 bg-[#e3ffd9] px-2 py-0.5 mb-2 mt-5 rounded-3xl text-sm">
                                <div className="w-2 h-2 rounded-full bg-[#1c8e12]"></div>
                                {t("software.section1.rigth.1.span")}
                            </span>

                            <ul className="list-disc list-inside text-xs/6 mt-2 space-y-0">
                                <li>{t("software.section1.rigth.1.list.first")}</li>
                                <li>{t("software.section1.rigth.1.list.second")}</li>
                                <li>{t("software.section1.rigth.1.list.third")}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto flex items-center -mt-[100px] w-full min-h-screen bg-[url('/background.svg')] bg-cover">
                <img
                    src="/investment2.svg"
                    alt="image"
                    className="w-full h-full object-cover"
                />
            </section>

            <section className="flex flex-col min-h-screen bg-black px-8 justify-center">
                <ProgressiveTimeline
                    title={t("software.section3.title")}
                    sections={timelineSections}
                    autoProgress={true}
                    progressInterval={5000}
                    span={t("software.section3.span")}
                    onSectionChange={(sectionId, index) => {
                        console.log(`Active section: ${sectionId} (${index})`);
                    }}
                />
            </section>

            <section className="container mx-auto flex flex-col h-[130vh] px-8 my-20">
                <span className="text-[#3a5af9] bg-[#eff2ff] w-45 text-center rounded-3xl py-1 px-2">
                    {t("software.section4.span")}
                </span>
                <h2 className="text-4xl my-5">{t("software.section4.h2")}</h2>
                <p className="">{t("software.section4.p")}</p>
                <div className="flex w-full my-10">
                    <div className="flex flex-col w-2/5 gap-4">
                        {/* Hover triggers */}
                        <div className="flex py-2 px-2 justify-center gap-4  w-full">
                            {hoverItems.map((item, index) => (
                                <span
                                    key={index}
                                    onMouseEnter={() => setActiveIndex1(index)}
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
            </section>

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

        </div>
    );
}
