"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 sm:px-12 py-6
      transition-all duration-500 backdrop-blur-md
      ${scrolled ? "bg-black/90 shadow-[0_4px_20px_rgba(0,0,0,0.6)]" : "bg-black/40"}`}
    >
      {/* Logo */}
      <div className="relative group">
        <h1 className="font-Vogue text-3xl sm:text-4xl tracking-widest text-white drop-shadow-lg">
          LA SUITE
          <div className="text-sm font-light tracking-widest opacity-80">
            by Night Fall
          </div>
        </h1>
        {/* Glow sutil debajo del logo */}
        <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-white/20 blur-md group-hover:bg-white/40 transition-all duration-300"></div>
      </div>

      {/* Links Desktop */}
      <ul className="hidden md:flex space-x-10 text-lg font-medium tracking-wide">
        {[
          { href: "/home", label: "Inicio" },
          { href: "/events", label: "Eventos" },
          { href: "/contact", label: "Contacto" },
        ].map((link, index) => (
          <li key={index}>
            <Link href={link.href} className="relative group">
              <span className="group-hover:text-gray-200 transition-colors">
                {link.label}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300 rounded-full"></span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Botón menú móvil */}
      <button

        className="flex md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Menú móvil */}
      <div
        className={`absolute top-full left-0 w-full bg-black/90  backdrop-blur-lg text-white flex flex-col items-center 
        space-y-8 py-10 z-40 shadow-[0_4px_20px_rgba(0,0,0,0.6)] transition-all duration-500 ease-in-out
        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"}`}
      >
        {[
          { href: "/home", label: "Inicio" },
          { href: "/events", label: "Eventos" },
          { href: "/contact", label: "Contacto" },
        ].map((link, index) => (
          <Link
            key={index}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-lg font-semibold hover:text-gray-200 transition-all"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
