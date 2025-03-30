import Link from "next/link";
import FadeInSection from "./useinview";

export default function HeroSection() {
  return (
    <div className="">
      <FadeInSection>
        <div
          className="w-full bg-cover bg-center h-[450px] md:h-[600px]"
          style={{
            backgroundImage: "url('/rainbow.jpg')",
          }}
        >
          <FadeInSection>
            <div className="text-black flex justify-center place-items-center text-center">
              <div className="w-xs md:w-xl md:text-xl mt-15 md:mt-50  flex flex-col items-center">
                <h2 className="mb-3 bg-slate-50 opacity-90 p-3  border font-sans italic font-bold">
                Mölndals City Bil & Plåt tar hand om alla typer av plåt-, lack- och plastreparationer
                </h2>
                <div className="flex flex-col w-[100px] items-center font-bold">
                  <Link href="/contact">
                    <button className="cursor-pointer bg-white w-fit p-3 pt-2 pb-2 mt-2">
                      KONTAKT
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </FadeInSection>
    </div>
  );
}
