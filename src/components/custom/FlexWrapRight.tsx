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
    <div className="flex flex-col px-8">
      <Entete SPAN={SPAN} P={P}  H3={H3} BG="bg-[#e9e7db]" TEXT="text-[#6583d2] " />
      <div className="flex mt-20 my-10">
        <div className="w-2/6 min-h-full flex items-center rounded-md overflow-hidden">
          <img
            src={Image}
            alt="image"
            className="w-full object-cover"
          />
        </div>
        <div className="w-4/6 flex flex-wrap gap-10 justify-end">
          {BLOCK.map((el, index) => (
            <Card
              className=" border shadow-lg p-2 rounded-md w-[45%]"
              key={index}
            >
              <Card className="-ml-4 pb-4 -mb-5 gap-2 duration-300 rounded-md h-80 hover:bg-gray-100">
                <CardHeader className="gap-2">
                  <img src={el.icone} alt="image" />
                  <h3 className="text-3xl h-20 overflow-hidden bgblack">{el.title}</h3>
                </CardHeader>
                <CardContent className="">
                  <p className="bg-blue500 max-h-35 bgblack max-max-h-35 overflow-y-scroll scrollBar-none">{el.content}</p>
                </CardContent>
              </Card>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
