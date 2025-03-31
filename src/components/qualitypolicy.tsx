import Image from "next/image";

export default function QualityPolicy() {
  return (
    <div className="p-5 m-5 bg-white rounded-md shadow-2xl">
      <h1 className="text-3xl text-center mb-5">Kvalitetspolicy</h1>
      <div>
        <ul className="list-disc list-inside">
          <li>
            Vi ska vara en ledande part inom vårt nisch med skadereparationer.
          </li>
          <li>
            Nöjda kunder skall uppnås genom kompetenta och ansvarskännande
            medarbetare.
          </li>
          <li>Kvalitén skall mätas mot fastställda mål.</li>
          <li>
            Leverantörer skall involveras i syfte att säkerställa rätt
            materialkunskap och arbetsmetoder.{" "}
          </li>
          <li>
            All verksamhet skall präglas av vilja till ständiga förbättringar
            och att nöjda kunder är vår bästa garanti för framtida utveckling.{" "}
          </li>
        </ul>
      </div>
      <div>
        <Image src="/smile.webp" width={500} height={500} alt="smiling employee" className="rounded-xl mx-auto ">

        </Image>
      </div>
    </div>
  );
}
