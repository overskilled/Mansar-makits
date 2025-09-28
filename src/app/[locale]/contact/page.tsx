"use client";

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

export default function Page() {
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
    image1: "/contact_1.svg",
    image2: "/contact_1.svg",
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
  };

  const list = ["/p1.avif", "/p2.avif", "/p3.avif", "/p4.png"];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Hero */}
      <Hero
        H2={DataHero.H2}
        P={DataHero.P}
        B={DataHero.B}
        image1={DataHero.image1}
        image2={DataHero.image2}
      />

      {/* Section 1: Info + Form */}
      <section className="my-16 container mx-auto max-w-screen-xl px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Info block */}
        <Card className="p-8 shadow-sm bg-gray-50">
          <div className="space-y-10">
            <div>
              <h4 className="text-xl lg:text-2xl mb-4 font-semibold">
                {t("contactUs.section1.H4_1")}
              </h4>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>{t("contactUs.section1.UL.0")}</li>
                <li>{t("contactUs.section1.UL.1")}</li>
                <li>{t("contactUs.section1.UL.2")}</li>
                <li>{t("contactUs.section1.UL.3")}</li>
              </ul>
            </div>
            <Separator />
            <div>
              <h4 className="text-xl lg:text-2xl mb-4 font-semibold">
                {t("contactUs.section1.H4_2")}
              </h4>
              <p className="text-gray-700 leading-relaxed">
                {t("contactUs.section1.P2")}
              </p>
            </div>
          </div>
        </Card>

        {/* Form block */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            {[
              { id: "name", type: "text" },
              { id: "email", type: "email" },
              { id: "responsability", type: "text" },
              { id: "companyStage", type: "text" },
              { id: "description", type: "text" },
              { id: "license", type: "text" },
              { id: "country", type: "text" },
              { id: "planned", type: "text" },
            ].map((field, i) => (
              <div
                key={i}
                className="flex flex-col border-b pb-3 focus-within:border-amber-400 transition"
              >
                <label
                  htmlFor={field.id}
                  className="text-sm font-medium text-gray-700"
                >
                  {t(`contactUs.section1.Label.${i}`)}
                </label>
                <input
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  className="outline-none mt-2 py-2 px-1 bg-transparent text-gray-900"
                  placeholder="Enter your text"
                  required
                  value={formData[field.id as keyof FormData]}
                  onChange={handleChange}
                />
              </div>
            ))}

            {/* Extra note */}
            <div className="pt-6">
              <h4 className="flex gap-2 items-center text-gray-700 font-semibold">
                {t("contactUs.section1.H4_3")} <MoveUpRight width={14} />
              </h4>
            </div>

            {/* Submit */}
            <Button className="w-full">
              {t("contactUs.section1.B")} <MoveUpRight />
            </Button>
          </form>
        </div>
      </section>

      {/* Section 2: Partners */}
      <section className="my-16 container mx-auto max-w-screen-xl px-6 lg:px-12">
        <Entete
          SPAN={EnteteData.SPAN}
          H3={EnteteData.H3}
          P={EnteteData.P}
          BG="bg-indigo-300"
          TEXT="text-indigo-500"
        />
        <div className="mt-10">
          {/* Mobile: scroll, Desktop: grid */}
          <div className="flex overflow-x-auto md:grid md:grid-cols-4 gap-8 items-center justify-center py-6 scrollbar-hide">
            {list.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="partenaire"
                className="h-20 w-40 object-contain mx-auto flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
