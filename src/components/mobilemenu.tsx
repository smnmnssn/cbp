"use client"; // Ensures the component runs on the client side

import Image from "next/image";
import Link from "next/link"; // Import Next.js Link for navigation
import { usePathname } from "next/navigation"; // Get the current route
// Define the props for the MobileMenu component
interface MobileMenuProps {
  isOpen: boolean; // Controls whether the menu is visible
  onClose: () => void; // Function to close the menu
}

// Mobile navigation menu component
export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname(); // Get the current page path

  return (
    <div
      // Mobile menu container, sliding in when isOpen is true
      className={`fixed top-0 left-0 w-full h-full bg-white bg-opacity-95 z-50 
                flex flex-col items-center justify-center transition-transform duration-300 
                ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      {/* Close button (×) in the top-right corner */}
      <button
        className="absolute top-5 right-5 text-black text-6xl"
        onClick={onClose}
      >
        ×
      </button>

      {/* Logo section - clicking it closes the menu */}
      <Link
        href="/"
        onClick={onClose}
        className="flex flex-col items-center mb-8"
      >
        <h1 className="text-red-600 font-bold text-2xl underline">
          Mölndals City Bil & Plåt
        </h1>
      </Link>

      {/* Navigation links */}
      <nav className="flex flex-col gap-6 text-center">
        {["KONTAKT", "PARTNERS"].map((item) => {
          const linkPath = `/${item === "home" ? "" : item}`; // Set home to "/"
          const isActive = pathname === linkPath; // Check if the link is active

          return (
            <Link
              key={item} // Unique key for React list rendering
              href={linkPath} // Navigation path
              className={`text-black text-xl hover:text-gray-400 
                                ${
                                  isActive
                                    ? "font-bold border-b-2 border-black"
                                    : ""
                                }`}
              onClick={onClose} // Close the menu when a link is clicked
            >
              {item} {/* Display the menu item text */}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
