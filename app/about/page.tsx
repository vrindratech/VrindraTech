"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaChevronRight } from "react-icons/fa";
import Footer from "@/components/Footer";

export default function AboutPage() {
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

              About JupitoData

            </span>

            <h1 className="mt-8 text-6xl md:text-7xl font-bold text-white leading-tight">

              Building Verified

              <br />

              <span className="text-orange-400">

                B2B Intelligence

              </span>

            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-300">

              We help businesses grow through custom B2B research,
              human-verified contact data and business intelligence
              built exclusively around your Ideal Customer Profile.

            </p>

            <div className="mt-14 flex flex-wrap justify-center gap-6">

              <div className="rounded-2xl border border-white/10 bg-white/5 px-8 py-5 backdrop-blur-md">

                <h3 className="text-4xl font-bold text-orange-400">

                  10+

                </h3>

                <p className="mt-2 text-gray-300">

                  Years Experience

                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-8 py-5 backdrop-blur-md">

                <h3 className="text-4xl font-bold text-orange-400">

                  100%

                </h3>

                <p className="mt-2 text-gray-300">

                  Human Verified

                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-8 py-5 backdrop-blur-md">

                <h3 className="text-4xl font-bold text-orange-400">

                  Custom

                </h3>

                <p className="mt-2 text-gray-300">

                  Built For You

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

              About Us

            </span>

          </div>

        </div>

      </section>

      {/* MAIN */}

     <section className="bg-slate-50 py-24">

       <div className="max-w-7xl mx-auto px-6">
        {/* ================= WHO WE ARE ================= */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="rounded-3xl bg-white shadow-lg border border-orange-100 p-10"
>
  <span className="inline-flex rounded-full bg-orange-100 text-orange-600 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em]">
    Who We Are
  </span>

  <h2 className="mt-6 text-4xl font-bold text-slate-900">
    Custom B2B Research Built Around Your Business
  </h2>

  <p className="mt-8 text-lg leading-9 text-slate-600">
    <strong>JupitoData is a Custom B2B Research Company</strong> delivering
    verified contact data built exclusively for your business.
  </p>

  <p className="mt-6 text-lg leading-9 text-slate-600">
    Founded by a demand generation and data intelligence professional with
    over <strong>10 years of hands-on experience</strong>, JupitoData was
    created to solve a problem that every sales team, startup founder and
    B2B agency faces every day—recycled, outdated and inaccurate contact
    data that wastes time, kills pipelines and burns marketing budgets.
  </p>

  <p className="mt-6 text-lg leading-9 text-slate-600">
    We are <strong>not a database.</strong> We are a
    <strong> custom research company.</strong> Every dataset we deliver is
    built fresh, verified by humans and tailored specifically to your Ideal
    Customer Profile (ICP). Nobody else receives the same list.
  </p>
</motion.div>

{/* ================= OUR STORY ================= */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="mt-16 rounded-3xl bg-white shadow-lg border border-orange-100 p-10"
>
  <span className="inline-flex rounded-full bg-orange-100 text-orange-600 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em]">
    Our Story
  </span>

  <h2 className="mt-6 text-4xl font-bold text-slate-900">
    Why JupitoData Was Founded
  </h2>

  <p className="mt-8 text-lg leading-9 text-slate-600">
    After more than <strong>10 years</strong> working in demand generation,
    web scraping and B2B data intelligence, our founder saw the same
    problem repeating itself across industries and markets.
  </p>

  <p className="mt-6 text-lg leading-9 text-slate-600">
    Sales teams were buying expensive subscriptions to Apollo, ZoomInfo and
    similar platforms only to receive the same recycled data as thousands
    of other companies. Bounce rates were high, decision-makers had
    changed roles, and the information was often months—or even years—out
    of date.
  </p>

  <p className="mt-6 text-lg leading-9 text-slate-600">
    Every competitor was contacting the exact same prospects at the exact
    same time.
  </p>

  <div className="mt-10 rounded-2xl bg-orange-50 border border-orange-200 p-8">

    <h3 className="text-2xl font-bold text-orange-600">
      The Result
    </h3>

    <div className="mt-6 grid md:grid-cols-3 gap-6">

      <div className="rounded-xl bg-white p-6 shadow">

        <h4 className="text-xl font-bold text-slate-900">
          Empty Pipelines
        </h4>

        <p className="mt-3 text-slate-600">
          Poor-quality data leads to fewer conversations and missed
          opportunities.
        </p>

      </div>

      <div className="rounded-xl bg-white p-6 shadow">

        <h4 className="text-xl font-bold text-slate-900">
          Wasted Hours
        </h4>

        <p className="mt-3 text-slate-600">
          Sales teams spend valuable time chasing outdated contacts.
        </p>

      </div>

      <div className="rounded-xl bg-white p-6 shadow">

        <h4 className="text-xl font-bold text-slate-900">
          Lost Revenue
        </h4>

        <p className="mt-3 text-slate-600">
          Poor data quality directly impacts business growth.
        </p>

      </div>

    </div>

  </div>

  <p className="mt-10 text-lg leading-9 text-slate-600">
    JupitoData was built to fix this problem by returning to what actually
    works:
  </p>

  <div className="mt-8 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 p-8 text-white">

    <h3 className="text-3xl font-bold">
      Fresh. Human Verified. Custom Built.
    </h3>

    <p className="mt-4 text-orange-100 leading-8">
      Every database is researched specifically for your target market,
      verified by experienced researchers and delivered exclusively to your
      business.
    </p>

  </div>

</motion.div>
{/* ================= THE PROBLEM WE SOLVE ================= */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="mt-16 rounded-3xl bg-white shadow-lg border border-orange-100 p-10"
>
  <span className="inline-flex rounded-full bg-orange-100 text-orange-600 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em]">
    The Problem We Solve
  </span>

  <h2 className="mt-6 text-4xl font-bold text-slate-900">
    AI Cannot Create Data.
    <span className="block text-orange-500">
      Humans Can.
    </span>
  </h2>

  <p className="mt-8 text-lg leading-9 text-slate-600">
    AI tools are trained on data that humans have researched, collected and
    uploaded into databases. When an AI platform provides a "verified"
    contact list, it is often redistributing the same data that thousands of
    companies already have access to.
  </p>

  <p className="mt-6 text-lg leading-9 text-slate-600">
    The same records. The same email addresses. The same outdated
    information.
  </p>

  <div className="mt-10 grid md:grid-cols-2 gap-6">

    <div className="rounded-2xl bg-orange-50 border border-orange-200 p-6">
      <h3 className="text-xl font-bold text-slate-900">
        Why Generic Databases Fail
      </h3>

      <ul className="mt-6 space-y-4 text-slate-600">
        <li>• 30% of B2B contact data becomes outdated every year</li>
        <li>• Average email bounce rates are between 40–60%</li>
        <li>• Your competitors contact the same prospects</li>
        <li>• Decision-makers change companies frequently</li>
      </ul>
    </div>

    <div className="rounded-2xl bg-orange-500 p-6 text-white">
      <h3 className="text-xl font-bold">
        How JupitoData Is Different
      </h3>

      <ul className="mt-6 space-y-4 text-orange-100">
        <li>✓ Fresh custom research</li>
        <li>✓ Human verified records</li>
        <li>✓ Built around your ICP</li>
        <li>✓ Never recycled or resold</li>
      </ul>
    </div>

  </div>

</motion.div>

{/* ================= STATS ================= */}

  <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="mt-16 rounded-3xl bg-white shadow-lg border border-orange-100 p-10"
>
<span className="inline-flex rounded-full bg-orange-100 text-orange-600 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em]">
    Our Commitments
  </span>
<div className="grid md:grid-cols-4 gap-6 mt-16">

  <div className="rounded-2xl bg-white p-8 shadow-lg border border-orange-100 text-center">
    <h3 className="text-3xl font-bold text-orange-500">High Accuracy</h3>
    <p className="mt-3 text-slate-600">We verify every contact before delivery. If a record does not meet our accuracy standard, it does not ship.</p>
  </div>

  <div className="rounded-2xl bg-white p-8 shadow-lg border border-orange-100 text-center">
    <h3 className="text-3xl font-bold text-orange-500">Fast Turnaround</h3>
    <p className="mt-3 text-slate-600">Fast turnaround without compromising quality. Most standard projects are delivered within 48 hours.</p>
  </div>

  <div className="rounded-2xl bg-white p-8 shadow-lg border border-orange-100 text-center">
    <h3 className="text-3xl font-bold text-orange-500">100% Custom</h3>
    <p className="mt-3 text-slate-600">No two clients receive the same dataset. Your data is built for your business and your business alone.</p>
  </div>

  <div className="rounded-2xl bg-white p-8 shadow-lg border border-orange-100 text-center">
    <h3 className="text-3xl font-bold text-orange-500">GDPR Compliant</h3>
    <p className="mt-3 text-slate-600">All data is collected from publicly available and ethically sourced channels in full compliance with data protection regulations.</p>
  </div>

</div>
<motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
  className="flex justify-center mt-16"
>
  <div className="relative w-full max-w-[700px] h-[600px]">

    {/* Top Left */}
    <div className="absolute top-0 left-0 w-[260px] rounded-3xl bg-white shadow-lg border border-gray-100 p-6">
      <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center text-2xl">
        🔎
      </div>

      <h3 className="mt-5 text-2xl font-bold text-slate-900">
        Human verified data
      </h3>

      <p className="mt-3 text-slate-600 leading-7">
        Every record is checked by a real researcher—not a bot.
        We verify every dataset before delivery.
      </p>
    </div>

    {/* Top Right */}
    <div className="absolute top-0 right-0 w-[260px] rounded-3xl bg-white shadow-lg border border-gray-100 p-6">
      <div className="w-14 h-14 rounded-xl bg-yellow-100 flex items-center justify-center text-2xl">
        ⏰
      </div>

      <h3 className="mt-5 text-2xl font-bold text-slate-900">
        Fast turnaround
      </h3>

      <p className="mt-3 text-slate-600 leading-7">
        Delivery timelines are confirmed after project scoping without compromising quality.
      </p>
    </div>

    {/* Center Circle */}
    <motion.div
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ repeat: Infinity, duration: 4 }}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
      w-44 h-44 rounded-full bg-gradient-to-br from-orange-500 to-orange-600
      shadow-[0_20px_50px_rgba(249,115,22,.30)]
      flex flex-col items-center justify-center"
    >
      <img
        src="/images/J.png"
        alt="logo"
        className="h-14 mb-3"
      />

      <h3 className="text-white text-3xl font-bold">
        JupitoData
      </h3>

      <p className="text-orange-100 text-center text-sm">
        Custom B2B Research
      </p>
    </motion.div>

    {/* Bottom Left */}
    <div className="absolute bottom-0 left-0 w-[260px] rounded-3xl bg-white shadow-lg border border-gray-100 p-6">
      <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center text-2xl">
        🛡️
      </div>

      <h3 className="mt-5 text-2xl font-bold text-slate-900">
        Quality guarantee
      </h3>

      <p className="mt-3 text-slate-600 leading-7">
        Every dataset passes multiple quality checks before reaching your team.
      </p>
    </div>

    {/* Bottom Right */}
    <div className="absolute bottom-0 right-0 w-[260px] rounded-3xl bg-white shadow-lg border border-gray-100 p-6">
      <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center text-2xl">
        ⚙️
      </div>

      <h3 className="mt-5 text-2xl font-bold text-slate-900">
        Tailored to your needs
      </h3>

      <p className="mt-3 text-slate-600 leading-7">
        Every dataset is custom-built around your Ideal Customer Profile (ICP).
      </p>
    </div>

  </div>
</motion.div>

</motion.div>

{/* ================= CTA ================= */}

<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="mt-20 rounded-[36px] bg-gradient-to-r from-[#08111F] to-[#14213D] p-12 text-center text-white"
>

  <h2 className="text-5xl font-bold">

    Ready to Build Your

    <span className="block text-orange-400">
      Custom B2B Database?
    </span>

  </h2>

  <p className="mt-8 max-w-3xl mx-auto text-lg leading-9 text-gray-300">

    Stop paying for data your competitors already have.
    Get a free sample dataset built around your exact ICP — verified, fresh, and ready to use.

  </p>

  <div className="mt-10 flex flex-wrap justify-center gap-5">

    <Link
      href="/#contact"
      className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
    >
      Get Free Data Sample
    </Link>

    <Link
      href="/services"
      className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#08111F]"
    >
      Explore Services
    </Link>

  </div>

</motion.div>
</div>

</section>

<Footer />

</>

);
}