import CooperationBlock from "@/components/custom/CooperationBlock";
import DoubleBlockWithImage from "@/components/custom/DoubleBlockWithImage";
import FlexWrapRight from "@/components/custom/FlexWrapRight";
import Footer from "@/components/custom/Footer";
import GetInTouchBlock from "@/components/custom/GetInTouchBlock";
import Hero from "@/components/custom/Hero";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MoveUpRight } from "lucide-react";

interface Liste {
  soustitre: string;
  texte: string;
}
export default function page() {
  const liste = [
    {
      soustitre: "Create a next-generation brokerage experience",
      texte:
        "Customers desire a mobile-first brokerage experience that enables investing through a seamless and intuitive user interface. They value a quick and simple onboarding process, empowering them to achieve their long-term financial goals with ease.",
    },
    {
      soustitre: "Make investment data and research actionable",
      texte:
        "Customers seek an intuitive platform that not only provides the insights they need to make informed investment decisions but also the tools to acton those insights seamlessly.",
    },
    {
      soustitre:
        "Streamline automated investments with advanced infrastructure",
      texte:
        "Customers seek an investment experience seamlessly integrated into their automated portfolio manager, helping them achieve their financial goals with minimal complexity.",
    },
    {
      soustitre:
        "Simplify wealth creation with comprehensive investment solutions",
      texte:
        "Customers want a straightforward path to grow their wealth through investments in ETFs, Funds, and Stocks. They look for expert-built strategies and automated portfolio management, which integrates with investment offerings tailored to their financial goals.",
    },
    {
      soustitre: "Optimize corporate treasury management",
      texte:
        "Corporate clients seek efficient strategies to enhance their financial health and manage their assets. Beyond tools for liquidity management, diversification, and comprehensive reporting, they require integrated investment solutions to effectively manage idle cash and optimize cash flow.",
    },
  ];
  const titre = [
    { titre: "neobrockers" },
    { titre: "invesment Apps" },
    { titre: "robo Advisors" },
    { titre: "Wealth Managers" },
    { titre: "Treasury Platforms" },
  ];
  const items = liste[0];
  const ListeDoubleBlock = {
    SPAN: "Regulatory",
    H3: "Find the right setup with our regulatory & compliance experts",
    P: "As a BaFin-licensed investment firm we can cover the full value chain. Learning about your needs we will work out the best structure for your success. We have standardized our approach, concluding that most set-ups are comprised by one of the three options below.",
    LEGEND: "Select the right regulatory setup",
    BLOCK: [
      {
        title: "Full brokerage service",
        content:
          "lemon.markets covers all investment related regulatory interactions with the customer, either directly or by making you a tied agent.",
        image:
          "https://lemonmarkets2.cdn.prismic.io/lemonmarkets2/Z-0jF3dAxsiBwOAE_image-bpo.svg?fit=max&w=1920",
      },
      {
        title: "Modular brokerage service",
        content:
          "Partnering with wealth managers, introducing brokers and portfolio managers we cooperate to fulfill all regulatory responsibilities.",
        image:
          "	https://lemonmarkets2.cdn.prismic.io/lemonmarkets2…iBwOAD_image-modular-brokerage.svg?fit=max&w=1920",
      },
      {
        title: "Brokerage outsourcing service",
        content:
          "You maintain full control over the customer relationship, while lemon.markets handles the technical and operational details.",
        image:
          "https://lemonmarkets2.cdn.prismic.io/lemonmarkets2/Z-0jF3dAxsiBwOAE_image-bpo.svg?fit=max&w=1920",
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
  const heroData = {
    H2:'Brokers and Wealth Managers',
    P:"ocus all your efforts on building a unique product and attracting theright customers.We'll handle all the technical, operational, andregulatory complexities in the background.",
    B:' Start building'
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* <div className="w-full h-screen flex flex-col justify-center items-center ">
        <div className="w-1/2 gap-8 mt-30 bg-transparent justify-center flex flex-col items-center *:text-center">
          <h2 className="text-5xl font-seibold mb-2">
            Brokers and Wealth Managers
          </h2>
          <p>
            Focus all your efforts on building a unique product and attracting
            the right customers.We'll handle all the technical, operational, and
            regulatory complexities in the background.
          </p>
          <button className="bg-black rounded-xl py-3 px-6 mt-4 text-white text-lg">
            Start building
          </button>
        </div>
      </div> */}
      <Hero H2={heroData.H2} P={heroData.P} B={heroData.B} />

      <div className="flex flex-col w-full my-20 relative">
        <span className="bg-blue-300 text-blue-500 py-0.5 px-4 w-35 font-medium text-md text-center rounded-3xl">
          Use Cases
        </span>
        <h1 className="text-4xl mt-6 font-light mb-10 leading-headlines3">
          Offer investing in ETFs, Funds, and Stocks to your customers
        </h1>
        <p className="font-light">
          Whether you're looking to scale your existing offering or build
          something new: lemon.markets supports a wide range of wealth, savings
          and investing use cases. We offer you a one-stop-shop to launch and
          operate your investment product within weeks. Let us handle all
          technical, operational, and regulatory complexities in the back, so
          you can focus on delivering a best-in-class customer experience.
        </p>
        <div className="mt-10 flex w-full pl-6 mb-20">
          <div className="flex flex-col w-5/8 gap-">
            <nav className="flex w-full justify-between -ml-6">
              {titre.map((el, index) => (
                <button
                  key={index}
                  className="py-1 px-4 hover:border-gray-400 border text-sm bg-gray-100 rounded-3xl"
                >
                  {el.titre}
                </button>
              ))}
            </nav>
            <div className="pt-6 border-gray-200 border mt-4 bg-gray-100 rounded-xl relative h-40 ">
              <div className="-ml-6 border-gray-200 border bg-gray-100 p-8 rounded-xl absolute h50 w-full z-10">
                <div className="w-full h-full gap-6">
                  <h2 className="text-xl font-semibold mb-6">
                    {items.soustitre}
                  </h2>
                  <p className="text-sm">{items.texte}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col pl-10">
            <span className="w-35 bg-amber-200 mb-2 mt-10 rounded-3xl text-center">
              Benefits for you
            </span>
            <ul className="*:list-dict *:text-sm">
              <li>Modular platform enabling your use case</li>
              <li>Quick and seamless go-to-market via API integration</li>
              <li>Cutting-edge tech infrastructure that scales with you</li>
            </ul>
            <span className="w-35 bg-amber-200 mb-2 mt-5 rounded-3xl text-center">
              Benefits for you
            </span>
            <ul className="*:list-dict *:text-sm">
              <li>Access to a broad universe of assets</li>
              <li>QSmooth and efficient onboarding</li>
              <li>Safe, fully compliant processing at every step</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex w-full h-100 ">
        <img
          src="https://lemonmarkets2.cdn.prismic.io/lemonmarkets2…0XnndAxsiBwN4r_image-use-cases.svg?fit=max&w=3840"
          alt="image"
          className="w-full h-50"
        />
      </div>

      <div className="flex flex-col h-[130vh] bg-black justify-center">
        <span className="bg-violet-800/40 text-violet-700 w-45 text-center rounded-3xl py-1 px-2">
          Customer Journey
        </span>
        <h2 className="text-4xl font-semibold text-white my-10">
          One infrastructure to give you all the <br /> building blocks along
          your customer <br /> journey
        </h2>
        <div className="flex w-full h-30 bg-gray-300">s</div>
      </div>

      <div className="flex flex-col h-[130vh] my-20">
        <span className="bg-blue-800/40 text-blue-500 w-45 text-center rounded-3xl py-1 px-2">
          Asset Classes
        </span>
        <h2 className="text-4xl my-10">
          Global asset coverage ranging from ETFs to Stocks
        </h2>
        <p className="text-sm">
          lemon.markets offers the most in-demand investment products, providing
          access to a large list of ISINs from 10+ asset managers. We ensure
          fair pricing and tight spreads for your customers, supported by high
          liquidity and extended market hours.
        </p>
        <div className="flex w-full my-10">
          <div className="flex flex-col w-2/5 gap-4 ">
            <div className="flex py-2 px-4 justify-between w-full *:cursor-pointer">
              <span>ETFs</span>
              <span>Stocks</span>
              <span>Funds</span>
            </div>
            <div className="w-full h-full pl-0 py-2 ml-4">
              <Card className="p-0 pt-4  shadow-none relative bg-gray-50 h-60">
                <Card className="shadow-none w-full -ml-4 bg-gray-50 hover:bg-amber-50 absolute duration-500 h-60">
                  <CardHeader>Funds</CardHeader>
                  <CardContent className="gap-4">
                    <h5 className="">
                      Offer bespoke investment strategies to your customers
                    </h5>
                    <ul className="list-disc pl-4 mt-2">
                      <li>Access to mutual funds, MMFs, & more</li>
                      <li>Professionally managed & diversified portfolios</li>
                      <li>Flexible investment minimums & schedules</li>
                    </ul>
                  </CardContent>
                </Card>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <CooperationBlock />

      <DoubleBlockWithImage
        SPAN={ListeDoubleBlock.SPAN}
        H3={ListeDoubleBlock.H3}
        LEGEND={ListeDoubleBlock.LEGEND}
        BLOCK={ListeDoubleBlock.BLOCK}
        P={ListeDoubleBlock.P}
      />

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
