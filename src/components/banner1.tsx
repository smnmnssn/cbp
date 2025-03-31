import { Separator } from "@/components/ui/separator";
// import Image from "next/image";
import FadeInSection from "./useinview";

export default function Banner1() {
  return (
    <div id="wrapper" className="">
      <div className=" ">
        <FadeInSection>
          <div className="text-center flex flex-col items-center p-5 m-3 bg-white rounded-sm shadow-2xl ">
            <h1 className="text-4xl md:text-5xl font-bold text-red-500">
              Välkommen till Mölndals City Bil & Plåt
            </h1>
            <p className="mt-4 text-xl md:w-[40%] rounded-sm p-3 ">
              Vi är ett familjeföretag som i över 20 år har hjälpt tusentals
              nöjda kunder med alla typer av plåt-, lack- och plastreparationer.
            </p>{" "}
            <p className="text-xl md:w-[40%] rounded-sm p-3 ">
              Vi har avtal med alla större försäkringsbolag och kan därför ta
              emot i stort sett alla skador och kunder.
            </p>
            <div>
              {/* <Image
                src="/spraying.webp"
                width={500}
                height={500}
                alt="employee"
                className="rounded-sm mx-auto mt-5 mb-5 shadow-xl"
              ></Image>
              <p className="text-lg">
                Både plåt-plast och lackeringsverkstad i samma byggnad.
              </p>
              <Image
                src="/plastic.webp"
                width={500}
                height={500}
                alt="employee"
                className="rounded-sm mx-auto mt-5 mb-5 shadow-xl"
              ></Image>{" "}
              <Image
                src="/overview.webp"
                width={500}
                height={500}
                alt="employee"
                className="rounded-sm mx-auto mt-5 mb-5 shadow-xl"
              ></Image>
              <p className="text-lg">
                Vi använder endast de bästa produkterna på marknaden.
              </p>
              <Image
                src="/products.webp"
                width={500}
                height={500}
                alt="employee"
                className="rounded-sm mx-auto mt-5 mb-5 shadow-xl"
              ></Image> */}
              {/* <Image
                src="/overview.webp"
                width={500}
                height={500}
                alt="employee"
                className="rounded-xl mx-auto mt-5"
              ></Image>
              <Image
                src="/products.webp"
                width={500}
                height={500}
                alt="employee"
                className="rounded-xl mx-auto mt-5"
              ></Image> */}
            </div>
          </div>
        </FadeInSection>
      </div>
      <Separator />
    </div>
  );
}
