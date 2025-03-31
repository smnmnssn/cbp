import { FaHandshake } from "react-icons/fa";
import FadeInSection from "./useinview";
import Image from "next/image";
export default function Partners() {
  return (
    <div
      id="wrapper"
      className=""
    >
      <div className=" ">
        <FadeInSection>
          <div id="Partners" className="text-center flex flex-col items-center p-5 m-3 mb-5 bg-white rounded-sm shadow-2xl ">
            <FaHandshake className="text-red-500 size-20 mx-auto mb-3" />
            <h1 className="text-4xl md:text-5xl font-bold text-red-500 mb-8">
              Partners
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 items-center justify-center">
              <Image
                src="/axaltalogo.png"
                width={500}
                height={500}
                alt="Axalta"
                className="rounded-sm mx-auto h-20 w-auto md:h-32 object-contain"
              ></Image>
              <Image
                src="/cromaxlogo.png"
                width={500}
                height={500}
                alt="Cromax"
                className="rounded-sm mx-auto h-24 w-auto md:h-32 object-contain"
              ></Image>
              <Image
                src="/lansfors.png"
                width={500}
                height={500}
                alt="Lansforsakringar"
                className="rounded-sm mx-auto h-24 w-auto md:h-32 object-contain"
              ></Image>
              <Image
                src="/if.png"
                width={500}
                height={500}
                alt="If"
                className="rounded-sm mx-auto h-24 w-auto md:h-32 object-contain"
              ></Image>
              <Image
                src="/folksam.webp"
                width={500}
                height={500}
                alt="Folksam"
                className="rounded-sm mx-auto h-24 w-auto md:h-32 object-contain"
              ></Image>
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
