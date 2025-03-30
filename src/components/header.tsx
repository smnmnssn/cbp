"use client";
import { Menu } from "lucide-react";
import { useState } from "react";
import MobileMenu from "./mobilemenu";
import Link from "next/link";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div id="wrapper" className="border border-black">
      <div id="headercontainer" className="flex justify-between">
      <Link
        href="/"
      >
        <h1 className="text-red-600 font-bold text-2xl">
          Mölndals City<br/>Bil & Plåt
        </h1>
      </Link>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black  mr-5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <Menu /> : <Menu />}
        </button>
        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </div>
  );
}
