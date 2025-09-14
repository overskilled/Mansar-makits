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
    p: t("home.EnteteData.p"),
  };
  const flexWrapRight = {
    Image: "/gauche.svg",
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
        image: "/neoBanck.svg",
      },
    ],
  };

  //  const blocks = t("home.flexWrapRight.BLOCK", { returnobject: true })
  return (
    <div className="flex h-screen flex-col relative">
      <div className="flex pb-20 pt-40 px-8 relative mb-20">
        <div className="w-3/7 ">
          <h1 className="text-6xl font-light mb-2.5 md:mb-6">
            {t("home.hero.H1.0")} <br /> {t("home.hero.H1.1")} <br />{" "}
            {t("home.hero.H1.2")}
          </h1>
          <p className="text-md text-gray-600 font-thin">{t("home.hero.P")}</p>
          {/* <button className="bg-black rounded-2xl"></button> */}
          <Button
            size="lg"
            className="text-sm font-medium rounded-xl mt-8 hover:cursor-pointer bg-black border border-gray-600 text-white"
            onClick={() => router.push("/contact")}
          >
            {t('home.hero.B')}
          </Button>
        </div>
        <div className="w-4/7 absolute right-0 top-0 h-full flex">
          <div className="w-full flex justify-center items-center">
            <img
              src="https://placehold.co/600x400/000000/FFFFFF/png"
              alt="image"
              className="w-[600px] h-[400px]"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col px-8 relative mt-10 mb-30">
        <Entete
          SPAN={EnteteData.SPAN}
          H3={EnteteData.H3}
          P={EnteteData.p}
          TEXT="text-[#6583d2]"
          BG="bg-[#e9e7db]"
        />

        <div className="flex flex-col relative gap-30 bg-[url('/background.svg')] bg-cover min-h-[800px] mb-40">
          <div className=" bg-[url('/background-marche.svg')] bg-center bg-auto w-full h-[750px]">
            {/* <div className="absolut  w-full h-full"> */}
            <div className="flex">
              <div className="flex flex-col justify-between group *:group-hover:ml-4">
                <h4 className="text-3xl duration-150">
                  {t("home.section1.h4")}
                </h4>
                <p className="w-3/4 textmd duration-300">
                  {t("home.section1.P")}
                </p>
                <span className="flex gap-2 group hover:text-yellow-400 duration-500 cursor-pointer">
                  {t("learn_more")}{" "}
                  <MoveUpRight className="w-4 group-hover:w-5 duration-500" />
                </span>
              </div>
              <img
                src="https://lemonmarkets2.cdn.prismic.io/lemonmarkets2/aH45W0MqNJQqIJW6_image-broker.svg?fit=max&w=1200"
                alt="image"
              />
            </div>
            <div className="flex">
              <div className="w-4/7">
                <img
                  src="https://lemonmarkets2.cdn.prismic.io/lemonmarkets2/aH45Z0MqNJQqIJW__image-banks.svg?fit=max&w=1200"
                  alt="image"
                />
              </div>
              <div className="flex justify-center items-center my-20 w-3/7">
                <div className="flex flex-col justify-between gap-10 right-0 group *:group-hover:pl-4 w-auto ">
                  <h4 className="text-3xl duration-150">
                    {t("home.section2.h4")}
                  </h4>
                  <p className="textlg lith duration-300">
                    {t("home.section2.P")}
                  </p>
                  <span className="flex gap-2 hover:text-yellow-400 cursor-pointer duration-500">
                    {" "}
                    {t("learn_more")}{" "}
                    <MoveUpRight className="w-4 group-hover:w-5 duration-500" />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col justify-between w-4/7 group *:group-hover:pl-4">
                <h4 className="text-3xl duration-150">
                  {t("home.section3.h4")}
                </h4>
                <p className="w-4/5 textlg duration-300">
                  {t("home.section3.P")}
                </p>
                <span className="flex gap-2 group duration-500 hover:text-yellow-400 cursor-pointer">
                  {t("learn_more")}{" "}
                  <MoveUpRight className="w-4 group-hover:w-5 duration-500" />
                </span>
              </div>
              {/* <div className="w-3/7"> */}
              <img
                src="https://lemonmarkets2.cdn.prismic.io/lemonmarkets2/aH45W0MqNJQqIJW6_image-broker.svg?fit=max&w=1200"
                alt="image"
              />
              {/* </div> */}
            </div>
            {/* </div> */}
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

      <Footer />
    </div>
  );
}
