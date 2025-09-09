import Footer from "@/components/custom/Footer";
import GetInTouchBlock from "@/components/custom/GetInTouchBlock";

export default function page() {
    const Data = [
        "These terms of use are currently valid and were last updated on the 31st of March 2023",
        "LM makes information and data available on its website and gives customers and interested parties access to third-party websites through the use of links (hyperlinks). The information provided on this website is not intended for publication or distribution to any person or entity in any jurisdiction or country where such publication of information or distribution of products and services would be contrary to law or regulation on the grounds of the person's nationality, residence or otherwise. The use of the website by persons who are subject to such restrictions is prohibited.",
        "The content provided on this website should not be construed as an investment recommendation or solicitation of an offer to buy or sell of financial instruments. Facts and figures presented in connection with product information are provided for illustrative purposes only and are not indicative of future performance.",
        "LM provides information on this website on an 'as is' basis. Despite subjecting the content to careful checks, LM does not accept any liability or warrant that the information made available on its website is accurate, complete or up-to-date. The information, data as well as functions and features are provided and displayed solely for personal use. LM does not similarly accept any liability or warrant that the information, data, functions and features will be provided without any interruption or disruption. LM is only liable for wilful or grossly negligent conduct or in the case of mandatory statutory regulations.",
        "Where the website contains links to third-party websites, which may display content created by operators independent of LM, it is important to note that LM has not checked the content of these websites and cannot therefore accept any liability for such third-party content. This applies, in particular, to price-sensitive information provided in real time or with a time lag. Any opinions or recommendations provided on third-party websites reflect the opinion or recommendation of the relevant author at the time they were made and do not represent the opinion or recommendation of LM.",
        "Where the website of LM offers the option to participate in discussion forums and chats, LM hereby advises that any content and opinions shared by the users are not checked by LM, and therefore, LM does not accept any liability for such content. Users who take part in discussion forums and chats hereby undertake not to upload any content contrary to law or that is pornographic in nature or glorifies violence or to use any software that can harm other users or the LM, for example, through viruses. LM has the right to exclude users at any time and to remove individual content from discussion forums and chats where the behaviour of a user is contrary to the principles of reasonable behaviour or otherwise affects the legitimate interests of LM.",
        "LM reserves the right to change, suspend or close down the website, including any services, information, functions and features offered on the websites. LM, furthermore, reserves the right to limit the use of individual functions and features or services to limit and to restrict access to parts of the website without prior notice. Users of the website also hereby agree that LM may edit or remove published information and data at any time. The LM is under no obligation to maintain the content on its website.",
        "The content and structure of the website provided by LM are protected by copyright. The reproduction, modification and distribution of information or data, and in particular, the use of texts, text parts or images and audio recordings requires the prior consent of LM.",
        "The use of the website, information, data, images, and audio recordings provided by LM, as well as any act, omission or failure to act relating to the use of the websites is governed exclusively by the laws of the Federal Republic of Germany.",
    ]
  return (
    <div className="min-h-screen flex flex-col">
      <div className="h-[50vh] flex items-center mb-4">
        <h1 className="text-5xl my-auto">Terms of use</h1>
      </div>

      <h2 className="font-semibold text-3xl my-4">When using this website made available by lemon.markets (hereinafter referred to as LM) please adhere to the following rules (terms of use).</h2>

      {Data.map((el, index) => (
        <p key={index} className="my-4">{el}</p>
      ))}
    <GetInTouchBlock />

    <Footer />
    </div>
  );
}
