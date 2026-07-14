"use client";

import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaClock,
  FaShieldAlt,
  FaGlobe,
  FaHeadset,
  FaWallet,
} from "react-icons/fa";

const features = [
  {
    icon: FaCheckCircle,
    title: "Human Verified Data",
    desc: "Every contact is manually verified to ensure maximum accuracy.",
  },
  {
    icon: FaClock,
    title: "Fast Turnaround",
    desc: "Timeline confirmed based on project size.",
  },
  {
    icon: FaShieldAlt,
    title: "GDPR Compliant",
    desc: "Ethically sourced business information with privacy compliance.",
  },
  {
    icon: FaWallet,
    title: "Affordable Pricing",
    desc: "Flexible packages designed for startups and enterprises.",
  },
  {
    icon: FaGlobe,
    title: "Global Coverage",
    desc: "Access verified business data across India and worldwide.",
  },
  {
    icon: FaHeadset,
    title: "Dedicated Support",
    desc: "Our experts assist you throughout your data requirements.",
  },
];

export default function WhyChoose() {
  return (
<section
  className="relative overflow-hidden pt-20 pb-10"
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
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

           <span className="inline-block rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-orange-600">
            Why Choose Us
          </span>

          <h2 className="text-5xl font-bold mt-4 text-slate-900">
            Why Businesses Choose JupitoData
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
            Our commitment to quality, accuracy and customer satisfaction
            makes us a trusted partner for businesses looking to accelerate
            growth with reliable B2B data.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{ duration: .25 }}
                className="
                group
                relative
                overflow-hidden
                rounded-3xl
                bg-white
                shadow-lg
                hover:shadow-2xl
                border
                border-gray-100
                hover:border-orange-500
                p-8
                transition-all
                duration-300
                "
              >

                <div className="absolute top-0 left-0 h-1 w-full bg-orange-500"></div>

                <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center mb-6 group-hover:bg-orange-500 transition">

                  <Icon
                    size={30}
                    className="text-orange-500 group-hover:text-white transition"
                  />

                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">

                  {feature.title}

                </h3>

                <p className="text-gray-600 leading-8">

                  {feature.desc}

                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}