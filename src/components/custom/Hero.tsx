import Image from "next/image";
import { useRouter } from "next/navigation";

interface hero {
  H2: string,
  P: string,
  B: string
}

export default function Hero({ H2, P, B }: hero) {
  const router = useRouter()
  return (
    <div className="relative flex flex-row items-center pt-32 pb-24 lg-pb-32 lg:pt-64">

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
            src="https://lemonmarkets2.cdn.prismic.io/lemonmarkets2/Z-0VeXdAxsiBwN3F_Group48095971.svg?fit=max&w=384"
            alt="Decoration left"
            width={143}
            height={135}
            priority={false}
          />
        </div>

        {/* Right decoration */}
        <div className="absolute -z-10 pointer-events-none right-[5%] bottom-[-10px]">
          <Image
            src="https://lemonmarkets2.cdn.prismic.io/lemonmarkets2/Z-0VeXdAxsiBwN3E_Group48095969.svg?fit=max&w=640"
            alt="Decoration right"
            width={280}
            height={211}
            priority={false}
          />
        </div>
      </div>
    </div>
  );
}
