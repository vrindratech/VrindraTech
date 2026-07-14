"use client";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,FaWhatsapp, FaCopy
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white ">

      {/* Top Footer */}

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Company */}

          <div>
             <h2 className="text-3xl font-bold text-orange-500">
            <img
            src="/images/whitelogo.png"
            alt="JupitoData"
            className="h-19 w-auto"
              />   
             </h2>


            <p className="text-gray-400 mt-6 leading-8">
              Delivering verified B2B contact data, lead generation,
              LinkedIn research and custom business intelligence
              solutions worldwide.
            </p>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Services
            </h3>

            <ul className="space-y-5">

  <li>
    <a href="#services" className="hover:text-orange-500 transition">
      Lead Generation
    </a>
  </li>

  <li>
    <a href="#services" className="hover:text-orange-500 transition">
      B2B Data Collection
    </a>
  </li>

  <li>
    <a href="#services" className="hover:text-orange-500 transition">
      Email List Building
    </a>
  </li>

  <li>
    <a href="#services" className="hover:text-orange-500 transition">
      LinkedIn Research
    </a>
  </li>

  <li>
    <a href="#services" className="hover:text-orange-500 transition">
      Data Enrichment
    </a>
  </li>

</ul>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-5">

  <li>
    <a href="#home" className="hover:text-orange-500 transition">
      Home
    </a>
  </li>

  <li>
    <a href="#about" className="hover:text-orange-500 transition">
      About Us
    </a>
  </li>

  <li>
    <a href="#services" className="hover:text-orange-500 transition">
      Services
    </a>
  </li>

  <li>
    <a href="#testimonials" className="hover:text-orange-500 transition">
      Testimonials
    </a>
  </li>

  <li>
    <a href="#contact" className="hover:text-orange-500 transition">
      Contact
    </a>
  </li>

  <li>
    <a href="/privacy-policy" className="hover:text-orange-500 transition">
      Privacy Policy
    </a>
  </li>

</ul>

          </div>

          {/* Contact */}

         <div>

  <h3 className="text-xl font-semibold mb-6">
    Contact
  </h3>

  <div className="space-y-5 text-gray-400">
 {/* Phone */}

    <div className="flex gap-3">

      <FaPhoneAlt className="text-orange-500 mt-1" />

      <a
        href="tel:+917990542781"
        className="hover:text-orange-500 transition"
      >
        +91 7990542781
      </a>

    </div>

    {/* Email */}
<div className="flex items-start gap-4">

  <FaEnvelope className="mt-1 text-2xl text-orange-500" />

  <div>

    <h4 className="font-semibold text-white">
      Email Us
    </h4>

    <p className="text-gray-400 hover:text-orange-500 transition">
      mitesh@jupitodata.com
    </p>

    <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">

      {/* Open Gmail */}

      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=mitesh@jupitodata.com&su=Business%20Enquiry"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-orange-500 hover:text-orange-400"
      >
        <FaEnvelope />
        Open Gmail
      </a>

      {/* Copy Email */}

      <button
        onClick={() => {
          navigator.clipboard.writeText("mitesh@jupitodata.com");
          alert("Email copied!");
        }}
        className="flex items-center gap-2 text-orange-500 hover:text-orange-400"
      >
        <FaCopy />
        Copy Email
      </button>

    </div>

    {/* WhatsApp */}

    <a
      href="https://wa.me/917990542781?text=Hi%20JupitoData,%20I%20am%20interested%20in%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 font-medium text-white transition hover:bg-green-600"
    >
      <FaWhatsapp />
      Chat on WhatsApp
    </a>

  </div>

</div>
{/* Location */}
  <div className="flex items-center gap-4">

    <FaMapMarkerAlt className="text-orange-500 text-2xl mt-1" />

    
      <a
        className="hover:text-orange-500 transition"
      >
        Ahmedabad, Gujarat
      </a>

  </div>

</div>
            {/* Social Icons */}

      <div className="flex gap-4 mt-8">

  <a
   // href="https://facebook.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 rounded-full bg-slate-800 hover:bg-slate-700 transition flex items-center justify-center"
  >
    <Image
      src="/images/facebook.svg"
      alt="Facebook"
      width={44}
      height={44}
    />
  </a>

  <a
    href="https://www.linkedin.com/company/jupitodata/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 rounded-full bg-slate-800 hover:bg-slate-700 transition flex items-center justify-center"
  >
    <img
      src="/images/linkedin.svg"
      alt="LinkedIn"
      width={44}
      height={44}
    />
  </a>

  <a
   // href="https://x.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 rounded-full bg-slate-800 hover:bg-slate-700 transition flex items-center justify-center"
  >
    <Image
      src="/images/x.jpg"
      alt="X"
      width={44}
      height={44}
    />
  </a>

  <a
  //  href="https://instagram.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 rounded-full bg-slate-800 hover:bg-slate-700 transition flex items-center justify-center"
  >
    <Image
      src="/images/instagram.svg"
      alt="Instagram"
      width={44}
      height={44}
    />
  </a>

</div>
          </div>

        </div>

      </div>

      {/* Bottom Footer */}

      <div className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500">

            © 2026 JupitoData. All Rights Reserved.

          </p>

          <div className="flex gap-8 mt-4 md:mt-0 text-gray-500">

            <Link
            href="/privacy-policy"
            className="hover:text-orange-500 transition"
            >
             Privacy Policy
            </Link>

           <Link href="/terms-and-conditions" className="hover:text-orange-500 transition">Terms & Conditions</Link>

          </div>

        </div>

      </div>

    </footer>
  );
}