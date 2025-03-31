"use client";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./mobilemenu";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div id="wrapper" className="">
      <div id="headercontainer" className="flex justify-between">
        <div className=" rounded-sm m-5">
          <Link href="/">
            <Image
              src="/logo.svg"
              width={500}
              height={500}
              alt="logo"
              className="h-[150px] w-[150px] rounded-sm md:h-[300px] md:w-[300px]"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className=" text-red-500 mr-5 md:mr-20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <Menu /> : <Menu className="size-8 -mt-8 md:size-14"/>}
        </button>
        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </div>
  );
}
