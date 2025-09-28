"use client"

import { useI18n } from "@/locales/client";
import LanguageSelector from "./LanguageSelector";
import Link from "next/link";

export default function Footer() {
  const t = useI18n()
  return (
    <div className="flex flex-col  w-full min-h-screen lg:pb-20 pb-5 pt-5 *:w-full justify-between px-10 md:px-20 lg:px-0">
      <div className="flex flex-col lg:flex-row">
        <div className="flex-col flex lg:w-1/3 pr-2">
          <h3 className="text-2xl my-5 uppercase text-gray-800">{t("footer.div1.H3")}</h3>
          <p>{t("footer.div1.P")}</p>
        </div>
        <div className=" lg:w-2/3 flex flex-grow flex-wrap :flex-row lg:justify-between my-5 lg:my-0 *:grow lg:*:w-1/4 *:w-1/2 *:flex-col *:itemscenter lg:*:items-start">
            <div className="flex">
                <h5 className="font-semibold my-5">{t("footer.div2.H5")}</h5>
                <ul className="*:hover:cursor-pointer *:hover:pl-2 mt-2 *:duration-500 gap-2 text-gray-800 flex flex-col ">
                    <li><Link href='/verticale-brokerage'>{t("footer.div2.UL.0")}</Link></li>
                    <li><Link href="/embedded-brokerage">{t("footer.div2.UL.1")}</Link></li>
                    <li><Link href="/contextual-brokerage">{t("footer.div2.UL.2")}</Link></li>
                </ul>
            </div>
            <div className="flex">
                <h5 className="font-semibold my-5">{t("footer.div3.H5")}</h5>
                <ul className="*:hover:cursor-pointer *:hover:pl-2 mt-2 *:duration-500 gap-2 text-gray-800 flex flex-col ">
                    <li><Link href="">{t("footer.div3.UL.0")}</Link></li>
                    <li><Link href="">{t("footer.div3.UL.1")}</Link></li>
                    <li><Link href="">{t("footer.div3.UL.2")}</Link></li>
                </ul>
            </div>
            <div className="flex">
                <h5 className="font-semibold my-5">{t("footer.div4.H5")}</h5>
                <ul className="*:hover:cursor-pointer *:hover:pl-2 mt-2 *:duration-500 gap-2 text-gray-800 flex flex-col ">
                    <li><Link href="">{t("footer.div4.UL.0")}</Link></li>
                    <li><Link href="">{t("footer.div4.UL.1")}</Link></li>
                </ul>
            </div>
            <div className="flex">
                <h5 className="font-semibold my-5">{t("footer.div5.H5")}</h5>
                <ul className="*:hover:cursor-pointer *:hover:pl-2 mt-2 *:duration-500 gap-2 text-gray-800 flex flex-col ">
                    <li><Link href="/imprint">{t("footer.div5.UL.0")}</Link></li>
                    <li><Link href="/thermsOfUse">{t("footer.div5.UL.1")}</Link></li>
                    <li><Link href="/privacy-policy">{t("footer.div5.UL.2")}</Link></li>
                    <li><Link href="/DataProtection">{t("footer.div5.UL.3")}</Link></li>
                </ul>

            </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row my-8 lg:my-0 md:justify-between justify-center items-center *:w-max lg:w-full gap-5">
        <p>Linkedin</p>
        <LanguageSelector />
      </div>
      <div className="w-full flex flex-col md:flex-row lg:justify-between justify-center items-center *:w-max gap-5">
        <p>© Mansar.makit 2025</p>
        <div className="flex flex-col md:flex-row gap-4 ">
            <span className="hover:bg-blue-50 bg-gray-50 rounded-3xl text-center hover:cursor-pointer py-0.5 px-4">Data privacy settings</span>
            <div className="flex relative border-2 border-green-500 hover:cursor-pointer rounded-3xl px-4 gap-3 items-center">
                <span className="bg-green-500 w-1 h-1"></span>
                <span className="text-green-400">all systems operational</span>
            </div>
        </div>
      </div>
    </div>
  );
}
