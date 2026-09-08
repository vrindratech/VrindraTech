"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },

  // Programs

  { label: "Portfolio", href: "/portfolio" },
  // { label: "Career", href: "#career" },
  //{ label: "Testimonials", href: "/testimonials" },
  //{ label: "Programs", href: "/training-internship" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-slate-950/95 backdrop-blur-xl shadow-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* =====================================================
            LOGO
        ===================================================== */}

        <Link href="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Company Logo"
            className="h-20 w-auto"
          />
        </Link>

        {/* =====================================================
            DESKTOP MENU
        ===================================================== */}

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-medium text-white transition hover:text-cyan-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* =====================================================
            CTA
        ===================================================== */}

        <div className="hidden lg:block">
          <Link
            href="/#contact"
            className="
              rounded-full
              bg-gradient-to-r
              from-indigo-600
              via-blue-500
              to-violet-500
              px-7
              py-3
              font-semibold
              text-white
              shadow-lg
              transition
              hover:shadow-xl
              hover:-translate-y-0.5
            "
          >
            Start Project
          </Link>
        </div>

        {/* =====================================================
            MOBILE MENU BUTTON
        ===================================================== */}

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="text-3xl text-white lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      {mobileOpen && (
        <div className="border-t border-white/10 bg-slate-950 lg:hidden">
          <div className="flex flex-col p-6">

            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="
                  border-b
                  border-white/10
                  py-4
                  text-white
                  transition
                  hover:text-cyan-300
                "
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile CTA */}

            <Link
              href="/#contact"
              onClick={() => setMobileOpen(false)}
              className="
                mt-6
                rounded-full
                bg-gradient-to-r
                from-indigo-600
                via-blue-500
                to-violet-500
                py-3
                text-center
                font-semibold
                text-white
                shadow-lg
                transition
                hover:shadow-xl
              "
            >
              Start Project
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}