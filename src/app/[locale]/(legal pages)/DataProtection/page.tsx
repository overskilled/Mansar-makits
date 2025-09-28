"use client";
import Footer from "@/components/custom/Footer";
import GetInTouchBlock from "@/components/custom/GetInTouchBlock";
import { useI18n } from "@/locales/client";

export default function page() {
  const t = useI18n();

  const liste = [
    t("dataProtection.section3.liste.0"),
    t("dataProtection.section3.liste.1"),
    t("dataProtection.section3.liste.2"),
    t("dataProtection.section3.liste.3"),
    t("dataProtection.section3.liste.4"),
  ];

  const liste1 = [
    t("dataProtection.section6.liste.0"),
    t("dataProtection.section6.liste.1"),
  ];

  const liste2 = [
    {
      0: t("dataProtection.section7.liste.0.title"),
      1: t("dataProtection.section7.liste.0.text1"),
      2: "",
    },
    {
      0: t("dataProtection.section7.liste.1.title"),
      1: t("dataProtection.section7.liste.1.text1"),
      2: "",
    },
    {
      0: t("dataProtection.section7.liste.2.title"),
      1: t("dataProtection.section7.liste.2.text1"),
      2: "",
    },
    {
      0: t("dataProtection.section7.liste.3.title"),
      1: t("dataProtection.section7.liste.3.text1"),
      2: "",
    },
    {
      0: t("dataProtection.section7.liste.4.title"),
      1: t("dataProtection.section7.liste.4.text1"),
      2: "",
    },
    {
      0: t("dataProtection.section7.liste.5.title"),
      1: t("dataProtection.section7.liste.5.text1"),
      2: t("dataProtection.section7.liste.5.text2"),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col text-sm *:px-8 lg*:px-0">
      <div className="h-[50vh] flex flex-col lg:items-start items-center justify-center lg:justify-start mb-4">
        <div className="my-auto *:my-5">
          <h1 className="text-5xl text-center lg:text-start">{t("dataProtection.H1")}</h1>
          <span className="text-normal flex justify-center lg:justify-start">{t("dataProtection.span1")}</span>
        </div>
      </div>
      <p className="mb-8 text-center">{t("dataProtection.P1")}</p>

      <div className="mt-4 lg:mb-10 my-10 text-sm *:text-center lg:*:text-start">
        <h2 className="text-xl text-center lg:text-start">
          {t("dataProtection.section1.H2")}
        </h2>
        <>
          <p className="mb-8">{t("dataProtection.section1.P1")}</p>
          <p>{t("dataProtection.section1.P2")}</p>
        </>
      </div>

      <div className="mt-4 lg:mb-10 my-10 text-sm *:text-center lg:*:text-start">
        <h2 className="text-xl text-center lg:text-start">
          {t("dataProtection.section2.H2")}
        </h2>
        <>
          <p className="mb-8">{t("dataProtection.section2.P")}</p>
        </>
      </div>

      <div className="mt-4 lg:mb-10 my-10 text-sm *:textcenter lg:*:textstart">
        <h2 className="text-xl text-center lg:text-start">
          {t("dataProtection.section3.H2")}
        </h2>
        <>
          <p className="mb-2">{t("dataProtection.section3.P1")}</p>
          <ul className="*:flex *:items-center">
            {liste.map((el, index) => (
              <li key={index}>
                <div className="w-1 h-1 rounded-full bg-black mr-2" />
                {el}
              </li>
            ))}
          </ul>
          <p className="mb-8">{t("dataProtection.section3.P2")}</p>
          <p className="mb-8">{t("dataProtection.section3.P3")}</p>
          <p className="mb-8">{t("dataProtection.section3.P4")}</p>
          <p className="mb-8">{t("dataProtection.section3.P5")}</p>
          <p className="mb-8">{t("dataProtection.section3.P6")}</p>
          <p className="mb-8">{t("dataProtection.section3.P7")}</p>
          <p className="mb-8">{t("dataProtection.section3.P8")}</p>
        </>

        <h3 className="text-lg text-center lg:text-start">
          {t("dataProtection.section3.H2_1")}
        </h3>
        <h3 className="text-lg text-center lg:text-start mb-4 ">
          {t("dataProtection.section3.H2_1_1")}
        </h3>
        <p className="text-center lg:text-start mb-8">{t("dataProtection.section3.P9")}</p>
        <h3 className="text-lg text-center lg:text-start mb-4 ">
          {t("dataProtection.section3.H2_1_2")}
        </h3>
        <p className="text-center lg:text-start mb-8">{t("dataProtection.section3.P10")}</p>
      </div>

      <div className="mt-4 lg:mb-10 my-10 text-sm *:text-center lg:*:text-start">
        <h2 className="text-xl text-center lg:text-start">
          {t("dataProtection.section4.H2")}
        </h2>
        <h3 className="text-lg text-center lg:text-start mb-4">
          {t("dataProtection.section4.H2_1")}
        </h3>
        <p className="mb-8">{t("dataProtection.section4.P11")}</p>
        <h3 className="text-lg text-center lg:text-start mb-4">
          {t("dataProtection.section4.H2_2")}
        </h3>
        <p className="mb-8">{t("dataProtection.section4.P12")}</p>
        <p className="mb-8">{t("dataProtection.section4.P13")}</p>
        <p className="mb-8">{t("dataProtection.section4.P14")}</p>
        <h3 className="text-lg text-center lg:text-start mb-4">
          {t("dataProtection.section4.H2_3")}
        </h3>
        <p className="mb-8">{t("dataProtection.section4.P15")}</p>
        <p className="mb-8">{t("dataProtection.section4.P16")}</p>
        <p className="mb-8">{t("dataProtection.section4.P17")}</p>
      </div>

      <div className="mt-4 lg:mb-10 my-10 text-sm *:text-center lg:*:text-start">
        <h2 className="text-xl text-center lg:text-start">
          {t("dataProtection.section5.H2")}
        </h2>
        <p className="mb-8">{t("dataProtection.section5.P1")}</p>
        <p className="mb-8">{t("dataProtection.section5.P2")}</p>
        <p className="mb-8">{t("dataProtection.section5.P3")}</p>
      </div>

      <div className="mt-4 lg:mb-10 my-10 text-sm">
        <h2 className="text-xl text-center lg:text-start">
          {t("dataProtection.section6.H2")}
        </h2>
        <p className="mb-8">{t("dataProtection.section6.P1")}</p>
        <ul className="*:flex *:items-center">
          {liste1.map((el, index) => (
            <li key={index}>
              <div className="w-1 h-1 rounded-full bg-black mr-2" />
              {el}
            </li>
          ))}
        </ul>
        <p className="mb-8">{t("dataProtection.section6.P2")}</p>
      </div>

      <div className="mt-4 lg:mb-10 my-10 text-sm">
        <h2 className="text-xl text-center lg:text-start">
          {t("dataProtection.section7.H2")}
        </h2>
        <p className="mb-8">{t("dataProtection.section7.P1")}</p>
        <ul className="*:flex *:flex-col *:itemscenter">
          {liste2.map((el, index) => (
            <li key={index}>
              <p className="flex my-1 items-center">
                <div className="w-1 h-1 rounded-full bg-black mr-2" />
                <strong>{el[0]}</strong>
                <br />
              </p>
              <span className="ml-3 my-1">{el[1]}</span>
              <br />
              <span className="ml-3 my-1">{el[2]}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 lg:mb-10 my-10 text-sm">
        <h2 className="text-xl text-center lg:text-start">
          {t("dataProtection.section8.H2")}
        </h2>
        <p className="mb-8">{t("dataProtection.section8.P")}</p>
      </div>

      <div className="mt-4 lg:mb-10 my-4 text-sm">
        <h2 className="text-xl text-center lg:text-start">
          {t("dataProtection.section9.H2")}
        </h2>
        <p className="mb-4">{t("dataProtection.section9.P")}</p>
      </div>

      <div className="mt-4 lg:mb-10 my-4 text-sm ">
        <h2 className="text-xl text-center lg:text-start">
          {t("dataProtection.section10.H2")}
        </h2>
        <p className="mb-4">{t("dataProtection.section10.P")}</p>
      </div>
      <div className="mt-4 lg:mb-10 my-4 text-sm">
        <h2 className="text-xl text-center lg:text-start">
          {t("dataProtection.section11.H2")}
        </h2>
        <p className="mb-4">{t("dataProtection.section11.P")}</p>
      </div>

      <GetInTouchBlock />

      <Footer />
    </div>
  );
}
