"use client";

import { useI18n } from "@/locales/client";
import LanguageSelector from "./LanguageSelector";

export default function Footer() {
  const t = useI18n();

  return (
    <footer className="bg-gray-50 text-gray-800">
      <div className="container mx-auto max-w-screen-xl px-8 md:px-12 lg:px-0 py-10 lg:py-16 space-y-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-10 lg:gap-20">
          {/* Left side */}
          <div className="flex flex-col md:w-1/3">
            <h3 className="text-xl lg:text-2xl xl:text-3xl mb-4 uppercase font-bold">
              {t("footer.div1.H3")}
            </h3>
            <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
              {t("footer.div1.P")}
            </p>
          </div>

          {/* Right side */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 flex-1">
            {/* Col 1 */}
            <div>
              <h5 className="font-semibold mb-3">{t("footer.div2.H5")}</h5>
              <ul className="flex flex-col gap-2 text-sm lg:text-base">
                <li className="hover:bg-amber-50 hover:cursor-pointer rounded-md px-2">
                  {t("footer.div2.UL.0")}
                </li>
                <li className="hover:bg-amber-50 hover:cursor-pointer rounded-md px-2">
                  {t("footer.div2.UL.1")}
                </li>
                <li className="hover:bg-amber-50 hover:cursor-pointer rounded-md px-2">
                  {t("footer.div2.UL.2")}
                </li>
              </ul>
            </div>

            {/* Col 2 */}
            <div>
              <h5 className="font-semibold mb-3">{t("footer.div3.H5")}</h5>
              <ul className="flex flex-col gap-2 text-sm lg:text-base">
                <li className="hover:bg-amber-50 hover:cursor-pointer rounded-md px-2">
                  {t("footer.div3.UL.0")}
                </li>
                <li className="hover:bg-amber-50 hover:cursor-pointer rounded-md px-2">
                  {t("footer.div3.UL.1")}
                </li>
                <li className="hover:bg-amber-50 hover:cursor-pointer rounded-md px-2">
                  {t("footer.div3.UL.2")}
                </li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h5 className="font-semibold mb-3">{t("footer.div4.H5")}</h5>
              <ul className="flex flex-col gap-2 text-sm lg:text-base">
                <li className="hover:bg-amber-50 hover:cursor-pointer rounded-md px-2">
                  {t("footer.div4.UL.0")}
                </li>
                <li className="hover:bg-amber-50 hover:cursor-pointer rounded-md px-2">
                  {t("footer.div4.UL.1")}
                </li>
              </ul>
            </div>

            {/* Col 4 */}
            <div>
              <h5 className="font-semibold mb-3">{t("footer.div5.H5")}</h5>
              <ul className="flex flex-col gap-2 text-sm lg:text-base">
                <li className="hover:bg-amber-50 hover:cursor-pointer rounded-md px-2">
                  {t("footer.div5.UL.0")}
                </li>
                <li className="hover:bg-amber-50 hover:cursor-pointer rounded-md px-2">
                  {t("footer.div5.UL.1")}
                </li>
                <li className="hover:bg-amber-50 hover:cursor-pointer rounded-md px-2">
                  {t("footer.div5.UL.2")}
                </li>
                <li className="hover:bg-amber-50 hover:cursor-pointer rounded-md px-2">
                  {t("footer.div5.UL.3")}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="hover:text-amber-600 cursor-pointer">LinkedIn</p>
          <LanguageSelector />
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-gray-200 pt-6">
          <p className="text-xs md:text-sm">© Mansar.makit 2025</p>
          <div className="flex flex-wrap gap-4 items-center">
            <span className="hover:bg-blue-50 bg-gray-100 rounded-3xl hover:cursor-pointer py-1 px-4 text-xs md:text-sm">
              Data privacy settings
            </span>
            <div className="flex border-2 border-green-500 hover:cursor-pointer rounded-3xl px-4 py-1 gap-2 items-center">
              <span className="bg-green-500 w-2 h-2 rounded-full"></span>
              <span className="text-green-600 text-xs md:text-sm">
                All systems operational
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
