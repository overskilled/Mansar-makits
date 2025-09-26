import { Card, CardContent, CardHeader } from "../ui/card";
import Entete from "./Entete";

interface Block {
  title: string;
  content: string;
  icone: string;
}

interface Receive {
  SPAN: string;
  H3: string;
  P: string;
  Image: string;
  BLOCK: Block[];
}

export default function FlexWrapRight({ SPAN, H3, P, Image, BLOCK }: Receive) {
  return (
    <div className="w-full py-12 px6 md:px-0">
      <div className="container mx-auto px-4 md:px-8 lg:px-0 flex flex-col">
        {/* Header */}
        <Entete
          SPAN={SPAN}
          P={P}
          H3={H3}
          BG="bg-[#e9e7db]"
          TEXT="text-[#6583d2]"
        />

        {/* Content */}
        {/* <div className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 items-start"> */}
        <div className="mt-10 md:mt-20 flex flex-col lg:flex-row w-full">
          {/* Left Image (hidden on mobile) */}
          <div className="hidden lg:flex w-[30%] items-center rounded-md overflow-hidden bg-blue500">
            <img
              src={Image}
              alt="image"
              className="w-full h-100 object-contain "
            />
          </div>

          {/* Cards */}
          <div className="md:colspan-2 lg:w-[70%] flex  flex-wrap gap-6 justify-start lg:justify-end bg-blue500  ">
            {BLOCK.map((el, index) => (
              <Card
                className="border shadow-lg p-2 rounded-md w-full sm:w-[48%] md:w-[48%] lg:w[50%]"
                key={index}
              >
                <Card className="-ml-2 md:-ml-4 pb-4 -mb-5 gap-2 duration-300 rounded-md h-72 md:h-80 hover:bg-gray-100">
                  <CardHeader className="gap-2">
                    <img
                      src={el.icone}
                      alt="icon"
                      className="w-10 h-10 object-contain"
                    />
                    <h3 className="text-xl md:text-2xl lg:text-3xl h-16 overflow-hidden">
                      {el.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="overflow-auto lg:overflow-visible">
                    <p className="text-sm md:text-base text-gray-600">
                      {el.content}
                    </p>
                  </CardContent>
                </Card>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
