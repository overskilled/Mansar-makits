import DoubleBlockWithImage from "@/components/custom/DoubleBlockWithImage";
import Entete from "@/components/custom/Entete";
import FlexWrapRight from "@/components/custom/FlexWrapRight";
import Footer from "@/components/custom/Footer";
import FunctionnalityBlock from "@/components/custom/FunctionnalityBlock";
import GetInTouchBlock from "@/components/custom/GetInTouchBlock";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

export default function page() {
  const ListeDoubleBlock = {
    SPAN: "Regulatory",
    H3: "Find the right setup with our regulatory & compliance experts",
    P: "As a BaFin-licensed investment firm we can cover the full value chain. Learning about your needs we will work out the best structure for your success. We have standardized our approach, concluding that most set-ups are comprised by one of the three options below.",
    LEGEND: "Select the right regulatory setup",
    BLOCK: [
      {
        title: "Unbundled",
        content:
          "You want to bring your own cash accounts or use a third-party? No problem. We will help you integrate this smoothly and cover all things investing for you, from providing a securities account to regulatory management - all tailored to the licenses you hold.",
        image:
          "https://lemonmarkets2.cdn.prismic.io/lemonmarkets2…3KHopbqstJ984vv_unbundledmodel.svg?fit=max&w=1200",
      },
      {
        title: "Bundled",
        content:
          "Build your investment product end-to-end with lemon.markets. We handle all regulatory, technical, and operational complexities, providing both securities and cash accounts, so you can focus on building the best-in-class investment solution for your customers.",
        image:
          "	https://lemonmarkets2.cdn.prismic.io/lemonmarkets2…3KHopbqstJ984vv_unbundledmodel.svg?fit=max&w=1200",
      },
    ],
  };
  const ListeOtherManagerSystem = [
    {
      title: "Buy & Sell Stocks",
      descript:
        "Allow your customers to place market and limit orders indiversified ETFs",
      statut: "in progress",
      color: "bg-amber-300",
    },
    {
      title: "Buy & Sell ETFs",
      descript:
        "Allow your customers to place market and limit orders in diversified ETFs",
      color: "bg-green-300",
      statut: "go-Live scope",
    },
    {
      title: "Buy & Sell Funds",
      descript:
        "Provide your customers with access to mutual funds, index funds, & more",
      color: "bg-green-300",
      statut: "go-Live scope",
    },
    {
      title: "ETF savings plans",
      descript:
        "Allow your customers to make investing a habit by setting up recurring savings plans for ETFs",
      color: "bg-green-300",
      statut: "go-Live scope",
    },
    {
      title: "Stock saving plans",
      descript:
        "Allow your customers to make investing a habit by setting up recurring savings plans for their favorite stocks",
      statut: "go-Live scope",
      color: "bg-amber-300",
    },
    {
      title: "Fractional trading",
      descript:
        "Allow your customers to invest in their favorites stocks starting with 1€",
      statut: "in progress",
      color: "bg-amber-300",
    },
    {
      title: "Options, Derivatives and Certificates",
      descript:
        "Allow your customers to go short, hedge their portfolio or trade commodities",
      statut: "in progress",
      color: "bg-amber-300",
    },
  ];
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
  const dataEnter = {
    SPAN: "Partnership approach",
    H3: "Partnership to us means: providing domain & operations experience",
    P: "The lemon.markets team combines operating experience from both traditional and modern security service providers, covering every aspect of the value chain. This allows us to truly understand your needs and deliver the right solution for your phase of growth. As a one-stop-shop, we know exactly what we do, driving operational efficiency across all touchpoints and following our customer-first approach.",
  };
  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full h-[calc(100vh-15vh)] flex flex-col justify-center items-center ">
        <div className="w-1/2 gap-8 mt-30 bg-transparent justify-center flex flex-col items-center *:text-center">
          <h2 className="text-5xl font-seibold mb-2">
            Offer investing on your terms
          </h2>
          <p>
            Get all necessary functionality to enable your customers to invest
            in Stocks & ETFs via one API. Tap into a modular, compliant and
            developer friendly infrastructure designed by experts.{" "}
          </p>
          <button className="bg-black rounded-xl py-3 px-6 mt-4 text-white text-lg">
            Start building
          </button>
        </div>
      </div>

      <DoubleBlockWithImage
        SPAN={ListeDoubleBlock.SPAN}
        H3={ListeDoubleBlock.H3}
        LEGEND={ListeDoubleBlock.LEGEND}
        BLOCK={ListeDoubleBlock.BLOCK}
        P={ListeDoubleBlock.P}
      />

      <div className="my-10 pl-1">
        <span className="bg-blue-800/30 text-blue-500 px-4 py-0.5 rounded-3xl">
          Order Management System
        </span>
        <h3 className="my-10 text-4xl ">
          {" "}
          At the core of our infrastructure is a powerful order management
          system{" "}
        </h3>
        <p className="text-md ">
          {" "}
          Our Order Management System is developed in-house by our team of
          experts. It maintains high throughput even at peak load to ensure
          reliable order execution for your customers at any time. Offering the
          essential order types and the relevant asset classes from the get-go.
          We still have big plans for it in the future and an ambitious roadmap
          guided by customer demand ahead of us.{" "}
        </p>
        <div className="pt-10 pb-10">
          {ListeOtherManagerSystem.map((el, index) => (
            <div className="my-10 py-5" key={index}>
              <div className="flex mb-4 gap-5 items-center">
                <h4 className="text-2xl">{el.title}</h4>
                <span
                  className={`rounded-3xl px-2 py-0.5  relative flex items-center gap-3 ${el.color}`}
                >
                  <span className="w-1 h-1 bg-black "></span>
                  <span className="text-sm">{el.statut}</span>
                </span>
              </div>
              <p>{el.descript}</p>
            </div>
          ))}
        </div>
      </div>

      <FunctionnalityBlock
        SPAN={FunctionnalityBlockData.SPAN}
        H3={FunctionnalityBlockData.H3}
        P={FunctionnalityBlockData.P}
        BLOCK={FunctionnalityBlockData.BLOCK}
      />
      <div className="w-full pt-20 ">
        <Entete
          H3={dataEnter.H3}
          SPAN={dataEnter.SPAN}
          P={dataEnter.P}
          BG="bg-indigo-100"
          TEXT="text-blue-700"
        />

        <div className="flex lg:flex-col flex-col-reverse ">
          <div className="w-full flex">
            <div className="w-1/4 lg:flex hidden">
              <img
                src="https://images.prismic.io/lemonmarkets2/ZrIKvEaF0TcGIttW_gradient-beatvest.png?auto=format,compress"
                alt="image"
                className="w-full h-full"
              />
            </div>
            <Card className="p-0 lg:w-3/4 w-full mx-4 shadow-none rounded-md pt-2">
              <div className="bg-image flex flex-col -ml-4 border mr-2 rounded-md bg-white p-8">
                <div className="w-1/2 *:my-5">
                  <img
                    src="https://lemonmarkets2.cdn.prismic.io/lemonmarkets2…st-white.svg?auto=compress%2Cformat&fit=max&w=384"
                    alt="image"
                  />
                  <p>
                    {" "}
                    "The partnership with lemon.markets accelerated our growth.
                    They accompanied us through the different lifecycle stages
                    and their comprehensive hub for developers, product
                    managers, and operations specialists provided us with the
                    resources we needed to work faster and with greater focus."
                  </p>
                  <span>Julia Kruslin, CEO & Co-Founder, beatvest</span>
                  <button className="p-2 flex items-center gap-3 bg-white rounded-2xl border my-4">
                    real the full story <ChevronRight />
                  </button>
                </div>
                <div className="flex h-20">
                  <img
                    src="https://lemonmarkets2.cdn.prismic.io/lemonmarkets2…st-white.svg?auto=compress%2Cformat&fit=max&w=384"
                    alt="image"
                    className="w-1/4"
                  />
                </div>
              </div>
            </Card>
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

      <GetInTouchBlock />

      <Footer />
    </div>
  );
}
