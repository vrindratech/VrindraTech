"use client";

import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function TermsConditionsPage() {
  return (
    <>
      {/* Header */}

      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b">

        <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
  <img
    src="/images/logo.png"
    alt="JupitoData"
    className="h-19 w-auto cursor-pointer"
  />
</Link>
        </div>

          {/* <Link href="/" className="text-3xl font-bold text-orange-500">
            JupitoData
          </Link> */}

          <div className="flex gap-4">

            <Link
        href="/"
        className="group flex items-center gap-3 rounded-full border border-gray-300 px-6 py-3 font-medium text-gray-700 transition hover:border-orange-500 hover:bg-orange-50"
      >
        <FaArrowLeft className="transition group-hover:-translate-x-1" />

        Back to Home

      </Link>

            <Link
              href="/#contact"
              className="flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-white hover:bg-orange-600 transition"
            >
              Get Free Data Sample
              <FaArrowRight />
            </Link>

          </div>

        </div>

      </header>

      {/* Hero */}

      <section className="pt-40 pb-24 bg-[#08111F] text-white text-center">

        <div className="max-w-4xl mx-auto px-6">

          <span className="text-orange-400 uppercase tracking-[0.3em] font-semibold">
            Legal
          </span>

          <h1 className="text-6xl font-bold mt-6">
            Terms & Conditions
          </h1>

          <p className="mt-6 text-gray-300 text-lg">
            Please read these terms carefully before using
            JupitoData's website and services.
          </p>

        </div>

      </section>

      {/* Content */}

      <section className="bg-slate-50 py-20">

        <div className="max-w-5xl mx-auto px-6 space-y-8">

          {[
            {
              title: "1. Acceptance of Terms",
              text: "By using our website, you agree to these Terms & Conditions.",
            },
            {
              title: "2. Services",
              text: "We provide B2B lead generation, data collection, LinkedIn research and custom business research services.",
            },
            {
              title: "3. User Responsibilities",
              text: "Users agree to provide accurate information and use our services legally.",
            },
            {
              title: "4. Intellectual Property",
              text: "All website content, branding and materials belong to JupitoData unless otherwise stated.",
            },
            {
              title: "5. Limitation of Liability",
              text: "JupitoData shall not be liable for indirect or consequential damages arising from use of our services.",
            },
            {
              title: "6. Governing Law",
              text: "These Terms are governed by the laws of India.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white p-8 shadow-lg border-l-4 border-orange-500"
            >
              <h2 className="text-2xl font-bold text-slate-900">
                {item.title}
              </h2>

              <p className="mt-4 text-gray-600 leading-8">
                {item.text}
              </p>
            </div>
          ))}

          {/* Contact */}

          <div className="rounded-3xl bg-orange-500 text-white p-10">

            <h2 className="text-3xl font-bold">
              Contact Us
            </h2>

            <p className="mt-4 text-orange-100">
              If you have any questions regarding these Terms &
              Conditions, please contact us.
            </p>

            <div className="mt-6 space-y-2">

              <p>📧 mitesh@jupitodata.com</p>

              <p>📞 +91 7990542781</p>

              <p>📍 Ahmedabad, Gujarat</p>

            </div>

          </div>

        </div>

      </section>

      {/* Minimal Footer */}

      <footer className="bg-[#08111F] text-center py-10 text-gray-400">

        <Link href="/" className="text-3xl font-bold text-orange-500">
          JupitoData
        </Link>

        <div className="mt-6 flex justify-center gap-8">

          <Link href="/">Home</Link>

          <Link href="/privacy-policy">Privacy Policy</Link>

          <Link
            href="/terms-and-conditions"
            className="text-orange-500"
          >
            Terms & Conditions
          </Link>

          <Link href="/#contact">
            Contact
          </Link>

        </div>

        <p className="mt-8">
          © 2026 JupitoData. All Rights Reserved.
        </p>

      </footer>
    </>
  );
}