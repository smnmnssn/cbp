import Image from "next/image";
import { GiBurningDot } from "react-icons/gi";
import { IoShieldCheckmark } from "react-icons/io5";
import FadeInSection from "./useinview";

export default function QualityPolicy() {
  return (
    <FadeInSection>
      <div
        id="Kvalitetspolicy"
        className="p-5 m-3 mb-5 bg-white rounded-sm shadow-2xl"
      >
        <IoShieldCheckmark className="text-red-500 size-20 md:size-30 mx-auto mb-3" />

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-5 text-red-500">
          Kvalitetspolicy
        </h1>

        <div className="md:mx-auto md:flex md:w-[80%] md:mb-10 ">
          <ul className="text-lg md:text-3xl md:mt-10 space-y-5">
            {[
              "Vi ska vara en ledande part inom vårt nisch med skadereparationer.",
              "Nöjda kunder skall uppnås genom kompetenta och ansvarskännande medarbetare.",
              "Kvalitén skall mätas mot fastställda mål.",
              "Leverantörer skall involveras i syfte att säkerställa rätt materialkunskap och arbetsmetoder.",
              "All verksamhet skall präglas av vilja till ständiga förbättringar och att nöjda kunder är vår bästa garanti för framtida utveckling.",
            ].map((text, index) => (
              <li key={index} className="flex items-start md:items-center">
                <GiBurningDot className="text-red-500 w-8 h-8 md:w-12 md:h-12 mr-4 shrink-0" />
                <span>{text}</span>
              </li>
            ))}
          </ul>

        
          <Image
            src="/smile.webp"
            width={500}
            height={500}
            alt="smiling employee"
            className="rounded-sm shadow-2xl mt-5 md:h-[300px] md:mt-10"
          />
        </div>
      </div>
    </FadeInSection>
  );
}
