import { FaHandshake } from "react-icons/fa";
import FadeInSection from "./useinview";
import Image from "next/image";


export default function Partners() {
  const images = [
    "axaltalogo.png",
    "cromaxlogo.png",
    "lansfors.png",
    "if.png",
    "folksam.webp",
  ];

  return (
    <div
      id="wrapper"
      className=""
    >
      <div className=" ">
        <FadeInSection>
          <div id="Partners" className="text-center flex flex-col items-center p-5 m-3 mb-5 bg-white rounded-sm shadow-2xl ">
            <FaHandshake className="text-red-500 size-20 md:size-30 mx-auto mb-3" />
            <h1 className="text-4xl md:text-6xl font-bold text-red-500 mb-8 md:mb-15">
              Partners
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 items-center justify-center">
              {images.map((src, index) => ( 
                <Image src={`/${src}`} key={index} width={500} height={500} alt="Partner" className="rounded-sm mx-auto h-20 md:h-32 object-contain md:mb-15">
                </Image>
                 
              ))}
            
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
