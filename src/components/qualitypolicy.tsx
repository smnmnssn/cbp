import Image from "next/image";
import { GiBurningDot } from "react-icons/gi";
import { IoShieldCheckmark } from "react-icons/io5";
import FadeInSection from "./useinview";

export default function QualityPolicy() {
  return (
    <FadeInSection>
    <div id="Kvalitetspolicy" className="p-5 m-3 mb-5 bg-white rounded-sm shadow-2xl">
      <IoShieldCheckmark className="text-red-500 size-20 mx-auto mb-3" />

      <h1 className="text-4xl font-bold text-center mb-5 text-red-500">Kvalitetspolicy</h1>

      <ul className="text-lg">
        <li className="mb-3 flex items-start">
          <GiBurningDot className="text-red-500 w-7 h-7 md:w-10 md:h-10 mr-5 mt-2 shrink-0" />
          <span>
            Vi ska vara en ledande part inom vårt nisch med skadereparationer.
          </span>
        </li>

        <li className="mb-3 flex items-start">
          <GiBurningDot className="text-red-500 w-7 h-7 md:w-10 md:h-10 mr-5 mt-3  shrink-0" />

          <span>
            Nöjda kunder skall uppnås genom kompetenta och ansvarskännande
            medarbetare.
          </span>
        </li>

        <li className="mb-3 flex items-start">
          <GiBurningDot className="text-red-500 w-7 h-7 md:w-10 md:h-10 mr-5 shrink-0" />

          <span>Kvalitén skall mätas mot fastställda mål.</span>
        </li>

        <li className="mb-3 flex items-start">
          <GiBurningDot className="text-red-500 w-7 h-7 md:w-10 md:h-10 mr-5 mt-3 shrink-0" />

          <span>
            Leverantörer skall involveras i syfte att säkerställa rätt material-kunskap och arbetsmetoder.
          </span>
        </li>

        <li className="mb-3 flex items-start">
          <GiBurningDot className="text-red-500 w-7 h-7 md:w-10 md:h-10 mr-5 shrink-0 " />

          <span>
            All verksamhet skall präglas av vilja till ständiga förbättringar
            och att nöjda kunder är vår bästa garanti för framtida utveckling.
          </span>
        </li>
      </ul>

      <div>
        <Image
          src="/smile.webp"
          width={500}
          height={500}
          alt="smiling employee"
          className="rounded-sm "
        />
      </div>
    </div>
    </FadeInSection>
  );
}
