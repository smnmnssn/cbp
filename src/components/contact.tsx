import { BsFillTelephoneFill } from "react-icons/bs";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import FadeInSection from "./useinview";

export default function Contact() {
  return (
    <FadeInSection>
    <div id="contact" className="scroll-mt-10 text-red-500 ">
      <div className="p-5 m-3 mb-5 bg-white rounded-sm shadow-2xl">
        <div className="">
          <div className="flex-col text-center">
            <FaClock className="text-red-500 size-10 mx-auto mb-3" />
            <ul className=" list-inside font-bold mb-5 text-xl">
              <li>Måndag 07-17 </li>
              <li>Tisdag 07-17</li>
              <li>Onsdag 07-17</li>
              <li>Torsdag 07-17 </li>
              <li>Fredag 07-15 </li>
            </ul>
          </div>
          <div className="flex-col text-center mb-5">
            <BsFillTelephoneFill className="text-red-500 size-10 mx-auto mb-3" />

            <p className="font-bold text-2xl">031-15 52 10</p>
          </div>
          <div className="flex-col text-center mb-5">
            <MdAlternateEmail className="text-red-500 size-10 mx-auto mb-3" />

            <p className="font-bold text-2xl"> info@cbp.se</p>
          </div>

          <div className="flex-col text-center mb-5 ">
            <FaMapMarkerAlt className="text-red-500 size-10 mx-auto mb-3" />
            <p className="font-bold mb-3 text-xl">
              Bangårdsvägen 8, 428 35 Kållered
            </p>
          </div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2136.859615167544!2d12.040233978003995!3d57.61686967383073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff1e2f2f3c93f%3A0x152472f2194bdc54!2sM%C3%B6lndals%20City%20Bil%20%26%20Pl%C3%A5t%20AB!5e0!3m2!1ssv!2sse!4v1743430390616!5m2!1ssv!2sse"
            width="600"
            height="450"
            loading="lazy"
            className="w-full"
          ></iframe>
        </div>
      </div>
    </div>
    </FadeInSection>
  );
}
