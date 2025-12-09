"use client";

import DoubleBlockWithImage from "@/components/custom/DoubleBlockWithImage";
import Entete from "@/components/custom/Entete";
import FlexWrapRight from "@/components/custom/FlexWrapRight";
import Footer from "@/components/custom/Footer";
import FunctionnalityBlock from "@/components/custom/FunctionnalityBlock";
import GetInTouchBlock from "@/components/custom/GetInTouchBlock";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useI18n } from "@/locales/client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function page() {
  const t = useI18n();

  const dataEntete = {
    SPAN: t("product.dataEntete.SPAN"),
    H3: t("product.dataEntete.H3"),
    P: t("product.dataEntete.P"),
  };
  const ListeDoubleBlock = {
    SPAN: t("home.ListeDoubleBlock.SPAN"),
    H3: t("home.ListeDoubleBlock.H3"),
    P: t("home.ListeDoubleBlock.P"),
    LEGEND: t("home.ListeDoubleBlock.LEGEND"),
    BLOCK: [
      {
        title: t("home.ListeDoubleBlock.BLOCK.1.title"),
        content: t("home.ListeDoubleBlock.BLOCK.1.content"),
        image: "/Home/securities-account.svg",
      },
      {
        title: t("home.ListeDoubleBlock.BLOCK.0.title"),
        content: t("home.ListeDoubleBlock.BLOCK.0.content"),
        image: "/Home/cash-acccount.svg",
      },
    ],
  };
  const ListeOtherManagerSystem = [
    {
      title: t("product.ListeOtherManagerSystem.0.title"),
      descript: t("product.ListeOtherManagerSystem.0.descript"),
      statut: t("product.ListeOtherManagerSystem.0.statut"),
      bulletColor: "bg-[#3cbf30]",
      color: "bg-[#e3ffd9]",
    },
    {
      title: t("product.ListeOtherManagerSystem.1.title"),
      descript: t("product.ListeOtherManagerSystem.1.descript"),
      bulletColor: "bg-[#3cbf30]",
      color: "bg-[#e3ffd9]",
      statut: t("product.ListeOtherManagerSystem.1.statut"),
    },
    {
      title: t("product.ListeOtherManagerSystem.2.title"),
      descript: t("product.ListeOtherManagerSystem.2.descript"),
      bulletColor: "bg-[#3cbf30]",
      color: "bg-[#e3ffd9]",
      statut: t("product.ListeOtherManagerSystem.2.statut"),
    },
    {
      title: t("product.ListeOtherManagerSystem.3.title"),
      descript: t("product.ListeOtherManagerSystem.3.descript"),
      bulletColor: "bg-[#3cbf30]",
      color: "bg-[#e3ffd9]",
      statut: t("product.ListeOtherManagerSystem.3.statut"),
    },
    // {
    //   title: t("product.ListeOtherManagerSystem.4.title"),
    //   descript: t("product.ListeOtherManagerSystem.4.descript"),
    //   statut: t("product.ListeOtherManagerSystem.4.statut"),
    //   color: "bg-[#fffb9e]",
    //   bulletColor: "bg-[#d3cc17]",
    // }, 
    {
      title: t("product.ListeOtherManagerSystem.5.title"),
      descript: t("product.ListeOtherManagerSystem.5.descript"),
      statut: t("product.ListeOtherManagerSystem.5.statut"),
      color: "bg-[#fffb9e]",
      bulletColor: "bg-[#d3cc17]",
    },
    // {
    //   title: t("product.ListeOtherManagerSystem.6.title"),
    //   descript: t("product.ListeOtherManagerSystem.6.descript"),
    //   statut: t("product.ListeOtherManagerSystem.6.statut"),
    //   color: "bg-[#fffb9e]",
    //   bulletColor: "bg-[#d3cc17]",
    // },
  ];
  const FunctionnalityBlockData = {
    SPAN: t("product.FunctionnalityBlockData.SPAN"),
    H3: t("product.FunctionnalityBlockData.H3"),
    P: t("product.FunctionnalityBlockData.P"),
    BLOCK: [
      {
        image:
          "https://lemonmarkets2.cdn.prismic.io/lemonmarkets2/dc7ae402-3d09-473d-a8bf-dc32f154d22c_user-document.svg?fit=max&w=96",
        title: t("product.FunctionnalityBlockData.BLOCK.0.title"),
        descript: t("product.FunctionnalityBlockData.BLOCK.0.descript"),
      },
      {
        image: "/balise.svg",
        title: t("product.FunctionnalityBlockData.BLOCK.1.title"),
        descript: t("product.FunctionnalityBlockData.BLOCK.1.descript"),
      },
      {
        image: "/dashboard.svg",
        title: t("product.FunctionnalityBlockData.BLOCK.2.title"),
        descript: t("product.FunctionnalityBlockData.BLOCK.2.descript"),
      },
      {
        image:
          "	https://lemonmarkets2.cdn.prismic.io/lemonmarkets2/eb140aa0-1bb2-4e5b-8b2e-41caefdd9d5a_table-edit-chart.svg?fit=max&w=96",
        title: t("product.FunctionnalityBlockData.BLOCK.3.title"),
        descript: t("product.FunctionnalityBlockData.BLOCK.3.descript"),
      },
      {
        image: "/doubleCamera.svg",
        title: t("product.FunctionnalityBlockData.BLOCK.4.title"),
        descript: t("product.FunctionnalityBlockData.BLOCK.4.descript"),
      },
      {
        image: "/bank-checkmark.svg",
        title: t("product.FunctionnalityBlockData.BLOCK.5.title"),
        descript: t("product.FunctionnalityBlockData.BLOCK.5.descript"),
      },
    ],
  };
  const dataBlock1 = {
    Image: '/logo-mansar.webp',
    SPAN: t("product.dataBlock1.SPAN"),
    H3: t("product.dataBlock1.H3"),
    P: t("product.dataBlock1.P"),
    BLOCK: [
      {
        icone:
          "/icons/user-profile-change-refresh.svg",
        title: t("product.dataBlock1.BLOCK.0.title"),
        content: t("product.dataBlock1.BLOCK.0.content"),
      },
      {
        icone:
          "/icons/programming-code-window-terminal.svg",
        title: t("product.dataBlock1.BLOCK.1.title"),
        content: t("product.dataBlock1.BLOCK.1.content"),
      },
      {
        icone:
          "/icons/programming-code-terminal.svg",
        title: t("product.dataBlock1.BLOCK.2.title"),
        content: t("product.dataBlock1.BLOCK.2.content"),
      },
      {
        icone:
          "/icons/bank-checkmark.svg",
        title: t("product.dataBlock1.BLOCK.3.title"),
        content: t("product.dataBlock1.BLOCK.3.content"),
      },
    ],
  };
  return (
    <div className="flex flex-col min-h-screen">
      <div className="max-w-7xl mx-auto px-8 lg-px-0 h-screen flex flex-col justify-center items-center ">
        <div className="w-full gap-8 bg-transparent justify-center flex flex-col items-center *:text-center">
          <h2 className="text-5xl w-1/2 font-seibold mb-2">{t("product.hero.H2")}</h2>
          <p className="w-[75%] leading-8 font-[50] text-md text-gray-600">{t("product.hero.P")}</p>
          <Button variant="basic" size="xl" className="rounded-xl font-light text-lg" >
            {t("product.hero.B")}
          </Button>
        </div>
        {/* <div
              className="absolute left-0 right-0 -z-10 -bottom-24 h-[489px] hidden sm:block
                  bg-no-repeat bg-cover bg-bottom 2xl:bg-contain 
                  bg-[url('/background-tiled-page-hero.svg')]"
            /> */}

        <div className="hidden lg:block">
          {/* Left decoration */}
          <div className="absolute -z-10 pointer-events-none left-[29px] bottom-[38px]">
            <Image
              src="/background-page-hero-left.svg"
              alt="Decoration left"
              width={87}
              height={120}
              priority={false}
            />
          </div>

          {/* Right decoration */}
          <div className="absolute -z-10 pointer-events-none right-[15px] bottom-[25px]">
            <Image
              src="/background-page-hero-right.svg"
              alt="Decoration right"
              width={120}
              height={122}
              priority={false}
            />
          </div>
        </div>
      </div>


      <DoubleBlockWithImage
        SPAN={ListeDoubleBlock.SPAN}
        H3={ListeDoubleBlock.H3}
        LEGEND={ListeDoubleBlock.LEGEND}
        BLOCK={ListeDoubleBlock.BLOCK}
        P={ListeDoubleBlock.P}
      />

      <div className="my-10 px-4 lg:px-0 mx-auto w-full container">
        <span className="bg-[#ebf3fc] text-[#4c6cfc] px-4 py-0.5 rounded-3xl">
          {t("product.section1.SPAN")}
        </span>
        <h3 className="my-8 text-4xl ">{t("product.section1.H3")}</h3>
        <p className="text-md leading-6 ">{t("product.section1.P")}</p>
        <div className="pt-10 pb-10">
          {ListeOtherManagerSystem.map((el, index) => (
            <div className="my-10 py-5" key={index}>
              <div className="flex mb-4 gap-5 items-center">
                <h4 className="text-2xl">{el.title}</h4>
                <span
                  className={`rounded-3xl px-4 py-1 relative flex items-center gap-2 ${el.color}`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${el.bulletColor}`} ></span>
                  <span className="text-xs">{el.statut}</span>
                </span>
              </div>
              <p>{el.descript}</p>
              <Separator className="mt-5" />
            </div>
          ))}
        </div>
      </div>

      <FunctionnalityBlock
        SPAN={FunctionnalityBlockData.SPAN}
        H3={FunctionnalityBlockData.H3}
        P={FunctionnalityBlockData.P}
        BLOCK={FunctionnalityBlockData.BLOCK}
      />
      <div className="w-full my-20 mb-20 pb-20 px-8">
        <Entete
          H3={dataEntete.H3}
          SPAN={dataEntete.SPAN}
          P={dataEntete.P}
          BG="bg-indigo-100"
          TEXT="text-blue-700"
        />

        <div className="flex flex-col-reverse lg:flex-col mt-10">
          {/* Wrapper */}
          <div className="w-full flex flex-col lg:flex-row gap-4">

            {/* Left image (hidden on small, visible on large) */}
            <div className="hidden lg:flex lg:w-1/4">
              <img
                src="/stimulation.png"
                alt="image"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>

            {/* Right content */}
            <div className="flex flex-col lg:flex-row w-full lg:w-3/4 mx-0 lg:mx-4 shadow-none rounded-md pt-2">
              <div className="w-full h-full bg-image rounded-lg flex flex-col lg:flex-row items-center justify-between p-4">

                {/* Text Section */}
                <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
                  <img src="/p4.png" alt="image" className="mx-auto lg:mx-0" />
                  <p className="text-white">{t("product.section2.P")}</p>
                  <span className="text-white block">{t("product.section2.SPAN")}</span>
                  <button className="p-2 px-4 flex items-center justify-center gap-2 bg-white rounded-2xl border my-4 mx-auto lg:mx-0">
                    {t("product.section2.B")} <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

                {/* Phone Image */}
                <div className="flex justify-center lg:justify-end w-full lg:w-1/2 mt-6 lg:mt-0">
                  <img
                    src="/phone.png"
                    alt="phone"
                    className="object-contain max-h-80 w-auto"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <FlexWrapRight
        SPAN={dataBlock1.SPAN}
        H3={dataBlock1.H3}
        P={dataBlock1.P}
        BLOCK={dataBlock1.BLOCK}
        Image={dataBlock1.Image}
      />

      <GetInTouchBlock />

          <Footer />
    </div>
  );
}
