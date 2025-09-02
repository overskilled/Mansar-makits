import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const dataBlock = [
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
            {dataBlock.map((el, index) => (
              <Card className=" border shadow-lg p-1 rounded-md w-[45%]" key={index}>
                <Card className="-ml-4 -mb-4 rounded-md h-70">
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
    </div>
  );
}
