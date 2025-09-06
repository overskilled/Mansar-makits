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
    <div className="flex flex-col">
      <Entete SPAN={SPAN} P={P}  H3={H3} BG="bg-blue-200" TEXT="text-blue-500" />
      <div className="flex mt-20 my-10">
        <div className="w-2/6 h-full">
          <img
            src={Image}
            alt="image"
          />
        </div>
        <div className="w-4/6 flex flex-wrap gap-10">
          {BLOCK.map((el, index) => (
            <Card
              className=" border shadow-lg p-1 rounded-md w-[45%]"
              key={index}
            >
              <Card className="-ml-4 -mb-4 rounded-md h-75">
                <CardHeader className="gap-2">
                  <img src={el.icone} alt="image" />
                  <h3 className="text-3xl">{el.title}</h3>
                </CardHeader>
                <CardContent>{el.content}</CardContent>
              </Card>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
