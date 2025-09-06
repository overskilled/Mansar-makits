import CooperationBlock from "@/components/custom/CooperationBlock";
import DoubleBlockWithImage from "@/components/custom/DoubleBlockWithImage";
import Entete from "@/components/custom/Entete";
import FlexWrapRight from "@/components/custom/FlexWrapRight";
import Footer from "@/components/custom/Footer";
import FunctionnalityBlock from "@/components/custom/FunctionnalityBlock";
import GetInTouchBlock from "@/components/custom/GetInTouchBlock";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const dataBlock1 = {
    Image:
      "https://www.lemon.markets/_next/image?url=%2Fasset…ages%2Flogo-emblem-lm-big-squared.svg&w=1920&q=75",
    SPAN: "Use cases",
    H3: "Offering an investment product finally becomes easy",
    P: "Use the lemon.markets API to launch a customer-centric and compliant investment product or enhance existing offerings. Our mission is to create better opportunities for investing in capital markets, ultimately empowering customers to take control of their financial wellbeing. We guide our partners through all operational, technical, and regulatory challenges on the way to a successful launch and beyond",
    BLOCK: [
      {
        icone:
          "https://lemonmarkets2.cdn.prismic.io/lemonmarkets2…c22e_user-profile-change-refresh.svg?fit=max&w=96",
        title: "Customer centricity",
        content:
          "Building on our core principles, we always put you first. Leverage our expertise in technology, regulation, and financial services to deliver investment products that consistently exceed expectations.",
      },
      {
        icone:
          "https://lemonmarkets2.cdn.prismic.io/lemonmarkets2…c9d530_programming-code-terminal.svg?fit=max&w=96",
        title: "Platform modularity",
        content:
          "Our modular platform not only provides 24/7 availability and a high degree of automation, but also adapts to your operating model, empowering you to build what you want, how you want it, securely and reliably.",
      },
      {
        icone:
          "https://lemonmarkets2.cdn.prismic.io/lemonmarkets2/d2abef25-06d5-4361-81bb-426fedc9d530_programming-code-terminal.svg?fit=max&w=96",
        title: "Developer friendly",
        content:
          "Offering comprehensive documentation and a ready-to-test sandbox, our API-first infrastructure streamlines development for your team, shortening your build time from months to weeks.",
      },
      {
        icone:
          "https://lemonmarkets2.cdn.prismic.io/lemonmarkets2…b406-0243b099acc9_bank-checkmark.svg?fit=max&w=96",
        title: "Regulatory coverage",
        content:
          "Our team, combining deep brokerage and regulatory knowledge, works closely with you, allowing you to scale efficiently without regulatory overhead slowing you down.",
      },
    ],
  };
  const FunctionnalityBlockData = {
    SPAN: "Functionality",
    H3: "The full value chain of investing at your fingertips",
    P: "Every functionality our infrastructure offers is thought through from the customer's point of view. This enables you to exceed expectations from day one, securing a strong competitive advantage. We envision a future where investing is omnipresent. Therefore, we are delivering on a clear product vision to truly democratize investing.",
    BLOCK: [
      {
        image:
          "https://lemonmarkets2.cdn.prismic.io/lemonmarkets2/dc7ae402-3d09-473d-a8bf-dc32f154d22c_user-document.svg?fit=max&w=96",
        title: "Account opening & management",
        descript:
          "Create user accounts in seconds, including all identification, verification, and compliance checks relevant & needed.",
      },
      {
        image:
          "		https://lemonmarkets2.cdn.prismic.io/lemonmarkets2…b386e1f9_money-banknote-exchange.svg?fit=max&w=96",
        title: "Account funding & withdrawing",
        descript:
          "Allow your customers to easily top-up and withdraw funds from their cash account",
      },
      {
        image:
          "	https://lemonmarkets2.cdn.prismic.io/lemonmarkets2…ing-code-document-list-checkmark.svg?fit=max&w=96",
        title: "Order management & execution",
        descript:
          "Access a wide range of ETFs, Funds, and Stocks, through our state-of-the-art order management system.",
      },
      {
        image:
          "	https://lemonmarkets2.cdn.prismic.io/lemonmarkets2/eb140aa0-1bb2-4e5b-8b2e-41caefdd9d5a_table-edit-chart.svg?fit=max&w=96",
        title: "Custody & asset servicing",
        descript:
          "Entrust us to handle the safe-keeping and servicing of all your customers' assets.",
      },
      {
        image:
          "https://lemonmarkets2.cdn.prismic.io/lemonmarkets2…dfc0a2ce32_documents-list-shield.svg?fit=max&w=96",
        title: "Taxes, reporting & receipts",
        descript:
          "Let us take over all administrative tasks that come along with investing, from creating tax statements to order receipts.",
      },
      {
        image:
          "https://lemonmarkets2.cdn.prismic.io/lemonmarkets2…programming-code-window-terminal.svg?fit=max&w=96",
        title: "Self-Service Customer Portal",
        descript:
          "Manage customer operations, requests and reporting easily - all in one convenient, self-service dashboard.",
      },
    ],
  };
  const ListeDoubleBlock = {
    SPAN: "Operating Model",
    H3: "A powerful infrastructure compatible with any operating model",
    P: "We recognise that every organisation is unique, with its own distinct goals and setups. That’s why we’ve developed a platform that adapts to how you operate, empowering you to build exactly what you want.",
    LEGEND: "Select the right product setup",
    BLOCK: [
      {
        title: "Unbundled",
        content:
          "You want to bring your own cash accounts or use a third-party? No problem. We will help you integrate this smoothly and cover all things investing for you, from providing a securities account to regulatory management - all tailored to the licenses you hold.",
        image:
          "https://lemonmarkets2.cdn.prismic.io/lemonmarkets2…stJ984vu_bundledoperatingmodel.svg?fit=max&w=1200",
      },
      {
        title: "Bundled",
        content:
          "Build your investment product end-to-end with lemon.markets. We handle all regulatory, technical, and operational complexities, providing both securities and cash accounts, so you can focus on building the best-in-class investment solution for your customers.",
        image:
          "https://lemonmarkets2.cdn.prismic.io/lemonmarkets2…stJ984vu_bundledoperatingmodel.svg?fit=max&w=1200",
      },
    ],
  };
  const EnteteData = {
    SPAN:'Use case',
    H3:'We partner with innovative companies to grow investingopportunities across Europe',
    p:'',

  }
  return (
    <div className="flex h-screen flex-col relative">
      <div className="flex pb-20 pt-48 relative mb-20">
        <div className="w-3/7">
          <h1 className="text-6xl font-light mb-2.5 md:mb-6">
            The infrastructure <br /> powering <br /> investment products
          </h1>
          <p className="text-lg">
            Enable your customers to invest in the stock market. Use the
            lemon.markets API to launch a customer-centric and compliant
            investment product.
          </p>
          {/* <button className="bg-black rounded-2xl"></button> */}
          <Button className="mt-10 md:mt-12"> start building</Button>
        </div>
        <div className="w-4/7 absolute right-0 top-0 h-full flex">
          <div className="w-full flex justify-center items-center">
            <img
              src="https://placehold.co/600x400/000000/FFFFFF/png"
              alt="image"
              className="w-[600px] h-[400px]"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col relative mt-10 mb-30">

        <Entete SPAN={EnteteData.SPAN} H3={EnteteData.H3} P={EnteteData.p} TEXT="text-blue-500" BG="bg-blue-300" />
        
        <div className="flex flex-col gap-30">
          <div className="flex">
            <div className="flex flex-col justify-between">
              <h4 className="text-3xl">Brokers & Wealth Managers</h4>
              <p className="w-3/4 text-lg ">
                {" "}
                Maximize your value proposition by building or upscaling your
                investment product on top of our infrastructure. Focus on
                delivering an exceptional customer experience in no time, while
                we handle the technical, operational and regulatory complexities
                in the back.{" "}
              </p>
              <span className="flex gap-2 group hover:text-yellow-400 duration-500 cursor-pointer">
                learn more{" "}
                <MoveUpRight className="w-4 group-hover:w-5 duration-500" />
              </span>
            </div>
            <img
              src="https://lemonmarkets2.cdn.prismic.io/lemonmarkets2/aH45W0MqNJQqIJW6_image-broker.svg?fit=max&w=1200"
              alt="image"
            />
          </div>
          <div className="flex">
            <div className="w-4/7">
              <img
                src="https://lemonmarkets2.cdn.prismic.io/lemonmarkets2/aH45Z0MqNJQqIJW__image-banks.svg?fit=max&w=1200"
                alt="image"
              />
            </div>
            <div className="flex justify-center items-center my-20 w-3/7">
              <div className="flex flex-col justify-between gap-10 right-0 w-auto">
                <h4 className="text-3xl">Banks & EMIs</h4>
                <p className="text-lg lith">
                  {" "}
                  Unlock superior customer touchpoints by offering or enhancing
                  investment features in your banking product. Leverage our
                  modular infrastructure for a fast, compliant and
                  cost-efficient solution that puts your mind at ease.{" "}
                </p>
                <span className="flex gap-2 hover:text-yellow-400 cursor-pointer">
                  {" "}
                  learn more{" "}
                  <MoveUpRight className="w-4 group-hover:w-5 duration-500" />
                </span>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col justify-between w-4/7">
              <h4 className="text-3xl">Software Companies</h4>
              <p className="w-3/4 text-lg ">
                Create new use cases for investing by integrating investment
                functionalities into your software. Unlock new revenue streams
                while enhancing your customers' financial wellbeing, leveraging
                the unique insights of your existing relationship.
              </p>
              <span className="flex gap-2 group hover:text-yellow-400 duration-500 cursor-pointer">
                learn more{" "}
                <MoveUpRight className="w-4 group-hover:w-5 duration-500" />
              </span>
            </div>
            {/* <div className="w-3/7"> */}
            <img
              src="https://lemonmarkets2.cdn.prismic.io/lemonmarkets2/aH45W0MqNJQqIJW6_image-broker.svg?fit=max&w=1200"
              alt="image"
            />
            {/* </div> */}
          </div>
        </div>
      </div>

      <FlexWrapRight
        SPAN={dataBlock1.SPAN}
        H3={dataBlock1.H3}
        P={dataBlock1.P}
        BLOCK={dataBlock1.BLOCK}
        Image={dataBlock1.Image}
      />

      <CooperationBlock />

      <DoubleBlockWithImage
        SPAN={ListeDoubleBlock.SPAN}
        H3={ListeDoubleBlock.H3}
        P={ListeDoubleBlock.P}
        LEGEND={ListeDoubleBlock.LEGEND}
        BLOCK={ListeDoubleBlock.BLOCK}
      />

      <FunctionnalityBlock
        SPAN={FunctionnalityBlockData.SPAN}
        H3={FunctionnalityBlockData.H3}
        P={FunctionnalityBlockData.P}
        BLOCK={FunctionnalityBlockData.BLOCK}
      />

      <GetInTouchBlock />

      <Footer />
    </div>
  );
}
