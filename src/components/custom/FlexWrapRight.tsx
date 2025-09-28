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
    <div className="w-full py-12 px-6 md:px-4">
      <div className="container mx-auto px-8 md:px-0 flex flex-col">
        {/* Header */}
        <Entete
          SPAN={SPAN}
          P={P}
          H3={H3}
          BG="bg-[#e9e7db]"
          TEXT="text-[#6583d2]"
        />

        {/* Content */}
        <div className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Left Image (hidden on mobile) */}
          <div className="hidden md:flex items-center rounded-md overflow-hidden">
            <img
              src={Image}
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Cards */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {BLOCK.map((el, index) => (
              <Card
                className="border shadow-lg p-2 rounded-md w-full"
                key={index}
              >
                <Card className="-ml-2 md:-ml-4 pb-4 hover:cursor-pointer -mb-5 pb-4 gap-2 duration-300 rounded-md h-72 md:h-80 hover:bg-gray-100">
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
                  <CardContent>
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
    </div >
  );
}
