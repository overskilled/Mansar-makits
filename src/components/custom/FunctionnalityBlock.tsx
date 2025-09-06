import { MoveUpRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Entete from "./Entete";

interface Block {
  image: string;
  title: string;
  descript: string;
}

interface Liste {
  SPAN: string;
  H3: string;
  P: string;
  BLOCK: Block[];
}

export default function FunctionnalityBlock({ SPAN, H3, P, BLOCK }: Liste) {
  return (
    <div className="flex flex-col my-30 w-full ">
      <Entete
        SPAN={SPAN}
        H3={H3}
        P={P}
        TEXT="text-blue-500"
        BG="bg-indigo-300"
      />

      <div className="flex flex-wrap justify-between my-20">
        {BLOCK.map((el, index) => (
          <Card
            className=" border-none borders shadow-none p-2 rounded-md my-4 w-[32%]"
            key={index}
          >
            <Card className="-ml-4 -mb-4 rounded-md h-85 hover:bg-gray-100 shadow-none border-none borders bg-white  justify-between gap-0 duration-200">
              <CardHeader className="gap-2">
                <img src={el.image} alt="image" />
                <h3 className="text-3xl mt-4">{el.title}</h3>
              </CardHeader>
              <CardContent>{el.descript}</CardContent>
              <CardFooter className="bottom-0 ">
                <span className="flex gap-4 group hover:text-amber-400 duration-500">
                  learn more{" "}
                  <MoveUpRight className="w-12 duration-500 group-hover:w-14" />
                </span>
              </CardFooter>
            </Card>
          </Card>
        ))}
      </div>
    </div>
  );
}
