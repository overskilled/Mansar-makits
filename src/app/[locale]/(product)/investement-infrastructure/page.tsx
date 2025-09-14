"use client";

import DoubleBlockWithImage from "@/components/custom/DoubleBlockWithImage";
import Entete from "@/components/custom/Entete";
import FlexWrapRight from "@/components/custom/FlexWrapRight";
import Footer from "@/components/custom/Footer";
import FunctionnalityBlock from "@/components/custom/FunctionnalityBlock";
import GetInTouchBlock from "@/components/custom/GetInTouchBlock";
import { Card } from "@/components/ui/card";
import { useI18n } from "@/locales/client";
import { ChevronRight } from "lucide-react";

export default function page() {
  const t = useI18n();

  const dataEntete = {
    SPAN: t("product.dataEntete.SPAN"),
    H3: t("product.dataEntete.H3"),
    P: t("product.dataEntete.P"),
  };
  const ListeDoubleBlock = {
    SPAN: t("product.ListeDoubleBlock.SPAN"),
    H3: t("product.ListeDoubleBlock.H3"),
    P: t("product.ListeDoubleBlock.P"),
    LEGEND: t("product.ListeDoubleBlock.LEGEND"),
    BLOCK: [
      {
        title: t("product.ListeDoubleBlock.BLOCK.0.title"),
        content: t("product.ListeDoubleBlock.BLOCK.0.content"),
        image: "/investment2.svg",
      },
      // "You want to bring your own cash accounts or use a third-party? No problem. We will help you integrate
      {
        title: t("product.ListeDoubleBlock.BLOCK.1.title"),
        content: t("product.ListeDoubleBlock.BLOCK.1.content"),
        image: "/investment.svg",
      },
    ],
  };
  const ListeOtherManagerSystem = [
    {
      title: t("product.ListeOtherManagerSystem.0.title"),
      descript: t("product.ListeOtherManagerSystem.0.descript"),
      statut: t("product.ListeOtherManagerSystem.0.statut"),
      color: "bg-amber-300",
    },
    {
      title: t("product.ListeOtherManagerSystem.1.title"),
      descript: t("product.ListeOtherManagerSystem.1.descript"),
      color: "bg-green-300",
      statut: t("product.ListeOtherManagerSystem.1.statut"),
    },
    {
      title: t("product.ListeOtherManagerSystem.2.title"),
      descript: t("product.ListeOtherManagerSystem.2.descript"),
      color: "bg-green-300",
      statut: t("product.ListeOtherManagerSystem.2.statut"),
    },
    {
      title: t("product.ListeOtherManagerSystem.3.title"),
      descript: t("product.ListeOtherManagerSystem.3.descript"),
      color: "bg-green-300",
      statut: t("product.ListeOtherManagerSystem.3.statut"),
    },
    {
      title: t("product.ListeOtherManagerSystem.4.title"),
      descript: t("product.ListeOtherManagerSystem.4.descript"),
      statut: t("product.ListeOtherManagerSystem.4.statut"),
      color: "bg-amber-300",
    },
    {
      title: t("product.ListeOtherManagerSystem.5.title"),
      descript: t("product.ListeOtherManagerSystem.5.descript"),
      statut: t("product.ListeOtherManagerSystem.5.statut"),
      color: "bg-amber-300",
    },
    {
      title: t("product.ListeOtherManagerSystem.6.title"),
      descript: t("product.ListeOtherManagerSystem.6.descript"),
      statut: t("product.ListeOtherManagerSystem.6.statut"),
      color: "bg-amber-300",
    },
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
    Image:'/gauche.svg',
    SPAN: t("product.dataBlock1.SPAN"),
    H3: t("product.dataBlock1.H3"),
    P: t("product.dataBlock1.P"),
    BLOCK: [
      {
        icone:
          "https://lemonmarkets2.cdn.prismic.io/lemonmarkets2…c22e_user-profile-change-refresh.svg?fit=max&w=96",
        title: t("product.dataBlock1.BLOCK.0.title"),
        content: t("product.dataBlock1.BLOCK.0.content"),
      },
      {
        icone:
          "https://lemonmarkets2.cdn.prismic.io/lemonmarkets2…c9d530_programming-code-terminal.svg?fit=max&w=96",
        title: t("product.dataBlock1.BLOCK.1.title"),
        content: t("product.dataBlock1.BLOCK.1.content"),
      },
      {
        icone:
          "https://lemonmarkets2.cdn.prismic.io/lemonmarkets2/d2abef25-06d5-4361-81bb-426fedc9d530_programming-code-terminal.svg?fit=max&w=96",
        title: t("product.dataBlock1.BLOCK.2.title"),
        content: t("product.dataBlock1.BLOCK.2.content"),
      },
      {
        icone:
          "https://lemonmarkets2.cdn.prismic.io/lemonmarkets2…b406-0243b099acc9_bank-checkmark.svg?fit=max&w=96",
        title: t("product.dataBlock1.BLOCK.3.title"),
        content: t("product.dataBlock1.BLOCK.3.content"),
      },
    ],
  };
  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full h-[calc(100vh-15vh)] flex flex-col justify-center items-center ">
        <div className="w-1/2 gap-8 mt-30 bg-transparent justify-center flex flex-col items-center *:text-center">
          <h2 className="text-5xl font-seibold mb-2">{t("product.hero.H2")}</h2>
          <p>{t("product.hero.P")}</p>
          <button className="bg-black rounded-xl py-3 px-6 mt-4 text-white text-lg">
            {t("product.hero.B")}
          </button>
        </div>
      </div>

      <DoubleBlockWithImage
        SPAN={ListeDoubleBlock.SPAN}
        H3={ListeDoubleBlock.H3}
        LEGEND={ListeDoubleBlock.LEGEND}
        BLOCK={ListeDoubleBlock.BLOCK}
        P={ListeDoubleBlock.P}
      />

      <div className="my-10 pl-1">
        <span className="bg-blue-800/30 text-blue-500 px-4 py-0.5 rounded-3xl">
          {t("product.section1.SPAN")}
        </span>
        <h3 className="my-10 text-4xl ">{t("product.section1.H3")}</h3>
        <p className="text-md ">{t("product.section1.P")}</p>
        <div className="pt-10 pb-10">
          {ListeOtherManagerSystem.map((el, index) => (
            <div className="my-10 py-5" key={index}>
              <div className="flex mb-4 gap-5 items-center">
                <h4 className="text-2xl">{el.title}</h4>
                <span
                  className={`rounded-3xl px-2 py-0.5  relative flex items-center gap-3 ${el.color}`}
                >
                  <span className="w-1 h-1 bg-black "></span>
                  <span className="text-sm">{el.statut}</span>
                </span>
              </div>
              <p>{el.descript}</p>
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
      <div className="w-full pt-20 ">
        <Entete
          H3={dataEntete.H3}
          SPAN={dataEntete.SPAN}
          P={dataEntete.P}
          BG="bg-indigo-100"
          TEXT="text-blue-700"
        />

        <div className="flex lg:flex-col flex-col-reverse ">
          <div className="w-full flex gap-4">
            <div className="w-1/4 lg:flex hidden">
              <img
                src="/stimulation.png"
                alt="image"
                className="w-full h-full bg-cover bg-no-repeat"
              />
            </div>
            <div className="p-0 lg:w-3/4 flex w-full flex-row bg-no-repeat bg-contain mx-4 shadow-none rounded-md pt-2">
              <div className="w-full h-full bg-image flex items-center justify-between">
                <div className="w-1/2 pl-5 *:my-5">
                  <img src="/p4.png" alt="image" />
                  <p>{t("product.section2.P")}</p>
                  <span>{t("product.section2.SPAN")}</span>
                  <button className="p-2 flex items-center gap-3 bg-white rounded-2xl border my-4">
                    {t("product.section2.B")} <ChevronRight />
                  </button>
                </div>
                <div className="flex h-full rounded-tr-md rounded-br-md">
                  <img src="/phone.png" alt="image" className="object-cover" />
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
