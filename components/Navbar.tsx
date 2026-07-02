"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  {
    name: "Home",
    href: "/#home",
  },
  {
    name: "About",
    href: "/#about",
  },
  {
    name: "Services",
    href: "/#services",
  },
  {
    name: "Testimonials",
    href: "/#testimonials",
  },
  {
    name: "Contact",
    href: "/#contact",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto h-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}

        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="JupitoData"
            width={180}
            height={60}
            priority
            className="h-12 md:h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden lg:flex items-center gap-10">

          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 font-medium hover:text-orange-500 transition duration-300"
            >
              {item.name}
            </Link>
          ))}

        </nav>

        {/* Desktop CTA */}

        <div className="hidden lg:block">
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-full bg-orange-500 hover:bg-orange-600 px-6 py-3 text-white font-semibold transition"
          >
            Get Free Data Sample
          </Link>
        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-3xl text-gray-800"
        >
          {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="bg-white border-t px-6 py-6 flex flex-col gap-5 shadow-lg">

          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 font-medium hover:text-orange-500 transition"
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-center font-semibold transition"
          >
            Get Free Data Sample
          </Link>

        </div>
      </div>
    </header>
  );
}