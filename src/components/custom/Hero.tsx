interface hero {
    H2: string,
    P: string,
    B: string
}

export default function Hero({ H2, P, B}: hero) {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center ">
      <div className="w-2/3 gap-6 mt-30 bg-transparent justify-center flex flex-col items-center *:text-center">
        <h2 className="text-5xl font-seibold mb-2">{H2}</h2>
        <p>{P}</p>
        {B.length > 0 && 
        <button className="bg-black rounded-xl py-3 px-6 mt-4 text-white text-lg">{B}</button> }
      </div>
    </div>
  );
}
