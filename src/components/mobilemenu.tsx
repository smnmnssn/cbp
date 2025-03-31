"use client";

import Image from "next/image";

// Props för MobileMenu
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuItems = [
    { label: "Kontakt", path: "#Kontakt" },
    { label: "Kvalitetspolicy", path: "#Kvalitetspolicy" },
    { label: "Galleri", path: "#Galleri" },
    { label: "Partners", path: "#Partners" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-white bg-opacity-95 z-50 
                  flex flex-col items-center justify-center transition-transform duration-300 
                  ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      {/* Stäng-knapp */}
      <button
        className="absolute top-5 right-5 text-black text-6xl"
        onClick={onClose}
      >
        ×
      </button>

      {/* Logo (klick stänger meny och scrollar till toppen) */}
      <a
        href="#"
        onClick={onClose}
        className="flex flex-col items-center mb-8"
      >
        <Image
          src="/logo.svg"
          width={500}
          height={500}
          alt="logo"
          className="h-[150px] w-[150px] rounded-sm"
        />
      </a>

      {/* Menylänkar */}
      <nav className="flex flex-col gap-6 text-center">
        {menuItems.map(({ label, path }) => (
          <a
            key={label}
            href={path}
            onClick={onClose}
            className="text-black text-xl hover:text-gray-400"
          >
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
}
