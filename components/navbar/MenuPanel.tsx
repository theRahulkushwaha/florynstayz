"use client";

import Link from "next/link";
import { X } from "lucide-react";

type MenuPanelProps = {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
};

export default function MenuPanel({ menuOpen, setMenuOpen }: MenuPanelProps) {
  return (
    <>
      {/* SIDE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-[320px] bg-white shadow-2xl
        transform transition-transform duration-500 ease-out z-50
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="p-8 flex justify-between items-center border-b">
          <span className="text-lg font-semibold text-[#3a2e25]">
            Menu
          </span>

          <button onClick={() => setMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-6 px-8 py-10 text-[#3a2e25] font-medium text-lg">

          <Link href="/why-floryn" className="hover:text-amber-700 transition">
            Why Floryn Stayz
          </Link>

          <Link href="/owners" className="hover:text-amber-700 transition">
            Developers & Owners
          </Link>

          <Link href="/careers" className="hover:text-amber-700 transition">
            Careers
          </Link>

          <Link href="/loyalty" className="hover:text-amber-700 transition">
            Loyalty
          </Link>

          <Link href="/contact" className="hover:text-amber-700 transition">
            Contact
          </Link>

          <Link href="/press" className="hover:text-amber-700 transition">
            For the Press
          </Link>

          <Link href="/media" className="hover:text-amber-700 transition">
            In the Media
          </Link>

          <Link href="/about" className="hover:text-amber-700 transition">
            About Us
          </Link>

          <Link
                href="/login"
                className="border border-black rounded-md px-4 py-2 
                text-black transition duration-300 
                hover:bg-amber-700 hover:border-amber-700 hover:text-white"
              >
                Login / Join
              </Link>

        </nav>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition"
        />
      )}
    </>
  );
}
