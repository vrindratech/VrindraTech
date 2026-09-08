"use client";

import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-[#F8FBFF] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">

            Featured Project

          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">

            Our Recent

            <span className="block bg-gradient-to-r from-indigo-600 via-blue-500 to-violet-500 bg-clip-text text-transparent">

              Success Story

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-600">

            A glimpse into one of our successfully delivered
            digital solutions built with modern technologies
            and business-focused design.

          </p>

        </motion.div>
        <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="mt-20 overflow-hidden rounded-[36px] bg-white shadow-xl lg:grid lg:grid-cols-2"
>

  {/* Left */}

  <div className="bg-slate-100">

    <img
      src="/images/projects/jupitodata.jpg"
      alt="JupitoData"
      className="h-full w-full object-cover"
    />

  </div>

  {/* Right */}

  <div className="p-12">

    <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600">
      B2B Data Platform
    </span>

    <h2 className="mt-6 text-4xl font-bold text-slate-900">
      JupitoData
    </h2>

    <p className="mt-6 leading-8 text-slate-600">

      JupitoData is a modern B2B lead generation
      platform developed to provide verified contact
      data, custom research services, and business
      intelligence solutions for companies worldwide.

    </p>

    {/* Tech */}

    <div className="mt-8 flex flex-wrap gap-3">

      <span className="rounded-full bg-slate-100 px-4 py-2">
        Next.js
      </span>

      <span className="rounded-full bg-slate-100 px-4 py-2">
        Tailwind CSS
      </span>

      <span className="rounded-full bg-slate-100 px-4 py-2">
        React
      </span>

    </div>

    <a
      href="https://jupitodata.com"
      target="_blank"
      className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-600 via-blue-500 to-violet-500 px-8 py-4 font-semibold text-white transition hover:shadow-lg"
    >
      View Website

      <HiArrowRight />

    </a>

  </div>

</motion.div>

      </div>
    </section>
  );
}