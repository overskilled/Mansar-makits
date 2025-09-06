import LanguageSelector from "./LanguageSelector";

export default function Footer() {
  return (
    <div className="flex flex-col h-screen *:mb-10">
      <div className="flex">
        <div className="flex-col flex w-1/3 ">
          <h3 className="text-2xl my-5 uppercase text-gray-800">mansar-makits</h3>
          <p>The infrastructure powering investment products. Enable your customers to invest in the stock market. Use the lemon.markets API to launch a customer-centric and compliant investment product.</p>
        </div>
        <div className="flex w-2/3 justify-between *:w-1/4 *:flex-col *:**:my-2 *:pl-8">
            <div className="flex">
                <h5 className="font-semibold">Use Cases</h5>
                <ul className="gap-2 text-gray-800 flex flex-col">
                    <li>Vertical Brokerage</li>
                    <li>Embedded Brokerage</li>
                    <li>Contextual Brokerage</li>
                </ul>
            </div>
            <div className="flex">
                <h5 className="font-semibold">Company</h5>
                <ul className="gap-2 text-gray-800 flex flex-col">
                    <li>Company</li>
                    <li>Careers</li>
                    <li>PR / Media</li>
                </ul>
            </div>
            <div className="flex">
                <h5 className="font-semibold">Developers</h5>
                <ul className="gap-2 text-gray-800 flex flex-col">
                    <li>Documentation</li>
                    <li>Status Page</li>
                </ul>
            </div>
            <div className="flex">
                <h5 className="font-semibold">Legal Pages</h5>
                <ul className="gap-2 text-gray-800 flex flex-col">
                    <li>Imprint</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Data protection for applicants</li>
                </ul>

            </div>
        </div>
      </div>
      <div className="flex h-30 items-center justify-between *:text-gray-800">
        <p>Linkedin</p>
        <LanguageSelector />
      </div>
      <div className="flex justify-between">
        <p>@lefilsdecathy</p>
        <div className="flex gap-4 ">
            <span className="hover:bg-blue-50 bg-gray-50 rounded-3xl py-0.5 px-4">Data privacy settings</span>
            <div className="flex relative border-2 border-green-500 rounded-3xl px-4 gap-3 items-center">
                <span className="bg-green-500 w-1 h-1"></span>
                <span className="text-green-400">all systems operational</span>
            </div>
        </div>
      </div>
    </div>
  );
}
