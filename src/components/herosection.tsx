import Link from "next/link";
import Header from "./header";
import FadeInSection from "./useinview";
export default function HeroSection() {
  return (
    <div className="">
      <FadeInSection>
        <div
          className="relative w-full bg-cover bg-center h-[450px] md:h-[800px]"
          style={{
            backgroundImage: "url('/bgstock.webp')",
          }}
        >
          {/* 🔵 Overlayen med färgton */}
          <div className="absolute inset-0 bg-blue-600/50 mix-blend-multiply z-0" />

          {/* 🚀 Lyft Header över overlay */}
          <div className="relative z-10">
            <Header />
          </div>

          {/* 🎯 Resten av innehållet */}
          <FadeInSection>
            <div className="relative text-white flex justify-center place-items-center text-center">
              <div className="w-xs  text-xl md:w-xl md:text-4xl flex flex-col items-center">
                <h2 className="mb-3 opacity-90 p-3 font-sans font-bold text-2xl md:text-5xl md:w-4xl">
                  Vi tar hand om alla typer av plåt-, lack- och plastreparationer
                </h2>

                <div className="flex flex-col w-[100px] items-center font-bold">
                  <Link href="#Kontakt">
                    <button className="cursor-pointer bg-red-500 w-fit px-4 pt-2.5 py-2 rounded-sm md:text-2xl md:mt-10">
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
