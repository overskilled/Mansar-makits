import Image from "next/image";
import { useRouter } from "next/navigation";

interface hero {
  H2: string,
  P: string,
  B: string
  image1: any,
  image2: any
}

export default function Hero({ H2, P, B, image1, image2 }: hero) {
  const router = useRouter()
  return (
    <div className="relative flex flex-row items-center pt-32 pb-24 gap-10 lg-pb-32 lg:pt-64">
      <div className="max-w-6xl mx-auto px-8 lg-px-0  justify-center text-center">
        <h2 className="text-5xl font-meduim mb-2">{H2}</h2>
        <p className="max-w-4xl leading-8">{P}</p>

        {B.length > 2 &&
          <button onClick={() => router.push("/contact")} className="bg-black rounded-md lg:rounded-xl lg:py-3 lg:px-6 py-1 px-3 mt-4 hover:cursor-pointer text-white text-lg">{B}</button>}
      </div>
      <div
        className="absolute left-0 right-0 -z-10 mt-20 h-[450px] hidden sm:block
            bg-no-repeat bg-cover bg-bottom 3xl:bg-fill 
            bg-[url('/background-tiled-page-hero.svg')]"
      />

  

      <div className="hidden lg:block">
        {/* Left decoration */}
        <div className="absolute -z-10 pointer-events-none left-[5%] bottom-[30px]">
          <Image
            src={image1}
            alt="Decoration left"
            width={200}
            height={185}
            priority={false}
          />
        </div>

        {/* Right decoration */}
        <div className="absolute -z-10 pointer-events-none right-[5%] bottom-[-10px]">
          <Image
            src={image2}
            alt="Decoration right"
            width={200}
            height={175}
            priority={false}
          />
        </div>
      </div>
    </div>
  );
}
