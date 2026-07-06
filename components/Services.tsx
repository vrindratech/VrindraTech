"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaDatabase,
  FaUsers,
  FaEnvelope,
  FaLinkedin,
  FaBroom,
  FaGlobe,
} from "react-icons/fa";

const services = [
  {
    icon: FaDatabase,
    title: "B2B Data Collection",
    description:
      "Verified company databases tailored to your ideal target audience for high-quality prospecting.",
  },
  {
    icon: FaUsers,
    title: "Lead Generation",
    description:
      "Generate qualified B2B leads that convert into valuable long-term customers.",
  },
  {
    icon: FaEnvelope,
    title: "Email List Building",
    description:
      "Accurate and verified email lists for successful outreach campaigns.",
  },
  {
    icon: FaLinkedin,
    title: "LinkedIn Research",
    description:
      "Find key decision-makers and build targeted prospect lists using LinkedIn.",
  },
  {
    icon: FaBroom,
    title: "Data Enrichment",
    description:
      "Clean, validate and enrich your existing business database for better results.",
  },
  {
    icon: FaGlobe,
    title: "Company Research",
    description:
      "Comprehensive company profiling, competitor analysis and market research.",
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-white pt-20 pb-10">
      
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">
          <span className="inline-block rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-orange-600">
            Our Services
          </span>

          <h2 className="text-5xl font-bold mt-4 text-slate-900">
            Business Data Solutions
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
            We provide premium B2B data intelligence services helping
            businesses generate more leads, improve outreach and
            accelerate sales growth.
          </p>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <motion.div
                key={index}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                transition={{
                  duration: .25,
                }}
                className="
                group
                bg-white
                rounded-3xl
                shadow-lg
                hover:shadow-2xl
                border
                border-gray-100
                hover:border-orange-500
                p-8
                transition-all
                duration-300
                cursor-pointer
                overflow-hidden
                relative
                "
              >

                {/* Orange Accent */}

                <div className="absolute top-0 left-0 w-full h-1 bg-orange-500"></div>

                {/* Icon */}

                <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center mb-6 group-hover:bg-orange-500 transition">

                  <Icon
                    size={30}
                    className="text-orange-500 group-hover:text-white transition"
                  />

                </div>

                {/* Title */}

                <h3 className="text-2xl font-bold text-slate-900 mb-5">

                  {service.title}

                </h3>

                {/* Description */}

                <p className="text-gray-600 leading-8">

                  {service.description}

                </p>

                {/* Button */}
                <div className="mt-8">

                 <Link
                 href="/services"
                 className="inline-flex items-center gap-2 text-orange-500 font-semibold group hover:text-orange-600 transition"
                  >
                 Learn More

                <span className="group-hover:translate-x-2 transition duration-300">
                  →
                 </span>
                </Link>
                  </div>
                <div className="mt-4">

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}