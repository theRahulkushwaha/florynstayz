"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import MenuPanel from "@/components/navbar/MenuPanel"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/images/LogoPNG.png"
              alt="Floryn Stayz Logo"
              width={40}
              height={40}
              priority
            />
            <span className="text-lg font-semibold tracking-wide text-[#3a2e25] leading-none">
              FLORYN STAYZ
            </span>
          </Link>

          {/* Right Side */}
          <div className="flex items-center gap-6">

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 text-[#3a2e25] font-medium">

              <Link
                href="/why-floryn"
                className="hover:underline underline-offset-4 transition"
              >
                Why Floryn Stayz?
              </Link>

              <Link
                href="/owners"
                className="hover:underline underline-offset-4 transition"
              >
                Owners / Developers
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

            {/* Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition"
            >
              {menuOpen ? (
                <X size={26} color="#3a2e25" />
              ) : (
                <Menu size={26} color="#3a2e25" />
              )}
            </button>

          </div>
        </div>
      </header>

      {/* Menu Component */}
      <MenuPanel menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
}
