"use client";

import Footer from "@/components/custom/Footer";
import GetInTouchBlock from "@/components/custom/GetInTouchBlock";
import { useI18n } from "@/locales/client";

export default function page() {
  const t = useI18n();
  const liste = [
    [
      {
        title: t("inprint.table.tbody.0.0.title"),
        first: t("inprint.table.tbody.0.0.first"),
        second: t("inprint.table.tbody.0.0.second"),
        third: t("inprint.table.tbody.0.0.third"),
      },
      {
        title: t("inprint.table.tbody.0.1.title"),
        first: t("inprint.table.tbody.0.1.first"),
        second: t("inprint.table.tbody.0.1.second"),
        third: t("inprint.table.tbody.0.1.third"),
      },
    ],
    [
      {
        title: t("inprint.table.tbody.1.0.title"),
        first: t("inprint.table.tbody.1.0.first"),
        second: t("inprint.table.tbody.1.0.second"),
        third: t("inprint.table.tbody.1.0.third"),
      },
      {
        title: t("inprint.table.tbody.1.1.title"),
        first: t("inprint.table.tbody.1.1.first"),
        second: t("inprint.table.tbody.1.1.second"),
        third: t("inprint.table.tbody.1.1.third"),
      },
    ],
    [
      {
        title: t("inprint.table.tbody.2.0.title"),
        first: t("inprint.table.tbody.2.0.first"),
        second: t("inprint.table.tbody.2.0.second"),
        third: t("inprint.table.tbody.2.0.third"),
      },
      {
        title: t("inprint.table.tbody.2.1.title"),
        first: t("inprint.table.tbody.2.1.first"),
        second: t("inprint.table.tbody.2.1.second"),
        third: t("inprint.table.tbody.2.1.third"),
      },
      // {
      //   title: t("inprint.table.tbody.3.0.title"),
      //   first: t("inprint.table.tbody.3.0.first"),
      //   second: t("inprint.table.tbody.3.0.second"),
      //   third: t("inprint.table.tbody.3.0.third"),
      // },
    ],
    [
      {
        title: t("inprint.table.tbody.3.0.title"),
        first: t("inprint.table.tbody.3.0.first"),
        second: t("inprint.table.tbody.3.0.second"),
        third: t("inprint.table.tbody.3.0.third"),
      },
      {
        title: t("inprint.table.tbody.3.1.title"),
        first: t("inprint.table.tbody.3.1.first"),
        second: t("inprint.table.tbody.3.1.second"),
        third: t("inprint.table.tbody.3.1.third"),
      },
    ],
    [
      {
        title: t("inprint.table.tbody.4.0.title"),
        first: t("inprint.table.tbody.4.0.first"),
        second: t("inprint.table.tbody.4.0.second"),
      },
      {
        title: "",
        first: t("inprint.table.tbody.4.1.first"),
        second: t("inprint.table.tbody.4.1.second"),
        third: t("inprint.table.tbody.4.1.third"),
      },
    ],
    [
      {
        title: t("inprint.table.tbody.5.0.title"),
        first: t("inprint.table.tbody.5.0.first"),
        second: t("inprint.table.tbody.5.0.second"),
        third: t("inprint.table.tbody.5.0.third"),
      },
      {
        title: t("inprint.table.tbody.5.1.title"),
        first: t("inprint.table.tbody.5.1.first"),
        second: t("inprint.table.tbody.5.1.second"),
        third: t("inprint.table.tbody.5.1.third"),
      },
    ],
  ];
  const link = [
    t("inprint.link.0"),
    t("inprint.link.1"),
    t("inprint.link.2"),
    t("inprint.link.3"),
    t("inprint.link.4"),
  ];
  return (
    <div className="min-h-screen flex-col flex *:w-full">
      <div className="h-[50vh] flex items-center mb-4">
        <h1 className="text-5xl my-auto">{t("inprint.hero.H1")}</h1>
      </div>

      <div className="flex-grow">
        <table className="w-full border-separate border-spacing-y-6 ">
          <thead className="w-full">
            <tr className="h-full *:w-1/2 *:text-start">
              <th>{t("inprint.table.theader.th1")}</th>
              <th>{t("inprint.table.theader.th2")}</th>
            </tr>
          </thead>
          
          <tbody>
            {liste.map((item, index) => (
              <tr key={index} className="my-6">
                <td className="pr-5">
                  <h4 className="text-2xl mb-2 font-[200]">{item[0].title}</h4>
                  <p className="text-gray-900">
                    {item[0].first}
                    <br />
                    {item[0].second}
                    <br />
                    {item[0].third}
                  </p>
                </td>
                <td>
                  <h4 className="text-2xl mb-2 font-[200]">{item[1].title}</h4>
                  <p className="text-gray-900">
                    {item[1].first}
                    <br />
                    {item[1].second}
                    <br />
                    {item[1].third}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
      <section className="w-full flex flex-col gap-8 py-10">
        <div className="h-[50vh] flex items-center mt-4">
          <h1 className="text-5xl my-auto">{t("inprint.section1.H1")}</h1>
        </div>
        <div className="w-full">
          <h4 className="text-2xl mb-4 font-[300]">
            {t("inprint.section1.H4_1")}
          </h4>
          <p>{t("inprint.section1.P1")}</p>
        </div>
        <div className="w-full">
          <h4 className="text-2xl mb-4 font-[300]">
            {t("inprint.section1.H4_2")}
          </h4>
          <p>{t("inprint.section1.P2")}</p>
          <ul>
            {link.map((item, index) => (
              <li key={index} className="my-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full">
          <h4 className="text-2xl mb-4 font-[300]">
            {t("inprint.section1.H4_3")}
          </h4>
          <p>{t("inprint.section1.P3")}</p>
        </div>
        <div className="w-full">
          <h4 className="text-2xl mb-4 font-[300]">
            {t("inprint.section1.H4_4")}
          </h4>
          <p>{t("inprint.section1.P4")}</p>
        </div>
      </section>

      <GetInTouchBlock />

      <Footer />
    </div>
  );
}
