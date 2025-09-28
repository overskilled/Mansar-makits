"use client";

import Footer from "@/components/custom/Footer";
import GetInTouchBlock from "@/components/custom/GetInTouchBlock";
import { useI18n } from "@/locales/client";
import Link from "next/link";

export default function page() {
  const t = useI18n();

  const liste1 = [
    t("privacyPolicy.section2.liste.1.1"),
    t("privacyPolicy.section2.liste.1.2"),
    t("privacyPolicy.section2.liste.1.3"),
    t("privacyPolicy.section2.liste.1.4"),
    t("privacyPolicy.section2.liste.1.5"),
    t("privacyPolicy.section2.liste.1.6"),
    t("privacyPolicy.section2.liste.1.7"),
    t("privacyPolicy.section2.liste.1.8"),
  ];
  const liste2 = [
    {
      title: t("privacyPolicy.section3.liste.1.1.0"),
      definition: t("privacyPolicy.section3.liste.1.1.1"),
    },
    {
      title: t("privacyPolicy.section3.liste.1.2.0"),
      definition: t("privacyPolicy.section3.liste.1.2.1"),
    },
    {
      title: t("privacyPolicy.section3.liste.1.3.0"),
      definition: t("privacyPolicy.section3.liste.1.3.1"),
    },
    {
      title: t("privacyPolicy.section3.liste.1.4.0"),
      definition: t("privacyPolicy.section3.liste.1.4.1"),
    },
  ];

  const liste3 = [
    t("privacyPolicy.section3.liste1.1.1"),
    t("privacyPolicy.section3.liste1.1.2"),
    t("privacyPolicy.section3.liste1.1.3"),
  ];
  const liste4 = [
    t("privacyPolicy.section3.liste1.3.1"),
    t("privacyPolicy.section3.liste1.3.2"),
    t("privacyPolicy.section3.liste1.3.3"),
    t("privacyPolicy.section3.liste1.3.4"),
    t("privacyPolicy.section3.liste1.3.5"),
    t("privacyPolicy.section3.liste1.3.6"),
    t("privacyPolicy.section3.liste1.3.7"),
    t("privacyPolicy.section3.liste1.3.8"),
    t("privacyPolicy.section3.liste1.3.9"),
  ];
  const liste5 = [
    t("privacyPolicy.section3.liste1.5.1"),
    t("privacyPolicy.section3.liste1.5.2"),
    t("privacyPolicy.section3.liste1.5.3"),
  ];
  const liste6 = [
    t("privacyPolicy.section3.liste5.1.0"),
    t("privacyPolicy.section3.liste5.1.2"),
    t("privacyPolicy.section3.liste5.1.3"),
    t("privacyPolicy.section3.liste5.1.4"),
    t("privacyPolicy.section3.liste5.1.5"),
    t("privacyPolicy.section3.liste5.1.6"),
    t("privacyPolicy.section3.liste5.1.7"),
    t("privacyPolicy.section3.liste5.1.8"),
    t("privacyPolicy.section3.liste5.1.9"),
  ];
  const liste7 = [
    t("privacyPolicy.section3.liste6.1.0"),
    t("privacyPolicy.section3.liste6.1.1"),
    t("privacyPolicy.section3.liste6.1.2"),
  ];
  const liste8 = [
    t("privacyPolicy.section3.liste7.1.0"),
    t("privacyPolicy.section3.liste7.1.1"),
    t("privacyPolicy.section3.liste7.1.2"),
    t("privacyPolicy.section3.liste7.1.3"),
  ];
  const liste9 = [
    {
      0: t("privacyPolicy.section4.liste1.1.0"),
      1: t("privacyPolicy.section4.liste1.1.1"),
    },
    {
      0: t("privacyPolicy.section4.liste1.2.0"),
      1: t("privacyPolicy.section4.liste1.2.1"),
    },
    {
      0: t("privacyPolicy.section4.liste1.3.0"),
      1: t("privacyPolicy.section4.liste1.3.1"),
    },
    {
      0: t("privacyPolicy.section4.liste1.4.0"),
      1: t("privacyPolicy.section4.liste1.4.1"),
    },
  ];
  const liste10 = [
    t("privacyPolicy.section5.liste.1.0"),
    t("privacyPolicy.section5.liste.1.1"),
    t("privacyPolicy.section5.liste.1.2"),
    t("privacyPolicy.section5.liste.1.3"),
  ];
  const liste11 = [
    t("privacyPolicy.section8.liste.1.0"),
    t("privacyPolicy.section8.liste.1.1"),
    t("privacyPolicy.section8.liste.1.2"),
    t("privacyPolicy.section8.liste.1.3"),
    t("privacyPolicy.section8.liste.1.4"),
    t("privacyPolicy.section8.liste.1.5"),
    t("privacyPolicy.section8.liste.1.6"),
    t("privacyPolicy.section8.liste.1.7"),
  ];
  return (
    <div className="min-h-screen flex flex-col px-4 m lg:px-0">
      <div className="h-[50vh] flex items-center justify-center lg:justify-start mb-4">
        <h1 className="text-5xl my-auto text-center lg:*:text-start">
          {t("privacyPolicy.H1")}
        </h1>
      </div>

      <div className="mt-4 lg:mb-4 my-10 text-sm">
        <h2 className="text-xl text-center lg:text-start">
          {t("privacyPolicy.section01.H2")}
        </h2>
        <>
          <p className="mb-8 text-center lg:text-start">
            {t("privacyPolicy.section01.P1")}
            <Link href={"https/mansart-maskit"}>mansart</Link>
          </p>
          <p className="text-center lg:text-start">
            {t("privacyPolicy.section01.P2")}
          </p>
        </>
      </div>

      <div className="mt-4 lg:mb-4 my-10 text-sm *:my-2 *:capitalize">
        <h2 className="text-xl text-center font-semibold mb-4 lg:text-start">
          {t("privacyPolicy.section02.H2")}
        </h2>

        <p>{t("privacyPolicy.section02.liste.0")}</p>
        <p>{t("privacyPolicy.section02.liste.1.0")}</p>
        <p className="pl-4">{t("privacyPolicy.section02.liste.1.1")}</p>
        <p className="pl-4">{t("privacyPolicy.section02.liste.1.2")}</p>
        <p className="pl-4">{t("privacyPolicy.section02.liste.1.3")}</p>
        <p>{t("privacyPolicy.section02.liste.2.0")}</p>
        <p className="pl-4">{t("privacyPolicy.section02.liste.2.1")}</p>
        <p className="pl-4">{t("privacyPolicy.section02.liste.2.2")}</p>
        <p className="pl-4">{t("privacyPolicy.section02.liste.2.3")}</p>
        <p className="pl-4">{t("privacyPolicy.section02.liste.2.4")}</p>
        <p className="pl-4">{t("privacyPolicy.section02.liste.2.5")}</p>
        <p>{t("privacyPolicy.section02.liste.3")}</p>
        <p>{t("privacyPolicy.section02.liste.4")}</p>
        <p>{t("privacyPolicy.section02.liste.5")}</p>
        <p>{t("privacyPolicy.section02.liste.6")}</p>
        <p>{t("privacyPolicy.section02.liste.7")}</p>
        <p>{t("privacyPolicy.section02.liste.8")}</p>
      </div>

      <section className="mt-4 lg:mb-4 my-10 text-sm">
        <h2 className="text-2xl text-center lg:text-start">
          {t("privacyPolicy.section1.H2")}
        </h2>
        <div className="*:my-4">
          <p className="mb-8">
            {t("privacyPolicy.section1.P1")}
            <Link href={"https/mansart-maskit"}>mansart</Link>
          </p>
          <p>
            {t("privacyPolicy.section1.P2.0")} <br />{" "}
            {t("privacyPolicy.section1.P2.1")} <br />{" "}
            {t("privacyPolicy.section1.P2.2")} <br />{" "}
            <Link href={""}>maskit mansart</Link>
          </p>
          <p className="mb-8">{t("privacyPolicy.section1.P3")}</p>
          <p className="mb-8">{t("privacyPolicy.section1.P4")}@maskit</p>
        </div>
      </section>

      <section className="mt-4 lg:mb-4 my-10 text-sm">
        <h2 className="text-2xl text-center lg:text-start">
          {t("privacyPolicy.section2.H2")}
        </h2>
        <>
          <h2 className="text-2xl text-center mb-10  lg:text-start">
            {t("privacyPolicy.section2.H21")}
          </h2>
          <div className="*:my-4 mb-10 ">
            <p className="mb-8">{t("privacyPolicy.section2.liste.0")}</p>
            <ul className="*:my-2 *:flex *:items-center">
              {liste1.map((el, index) => (
                <li key={index}>
                  {" "}
                  <div className="rounded-full w-1 h-1 mr-2 bg-black"></div>{" "}
                  {el}
                </li>
              ))}
            </ul>
            <p className="mb-8 text-center lg:text-start">
              {t("privacyPolicy.section2.liste.2")}@maskit
            </p>
          </div>
          <p className="mb-10 text-center lg:text-start">
            {t("privacyPolicy.section2.P11")}
          </p>
          <p className="mb-10 text-center lg:text-start">
            {t("privacyPolicy.section2.P12")}
          </p>
        </>
        <>
          <h2 className="text-2xl text-center mb-2 lg:text-start">
            {t("privacyPolicy.section2.H22")}
          </h2>
          <div className="*:mb-10 text-center lg:text-start">
            <p>{t("privacyPolicy.section2.P21")}</p>
            <p>{t("privacyPolicy.section2.P22")}</p>
            <p>{t("privacyPolicy.section2.P23")}</p>
          </div>
        </>
        <>
          <h2 className="text-2xl text-center mb-2 lg:text-start">
            {t("privacyPolicy.section2.H32")}
          </h2>
          <div className="*:mb-10 text-center lg:text-start">
            <p>{t("privacyPolicy.section2.P31")}</p>
          </div>
        </>
      </section>

      <section className="mt-4 lg:mb-4 my-10 text-sm">
        <h2 className="text-2xl text-center lg:text-start">
          {t("privacyPolicy.section3.H2")}
        </h2>
        <>
          <h2 className="text-2xl text-center mb-10  lg:text-start">
            {t("privacyPolicy.section3.H21")}
          </h2>
          <div className="*:my-4 mb-10 ">
            <p className="mb-8">{t("privacyPolicy.section3.liste.0")}</p>
            <ul className="*:my-2 *:flex *:items-center">
              {liste2.map((el, index) => (
                <li key={index}>
                  {" "}
                  <p>
                    <strong>{el.title}</strong>
                    {el.definition}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mb-8 text-center lg:text-start">
              {t("privacyPolicy.section3.liste.2")}
            </p>
          </div>
          <p className="mb-10 text-center lg:text-start">
            {t("privacyPolicy.section3.P11")}
          </p>
          <p className="mb-10 text-center lg:text-start">
            {t("privacyPolicy.section3.P12")}
          </p>
        </>
        <>
          <h2 className="text-2xl text-center mb-2 lg:text-start">
            {t("privacyPolicy.section3.H22")}
          </h2>
          <h3 className="text-2xl text-center mb-2 lg:text-start">
            {t("privacyPolicy.section3.H31")}
          </h3>
          <div className="*:mb-10 *:text-center lg:*:text-start">
            <p>{t("privacyPolicy.section3.P21")}</p>
            <p>{t("privacyPolicy.section3.P22")}</p>
            <p>{t("privacyPolicy.section3.P23")}</p>
          </div>
        </>
        <>
          <h3 className="text-2xl text-center mb-2 lg:text-start">
            {t("privacyPolicy.section3.H32")}
          </h3>
          <div className="*:mb-10 *:text-center lg:*:text-start">
            <p>{t("privacyPolicy.section3.P31")}</p>
            <p>{t("privacyPolicy.section3.P32")}</p>
            <p>{t("privacyPolicy.section3.P33")}</p>
          </div>
        </>
        <>
          <h3 className="text-2xl text-center mb-2 lg:text-start">
            {t("privacyPolicy.section3.H33")}
          </h3>
          <div className="*:mb-10 text-center lg:text-start">
            <p>{t("privacyPolicy.section3.P4")}</p>
          </div>
        </>
        <>
          <h2 className="text-2xl text-center mb-2 lg:text-start">
            {t("privacyPolicy.section3.H23")}
          </h2>
          <div className="*:mb-10 *:text-center lg:*:text-start">
            <p>{t("privacyPolicy.section3.P41")}</p>
            <p>{t("privacyPolicy.section3.P42")}</p>
            <p>{t("privacyPolicy.section3.P43")}</p>
          </div>
        </>
        <>
          <h3 className="text-2xl text-center mb-2 lg:text-start">
            {t("privacyPolicy.section3.H34")}
          </h3>
          <div className="*:mb-10 *:text-center lg:*:text-start">
            <p>{t("privacyPolicy.section3.P51")}</p>
            <p>{t("privacyPolicy.section3.P52")}</p>
            <p>{t("privacyPolicy.section3.P53")}</p>
            <p>{t("privacyPolicy.section3.P54")}</p>
            <p>{t("privacyPolicy.section3.P55")}</p>
            <p>{t("privacyPolicy.section3.P56")}</p>
          </div>
        </>
        <>
          <h2 className="text-2xl text-center mb-2 lg:text-start">
            {t("privacyPolicy.section3.H24")}
          </h2>
          <div className="*:mb-10 *:text-center lg:*:text-start">
            <p>{t("privacyPolicy.section3.P61")}</p>
            <p>{t("privacyPolicy.section3.P62")}</p>
            <p>{t("privacyPolicy.section3.P63")}</p>
          </div>
        </>
        <>
          <h2 className="text-2xl text-center mb-10  lg:text-start">
            {t("privacyPolicy.section3.H35")}
          </h2>
          <div className="*:mb-10 *:text-center lg:*:text-start">
            <p>{t("privacyPolicy.section3.P71")}</p>
            <p>{t("privacyPolicy.section3.P72")}</p>
            <p>{t("privacyPolicy.section3.P73")}</p>
          </div>
          <div className="*:my-4 mb-10 ">
            <p className="">{t("privacyPolicy.section3.liste1.0")}</p>
            <ul className="*:my-2 *:flex *:items-center">
              {liste3.map((el, index) => (
                <li key={index}>
                  {" "}
                  <div className="rounded-full w-1 h-1 mr-2 bg-black"></div>{" "}
                  {el}
                </li>
              ))}
            </ul>
            <p className="">{t("privacyPolicy.section3.liste1.2")}</p>
            <ul className="*:my-2 *:flex *:items-center">
              {liste4.map((el, index) => (
                <li key={index}>
                  {" "}
                  <div className="rounded-full w-1 h-1 mr-2 bg-black"></div>{" "}
                  {el}
                </li>
              ))}
            </ul>
            <p className="">{t("privacyPolicy.section3.liste1.4")}</p>
            <ul className="*:my-2 *:flex *:items-center">
              {liste5.map((el, index) => (
                <li key={index}>
                  {" "}
                  <div className="rounded-full w-1 h-1 mr-2 bg-black"></div>{" "}
                  {el}
                </li>
              ))}
            </ul>
            <p className="mb-8">{t("privacyPolicy.section3.liste1.6")}</p>
          </div>
          <p className="mb-10 text-center lg:text-start">
            {t("privacyPolicy.section3.P74")}
          </p>
          <p className="mb-10 text-center lg:text-start">
            {t("privacyPolicy.section3.P75")}
          </p>
          <p className="mb-10 text-center lg:text-start">
            {t("privacyPolicy.section3.P76")}
          </p>
        </>
        <>
          <h2 className="text-2xl text-center mb-2 lg:text-start">
            {t("privacyPolicy.section3.H25")}
          </h2>
          <div className="*:mb-10 *:text-center lg:*:text-start">
            <p>{t("privacyPolicy.section3.P81")}</p>
            <p>{t("privacyPolicy.section3.P82")}</p>
            <p>{t("privacyPolicy.section3.P83")}</p>
            <p>{t("privacyPolicy.section3.P84")}</p>
            <div>
              <p className="text-start">{t("privacyPolicy.section3.liste5.0")}</p>
              <ul className="*:my-2 *:flex *:items-center">
                {liste1.map((el, index) => (
                  <li key={index}>
                    {" "}
                    <div className="rounded-full w-1 h-1 mr-2 bg-black"></div>{" "}
                    {el}
                  </li>
                ))}
              </ul>
              <p className="text-start">{t("privacyPolicy.section3.liste5.2")}</p>
            </div>
          </div>
        </>
        <>
          <h2 className="text-2xl text-center mb-2 lg:text-start">
            {t("privacyPolicy.section3.H36")}
          </h2>
          <p className="">{t("privacyPolicy.section3.P91")}</p>
          <div className="*:my-4 mb-10 ">
            <p className="">{t("privacyPolicy.section3.liste6.0")}</p>
            <ul className="*:my-2 *:flex *:items-center">
              {liste3.map((el, index) => (
                <li key={index}>
                  {" "}
                  <div className="rounded-full w-1 h-1 mr-2 bg-black"></div>{" "}
                  {el}
                </li>
              ))}
            </ul>
            <p className="">{t("privacyPolicy.section3.liste6.2")}</p>
            <ul className="*:my-2 *:flex *:items-center">
              {liste7.map((el, index) => (
                <li key={index}>
                  {" "}
                  <div className="rounded-full w-1 h-1 mr-2 bg-black"></div>{" "}
                  {el}
                </li>
              ))}
            </ul>
            <p className="mb-8">{t("privacyPolicy.section3.liste6.4")}</p>
          </div>
          <div className="mb-4">
            <p className="">{t("privacyPolicy.section3.liste7.0")}</p>
            <ul className="*:my-2 *:flex *:items-center">
              <li>
                <div className="rounded-full w-1 h-1 mr-2 bg-black"></div>{" "}
                {t("privacyPolicy.section3.liste7.1.0")}
              </li>
              <li>
                <div className="rounded-full w-1 h-1 mr-2 bg-black"></div>{" "}
                {t("privacyPolicy.section3.liste7.1.1")}
              </li>
            </ul>
            <p className="mb-8">{t("privacyPolicy.section3.liste7.2")}</p>
          </div>
        </>
        <>
          <h2 className="text-2xl text-center mb-2 lg:text-start">
            {t("privacyPolicy.section3.H26")}
          </h2>
          <div className="*:mb-4 text-sm *:text-center lg:*:text-start">
            <p>{t("privacyPolicy.section3.p1")}</p>
            <p>{t("privacyPolicy.section3.p2")}</p>
            <p>{t("privacyPolicy.section3.p3")}</p>
            <p>{t("privacyPolicy.section3.p4")}</p>
            <p>{t("privacyPolicy.section3.p5")}</p>
            <p>{t("privacyPolicy.section3.p6")}</p>
            <div className="*:text-start">
              <p>{t("privacyPolicy.section3.liste7.0")}</p>
              <ul className="*:flex *:items-center *:my-2">
                {liste8.map((el, index) => (
                  <li key={index}>
                    <div className="w-1 h-1 mr-2 bg-black rounded-full"></div>
                    {el}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      </section>

      <section className="mt-4 lg:mb-4 my-10 text-sm *:text-center lg:*:text-start">
        <h2 className="text-2xl text-center mb-10  lg:text-start">
          {t("privacyPolicy.section4.H2")}
        </h2>
        <p className="mb-4">{t("privacyPolicy.section4.p1")}</p>
        <p className="mb-4">{t("privacyPolicy.section4.p2")}</p>
        <p className="mb-4">{t("privacyPolicy.section4.p3")}</p>
        <p className="mb-4">{t("privacyPolicy.section4.p4")}</p>
        <p className="mb-4">{t("privacyPolicy.section4.p5")}</p>
        <p className="mb-4">{t("privacyPolicy.section4.p6")}</p>
        <div className="*:my-4 mb-10 *:text-start">
          <p className="mb-8">{t("privacyPolicy.section4.liste1.0")}</p>
          <ul className="*:my-2 *:flex *:items-center">
            {liste9.map((el, index) => (
              <li key={index}>
                {" "}
                <div className="rounded-full w-1 flex h-1 mr-2 bg-black"></div>
                <p>
                  <strong className="text-normal ml-2">{el[0]}</strong>
                  {el[1]}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-4 lg:mb-4 my-10 text-sm">
        <h2 className="text-2xl text-center mb-10  lg:text-start">
          {t("privacyPolicy.section5.H2")}
        </h2>
        <div className="*:my-4 mb-10">
          <p className="mb-8">{t("privacyPolicy.section4.liste1.0")}</p>
          <ul className="*:my-2 *:flex *:items-center">
            {liste10.map((el, index) => (
              <li key={index}>
                {" "}
                <div className="rounded-full w-1 h-1 mr-2 bg-black"></div>
                {el}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-4 lg:mb-4 my-10 text-sm *:text-center lg:*:text-start">
        <h2 className="text-2xl text-center lg:text-start">
          {t("privacyPolicy.section6.H2")}
        </h2>
        <p className="mb-4">{t("privacyPolicy.section6.P1")}</p>
        <p className="mb-4">{t("privacyPolicy.section6.P2")}</p>
        <p className="mb-4">{t("privacyPolicy.section6.P3")}</p>
      </section>

      <section className="mt-4 lg:mb-4 my-10 text-sm *:text-center lg:*:text-start">
        <h2 className="text-2xl text-center lg:text-start">
          {t("privacyPolicy.section7.H2")}
        </h2>
        <div className="*:my-4 mb-10 *:text-start">
          <p className="mb-8">{t("privacyPolicy.section8.liste.0")}</p>
          <ul className="*:my-2 *:flex *:items-center">
            {liste11.map((el, index) => (
              <li key={index}>
                {" "}
                <div className="rounded-full w-1 h-1 mr-2 bg-black"></div>
                {el}
              </li>
            ))}
          </ul>
          <p className="mb-8">{t("privacyPolicy.section8.liste.2")}</p>
        </div>
        <p className="mb-4">{t("privacyPolicy.section8.P1")}</p>
        <p className="mb-4">{t("privacyPolicy.section8.P2")}</p>
        <p className="mb-4">{t("privacyPolicy.section8.P3")}</p>
        <p className="mb-4">{t("privacyPolicy.section8.P4")}</p>
        <p className="mb-4">{t("privacyPolicy.section8.P5")}</p>
      </section>

      <section className="mt-4 lg:mb-4 my-10 text-sm *:text-center lg:*:text-start">
        <h2 className="text-2xl text-center lg:text-start">
          {t("privacyPolicy.section9.H2")}
        </h2>
        <p className="mb-4">{t("privacyPolicy.section9.P1")}</p>
        <p className="mb-4">{t("privacyPolicy.section9.P2")}</p>
      </section>
      <GetInTouchBlock />

      <Footer />
    </div>
  );
}
