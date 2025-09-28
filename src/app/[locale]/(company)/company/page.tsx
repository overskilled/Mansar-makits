"use client";

import Entete from "@/components/custom/Entete";
import Footer from "@/components/custom/Footer";
import GetInTouchBlock from "@/components/custom/GetInTouchBlock";
import Hero from "@/components/custom/Hero";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useI18n } from "@/locales/client";
import { MoveDownRight, MoveUpRight } from "lucide-react";

export default function page() {
  const t = useI18n();

  const hero = {
    H2: t("company.hero.H2"),
    P: t("company.hero.P"),
    B: t("company.hero.B"),
  };
  const ListeDOubleData = [
    {
      image: "/andy.jpg",
      text: t("company.ListeDOubleData.text1"),
    },
    {
      image: "/andy.jpg",
      text: t("company.ListeDOubleData.text2"),
    },
    {
      image: "/andy.jpg",
      text: t("company.ListeDOubleData.text3"),
    },
    {
      image: "/andy.jpg",
      text: t("company.ListeDOubleData.text4"),
    },
    {
      image: "/andy.jpg",
      text: t("company.ListeDOubleData.text5"),
    },
    {
      image: "/andy.jpg",
      text: t("company.ListeDOubleData.text6"),
    },
  ];
  const carouselData = [
    {
      picture: "/andy.jpg",
      name: t("company.carouselData.0.name"),
      role: t("company.carouselData.0.role"),
    },
    {
      picture: "/andy.jpg",
      name: t("company.carouselData.1.name"),
      role: t("company.carouselData.1.role"),
    },
    {
      picture: "/andy.jpg",
      name: t("company.carouselData.2.name"),
      role: t("company.carouselData.2.role"),
    },
    {
      picture: "/andy.jpg",
      name: t("company.carouselData.3.name"),
      role: t("company.carouselData.3.role"),
    },
    {
      picture: "/andy.jpg",
      name: t("company.carouselData.4.name"),
      role: t("company.carouselData.4.role"),
    },
  ];
  const listeImage = ["/andy.jpg", "/andy.jpg", "/andy.jpg"];
  const EnteteData = {
    SPAN: t("company.EnteteData.SPAN"),
    H3: t("company.EnteteData.H3"),
    P: t("company.EnteteData.P"),
  };
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Hero H2={hero.H2} P={hero.P} B={hero.B} /> */}

      <section className="w-full my-10">
        <div className="w-full flex my-15 max-h-80 ">
          <div className="float-left w-1/2">
            <div className="h-full pr-30 group *:group-hover:ml-4">
              <span className="px-4 py-0.5 bg-indigo-100 text-shadow-md text-indigo-500 rounded-3xl duration-150">
                {t("company.section1.SPAN1")}
              </span>
              <h3 className="my-8 text-3xl text-shadow-lg duration-300">
                {t("company.section1.H13")}
              </h3>
              <p className="duration-500 w-full">{t("company.section1.P1")}</p>
            </div>
          </div>
          <div className="float-right w-1/2 flex justify-end ">
            <img
              src="/andy.jpg"
              alt="yess"
              className="mx-2 bg-gray-50 w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="w-full flex my-15 max-h-80 ">
          <div className="float-right w-1/2 pr-4 flex justify-start">
            <img
              src="/andy.jpg"
              alt="yess"
              className="mx-2 bg-gray-50 w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="float-left w-1/2 flex flex-col items-center pl-30">
            <div className="h-full group *:group-hover:-ml-4">
              <span className="px-4 py-0.5 bg-indigo-100 text-shadow-md text-indigo-500 rounded-3xl duration-150">
                {t("company.section1.SPAN2")}
              </span>
              <h3 className="my-8 text-3xl text-shadow-lg duration-300">
                {t("company.section1.H23")}
              </h3>
              <p className="duration-500">{t("company.section1.P2")}</p>
            </div>
          </div>
        </div>
        <div className="w-full flex my-15 max-h-80">
          <div className="float-left w-1/2 flex flex-col items-center pr-30">
            <div className="h-full group *:group-hover:ml-4">
              <span className="px-4 py-0.5 bg-indigo-100 text-shadow-md text-indigo-500 rounded-3xl duration-150">
                {t("company.section1.SPAN3")}
              </span>
              <h3 className="my-8 text-3xl text-shadow-lg duration-300">
                {t("company.section1.H33")}
              </h3>
              <p className="duration-500">{t("company.section1.P3")}</p>
            </div>
          </div>
          <div className="float-right w-1/2 flex justify-end ">
            <img
              src="/andy.jpg"
              alt="yess"
              className="mx-2 bg-gray-50 w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      <div className="flex flex-col items-center bg-gray-50 gap-10 justifycenter my-10">
        <span className="text-indigo-500 bg-indigo-50 text-shadow-xs px-4 py-1 rounded-3xl">
          {t("company.section2.SPAN")}
        </span>
        <h3 className="text-3xl font-semibold text-shadow-sm">
          {t("company.section2.H3")}
        </h3>
        <p className="text-center">{t("company.section2.P")}</p>
        <h5 className="font-semibold text-lg text-shadow-2xs">
          {t("company.section2.H5")}
        </h5>
        <div className="flex flex-wrap justify-between pl-4 pr-2">
          {ListeDOubleData.map((el, index) => (
            <Card
              key={index}
              className="shadow-none p-0 min-w100 w-[32%] rounded-md pr-2 -pt-4 mb-5"
            >
              <Card className="-ml-4 mt-2 shadow-none p-0 rounded-md -mb-4 gap-0">
                <CardContent className="w-full h-40 flex mb-2 justify-center pt-2">
                  <img
                    src={el.image}
                    alt="image"
                    className="object-cover w-40 h-full"
                  />
                </CardContent>
                <CardFooter className="justify-center text-center mb-2">
                  {el.text}
                </CardFooter>
              </Card>
            </Card>
          ))}
        </div>
      </div>

      <section className="min-h-screen pt-40 pb-10 flex flex-col items-center bg-black text-white my-10">
        <span className="bg-indigo-300 text-indigo-600 px-3 py-1 rounded-3xl">
          {t("company.section3.SPAN")}
        </span>
        <h3 className="text-3xl my-10">{t("company.section3.H3")}</h3>
        <Carousel className="flex flex-col max-w-full overflow-x-hidden ">
          <CarouselContent className="*:md:basis-1/3 *:lg:basis-1/4">
            {carouselData.map((el, index) => (
              <CarouselItem
                key={index}
                className="min-w-90 h-50 p-0 bg-black m-2"
              >
                <Card className="w-full flex-row p-0 pl-2 bg-black items-center h-full border-slate-700/50 overflow-hidden">
                  <div className="w-3/6 h-full p-2 pr-0">
                    <img
                      src={el.picture}
                      alt="image"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex w-3/6 flex-col py-2 pr-2 text-white max-h-full h-full gap5 justify-between">
                    <div className="w-full">
                      <div className="flex justify-between mb-2">
                        <h5 className="">{el.name}</h5>
                        <div className="flex w-8 tex-sm bg-gray-500 rounded-3xl h-5"></div>
                      </div>
                      <p className="text-gray-400 mt-2 mb-5">{el.role}</p>
                    </div>
                    <button className="flex bottom-0 text-sm items-center gap-3 cursor-pointer">
                      {t("Read_more")} <MoveUpRight className="w-4" />
                    </button>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center relative gap-5 mt-20">
            <CarouselPrevious className="text-white  relative bg-black rounded-sm px-8 border-slate-800/50 hover:border-white hover:bg-black hover:text-white border-[2px]" />
            <CarouselNext className="text-white  relative bg-black rounded-sm px-8 border-slate-800/50 hover:border-white hover:bg-black hover:text-white border-[2px]" />
          </div>
        </Carousel>
      </section>

      <div className="flex flex-col w-full my-10 relative">
        <div className="flex w-full justify-between h-full">
          <div className="w-1/2">
            <span className="bg-indigo-300 text-indigo-600 px-4 py-0.5 rounded-3xl">
              {t("company.section5.SPAN")}
            </span>
            <h3 className="my-5 text-5xl text-shadow-sm">
              {t("company.section5.H3.0")}
              <br /> {t("company.section5.H3.1")}
            </h3>
            <p>{t("company.section5.P")}</p>
            <button className="px-6 py-3 mt-15 bg-black text-white rounded-2xl">
              {t("company.section5.B")}
            </button>
          </div>
          <img
            src="/andy.jpg"
            alt="image"
            className="object-cover w-1/2 h-90 rounded-md"
          />
        </div>
        <div className="flex justify-around mt-10">
          {listeImage.map((el, index) => (
            <img
              src={el}
              alt="image"
              className={`w-1/3 h-70 object-cover rounded-2xl ${
                index == 1 ? "mx-5" : ""
              } shadow`}
              key={index}
            />
          ))}
        </div>
      </div>

      <div className="w-full bg-black h-70 flex flex-col justify-center my-10">
        <div className="w-full">
          <h3 className="text-4xl mb-5 text-white">
            {t("company.section6.H3")}
          </h3>
          <p className="text-gray-600">{t("company.section6.P")}</p>
        </div>
      </div>
      
      <div className="w-full mt-20">
        <Entete
          SPAN={EnteteData.SPAN}
          H3={EnteteData.H3}
          P={EnteteData.P}
          TEXT="text-indigo-600"
          BG="bg-indigo-300"
        />

        {/* section 4 */}
        <div className="bg-gray-100 w2 max-w-3/5 wauto border rounded-2xl items-center p-4 flex justify-around *:w-1/3 *:px2 *:hover:bg-white *:py-2 *:rounded-md *:text-center">
          <p>{t("company.section4.P1")}</p>
          <p>{t("company.section4.P2")}</p>
          <p>{t("company.section4.P3")}</p>
        </div>

        <div className="flex flex-col w-full mt-10">
          <div className="w-full *:py-4 *:my-5 *:flex">
            <div className="w-full">
              <span className="w-1/5">
                {t("company.section4.tableau.0.SPAN1")}
              </span>
              <div className="w-4/5">
                <p>{t("company.section4.tableau.0.P")}</p>
                <span className="px-3 py-0.5 bg-gray-400 rounded-2xl my-4">
                  {t("company.section4.tableau.0.SPAN2")}
                </span>
              </div>
            </div>
            <div className="w-full">
              <span className="w-1/5">
                {t("company.section4.tableau.0.SPAN1")}
              </span>
              <div className="w-4/5">
                <p>{t("company.section4.tableau.0.P")}</p>
                <span className="px-3 py-0.5 bg-gray-400 rounded-2xl my-4">
                  {t("company.section4.tableau.0.SPAN2")}
                </span>
              </div>
            </div>
            <div className="w-full">
              <span className="w-1/5">
                {t("company.section4.tableau.0.SPAN1")}
              </span>
              <div className="w-4/5">
                <p>{t("company.section4.tableau.0.P")}</p>
                <span className="px-3 py-0.5 bg-gray-400 rounded-2xl my-4">
                  {t("company.section4.tableau.0.SPAN2")}
                </span>
              </div>
            </div>
            <div className="w-full">
              <span className="w-1/5">
                {t("company.section4.tableau.0.SPAN1")}
              </span>
              <div className="w-4/5">
                <p>{t("company.section4.tableau.0.P")}</p>
                <span className="px-3 py-0.5 bg-gray-400 rounded-2xl my-4">
                  {t("company.section4.tableau.0.SPAN2")}
                </span>
              </div>
            </div>
            <div className="w-full">
              <span className="w-1/5">
                {t("company.section4.tableau.0.SPAN1")}
              </span>
              <div className="w-4/5">
                <p>{t("company.section4.tableau.0.P")}</p>
                <span className="px-3 py-0.5 bg-gray-400 rounded-2xl my-4">
                  {t("company.section4.tableau.0.SPAN2")}
                </span>
              </div>
            </div>
            <div className="w-full">
              <span className="w-1/5">
                {t("company.section4.tableau.0.SPAN1")}
              </span>
              <div className="w-4/5">
                <p>{t("company.section4.tableau.0.P")}</p>
                <span className="px-3 py-0.5 bg-gray-400 rounded-2xl my-4">
                  {t("company.section4.tableau.0.SPAN2")}
                </span>
              </div>
            </div>
            <div className="w-full">
              <span className="w-1/5">
                {t("company.section4.tableau.0.SPAN1")}
              </span>
              <div className="w-4/5">
                <p>{t("company.section4.tableau.0.P")}</p>
                <span className="px-3 py-0.5 bg-gray-400 rounded-2xl my-4">
                  {t("company.section4.tableau.0.SPAN2")}
                </span>
              </div>
            </div>
          </div>
        </div>

        <span className="hover:underline flex gap-4 text-lg mx-65 cursor-pointer my-10">
          {t("Read_more")} <MoveDownRight className="w-5" />
        </span>
      </div>

      <GetInTouchBlock />

          <Footer />
    </div>
  );
}
