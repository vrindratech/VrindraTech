"use client";

import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaUsers,
  FaDatabase,
  FaChartLine,
  FaHeadset,
} from "react-icons/fa";

export default function Hero() { 
  return (
    <section id="home" className="scroll-mt-24 relative overflow-hidden bg-[#07111f] scroll-mt-24">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#07111f] via-[#0d1a30] to-[#d94f10]" />

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#ffffff 1px,transparent 1px),linear-gradient(to bottom,#ffffff 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-orange-500/20 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-[550px] w-[550px] rounded-full bg-orange-500/20 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24">

        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >

            {/* Badge */}

            <div className="inline-flex items-center gap-3 rounded-full border border-orange-400/20 bg-white/5 px-5 py-3 backdrop-blur-xl">

              <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />

              <span className="text-sm tracking-wider text-orange-300 uppercase">
                Verified B2B Contacts - Custom Research
              </span>

            </div>

            {/* Heading */}

            <h1 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05] text-white max-w-[700px]">

              Verified

              <span className="text-orange-500">
                {" "}Business Data
              </span>

              <br />

              That Accelerates

              <br />

              Sales Growth

            </h1>

            {/* Description */}

            <p className="mt-8 text-slate-300 text-xl leading-9 max-w-xl">

              Verified B2B contact data, lead generation,
              LinkedIn research, company profiling,
              email discovery and custom B2B
              research trusted by businesses worldwide.

            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">

  {/* Contact */}

  <a
    href="#contact"
    className="group flex items-center gap-3 rounded-full bg-orange-500 px-8 py-5 text-lg font-semibold text-white transition hover:scale-105 hover:bg-orange-600"
  >
    Get Free Data Sample

    <FaArrowRight className="transition group-hover:translate-x-1" />
  </a>

  {/* Services */}

  <a
    href="#services"
    className="rounded-full border border-white/20 px-8 py-5 text-lg text-white transition hover:bg-white hover:text-black"
  >
    Explore Services
  </a>

</div>
            {/* Trust */}

            <div className="grid grid-cols-2 gap-5 mt-14">

              <div className="flex items-center gap-3 text-white">

                <FaCheckCircle className="text-orange-500" />

                Human Verified Data

              </div>

              <div className="flex items-center gap-3 text-white">

                <FaCheckCircle className="text-orange-500" />

                GDPR Compliant

              </div>

              <div className="flex items-center gap-3 text-white">

                <FaCheckCircle className="text-orange-500" />

                Tailored to Your Requirement

              </div>

              <div className="flex items-center gap-3 text-white">

                <FaCheckCircle className="text-orange-500" />

                Built From Scratch

              </div>
              <div className="flex items-center gap-3 text-white">

                <FaCheckCircle className="text-orange-500" />

                Fast Turnaround Based on Project Size

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            className="relative hidden lg:flex justify-center"
          >

            {/* Floating Card */}

            <motion.div

              animate={{ y: [0,-10,0] }}

              transition={{ repeat: Infinity, duration: 4 }}

              className="absolute -left-20 top-32 bg-white rounded-3xl shadow-2xl px-8 py-6 z-20"

            >

              <h3 className="text-5xl font-bold text-orange-500">

                Human

              </h3>

              <p className="text-gray-600 mt-2">

                Verified Data

              </p>

            </motion.div>

            {/* Dashboard */}

            <div className="relative w-[480px] xl:w-[520px] rounded-[36px] border border-white/10 bg-white/10 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,.35)] overflow-hidden">

              {/* Header */}

              <div className="border-b border-white/10 px-8 py-6 flex justify-between items-center">

                <div>

                  <h2 className="text-white text-3xl font-bold">

                    Business Dashboard

                  </h2>

                  <p className="text-slate-400">

                    Live Analytics

                  </p>

                </div>

                <div className="flex gap-2">

                  <div className="h-3 w-3 rounded-full bg-red-400" />

                  <div className="h-3 w-3 rounded-full bg-yellow-400" />

                  <div className="h-3 w-3 rounded-full bg-green-400" />

                </div>

              </div>

              {/* Graph */}

              <div className="p-8">

                <div className="rounded-3xl border border-orange-500/20 bg-gradient-to-r from-orange-500/20 to-orange-600/5 p-8">

                  <div className="flex items-end gap-3 h-40">

                    {[35,65,50,90,70,110,95,130].map((h,i)=>(
                      <motion.div
                        key={i}
                        initial={{height:0}}
                        animate={{height:h}}
                        transition={{delay:i*0.1}}
                        className="flex-1 rounded-t-xl bg-orange-500"
                      />
                    ))}

                  </div>

                </div>
                                {/* KPI Cards */}

                <div className="grid grid-cols-2 gap-5 mt-6">

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                    <div className="flex items-center gap-4">

                      <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center">
                        <FaUsers className="text-white" />
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          5+
                        </h3>
                        <p className="text-slate-400 text-sm">
                          Happy Clients
                        </p>
                      </div>

                    </div>

                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                    <div className="flex items-center gap-4">

                      <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center">
                        <FaDatabase className="text-white" />
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          100%
                        </h3>
                        <p className="text-slate-400 text-sm">
                          Human Verified Data
                        </p>
                      </div>

                    </div>

                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                    <div className="flex items-center gap-4">

                      <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center">
                        <FaChartLine className="text-white" />
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          Fast
                        </h3>
                        <p className="text-slate-400 text-sm">
                          Turnaround
                        </p>
                      </div>

                    </div>

                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                    <div className="flex items-center gap-4">

                      <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center">
                        <FaHeadset className="text-white" />
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          24/7
                        </h3>
                        <p className="text-slate-400 text-sm">
                          Support
                        </p>
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* Floating Card */}

            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 6,
              }}
              className="absolute right-8 -top-14 rounded-3xl bg-white px-8 py-6 shadow-2xl"
            >

              <h3 className="text-4xl font-bold text-orange-500">
                5+
              </h3>

              <p className="mt-2 text-gray-600">
                Trusted Clients
              </p>

            </motion.div>

          </motion.div>

        </div>

      </div>

      {/* Bottom Blur */}

      <div className="absolute bottom-0 left-1/2 h-[250px] w-[900px] -translate-x-1/2 rounded-full bg-orange-500/20 blur-[120px]" />

    </section>
  );
}