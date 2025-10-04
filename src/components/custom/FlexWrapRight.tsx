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

        <div className="flex w-full justify-end ">
          <div className="hidden lg:block absolute left-0 -z-10 bg-[url('/rotation.svg')] w-1/2 -ml-30 px-20 py-15 bg-blue400 h-full flex justify-end">
            <div className="bg-[url('/rotation.svg')] w-full bg-green400 px-20 py-17 h-full flex items-center justify-center">
              <div className="bg-[url('/rotation.svg')] w-full bg-green400 rounded-full h-full flex items-center justify-center">
                <img
                  src={Image}
                  alt="image"
                  className="h-auto object-contain bg[url('/rotation.svg')] bg-contain"
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[70%] flex flex-wrap gap-6 justify-start lg:justify-end">
            {BLOCK.map((el, index) => (
              <Card
                className="border shadow-lg p-2 rounded-md w-full sm:w-[48%] md:w-[48%] lg:w-[45%] flex"
                key={index}
              >
                <Card className="flex flex-col flex-1 lg:py-10 -ml-4 -mb-4 gap-4 duration-300 rounded-md hover:cursor-pointer hover:bg-gray-100 px-4">
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
