"use client";

import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaHeartbeat,
  FaBullhorn,
  FaUserTie,
  FaBalanceScale,
  FaUniversity,
  FaNewspaper,
  FaGlobe,
} from "react-icons/fa";

const industries = [
  {
    icon: FaLaptopCode,
    title: "SaaS & Technology",
    desc: "Verified technology companies and software decision makers.",
  },
  {
    icon: FaBullhorn,
    title: "Digital Marketing",
    desc: "Agencies, advertisers and marketing professionals.",
  },
  {
    icon: FaHeartbeat,
    title: "Healthcare",
    desc: "Hospitals, clinics, pharmaceutical and healthcare companies.",
  },
  {
    icon: FaUserTie,
    title: "Staffing & Recruitment",
    desc: "Recruitment firms and HR professionals worldwide.",
  },
  {
    icon: FaBalanceScale,
    title: "Legal Services",
    desc: "Law firms, legal consultants and compliance companies.",
  },
  {
    icon: FaUniversity,
    title: "Finance",
    desc: "Banks, fintech, insurance and financial institutions.",
  },
  {
    icon: FaNewspaper,
    title: "Media & Publishing",
    desc: "Publishing houses, media agencies and news companies.",
  },
  {
    icon: FaGlobe,
    title: "Global Enterprises",
    desc: "Large organizations operating across multiple countries.",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="scroll-mt-24 py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
            Industries We Serve
          </span>

          <h2 className="text-5xl font-bold text-slate-900 mt-4">
            Trusted Across Multiple Industries
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg leading-8">
            We provide verified B2B databases and research solutions
            tailored to businesses across diverse industries.
          </p>

        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

          {industries.map((industry, index) => {

            const Icon = industry.icon;

            return (

              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="group rounded-3xl border border-gray-200 p-8 bg-white shadow-lg hover:shadow-2xl hover:border-orange-500 transition duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center mb-6 group-hover:bg-orange-500 transition">

                  <Icon
                    size={30}
                    className="text-orange-500 group-hover:text-white transition"
                  />

                </div>

                <h3 className="text-xl font-bold text-slate-900">

                  {industry.title}

                </h3>

                <p className="text-gray-600 mt-4 leading-7">

                  {industry.desc}

                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}