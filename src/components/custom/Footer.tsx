"use client"

import { useI18n } from "@/locales/client";
import LanguageSelector from "./LanguageSelector";

export default function Footer() {
  const t = useI18n()
  return (
    <div className="flex flex-col h-screen *:mb-10">
      <div className="flex">
        <div className="flex-col flex w-1/3 ">
          <h3 className="text-2xl my-5 uppercase text-gray-800">{t("footer.div1.H3")}</h3>
          <p>{t("footer.div1.P")}</p>
        </div>
        <div className="flex w-2/3 justify-between *:w-1/4 *:flex-col *:**:my-2 *:pl-8">
            <div className="flex">
                <h5 className="font-semibold">{t("footer.div2.H5")}</h5>
                <ul className="gap-2 text-gray-800 flex flex-col">
                    <li>{t("footer.div2.UL.0")}</li>
                    <li>{t("footer.div2.UL.1")}</li>
                    <li>{t("footer.div2.UL.2")}</li>
                </ul>
            </div>
            <div className="flex">
                <h5 className="font-semibold">{t("footer.div3.H5")}</h5>
                <ul className="gap-2 text-gray-800 flex flex-col">
                    <li>{t("footer.div3.UL.0")}</li>
                    <li>{t("footer.div3.UL.1")}</li>
                    <li>{t("footer.div3.UL.2")}</li>
                </ul>
            </div>
            <div className="flex">
                <h5 className="font-semibold">{t("footer.div4.H5")}</h5>
                <ul className="gap-2 text-gray-800 flex flex-col">
                    <li>{t("footer.div4.UL.0")}</li>
                    <li>{t("footer.div4.UL.1")}</li>
                </ul>
            </div>
            <div className="flex">
                <h5 className="font-semibold">{t("footer.div5.H5")}</h5>
                <ul className="gap-2 text-gray-800 flex flex-col">
                    <li>{t("footer.div5.UL.0")}</li>
                    <li>{t("footer.div5.UL.1")}</li>
                    <li>{t("footer.div5.UL.2")}</li>
                    <li>{t("footer.div5.UL.3")}</li>
                </ul>

            </div>
        </div>
      </div>
      <div className="flex h-30 items-center justify-between *:text-gray-800">
        <p>Linkedin</p>
        <LanguageSelector />
      </div>
      <div className="flex justify-between">
        <p>@lefilsdecathy</p>
        <div className="flex gap-4 ">
            <span className="hover:bg-blue-50 bg-gray-50 rounded-3xl py-0.5 px-4">Data privacy settings</span>
            <div className="flex relative border-2 border-green-500 rounded-3xl px-4 gap-3 items-center">
                <span className="bg-green-500 w-1 h-1"></span>
                <span className="text-green-400">all systems operational</span>
            </div>
        </div>
      </div>
    </div>
  );
}
