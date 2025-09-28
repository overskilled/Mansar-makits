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
    <div className="w-full py-12 px-4 md:px-0">
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
        <div className="mt-10 md:mt-20 flex flex-col lg:flex-row w-full">
          {/* Left Image (hidden on mobile) */}
          <div className="hidden lg:flex w-[30%] items-center rounded-md overflow-hidden">
            <img
              src={Image}
              alt="image"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Cards */}
          <div className="lg:w-[70%] flex flex-wrap gap-6 justify-start lg:justify-end">
            {BLOCK.map((el, index) => (
              <Card
                className="border shadow-lg p-2 rounded-md w-full sm:w-[48%] md:w-[48%] lg:w-[45%] flex"
                key={index}
              >
                <Card className="flex flex-col flex-1 -ml-4 -mb-4 gap-4 duration-300 rounded-md hover:cursor-pointer hover:bg-gray-100 p-4">
                  <CardHeader className="gap-3">
                    <img
                      src={el.icone}
                      alt="icon"
                      className="w-10 h-10 object-contain"
                    />
                    <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">
                      {el.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
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
