"use client";

import { motion } from "framer-motion";
import {
  FaClipboardList,
  FaSearch,
  FaCheckCircle,
  FaShieldAlt,
  FaPaperPlane,
} from "react-icons/fa";

const process = [
  {
    step: "01",
    icon: FaClipboardList,
    title: "Requirement",
    desc: "Understand your business goals and ideal customer profile.",
  },
  {
    step: "02",
    icon: FaSearch,
    title: "Research",
    desc: "Collect verified company and decision-maker information.",
  },
  {
    step: "03",
    icon: FaCheckCircle,
    title: "Verification",
    desc: "Validate emails, phone numbers and company details.",
  },
  {
    step: "04",
    icon: FaShieldAlt,
    title: "Quality Check",
    desc: "Perform multiple quality checks to ensure data accuracy.",
  },
  {
    step: "05",
    icon: FaPaperPlane,
    title: "Delivery",
    desc: "Deliver your database in Excel or CSV format on time.",
  },
];

export default function Process() {
  return (
    <section className="py-28 bg-slate-900 text-white pt-20 pb-10">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">

          <span className="uppercase tracking-[5px] text-orange-400 font-semibold">
            Our Process
          </span>

          <h2 className="text-5xl font-bold mt-4">
            How We Deliver Quality Data
          </h2>

          <p className="mt-6 text-slate-300 max-w-3xl mx-auto text-lg leading-8">
            Our streamlined workflow ensures every database is accurate,
            verified and delivered quickly to help your business grow.
          </p>

        </div>

        {/* Timeline */}

        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">

          {process.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="relative text-center group"
              >

                {/* Connector Line */}
                {index !== process.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-full h-1 bg-orange-500/30"></div>
                )}

                {/* Step Number */}
                <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold mx-auto mb-5 shadow-lg">
                  {item.step}
                </div>

                {/* Icon */}
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mx-auto shadow-xl group-hover:bg-orange-500 transition duration-300">
                  <Icon
                    size={34}
                    className="text-orange-500 group-hover:text-white transition duration-300"
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mt-8">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-slate-300 leading-7">
                  {item.desc}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}