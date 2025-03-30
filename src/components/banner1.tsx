import { Separator } from "@/components/ui/separator"
import FadeInSection from "./useinview";

export default function Banner1() {
  return (
    <div
      id="wrapper"
      className="w-full overflow-hidden flex flex-wrap justify-center items-center gap-4 p-4  md:gap-10"
    >
      <div className=" gap-2 ">
        <FadeInSection>
          <div className="mb-10 mt-10 text-center flex flex-col items-center ">
            <h1 className="text-3xl md:text-5xl">
              Välkommen till Mölndal City Bil & Plåt
            </h1>
            <p className="mt-6 font-sans text-xl md:w-[40%]">
            Du skall alltid vara nöjd med vårt arbete och våra priser. Vi vill att du skall känna kvalitet och bra service, vilket är vad vi erbjuder!            </p>
          </div>
        </FadeInSection>
      </div>
          <Separator />
    </div>
  );
}
