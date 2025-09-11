"use client"

import Entete from "@/components/custom/Entete";
import Footer from "@/components/custom/Footer";
import Hero from "@/components/custom/Hero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useI18n } from "@/locales/client";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { MoveUpRight } from "lucide-react";
import { useState } from "react";

interface FormData {
  name: string;
  responsability: string;
  companyStage: string;
  email: string;
  description: string;
  licence: string;
  country: string;
  planned: string;
}

export default function page() {
  const t = useI18n();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    responsability: "",
    companyStage: "",
    email: "",
    description: "",
    licence: "",
    country: "",
    planned: "",
  });
  const DataHero = {
    H2: t("contactUs.DataHero.H2"),
    P: t("contactUs.DataHero.P"),
    B: t("contactUs.DataHero.B"),
  };
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted ✅", formData);
  };
  const EnteteData = {
    SPAN: t("contactUs.section2.EnteteData.SPAN"),
    H3: t("contactUs.section2.EnteteData.H3"),
    P: t("contactUs.section2.EnteteData.P"),
  }
  return (
    <div className="min-h-screen flex-col flex *:w-full bg-white">
      <Hero H2={DataHero.H2} P={DataHero.P} B={DataHero.B} />

      <section className="my-10 flex justify-between w-full *:w-1/2">
        <div className="pr-10 pl-5">
          <Card className="p-0 pr-6 shadow-none bg-gray-50">
            <Card className="p-20 mt-6 -mb-6 -ml-6 shadow-none bg-gray-50">
              <div className="">
                <h4 className="text-2xl mb-4">{t("contactUs.section1.H4_1")}</h4>
                <ul className="list-disc ml-4">
                  <li>{t("contactUs.section1.UL.0")}</li>
                  <li>{t("contactUs.section1.UL.1")}</li>
                  <li>{t("contactUs.section1.UL.2")}</li>
                  <li>{t("contactUs.section1.UL.3")}</li>
                </ul>
              </div>
              <Separator />
              <div className="">
                <h4 className="text-2xl mb-4">{t("contactUs.section1.H4_2")}</h4>
                <p>
                  {t("contactUs.section1.P2")}
                </p>
              </div>
            </Card>
          </Card>
        </div>

        <div className="pt-8 pl-20">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col border-b mb-4 pb-4">
              <label htmlFor="name">{t("contactUs.section1.Label.0")}</label>
              <input
                type="text"
                id="name"
                name="name"
                className="outline-none mt-4"
                placeholder="enter your text"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col border-b mb-4 pb-4">
              <label htmlFor="email">{t("contactUs.section1.Label.1")}</label>
              <input
                type="email"
                id="email"
                name="email"
                className="outline-none mt-4"
                placeholder="enter your text"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col border-b mb-4 pb-4">
              <label htmlFor="responsability">{t("contactUs.section1.Label.2")}</label>
              <input
                type="text"
                id="responsability"
                name="responsability"
                className="outline-none mt-4"
                placeholder="enter your text"
                required
                value={formData.responsability}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col border-b mb-4 pb-4">
              <label htmlFor="companyStage">{t("contactUs.section1.Label.3")}</label>
              <input
                type="text"
                id="companyStage"
                name="companyStage"
                className="outline-none mt-4"
                placeholder="enter your text"
                required
                value={formData.companyStage}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col border-b mb-4 pb-4">
              <label htmlFor="description">{t("contactUs.section1.Label.4")}</label>
              <input
                type="text"
                id="description"
                name="description"
                className="outline-none mt-4"
                placeholder="enter your text"
                required
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col border-b mb-4 pb-4">
              <label htmlFor="license">{t("contactUs.section1.Label.5")}</label>
              <input
                type="text"
                id="license"
                name="license"
                className="outline-none mt-4"
                placeholder="enter your text"
                required
                value={formData.licence}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col border-b mb-4 pb-4">
              <label htmlFor="country">{t("contactUs.section1.Label.6")}</label>
              <input
                type="select"
                id="country"
                name="country"
                className="outline-none mt-4"
                placeholder="enter your text"
                required
                value={formData.country}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col border-b mb-4 pb-4">
              <label htmlFor="planned">{t("contactUs.section1.Label.7")}</label>
              <input
                type="text"
                id="planned"
                name="planned"
                className="outline-none mt-4"
                placeholder="enter your text"
                required
                value={formData.planned}
                onChange={handleChange}
              />
            </div>
            <div className="py-10">
                <h4 className="flex gap-2 items-center"> {t("contactUs.section1.H4_3")} <MoveUpRight width={14} /></h4>
            </div>
            <div className="px-2">
              <Button className="w-full" >{t("contactUs.section1.B")} <MoveUpRight /></Button>
            </div>
          </form>
        </div>
      </section>
      
      <section className="my-10">
        <Entete SPAN={EnteteData.SPAN} H3={EnteteData.H3} P={EnteteData.P} BG="bg-indigo-300" TEXT="text-indigo-500" />
        <div className="h-40 bg-black my-10 text-white">nos medias</div>
      </section>

      <Footer />
    </div>
  );
}
