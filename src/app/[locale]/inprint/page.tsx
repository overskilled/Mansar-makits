import Footer from "@/components/custom/Footer";
import GetInTouchBlock from "@/components/custom/GetInTouchBlock";

export default function page() {
  const liste = [
    [
      {
        title: "lemon.markets GmbH",
        first: "Kottbusser Damm 79",
        second: "10967 Berlin",
        third: "",
      },
      {
        title: "lemon.markets brokerage GmbH",
        first: "Kottbusser Damm 79",
        second: "10967 Berlin",
        third: "",
      },
    ],
    [
      {
        title: "Represented by",
        first: "Maximilian Linden (Managing Director)",
        second: "",
        third: "",
      },
      {
        title: "Represented by",
        first: "Markus Gunter (Managing Director)",
        second: "Dirk Schlömer (Managing Director)",
        third: "",
      },
    ],
    [
      {
        title: "Contact",
        first: "Email: support@lemon.markets",
        second: "Website: https://lemon.markets",
        third: "Contact us: https://www.lemon.markets/en-de/contact",
      },
      {
        title: "Contact",
        first: "Email: info@lemon.markets",
        second: "Website: https://lemon.markets",
        third: "Contact us: https://www.lemon.markets/en-de/contact",
      },
    ],
    [
      {
        title: "Commercial register number",
        first: "Amtsgericht Charlottenburg - HRB 243185 B",
        second: "VAT-ID: DE337225995",
        third: "",
      },
      {
        title: "Commercial register number",
        first: "Amtsgericht Charlottenburg - HRB 245380 B",
        second: "VAT-ID: DE356810994",
        third: "",
      },
    ],
    [
      {
        title: "",
        first: "Responsible for the content according to § 18 para. 2 MStV is",
        second:
          "Maximilian Linden, lemon.markets GmbH, Kottbusser Damm 79, 10967 Berlin",
      },
      {
        title: "",
        first:
          "lemon.markets brokerage GmbH is supervised by the Bundesanstalt für",
        second:
          "Finanzdienstleistungsaufsicht (BaFin) and is licensed under the German Investment",
        third: "Firms Act (WpIG).",
      },
    ],
    [
      { title: "", first: "", second: "", third: "" },
      {
        title: "Supervisory Authority",
        first: "Bundesanstalt für Finanzdienstleistungsaufsicht (BaFin)",
        second: "Marie-Curie-Straße 24-28",
        third: "60439 Frankfurt am Main Germany",
      },
    ],
  ];
  const link = [
    "Developer Hub: https://developer.lemon.markets/",
    "LinkedIn: https://www.linkedin.com/company/lemon-markets/",
    "Instagram: https://www.instagram.com/lemon.markets/",
    "Facebook: https://www.facebook.com/lemon.markets/",
    "Twitter: https://twitter.com/lemon_markets",
  ];
  return (
    <div className="min-h-screen flex-col flex *:w-full">
      <div className="h-[50vh] flex items-center mb-4">
        <h1 className="text-5xl my-auto">Inprit</h1>
      </div>

      <div className="flex-grow">
        <table className="w-full border-separate border-spacing-y-6 ">
          <thead className="w-full">
            <tr className="h-full *:w-1/2 *:text-start">
              <th>Details according to § 5 TMG</th>
              <th>Additional details</th>
            </tr>
          </thead>
          <tbody>
            {liste.map((item, index) => (
              <tr key={index} className="my-6">
                <td className="pr-5">
                  <h4 className="text-2xl mb-2 font-[200]">{item[0].title}</h4>
                  <p className="text-gray-900">
                    {item[0].first}
                    <br />
                    {item[0].second}
                    <br />
                    {item[0].third}
                  </p>
                </td>
                <td>
                  <h4 className="text-2xl mb-2 font-[200]">{item[1].title}</h4>
                  <p className="text-gray-900">
                    {item[1].first}
                    <br />
                    {item[1].second}
                    <br />
                    {item[1].third}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <section className="w-full flex flex-col gap-8 py-10">
        <div className="h-[50vh] flex items-center mt-4">
          <h1 className="text-5xl my-auto">Disclaimer</h1>
        </div>
        <div className="w-full">
          <h4 className="text-2xl mb-4 font-[300]">
            Accountability for content
          </h4>
          <p>
            The contents of our pages have been created with the utmost care.
            However, we cannot guarantee the contents' accuracy, completeness or
            topicality. According to statutory provisions, we are furthermore
            responsible for our own content on these web pages. In this matter,
            please note that we are not obliged to monitor the transmitted or
            saved information of third parties, or investigate circumstances
            pointing to illegal activity. Our obligations to remove or block the
            use of information under generally applicable laws remain unaffected
            by this as per §§ 8 to 10 of the Telemedia Act (TMG).
          </p>
        </div>
        <div className="w-full">
          <h4 className="text-2xl mb-4 font-[300]">‍Validity</h4>
          <p>The imprint also applies to the following online presences:</p>
          <ul>
            {link.map((item, index) => (
              <li key={index} className="my-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full">
          <h4 className="text-2xl mb-4 font-[300]">Copyright</h4>
          <p>
            Our web pages and their contents are subject to German copyright
            law. Unless expressly permitted by law, every form of utilizing,
            reproducing or processing works subject to copyright protection on
            our web pages requires the prior consent of the respective owner of
            the rights. Individual reproductions of a work are only allowed for
            private use. The materials from these pages are copyrighted, and any
            unauthorized use may violate copyright laws.
          </p>
        </div>
        <div className="w-full">
          <h4 className="text-2xl mb-4 font-[300]">‍Dispute Resolution</h4>
          <p>
            The European Commission provides a platform for online dispute
            resolution (OS), which is available at
            https://ec.europa.eu/consumers/odr. We do not participate in dispute
            resolution proceedings before any other consumer arbitration body.
            You can find our email address above.
          </p>
        </div>
      </section>

      <GetInTouchBlock />

      <Footer />
    </div>
  );
}
