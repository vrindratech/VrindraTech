"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Footer from "@/components/Footer";

import {
  HiDatabase,
  HiUsers,
  HiMail,
  HiBriefcase,
  HiRefresh,
  HiOfficeBuilding,
} from "react-icons/hi";

const services = [
  {
    number: "01",
    icon: <HiDatabase />,
    title: "B2B Data Collection",
    heading: "Custom B2B Data — Built Around Your Exact Market",
    description:
      "Most businesses waste thousands on databases that sell the same recycled data to hundreds of competitors. We don't. Every dataset we build is researched fresh, verified by humans, and tailored specifically to your business. Nobody else gets the same list.",
  },

  {
    number: "02",
    icon: <HiUsers />,
    title: "Lead Generation",
    heading: "The Right Leads. The Right People. The Right Time.",
    description:
      "Generating leads is easy. Generating the RIGHT leads is where most businesses struggle. We identify decision-makers who actually match your offer so your sales team spends time closing, not chasing the wrong contacts.",
  },

  {
    number: "03",
    icon: <HiMail />,
    title: "Email List Building",
    heading: "Verified Emails That Land — Not Bounce",
    description:
      "A high bounce rate isn't a deliverability problem. It's a data problem. We build email lists that are verified before delivery so your campaigns reach real inboxes, not spam folders.",
  },

  {
    number: "04",
    icon: <HiBriefcase />,
    title: "LinkedIn Research",
    heading: "Find Decision-Makers Before Your Competitors Do",
    description:
      "LinkedIn has the data. Finding the RIGHT decision-maker still takes expertise. We profile key professionals across your target accounts with complete business context.",
  },

  {
    number: "05",
    icon: <HiRefresh />,
    title: "Data Enrichment",
    heading: "Your CRM is Costing You Money. We Can Fix That.",
    description:
      "On average, 30% of B2B data goes stale every year. We clean, verify and enrich your existing database so your CRM becomes a revenue asset instead of a liability.",
  },

  {
    number: "06",
    icon: <HiOfficeBuilding />,
    title: "Company Research",
    heading: "Know Everything Before the First Conversation",
    description:
      "We deliver detailed company intelligence so your sales and marketing teams walk into every conversation informed, prepared and confident.",
  },
];

export default function ServicesPage() {
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

      <section
        className="pt-36 pb-24"
        style={{
          backgroundColor: "#FFF9F5",
          backgroundImage: `
          linear-gradient(rgba(249,115,22,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(249,115,22,0.05) 1px, transparent 1px)
        `,
          backgroundSize: "40px 40px",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.08),transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-6">

          {/* Hero */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            className="text-center"
          >

            <span className="inline-flex rounded-full bg-orange-100 text-orange-600 px-5 py-2 text-sm font-semibold tracking-[0.25em] uppercase">

              Our Services

            </span>

            <h1 className="mt-8 text-6xl font-bold text-slate-900">

              Custom B2B
              <span className="block text-orange-500">
                Research Services
              </span>

            </h1>

            <p className="mt-8 max-w-3xl mx-auto text-lg leading-9 text-slate-600">

              Helping businesses connect with verified companies,
              decision-makers and market intelligence through
              custom research built around your Ideal Customer Profile.

            </p>

          </motion.div>

          <div className="mt-24 space-y-14">

            {/* SERVICES START HERE */}
            {services.map((service, index) => (

<motion.div
key={service.number}
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
className={`group overflow-hidden rounded-[36px] bg-white border border-orange-100 shadow-xl hover:shadow-[0_25px_70px_rgba(249,115,22,.18)] transition-all duration-500 ${
index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
}`}
>

<div className="grid lg:grid-cols-2 items-center">

{/* Illustration */}

<div className="relative p-12 flex justify-center">

<div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent"/>

<motion.div

animate={{
y:[0,-8,0]
}}

transition={{
repeat:Infinity,
duration:5
}}

className="relative w-80 h-80 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-[0_25px_80px_rgba(249,115,22,.25)]"

>

<div className="w-60 h-60 rounded-full bg-white flex items-center justify-center">

<div className="text-orange-500 text-8xl">

{service.icon}

</div>

</div>

</motion.div>

<div className="absolute bottom-14 left-10 rounded-2xl bg-white shadow-lg border border-orange-100 px-6 py-4">

<p className="text-3xl font-bold text-orange-500">

{service.number}

</p>

<p className="text-slate-500">

Service

</p>

</div>

</div>

{/* Content */}

<div className="p-12">

<span className="inline-flex rounded-full bg-orange-100 text-orange-600 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em]">

{service.title}

</span>

<h2 className="mt-8 text-5xl font-bold leading-tight text-slate-900">

{service.heading}

</h2>

<p className="mt-8 text-lg leading-9 text-slate-600">

{service.description}

</p>


{/* Buttons */}

<div className="flex flex-wrap gap-5 mt-12">

<Link
href="/#contact"
className="rounded-xl bg-orange-500 hover:bg-orange-600 transition text-white px-8 py-4 font-semibold"
>

Get Free Sample

</Link>

</div>

</div>

</div>

</motion.div>

))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section
        className="relative overflow-hidden py-24"
        style={{
          background:
            "linear-gradient(135deg,#08111F 0%,#14213D 100%)",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,.18),transparent_60%)]" />

        <div className="relative max-w-6xl mx-auto px-6 text-center">

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex rounded-full bg-orange-500/20 text-orange-300 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em]"
          >
            Ready To Grow?
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: .2 }}
            className="mt-8 text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Let's Build Your
            <span className="block text-orange-400">
              Next B2B Database
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: .4 }}
            className="mt-8 max-w-3xl mx-auto text-xl leading-9 text-gray-300"
          >
            Whether you need custom company databases,
            verified decision-makers,
            LinkedIn research,
            CRM enrichment or company intelligence,
            our research team delivers high-quality,
            human-verified datasets tailored to your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: .6 }}
            className="flex flex-wrap justify-center gap-5 mt-12"
          >

            <Link
              href="/#contact"
              className="rounded-full bg-orange-500 hover:bg-orange-600 transition text-white px-8 py-4 font-semibold"
            >
              Get Free Sample
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-white/20 hover:bg-white hover:text-[#08111F] transition text-white px-8 py-4 font-semibold"
            >
              Contact Us
            </Link>

          </motion.div>

        </div>
      </section>

      <Footer />

    </>
  );
}