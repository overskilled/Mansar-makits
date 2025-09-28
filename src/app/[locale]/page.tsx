"use client";

import CooperationBlock from "@/components/custom/CooperationBlock";
import DoubleBlockWithImage from "@/components/custom/DoubleBlockWithImage";
import Entete from "@/components/custom/Entete";
import FlexWrapRight from "@/components/custom/FlexWrapRight";
import Footer from "@/components/custom/Footer";
import FunctionnalityBlock from "@/components/custom/FunctionnalityBlock";
import GetInTouchBlock from "@/components/custom/GetInTouchBlock";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useI18n } from "@/locales/client";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { use, useTransition } from "react";

export default function Home() {
  const t = useI18n();
  const router = useRouter()


  const EnteteData = {
    SPAN: t("home.EnteteData.SPAN"),
    H3: t("home.EnteteData.H3"),
  };
  const flexWrapRight = {
    Image: "/logo-mansar.webp",
    SPAN: t("home.flexWrapRight.SPAN"),
    H3: t("home.flexWrapRight.H3"),
    P: t("home.flexWrapRight.P"),
    BLOCK: [
      {
        icone: "/user.svg",
        title: t("home.flexWrapRight.BLOCK.0.title"),
        content: t("home.flexWrapRight.BLOCK.0.content"),
      },
      {
        icone: "/dashboard.svg",
        title: t("home.flexWrapRight.BLOCK.1.title"),
        content: t("home.flexWrapRight.BLOCK.1.content"),
      },
      {
        icone: "/balise.svg",
        title: t("home.flexWrapRight.BLOCK.2.title"),
        content: t("home.flexWrapRight.BLOCK.2.content"),
      },
      {
        icone: "/bank-checkmark.svg",
        title: t("home.flexWrapRight.BLOCK.3.title"),
        content: t("home.flexWrapRight.BLOCK.3.content"),
      },
    ],
  };
  const FunctionnalityBlockData = {
    SPAN: t("home.FunctionnalityBlockData.SPAN"),
    H3: t("home.FunctionnalityBlockData.H3"),
    P: t("home.FunctionnalityBlockData.P"),
    BLOCK: [
      {
        image: '/userText.svg',
        title: t("home.FunctionnalityBlockData.BLOCK.0.title"),
        descript: t("home.FunctionnalityBlockData.BLOCK.0.descript"),
      },
      {
        image: '/doubleCamera.svg',
        title: t("home.FunctionnalityBlockData.BLOCK.1.title"),
        descript: t("home.FunctionnalityBlockData.BLOCK.1.descript"),
      },
      {
        image: '/programming.svg',
        title: t("home.FunctionnalityBlockData.BLOCK.2.title"),
        descript: t("home.FunctionnalityBlockData.BLOCK.2.descript"),
      },
      {
        image: '/table-edit-chart.svg',
        title: t("home.FunctionnalityBlockData.BLOCK.3.title"),
        descript: t("home.FunctionnalityBlockData.BLOCK.3.descript"),
      },
      {
        image: '/list.svg',
        title: t("home.FunctionnalityBlockData.BLOCK.4.title"),
        descript: t("home.FunctionnalityBlockData.BLOCK.4.descript"),
      },
      {
        image: '/dashboard.svg',
        title: t("home.FunctionnalityBlockData.BLOCK.5.title"),
        descript: t("home.FunctionnalityBlockData.BLOCK.5.descript"),
      },
    ],
  };
  const ListeDoubleBlock = {
    SPAN: t("home.ListeDoubleBlock.SPAN"),
    H3: t("home.ListeDoubleBlock.H3"),
    P: t("home.ListeDoubleBlock.P"),
    LEGEND: t("home.ListeDoubleBlock.LEGEND"),
    BLOCK: [
      {
        title: t("home.ListeDoubleBlock.BLOCK.0.title"),
        content: t("home.ListeDoubleBlock.BLOCK.0.content"),
        image: "/investment.svg",
      },
      {
        title: t("home.ListeDoubleBlock.BLOCK.1.title"),
        content: t("home.ListeDoubleBlock.BLOCK.1.content"),
        image: "/investment2.svg",
      },
    ],
  };

  //  const blocks = t("home.flexWrapRight.BLOCK", { returnobject: true })
  return (
    <div className="flex h-screen flex-col relative">
      <div className="relative py-10 md:py-40 px-8  lg:px-0 md:px-12">
        <div className="container mx-auto px-8 md:px-0 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-light leading-tight">
              {t("home.hero.H1.0")} <br />
              {t("home.hero.H1.1")} <br />
              {t("home.hero.H1.2")}
            </h1>
            <p className="text-base md:text-lg text-gray-600 font-thin">
              {t("home.hero.P")}
            </p>
            <Button
              size="lg"
              className="text-sm md:text-base font-medium rounded-xl mt-8 hover:cursor-pointer bg-black border border-gray-600 text-white"
              onClick={() => router.push("/contact")}
            >
              {t("home.hero.B")}
            </Button>
          </div>

          {/* Right Image */}
          <div className="hidden md:flex justify-center items-center">
            <img
              src="https://placehold.co/600x400/000000/FFFFFF/png"
              alt="hero image"
              className="w-full max-w-[600px] h-auto object-contain"
            />
          </div>
        </div>
      </div>


      <div className="flex flex-col px-6 md:px-0 relative mt-10 mb-30">

        <div className="container mx-auto text-left items-left px-6 md:px-0 w-full text-center mb-12">
          {/* Span */}
          <span
            className="inline-block py-1 px-4 rounded-2xl font-semibold text-sm text-[#6583d2] bg-[#e9e7db]"
          >
            {EnteteData.SPAN}
          </span>

          {/* Title */}
          <h3 className="text-2xl md:w-[50%] md:text-4xl font-meduim text-gray-800 my-6 md:my-10 leading-snug">
            {EnteteData.H3}
          </h3>
        </div>



        <div className="hidden md:relative bg-[url('/background-marche.svg')] bg-cover bg-no-repeat py-20"></div>
        <div className="container mx-auto px-6 md:px-0 space-y-24">
          <div
          className="hidden md:absolute left-0 right-0 -z-10 top-1/2 -translate-y-1/2 h-[800px] mt-[125px] bg-no-repeat bg-cover 2xl:bg-contain bg-bottom hidden lg:block"
          style={{ backgroundImage: "url('/background-marche.svg')" }}
        ></div>
          <div
          className="hidden md:absolute left-0 right-0 -z-10 top-1/2 -translate-y-1/2 h-[800px] mt-[125px] bg-no-repeat bg-cover 2xl:bg-contain bg-bottom hidden lg:block"
          style={{ backgroundImage: "url('/background.svg')" }}
        ></div>
          {/* Section 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center container mx-auto px-6 md:px-0">
            {/* Text */}
            <div className="flex flex-col justify-between space-y-6">
              <h4 className="text-2xl md:text-3xl font-semibold">
                {t("home.section1.h4")}
              </h4>
              <p className="text-base md:text-lg text-gray-700">
                {t("home.section1.P")}
              </p>
              <span className="flex items-center gap-2 cursor-pointer hover:text-yellow-400 duration-500">
                {t("learn_more")}
                <MoveUpRight className="w-4 group-hover:w-5 duration-500" />
              </span>
            </div>
            {/* Image always below text on mobile */}
            <div className="flex justify-center order-last md:order-none">
              <img
                src="/Home/image1.svg"
                alt="image"
                className="max-w-full h-auto"
              />
            </div>
          </div>

          {/* Section 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image always below text on mobile */}
            <div className="flex justify-center order-last md:order-none">
              <img
                src="/Home/banks.svg"
                alt="image"
                className="max-w-full h-auto"
              />
            </div>
            {/* Text */}
            <div className="flex flex-col justify-center space-y-6">
              <h4 className="text-2xl md:text-3xl font-semibold">
                {t("home.section2.h4")}
              </h4>
              <p className="text-base md:text-lg text-gray-700">
                {t("home.section2.P")}
              </p>
              <span className="flex items-center gap-2 cursor-pointer hover:text-yellow-400 duration-500">
                {t("learn_more")}
                <MoveUpRight className="w-4 group-hover:w-5 duration-500" />
              </span>
            </div>
          </div>

          {/* Section 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="flex flex-col justify-between space-y-6">
              <h4 className="text-2xl md:text-3xl font-semibold">
                {t("home.section3.h4")}
              </h4>
              <p className="text-base md:text-lg text-gray-700">
                {t("home.section3.P")}
              </p>
              <span className="flex items-center gap-2 cursor-pointer hover:text-yellow-400 duration-500">
                {t("learn_more")}
                <MoveUpRight className="w-4 group-hover:w-5 duration-500" />
              </span>
            </div>
            {/* Image always below text on mobile */}
            <div className="flex justify-center order-last md:order-none">
              <img
                src="/Home/image1.svg"
                alt="image"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>

      </div>



      <div className="">
        <FlexWrapRight
          SPAN={flexWrapRight.SPAN}
          H3={flexWrapRight.H3}
          P={flexWrapRight.P}
          BLOCK={flexWrapRight.BLOCK}
          Image={flexWrapRight.Image}
        />

        <CooperationBlock />

        <DoubleBlockWithImage
          SPAN={ListeDoubleBlock.SPAN}
          H3={ListeDoubleBlock.H3}
          P={ListeDoubleBlock.P}
          LEGEND={ListeDoubleBlock.LEGEND}
          BLOCK={ListeDoubleBlock.BLOCK}
        />
      </div>

      <FunctionnalityBlock
        SPAN={FunctionnalityBlockData.SPAN}
        H3={FunctionnalityBlockData.H3}
        P={FunctionnalityBlockData.P}
        BLOCK={FunctionnalityBlockData.BLOCK}
      />

      <GetInTouchBlock />

    </div>
  );
}
