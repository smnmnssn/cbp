import Image from "next/image";
import { FaImage } from "react-icons/fa";
import FadeInSection from "./useinview";

export default function Gallery() {
  const images = [
    "rainbow.jpg",
    "truck.webp",
    "overview.webp",
    "overview1.jpg",
    "spraying.webp",
    "spraying1.jpg",
    "plastic.webp",
    "products.webp",
    "door.jpg",
    "door1.jpg",
  ];

  return (
    <FadeInSection>
      <div
        id="Galleri"
        className="text-center flex flex-col items-center p-5 m-3 mb-5 bg-white rounded-sm shadow-2xl"
      >
        <FaImage className="text-red-500 size-20 md:size-30 mx-auto mb-3" />
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-5 md:mb-15 text-red-500">
          Galleri
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 md:w-[80%] gap-4 w-full">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative w-full aspect-[5/3] rounded-sm overflow-hidden shadow-md"
            >
              <Image
                src={`/${src}`}
                alt={`Galleri bild ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
}
