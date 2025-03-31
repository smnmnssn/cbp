import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import FadeInSection from "./useinview";
export default function Banner1() {
  return (
    <div
      id="wrapper"
      className="w-full overflow-hidden flex flex-wrap justify-center items-center  md:gap-10"
    >
      <div className=" ">
        <FadeInSection>
          <div className="text-center flex flex-col items-center p-5 m-5 bg-white rounded-3xl shadow-2xl ">
            <h1 className="text-3xl md:text-5xl">
              Välkommen till Mölndal City Bil & Plåt
            </h1>
            <p className="mt-6 font-sans text-xl md:w-[40%]">
              Vi är ett familjeföretag som i över 20 år har hjälpt tusentals
              nöjda kunder med alla typer av plåt-, lack- och plastreparationer.
            </p>{" "}
            <div>
              <Image
                src="/spraying.webp"
                width={500}
                height={500}
                alt="employee"
                className="rounded-xl mx-auto mt-5"
              ></Image>
              <Image
                src="/plastic.webp"
                width={500}
                height={500}
                alt="employee"
                className="rounded-xl mx-auto mt-5"
              ></Image>{" "}
              <Image
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
              ></Image>
            </div>
          </div>
        </FadeInSection>
      </div>
      <Separator />
    </div>
  );
}
