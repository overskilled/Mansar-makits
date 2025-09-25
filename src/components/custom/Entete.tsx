
interface Entete {
    SPAN: string,
    H3: string,
    P: string,
    BG: string,
    TEXT: string
}


export default function Entete({SPAN, H3, P, BG, TEXT}: Entete) {
  return (

    <div className="container mxauto mb-5 w-full ">
      <span className={`py-1 px-4 rounded-2xl text-center font-semibold text-sm ${BG} ${TEXT} `}>{SPAN}</span>
      <h3 className="text-3xl lg:text-4xl font-semibold text-shadow-xl my-10">{H3}</h3>
      {P.length > 0 && <p className=" text-gray-600 max-w-3xl lg:leading-7 leading-6 text-sm  font-[50] min-w-full">{P}</p>}
    </div>
  );
}
