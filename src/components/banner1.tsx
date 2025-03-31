import { Separator } from "@/components/ui/separator";
// import Image from "next/image";
import FadeInSection from "./useinview";

export default function Banner1() {
  return (
    <div id="wrapper" className="">
      <div className=" ">
        <FadeInSection>
          <div className="text-center flex flex-col items-center p-5 m-3 bg-white rounded-sm shadow-2xl">
            <h1 className="text-4xl md:text-5xl md:mt-10 font-bold text-red-500">
              Välkommen till Mölndals City Bil & Plåt
            </h1>
            <p className="mt-4 text-xl md:w-[40%] md:text-3xl  rounded-sm p-3 ">
              Vi är ett familjeföretag som i över 20 år har hjälpt tusentals
              nöjda kunder med alla typer av plåt-, lack- och plastreparationer.
            </p>{" "}
            <p className="text-xl md:mb-10 md:w-[40%] md:text-3xl rounded-sm p-3 ">
              Vi har avtal med alla större försäkringsbolag och kan därför ta
              emot i stort sett alla skador och kunder.
            </p>
          </div>
        </FadeInSection>
      </div>
      <Separator />
    </div>
  );
}
