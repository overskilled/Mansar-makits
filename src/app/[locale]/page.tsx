import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const dataBlock1 = [
    {
      image:
        "https://lemonmarkets2.cdn.prismic.io/lemonmarkets2…c22e_user-profile-change-refresh.svg?fit=max&w=96",
      title: "Customer centricity",
      describ:
        "Building on our core principles, we always put you first. Leverage our expertise in technology, regulation, and financial services to deliver investment products that consistently exceed expectations.",
    },
    {
      image:
        "	https://lemonmarkets2.cdn.prismic.io/lemonmarkets2…c9d530_programming-code-terminal.svg?fit=max&w=96",
      title: "Platform modularity",
      describ:
        "Our modular platform not only provides 24/7 availability and a high degree of automation, but also adapts to your operating model, empowering you to build what you want, how you want it, securely and reliably.",
    },
    {
      image:
        "https://lemonmarkets2.cdn.prismic.io/lemonmarkets2/d2abef25-06d5-4361-81bb-426fedc9d530_programming-code-terminal.svg?fit=max&w=96",
      title: "Developer friendly",
      describ:
        "Offering comprehensive documentation and a ready-to-test sandbox, our API-first infrastructure streamlines development for your team, shortening your build time from months to weeks.",
    },
    {
      image:
        "	https://lemonmarkets2.cdn.prismic.io/lemonmarkets2…b406-0243b099acc9_bank-checkmark.svg?fit=max&w=96",
      title: "Regulatory coverage",
      describ:
        "Our team, combining deep brokerage and regulatory knowledge, works closely with you, allowing you to scale efficiently without regulatory overhead slowing you down.",
    },
  ];
  const dataBlock2 = [
    {
      image:
        "https://lemonmarkets2.cdn.prismic.io/lemonmarkets2/dc7ae402-3d09-473d-a8bf-dc32f154d22c_user-document.svg?fit=max&w=96",
      title: "Account opening & management",
      describ:
        "Create user accounts in seconds, including all identification, verification, and compliance checks relevant & needed.",
    },
    {
      image:
        "		https://lemonmarkets2.cdn.prismic.io/lemonmarkets2…b386e1f9_money-banknote-exchange.svg?fit=max&w=96",
      title: "Account funding & withdrawing",
      describ:
        "Allow your customers to easily top-up and withdraw funds from their cash account",
    },
    {
      image:
        "	https://lemonmarkets2.cdn.prismic.io/lemonmarkets2…ing-code-document-list-checkmark.svg?fit=max&w=96",
      title: "Order management & execution",
      describ:
        "Access a wide range of ETFs, Funds, and Stocks, through our state-of-the-art order management system.",
    },
    {
      image:
        "	https://lemonmarkets2.cdn.prismic.io/lemonmarkets2/eb140aa0-1bb2-4e5b-8b2e-41caefdd9d5a_table-edit-chart.svg?fit=max&w=96",
      title: "Custody & asset servicing",
      describ:
        "Entrust us to handle the safe-keeping and servicing of all your customers' assets.",
    },
    {
      image:
        "https://lemonmarkets2.cdn.prismic.io/lemonmarkets2…dfc0a2ce32_documents-list-shield.svg?fit=max&w=96",
      title: "Taxes, reporting & receipts",
      describ:
        "Let us take over all administrative tasks that come along with investing, from creating tax statements to order receipts.",
    },
    {
      image:
        "https://lemonmarkets2.cdn.prismic.io/lemonmarkets2…programming-code-window-terminal.svg?fit=max&w=96",
      title: "Self-Service Customer Portal",
      describ:
        "Manage customer operations, requests and reporting easily - all in one convenient, self-service dashboard.",
    },
  ];
  return (
    <div className="flex h-screen flex-col px-4">
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
        <span className="py-1 px-6 bg-blue-600/20 rounded-2xl w-35 text-center">
          Use cases
        </span>
        <h3 className="text-5xl capitalize my-10">
          We partner with innovative companies <br /> to grow investing
          opportunities across Europe
        </h3>
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
      <div className="flex flex-col">
        <span className="py-1 px-6 bg-blue-600/20 rounded-2xl w-35 text-center">
          Use cases
        </span>
        <h3 className="text-5xl capitalize my-10">
          {" "}
          Offering an investment product finally becomes easy{" "}
        </h3>
        <p className="">
          Use the lemon.markets API to launch a customer-centric and compliant
          investment product or enhance existing offerings. Our mission is to
          create better opportunities for investing in capital markets,
          ultimately empowering customers to take control of their financial
          wellbeing. We guide our partners through all operational, technical,
          and regulatory challenges on the way to a successful launch and beyond
        </p>
        <div className="flex mt-20 my-10">
          <div className="w-2/6 h-full">
            <img
              src="https://www.lemon.markets/_next/image?url=%2Fasset…ages%2Flogo-emblem-lm-big-squared.svg&w=1920&q=75"
              alt="image"
            />
          </div>
          <div className="w-4/6 flex flex-wrap gap-10">
            {dataBlock1.map((el, index) => (
              <Card
                className=" border shadow-lg p-1 rounded-md w-[45%]"
                key={index}
              >
                <Card className="-ml-4 -mb-4 rounded-md h-75">
                  <CardHeader className="gap-2">
                    <img src={el.image} alt="image" />
                    <h3 className="text-3xl">{el.title}</h3>
                  </CardHeader>
                  <CardContent>{el.describ}</CardContent>
                </Card>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <div className="flex bg-black w-full py-10 items-center my-10">
        <div className="flex flex-col h-80 w-full">
          <span className="bg-blue-600/20 px-3 py-1 w-35 text-indigo-800">
            Cooperations
          </span>
          <h3 className="text-4xl text-white mt-5 mb-20">
            Working together with trusted institutions
          </h3>
          <div className="w-[95%] ml-2 bg-gray-300 h-30 ">d</div>
        </div>
      </div>
      <div className="flex w-full flex-col">
        <span className="py-1 px-2 bg-blue-600/20 rounded-2xl w-40 text-center">
          Operating Model
        </span>
        <h3 className="text-4xl font-semibold text-shadow-xl my-10">
          A powerful infrastructure compatible with any operating model
        </h3>
        <p className="text-xl">
          We recognise that every organisation is unique, with its own distinct
          goals and setups. That’s why we’ve developed a platform that adapts to
          how you operate, empowering you to build exactly what you want.
        </p>
        <div className="flex flex-col mt-10 mb-30">
          <div className="flex">
            <div className="flex h-90 flex-col gap-10 w-3/7">
              <p className="text-center">Select the right product setup</p>
              <Card className=" border shadow-lg p-1 bg-gray-100 duration-500 hover:bg-gray-200 rounded-md w-[45%">
                <Card className="-ml-6 -mb-6 rounded-md h-45 bg-gray-100 duration-500 hover:bg-amber-100">
                  <CardHeader className="m-0">
                    <h3 className="text-md font-semibold">bundled</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Build your investment product end-to-end with
                      lemon.markets. We handle all regulatory, technical, and
                      operational complexities, providing both securities and
                      cash accounts, so you can focus on building the
                      best-in-class investment solution for your customers.
                    </p>
                  </CardContent>
                </Card>
              </Card>
              <Card className=" border shadow-lg p-1 bg-gray-100 hover:bg-bg-gray-200 duration-500 rounded-md w-[45%">
                <Card className="-ml-6 -mb-6 rounded-md h-45 bg-gray-100 hover:bg-amber-100 duration-500">
                  <CardHeader className="">
                    <h3 className="text-md font-semibold">Unbundled</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Build your investment product end-to-end with
                      lemon.markets. We handle all regulatory, technical, and
                      operational complexities, providing both securities and
                      cash accounts, so you can focus on building the
                      best-in-class investment solution for your customers.
                    </p>
                  </CardContent>
                </Card>
              </Card>
            </div>
            <div className="flex justify-end w-4/7">
              <img
                src="https://lemonmarkets2.cdn.prismic.io/lemonmarkets2/Z3KHhpbqstJ984vu_bundledoperatingmodel.svg?fit=max&w=1200"
                alt="image"
                className="right-0"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col my-20 w-full ">
        <span className="py-1 px-2 bg-blue-600/20 rounded-2xl w-40 text-center"> Functionality </span>
        <h3 className="text-4xl font-semibold text-shadow-xl my-10">
          The full value chain of investing at your fingertips
        </h3>
        <p>Every functionality our infrastructure offers is thought through from the customer's point of view. This enables you to exceed expectations from day one, securing a strong competitive advantage. We envision a future where investing is omnipresent. Therefore, we are delivering on a clear product vision to truly democratize investing.</p>
        <div className="flex flex-wrap justify-between my-20">
          {dataBlock2.map((el, index) => (
            <Card
            className=" border-none borders shadow-none p-2 rounded-md my-4 w-[32%]"
            key={index}
            >
              <Card className="-ml-4 -mb-4 rounded-md h-85 hover:bg-gray-100 shadow-none border-none borders bg-white  justify-between gap-0 duration-200">
                <CardHeader className="gap-2">
                  <img src={el.image} alt="image" />
                  <h3 className="text-3xl mt-4">{el.title}</h3>
                </CardHeader>
                <CardContent>
                  {el.describ}
                </CardContent>
                <CardFooter className="bottom-0 ">
                  <span className="flex gap-4 group hover:text-amber-400 duration-500">learn more <MoveUpRight className="w-12 duration-500 group-hover:w-14" /></span>
                </CardFooter>
              </Card>
            </Card>
          ))}
        </div>
      </div>
      <div className="w-full flex *:w-1/2 bg-black linear h100 pt-30 mb-20 ">
        <div className="flex flex-col pl-4">
          <span className="py-1 px-2 bg-blue-600/20 text-indigo-700 rounded-2xl w-40 text-center"> Get in Touch </span>
          <h1 className="text-6xl text-white mt-5"> Partner with us </h1>
          <p className="text-gray-200 mb-10 mt-5">Use the lemon.markets API to launch a customer-centric and compliant investment product.</p>
          <button className="py-3 px-6 rounded-lg bg-white w-50">start building</button>
        </div>
        <div className="flex flex-col justify-end items-center border pl-10">
          <Card
            className=" border-none borders shadow-none w-full p-0 bg-transparent hover:bg-black rounded-md my-4 "
            >
              <Card className="mt-4 -ml-4 rounded-md w-full hover:bg-black bg-transparent shadow-none border-none borders justify-between gap-0 duration-200">
                <CardHeader className="gap-2">
                  <h3 className="text-3xl mt-4 text-white">About us</h3>
                </CardHeader>
                <CardContent className="text-gray-500">discover the vision and principles of MANSAR.MAKITS</CardContent>
              </Card>
            </Card>
            <Card
            className=" border-none borders shadow-none w-full hover:bg-black bg-transparent p-0 rounded-md my-4 "
            >
              <Card className="-ml-4 -mb-4 rounded-md w-full hover:bg-black bg-transparent shadow-none border-none borders  justify-between gap-0 duration-200">
                <CardHeader className="gap-2">
                  <h3 className="text-3xl mt-4 text-white">Carrer <MoveUpRight className="hidden hover:flex"/></h3>
                </CardHeader>
                <CardContent className="text-gray-500">unclock your full potential and grow with us </CardContent>
              </Card>
            </Card>
        </div>
      </div>
    </div>
  );
}