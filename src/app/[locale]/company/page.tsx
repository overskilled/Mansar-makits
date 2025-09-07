import Hero from "@/components/custom/Hero";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MoveUpRight } from "lucide-react";

export default function page() {
  const heroData = {
    H2: "On a mission to grow investing opportunities",
    P: "We build the infrastructure to allow every company to launch an investment product. Because we envision a future where anyone is an investor",
    B: "Get in touch",
  };
  const ListeDOubleData = [
    {
      image:
        "https://lemonmarkets2.cdn.prismic.io/lemonmarkets2…0-f3d70e39a8d7_customer+first+1.svg?fit=max&w=256",
      text: "Put the customer first",
    },
    {
      image:
        "https://lemonmarkets2.cdn.prismic.io/lemonmarkets2…24-f64fee27b87a_mission+focus+1.svg?fit=max&w=256",
      text: "Grow investing opportunities",
    },
    {
      image:
        "https://lemonmarkets2.cdn.prismic.io/lemonmarkets2…f7-486f5949f413_working+style+1.svg?fit=max&w=256",
      text: "Deliver high quality outcomes",
    },
    {
      image:
        "https://lemonmarkets2.cdn.prismic.io/lemonmarkets2…2a2e8962fbb0_leadership+style+1.svg?fit=max&w=256",
      text: "Lead with Empathy",
    },
    {
      image:
        "https://lemonmarkets2.cdn.prismic.io/lemonmarkets2…ab6-2cd6ca55dd06_relationship+1.svg?fit=max&w=256",
      text: "Be a team player",
    },
    {
      image:
        "https://lemonmarkets2.cdn.prismic.io/lemonmarkets2…-71101816bbfb_personal+growth+1.svg?fit=max&w=256",
      text: "Accept no failure, only feedback",
    },
  ];
  const carouselData = [
    {
      picture: "/andy.jpg",
      name: "andy Nzoupet",
      role: "responsable frontend",
    },
    {
      picture: "/andy.jpg",
      name: "andy Nzoupet",
      role: "responsable frontend",
    },
    {
      picture: "/andy.jpg",
      name: "andy Nzoupet",
      role: "responsable frontend",
    },
    {
      picture: "/andy.jpg",
      name: "andy Nzoupet",
      role: "responsable frontend",
    },
    {
      picture: "/andy.jpg",
      name: "andy Nzoupet",
      role: "responsable frontend",
    },
  ];
  const listeImage = [
    "https://images.prismic.io/lemonmarkets2/4567b528-4…ffice+2.png?auto=compress%2Cformat&fit=max&w=3840",
    "https://images.prismic.io/lemonmarkets2/1ee65d05-5…ffice+3.png?auto=compress%2Cformat&fit=max&w=3840",
    "https://images.prismic.io/lemonmarkets2/365d9ad9-2…ffice+4.png?auto=compress%2Cformat&fit=max&w=3840",
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <Hero H2={heroData.H2} P={heroData.P} B={heroData.B} />

      <div className="w-full my-10">
        <div className="w-full flex my-10">
          <div className="float-left w-1/2">
            <span className="px-4 py-0.5 bg-indigo-100 text-shadow-md text-indigo-500 rounded-3xl">
              What our vision is
            </span>
            <h3 className="my-4 text-3xl text-shadow-lg">
              Enabling anyone to be an investor
            </h3>
            <p>
              We envision a future in which anyone is an investor. Therefore, we
              provide the infrastructure for the next generation of innovative
              companies that help their customers build wealth. Working our way
              towards our mission: to grow investing opportunities for all
              European customers and businesses, providing seamless access to
              capital markets.
            </p>
          </div>
          <div className="float-right w-1/2 flex justify-end ">
            <img
              src="https://lemonmarkets2.cdn.prismic.io/lemonmarkets2…070e9ac2_vision+every+european.svg?fit=max&w=1080"
              alt="yess"
              className="m-2 bg-gray-50"
            />
          </div>
        </div>
        <div className="w-full flex my-15">
          <div className="float-right w-1/2 flex justify-start">
            <img
              src="https://lemonmarkets2.cdn.prismic.io/lemonmarkets2…b280-0679816b3b78_why+we+do+it.svg?fit=max&w=1080"
              alt="yess"
              className="m-2 bg-gray-50"
            />
          </div>
          <div className="float-left w-1/2 my-15">
            <span className="px-4 py-0.5 bg-indigo-100 text-shadow-md text-indigo-500 rounded-3xl">
              Why we do it
            </span>
            <h3 className="my-4 text-3xl text-shadow-lg">
              Because equity rails are still full of manual processes and legacy
              technology
            </h3>
            <p>
              We experienced ourselves how much legacy technology, manual
              processes and being left alone with all regulatory complexity can
              get in the way of building great investment products. This
              shouldn’t happen to anyone after us.
            </p>
          </div>
        </div>
        <div className="w-full flex my-15">
          <div className="float-left w-1/2">
            <span className="px-4 py-0.5 bg-indigo-100 text-shadow-md text-indigo-500 rounded-3xl">
              How we do it
            </span>
            <h3 className="my-4 text-3xl text-shadow-lg">
              We offer partners a one-stop-shop to launch their investment
              product in weeks
            </h3>
            <p>
              investment products. Our one-stop-shop approach abstracts all
              technical complexity via our API, provides regulatory coverage
              through our BaFin licenses and enables smooth operations guided by
              our experts.
            </p>
          </div>
          <div className="float-right w-1/2 flex justify-end ">
            <img
              src="https://lemonmarkets2.cdn.prismic.io/lemonmarkets2…bf0c-8a49ca68ec4b_how+we+do+it.svg?fit=max&w=1080"
              alt="yess"
              className="m-2 bg-gray-50"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center bg-gray-50 gap-10 justifycenter my-10">
        <span className="text-indigo-500 bg-indigo-50 text-shadow-xs px-4 py-1 rounded-3xl">
          Principles
        </span>
        <h3 className="text-3xl font-semibold text-shadow-sm">
          We are guided by a common set of principles
        </h3>
        <p className="text-center">
          {" "}
          We follow clear principles in the day-to-day of building
          lemon.markets. Doing so allows us to build an enduring company,
          enabling all lemoneers to achieve their best results. This framework
          is based on the belief that every person has an existing set of
          values, but at work personal preferences need to be put aside to unite
          around one way of working. Because using the power of teamwork, we
          will achieve more than each of us could individually.{" "}
        </p>
        <h5 className="font-semibold text-lg text-shadow-2xs">
          A lemoneer will
        </h5>
        <div className="flex flex-wrap justify-between pl-4 pr-2">
          {ListeDOubleData.map((el, index) => (
            <Card
              key={index}
              className="shadow-none p-0 min-w100 w-[32%] rounded-md pr-2 -pt-4 mb-5"
            >
              <Card className="-ml-4 mt-2 shadow-none p-0 rounded-md -mb-4 gap-0">
                <CardContent className="w-full h-40 justify-center">
                  <img
                    src={el.image}
                    alt="image"
                    className="object-cover w-full h-full"
                  />
                </CardContent>
                <CardFooter className="justify-center mb-5">
                  {el.text}
                </CardFooter>
              </Card>
            </Card>
          ))}
        </div>
      </div>

      <div className="min-h-screen pt-40 pb-10 flex flex-col items-center bg-black text-white my-10">
        <span className="bg-indigo-300 text-indigo-600 px-3 py-1 rounded-3xl">
          Leadership team
        </span>
        <h3 className="text-3xl my-10">
          Our leadership team is experienced, passionate and hands-on
        </h3>
        <Carousel className="flex flex-col max-w-full overflow-x-hidden ">
          <CarouselContent className="*:md:basis-1/3 *:lg:basis-1/4">
            {carouselData.map((el, index) => (
              <CarouselItem
                key={index}
                className="min-w-90 h-50 p-0 bg-black m-2"
              >
                <Card className="w-full flex-row p-0 pl-2 bg-black items-center h-full border-slate-700/50 overflow-hidden">
                  <div className="w-3/6 h-full p-2 pr-0">
                    <img
                      src={el.picture}
                      alt="image"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex w-3/6 flex-col py-2 pr-2 text-white max-h-full h-full gap5 justify-between">
                    <div className="w-full">
                      <div className="flex justify-between mb-2">
                        <h5 className="">{el.name}</h5>
                        <div className="flex w-8 tex-sm bg-gray-500 rounded-3xl h-5"></div>
                      </div>
                      <p className="text-gray-400 mt-2 mb-5">{el.role}</p>
                    </div>
                    <button className="flex bottom-0 text-sm items-center gap-3 cursor-pointer">
                      Read more <MoveUpRight className="w-4" />
                    </button>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center relative gap-5 mt-20">
            <CarouselPrevious className="text-white  relative bg-black rounded-sm px-8 border-slate-800/50 hover:border-white hover:bg-black hover:text-white border-[2px]" />
            <CarouselNext className="text-white  relative bg-black rounded-sm px-8 border-slate-800/50 hover:border-white hover:bg-black hover:text-white border-[2px]" />
          </div>
        </Carousel>
      </div>

      <div className="flex flex-col w-full my-10">
        <div className="flex w-full justify-between">
          <div className="w-1/2">
            <span className="bg-indigo-300 text-indigo-600 px-4 py-0.5 rounded-3xl">
              The office
            </span>
            <h3 className="my-5 text-4xl text-shadow-sm">
              Brought to you from <br /> the heart of Berlin
            </h3>
            <p>
              Our HQ is located in the lively area between Kreuzberg and
              Neukölln. Every start-up’s dream office filled with life, laugh,
              white boards and lemon trees. This is were we celebrate our
              culture, host our lemon.talks and work on empowering a thriving
              ecosystem of investment products.
            </p>
            <button className="px-6 py-3 mt-15 bg-black text-white rounded-2xl">
              Explore working at lemon.markets
            </button>
          </div>
          <img
            src="https://images.prismic.io/lemonmarkets2/31011c9d-6…ffice+1.png?auto=compress%2Cformat&fit=max&w=3840"
            alt="image"
            className="object-cover w-1/2 h-full"
          />
        </div>
        <div className="flex justify-around mt-10">
          {listeImage.map((el, index) => (
            <img
              src={el}
              alt="image"
              className="basis-3 rounded-2xl shadow"
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
