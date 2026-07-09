"use client";

import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

import {
  FaShieldAlt,
  FaLock,
  FaCookieBite,
  FaDatabase,
  FaChevronRight,
} from "react-icons/fa";

export default function PrivacyPolicyPage() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">

  <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

    <div className="flex items-center gap-3">
                  <Link href="/" className="flex items-center gap-3">
  <img
    src="/images/logo.png"
    alt="JupitoData"
    className="h-19 w-auto cursor-pointer"
  />
</Link>
        </div>


    {/* Right Buttons */}

    <div className="flex items-center gap-4">

      {/* Back */}

      <Link
        href="/"
        className="group flex items-center gap-3 rounded-full border border-gray-300 px-6 py-3 font-medium text-gray-700 transition hover:border-orange-500 hover:bg-orange-50"
      >
        <FaArrowLeft className="transition group-hover:-translate-x-1" />

        Back to Home

      </Link>

      {/* CTA */}

      <Link
        href="/#contact"
        className="group flex items-center gap-3 rounded-full bg-orange-500 px-7 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-orange-600 hover:shadow-xl"
      >

        Get Free Data Sample

        <FaArrowRight className="transition group-hover:translate-x-1" />

      </Link>

    </div>

  </div>

</header>

      {/* HERO */}

      <section className="relative overflow-hidden bg-[#08111F] pt-40 pb-32">

        {/* Orange Glow */}

        <div className="absolute -top-40 -left-32 h-[500px] w-[500px] rounded-full bg-orange-500/20 blur-[160px]" />

        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-orange-400/10 blur-[170px]" />

        {/* Grid */}

        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:55px_55px]" />

        <div className="relative max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            className="text-center"
          >

            <span className="inline-flex items-center gap-3 rounded-full border border-orange-400/30 bg-orange-500/20 px-7 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-orange-300">

              <FaShieldAlt />

              Privacy Policy

            </span>

            <h1 className="mt-8 text-6xl md:text-7xl font-bold text-white leading-tight">

              Your Privacy.

              <br />

              <span className="text-orange-400">

                Our Responsibility.

              </span>

            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-300">

              We believe transparency builds trust.
              This Privacy Policy explains how JupitoData collects,
              stores and protects your personal information while
              providing world-class B2B data solutions.

            </p>

            <div className="mt-14 flex flex-wrap justify-center gap-6">

              <div className="rounded-2xl border border-white/10 bg-white/5 px-8 py-5 backdrop-blur-md">

                <h3 className="text-4xl font-bold text-orange-400">

                  100%

                </h3>

                <p className="mt-2 text-gray-300">

                  Secure Data

                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-8 py-5 backdrop-blur-md">

                <h3 className="text-4xl font-bold text-orange-400">

                  GDPR

                </h3>

                <p className="mt-2 text-gray-300">

                  Compliant

                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-8 py-5 backdrop-blur-md">

                <h3 className="text-4xl font-bold text-orange-400">

                  24/7

                </h3>

                <p className="mt-2 text-gray-300">

                  Protection

                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* Breadcrumb */}

      <section className="border-b bg-white">

        <div className="max-w-7xl mx-auto px-6 py-5">

          <div className="flex items-center gap-3 text-sm">

            <Link
              href="/"
              className="font-medium text-orange-500 hover:text-orange-600"
            >
              Home
            </Link>

            <FaChevronRight className="text-xs text-gray-400" />

            <span className="text-gray-500">

              Privacy Policy

            </span>

          </div>

        </div>

      </section>

      {/* MAIN */}

      <section className="bg-slate-50 py-24">

        <div className="max-w-5xl mx-auto px-6">

          <div className="mb-16 text-center">

            <span className="inline-block rounded-full bg-orange-100 px-6 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">

              Legal Information

            </span>

            <h2 className="mt-6 text-5xl font-bold text-slate-900">

              Privacy Matters

            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">

              This policy outlines what information we collect,
              how it is used, and the measures we take to keep
              your data safe.

            </p>

          </div>

          {/* CONTENT STARTS BELOW */}
          <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="space-y-8"
>

  {/* Card 1 */}

  <div className="rounded-3xl bg-white p-10 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">

    <div className="flex items-center gap-5 mb-6">

      <div className="h-16 w-16 rounded-2xl bg-orange-100 flex items-center justify-center">

        <FaDatabase className="text-3xl text-orange-500" />

      </div>

      <div>

        <p className="uppercase tracking-[0.3em] text-orange-500 text-xs font-semibold">

          Section 01

        </p>

        <h3 className="text-3xl font-bold text-slate-900">

          Information We Collect

        </h3>

      </div>

    </div>

    <p className="text-gray-600 leading-8">

      When you contact JupitoData or use our services,
      we may collect limited personal information - such as your name and business email address
      along with relevent business information solely to respond to your enquiry and provide our services.
      
    </p>

    <ul className="mt-8 space-y-4">

      {[
        "Full Name",
        "Business Email",
        "Company Name",
        "Phone Number",
        "Requested Service",
        "Project Details",
      ].map((item) => (

        <li
          key={item}
          className="flex items-center gap-3 text-gray-700"
        >

          <div className="h-3 w-3 rounded-full bg-orange-500"></div>

          {item}

        </li>

      ))}

    </ul>

  </div>

  {/* Card 2 */}

  <div className="rounded-3xl bg-white p-10 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">

    <div className="flex items-center gap-5 mb-6">

      <div className="h-16 w-16 rounded-2xl bg-orange-100 flex items-center justify-center">

        <FaShieldAlt className="text-3xl text-orange-500" />

      </div>

      <div>

        <p className="uppercase tracking-[0.3em] text-orange-500 text-xs font-semibold">

          Section 02

        </p>

        <h3 className="text-3xl font-bold text-slate-900">

          How We Use Your Information

        </h3>

      </div>

    </div>

    <div className="grid md:grid-cols-2 gap-5">

      {[
        "Respond to enquiries",
        "Provide quotations",
        "Deliver requested services",
        "Improve customer support",
        "Enhance website performance",
        "Maintain communication",
      ].map((item) => (

        <div
          key={item}
          className="rounded-2xl bg-orange-50 p-5 border border-orange-100"
        >

          <h4 className="font-semibold text-gray-800">

            {item}

          </h4>

        </div>

      ))}

    </div>

  </div>

  {/* Card 3 */}

  <div className="rounded-3xl bg-white p-10 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">

    <div className="flex items-center gap-5 mb-6">

      <div className="h-16 w-16 rounded-2xl bg-orange-100 flex items-center justify-center">

        <FaCookieBite className="text-3xl text-orange-500" />

      </div>

      <div>

        <p className="uppercase tracking-[0.3em] text-orange-500 text-xs font-semibold">

          Section 03

        </p>

        <h3 className="text-3xl font-bold text-slate-900">

          Cookies

        </h3>

      </div>

    </div>

    <p className="leading-8 text-gray-600">

      We use cookies and similar technologies to improve
      website performance, analyse visitor behaviour and
      personalize your browsing experience.

    </p>

  </div>

  {/* Card 4 */}

  <div className="rounded-3xl bg-white p-10 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">

    <div className="flex items-center gap-5 mb-6">

      <div className="h-16 w-16 rounded-2xl bg-orange-100 flex items-center justify-center">

        <FaLock className="text-3xl text-orange-500" />

      </div>

      <div>

        <p className="uppercase tracking-[0.3em] text-orange-500 text-xs font-semibold">

          Section 04

        </p>

        <h3 className="text-3xl font-bold text-slate-900">

          Data Security

        </h3>

      </div>

    </div>

    <p className="leading-8 text-gray-600">

      We implement appropriate technical and organisational
      security measures to safeguard your information from
      unauthorized access, misuse or disclosure.

    </p>

  </div>

</motion.div>
{/* Contact Card */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mt-16 rounded-3xl bg-gradient-to-r from-orange-500 to-orange-600 p-10 text-white shadow-2xl"
>

  <div className="flex items-center gap-5 mb-6">

    <div className="h-16 w-16 rounded-2xl bg-white/20 flex items-center justify-center">

      <FaShieldAlt className="text-3xl" />

    </div>

    <div>

      <p className="uppercase tracking-[0.3em] text-orange-100 text-xs font-semibold">
        Need Help?
      </p>

      <h3 className="text-3xl font-bold">
        Contact Our Team
      </h3>

    </div>

  </div>

  <p className="text-orange-100 leading-8">

    If you have any questions regarding this Privacy Policy
    or how your information is handled, please feel free to
    contact us anytime.

  </p>

  <div className="grid md:grid-cols-3 gap-6 mt-10">

    <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">

      <h4 className="font-semibold mb-2">

        Email

      </h4>

      <p className="text-orange-100 break-all">

       mitesh@jupitodata.com

      </p>

    </div>

    <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">

      <h4 className="font-semibold mb-2">

        Phone

      </h4>

      <p className="text-orange-100">

        +91 7990542781

      </p>

    </div>

    <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">

      <h4 className="font-semibold mb-2">

        Location

      </h4>

      <p className="text-orange-100">

        Ahmedabad, Gujarat

      </p>

    </div>

  </div>

</motion.div>

{/* CTA */}

<motion.div
  initial={{ opacity: 0, scale: .95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: .6 }}
  className="mt-16 rounded-[40px] bg-[#08111F] overflow-hidden relative p-14 text-center shadow-2xl"
>

  <div className="absolute -left-24 -top-20 h-80 w-80 rounded-full bg-orange-500/20 blur-[120px]" />

  <div className="absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-orange-400/10 blur-[150px]" />

  <div className="relative z-10">

    <span className="inline-block rounded-full bg-orange-500/20 border border-orange-400/30 px-6 py-2 uppercase tracking-[0.3em] text-orange-300 text-sm font-semibold">

      JupitoData

    </span>

    <h2 className="mt-8 text-5xl font-bold text-white">

      Thank You For Trusting Us

    </h2>

    <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-300">

      We are committed to protecting your privacy and
      delivering secure, transparent and reliable B2B
      data solutions.

    </p>

    <div className="mt-10 flex flex-wrap justify-center gap-5">

      <Link
        href="/"
        className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-orange-600"
      >
        ← Back to Home
      </Link>

      <Link
        href="/#contact"
        className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#08111F]"
      >
        Contact Us
      </Link>

    </div>

  </div>

</motion.div>

        </div>

      </section>

      <footer className="bg-[#08111F] text-white">

  <div className="max-w-7xl mx-auto px-6 py-16">

    <div className="flex flex-col items-center text-center">

      {/* Logo */}

      <Link
        href="/"
        className="text-3xl font-bold text-orange-500"
      >
        JupitoData
      </Link>

      <p className="mt-5 max-w-xl text-gray-400 leading-8">

        Helping businesses grow with verified B2B databases,
        lead generation and business intelligence solutions.

      </p>

      {/* Navigation */}

      <div className="mt-10 flex flex-wrap justify-center gap-8">

        <Link
          href="/"
          className="hover:text-orange-500 transition"
        >
          Home
        </Link>

        <Link
          href="/privacy-policy"
          className="text-orange-500 font-medium"
        >
          Privacy Policy
        </Link>

         <Link
            href="/terms-and-conditions"
            className="hover:text-orange-500 transition"
          >
            Terms & Conditions
          </Link>

        <Link
          href="/#contact"
          className="hover:text-orange-500 transition"
        >
          Contact Us
        </Link>

      </div>

      {/* Contact */}

      <div className="mt-10 flex flex-col md:flex-row items-center gap-8 text-gray-400">

        <a
          href="mailto:mitesh@jupitodata.com"
          className="hover:text-orange-500 transition"
        >
          📧 mitesh@jupitodata.com
        </a>

        <a
          href="tel:+917990542781"
          className="hover:text-orange-500 transition"
        >
          📞 +91 7990542781
        </a>

      </div>

    </div>

  </div>

  <div className="border-t border-white/10 py-6 text-center text-gray-500">

    © 2026 JupitoData. All Rights Reserved.

  </div>

</footer>

    </>

  );
}