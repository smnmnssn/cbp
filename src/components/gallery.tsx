import Image from "next/image";
import { FaImage } from "react-icons/fa";
import FadeInSection from "./useinview";
export default function Gallery() {
  return (
    <FadeInSection>
      <div className="text-center flex flex-col items-center p-5 m-3 mb-5 bg-white rounded-sm shadow-2xl ">
        <FaImage className="text-red-500 size-13 mx-auto mb-3" />

        <h1 className="text-3xl font-bold text-center mb-5 text-red-500">
          Galleri
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 items-center justify-center">
          <Image
            src="/rainbow.jpg"
            width={500}
            height={500}
            alt="rainbow"
            className="rounded-xl mx-auto h-25 w-auto md:h-35 object-contain"
          ></Image>
          <Image
            src="/truck.webp"
            width={500}
            height={500}
            alt="Truck"
            className="rounded-xl mx-auto h-25 w-auto md:h-35 object-contain"
          ></Image>
          <Image
            src="/overview.webp"
            width={500}
            height={500}
            alt="Lansforsakringar"
            className="rounded-xl mx-auto h-25 w-auto md:h-35 object-contain"
          ></Image>
          <Image
            src="/overview1.jpg"
            width={500}
            height={500}
            alt="If"
            className="rounded-xl mx-auto h-25 w-auto md:h-35 object-contain"
          ></Image>
           <Image
            src="/spraying.webp"
            width={500}
            height={500}
            alt="Folksam"
            className="rounded-xl mx-auto h-25 w-auto md:h-35 object-contain"
          ></Image>
           <Image
            src="/spraying1.jpg"
            width={500}
            height={500}
            alt="Folksam"
            className="rounded-sm mx-auto h-22.5 w-auto md:h-35"
          ></Image>
          <Image
            src="/plastic.webp"
            width={500}
            height={500}
            alt="Folksam"
            className="rounded-xl mx-auto h-25 w-auto md:h-35 object-contain"
          ></Image>
          <Image
            src="/products.webp"
            width={500}
            height={500}
            alt="Folksam"
            className="rounded-xl mx-auto h-25 w-auto md:h-35 object-contain"
          ></Image>
          <Image
            src="/door.jpg"
            width={500}
            height={500}
            alt="Folksam"
            className="rounded-xl mx-auto h-25 w-auto md:h-35 object-contain"
          ></Image>
          <Image
            src="/door1.jpg"
            width={500}
            height={500}
            alt="Folksam"
            className="rounded-xl mx-auto h-25 w-auto md:h-35 object-contain"
          ></Image>
        </div>
      </div>
    </FadeInSection>
  );
}
