"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

import {
  HiOutlineArrowRight,
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineMapPin,
} from "react-icons/hi2";

const services = [
  "Website Development",
  "Mobile App Development",
  "Custom Software",
  "UI / UX Design",
  "Digital Marketing",
  "Social Media Marketing",
];

const companyLinks = [
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    name: "Contact",
    href: "/#contact",
  },
  {
    name: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    name: "Terms & Conditions",
    href: "/terms-and-conditions",
  },
];

const socialLinks = [
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/vrindra-tech-80572b433/",
    color: "#0A66C2",
  },
  // {
  //   icon: FaInstagram,
  //   href: "#",
  //   color: "#E4405F",
  // },
  // {
  //   icon: FaFacebookF,6
  //   href: "#",
  //   color: "#1877F2",
  // },
  // {
  //   icon: FaYoutube,
  //   href: "#",
  //   color: "#FF0000",
  // },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/918878535837",
    color: "#25D366",
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-4 overflow-hidden bg-[#08111F] text-white">
      {/* Background Blur */}
      <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-indigo-500/10 blur-[170px]" />
      <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-violet-500/10 blur-[170px]" />

      <div className="relative mx-auto max-w-[1400px] px-6">
      
       

        {/* ================= GRID ================= */}

        <div className="mt-4 grid gap-16 lg:grid-cols-12">
          {/* Company */}

          <div className="lg:col-span-5">
            <Image
              src="/logo.png"
              alt="Vrindra Tech"
              width={260}
              height={160}
              priority
            />

            <p className="mt-6 max-w-md leading-8 text-slate-400">
              Building intelligent software, modern websites, scalable mobile
              applications and digital products for ambitious businesses.
            </p>

            <div className="mt-12">
              <div className="flex items-center gap-3">
                <div className="h-8 w-1 rounded-full bg-indigo-400" />

                <h3 className="text-2xl font-bold">
                  Follow Us
                </h3>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;

                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{
                        y: -6,
                        scale: 1.08,
                      }}
                      transition={{ duration: 0.25 }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = social.color;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#111C2F";
                      }}
                      className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#111C2F] transition-all duration-300"
                    >
                      <Icon className="text-2xl text-gray-300 transition duration-300 hover:text-white" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
                    {/* ================= SERVICES ================= */}

         <div className="lg:col-span-2">
  <div className="flex items-center gap-3">
    <div className="h-8 w-1 rounded-full bg-cyan-400" />

    <h3 className="text-xl font-bold">
      Services
    </h3>
  </div>

  <ul className="mt-8 space-y-4">
    {services.map((service) => (
      <li
        key={service}
        className="text-slate-400 transition-all duration-300 hover:pl-2 hover:text-indigo-400"
      >
        {service}
      </li>
    ))}
  </ul>
</div>

          {/* ================= COMPANY ================= */}

          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="h-8 w-1 rounded-full bg-indigo-500" />

              <h3 className="text-xl font-bold">
                Company
              </h3>
            </div>

            <ul className="mt-8 space-y-4">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group text-slate-400 transition-all duration-300 hover:pl-2 hover:text-indigo-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= CONTACT ================= */}

          <div className="lg:col-span-3">
            <div className="flex items-center gap-3">
              <div className="h-8 w-1 rounded-full bg-emerald-400" />

              <h3 className="text-xl font-bold">
                Get In Touch
              </h3>
            </div>

            <div className="mt-8 space-y-7">

              {/* Phone */}

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#111C2F] text-indigo-400">
                  <HiOutlinePhone className="text-xl" />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Phone
                  </p>

                  <a
                    href="tel:+918878535837"
                    className="mt-1 block text-slate-300 transition hover:text-indigo-400"
                  >
                    +91 8878535837
                  </a>
                </div>
              </div>

              {/* Email */}

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#111C2F] text-indigo-400">
                  <HiOutlineEnvelope className="text-xl" />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Email
                  </p>

                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=vrindratech@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-slate-300 transition hover:text-indigo-400"
                  >
                    vrindratech@gmail.com
                  </a>
                </div>
              </div>

              {/* Address */}

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#111C2F] text-indigo-400">
                  <HiOutlineMapPin className="text-xl" />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Location                  
                  </p>

                  <p className="mt-1 leading-7 text-slate-300">
                     <a
                    className="mt-1 block text-slate-300 transition hover:text-indigo-400"
                  >
                    Indore,
                    <br />
                    Madhya Pradesh,
                    <br />
                    India
                    </a>
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Divider */}

        <div className="mt-20 border-t border-slate-800" />
                {/* ================= Bottom ================= */}

        <div className="flex flex-col items-center justify-between gap-6 py-8 md:flex-row">

          <p className="text-center text-sm text-slate-500 md:text-left">
            © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-white">
              Vrindra Tech
            </span>
            . All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center gap-8">

            <Link
              href="/privacy-policy"
              className="text-sm text-slate-400 transition hover:text-indigo-400"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="text-sm text-slate-400 transition hover:text-indigo-400"
            >
              Terms & Conditions
            </Link>

            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="group flex items-center gap-2 text-sm font-semibold text-indigo-300 transition hover:text-white"
            >
              Back to Top

              <HiOutlineArrowRight className="-rotate-90 transition-transform duration-300 group-hover:-translate-y-1" />
            </button>

          </div>

        </div>

      </div>

    </footer>
  );
}