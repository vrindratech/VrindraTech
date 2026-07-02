"use client";

import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Services",
    href: "#services",
  },
  // {
  //   name: "Industries",
  //   href: "#industries",
  // },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">

        <div className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="JupitoData"
            className="h-19 w-auto"
          />
        </div>

        <nav className="hidden lg:flex gap-10 font-medium">

  {navLinks.map((item) => (

    <a
      key={item.name}
      href={item.href}
      className="text-gray-700 hover:text-orange-500 transition duration-300"
    >
      {item.name}
    </a>

  ))}

  </nav>

        <a
          href="#contact"
        className="hidden lg:flex items-center justify-center bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 rounded-full font-semibold"
          >
           Get Free Data Sample
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-3xl"
        >
          {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white px-6 pb-6 flex flex-col gap-5">
          {navLinks.map((item) => (

  <a
    key={item.name}
    href={item.href}
    onClick={() => setMenuOpen(false)}
    className="text-gray-700 hover:text-orange-500 transition"
  >
    {item.name}
  </a>

))}
          <a
  href="#contact"
  onClick={() => setMenuOpen(false)}
  className="bg-orange-500 text-white py-3 rounded-xl text-center font-semibold"
>
  Get Free Data Sample
</a>
        </div>
      )}
    </header>
  );
}