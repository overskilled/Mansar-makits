
interface Entete {
  SPAN: string,
  H3: string,
  P: string,
  BG: string,
  TEXT: string
}


export default function Entete({ SPAN, H3, P, BG, TEXT }: Entete) {
  return (
    <div className="w-full text-center mb-12 px-4">
      {/* Span / Tag */}
      <span
        className={`inline-block py-1 px-4 rounded-2xl font-semibold text-sm ${BG} ${TEXT}`}
      >
        {SPAN}
      </span>

      {/* Title */}
      <h3 className="text-2xl md:text-4xl font-semibold my-6 md:my-10 leading-snug">
        {H3}
      </h3>

      {/* Paragraph */}
      {P.length > 0 && (
        <p className="text-gray-600 max-w-3xl mx-auto leading-7 font-light text-base md:text-lg">
          {P}
        </p>
      )}
    </div>

  );
}
