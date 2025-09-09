"use client"

import Entete from "@/components/custom/Entete";
import Footer from "@/components/custom/Footer";
import Hero from "@/components/custom/Hero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
    H2: "Get started with lemon.markets",
    P: "Do you have questions about building the next generation of brokerage experience? Fill out the contact form below and one of our experts will reach out to you.",
    B: "",
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
    SPAN:"In the media",
    H3:"Well-known in the financial services ecosystem",
    P:"",
  }
  return (
    <div className="min-h-screen flex-col flex *:w-full bg-white">
      <Hero H2={DataHero.H2} P={DataHero.P} B={DataHero.B} />

      <div className="my-10 flex justify-between w-full *:w-1/2">
        <div className="pr-10 pl-5">
          <Card className="p-0 pr-6 shadow-none bg-gray-50">
            <Card className="p-20 mt-6 -mb-6 -ml-6 shadow-none bg-gray-50">
              <div className="">
                <h4 className="text-2xl mb-4">
                  What to expect from a call with us
                </h4>
                <ul className="list-disc ml-4">
                  <li>Clear focus on understanding your problem</li>
                  <li>Deep expertise in the brokerage domain</li>
                  <li>Guidance on all compliance topics</li>
                  <li>The beginning of a long-term partnership</li>
                </ul>
              </div>
              <Separator />
              <div className="">
                <h4 className="text-2xl mb-4">Explore developer hub</h4>
                <p>
                  Learn more about our investment infrastructure by exploring
                  our developer hub. Find an extensive documentation, clear
                  guides and all the support you need to get going right away!
                </p>
              </div>
            </Card>
          </Card>
        </div>
        <div className="pt-4 pl-20">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col border-b mb-4 pb-4">
              <label htmlFor="name">Name</label>
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
              <label htmlFor="email">email</label>
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
              <label htmlFor="responsability">responsability</label>
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
              <label htmlFor="companyStage">company Stage</label>
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
              <label htmlFor="description">description</label>
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
              <label htmlFor="license">license</label>
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
              <label htmlFor="country">country</label>
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
              <label htmlFor="planned">planned</label>
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
                <h4 className="flex gap-2 items-center">Privacy Policy for contact forms  <MoveUpRight width={14} /></h4>
            </div>
            <div className="px-2">
              <Button className="w-full" >submit form  <MoveUpRight /></Button>
            </div>
          </form>
        </div>
      </div>
      
      <div className="my-10">
        <Entete SPAN={EnteteData.SPAN} H3={EnteteData.H3} P={EnteteData.P} BG="bg-indigo-300" TEXT="text-indigo-500" />
        <div className="h-40 bg-black my-10">nos medias</div>
      </div>

      <Footer />
    </div>
  );
}
