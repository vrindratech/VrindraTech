"use client";

import { motion } from "framer-motion";

const countries = [
  { flag: "🇮🇳", name: "India" },
  { flag: "🇺🇸", name: "USA" },
  { flag: "🇬🇧", name: "United Kingdom" },
  { flag: "🇨🇦", name: "Canada" },
  { flag: "🇦🇺", name: "Australia" },
  { flag: "🇪🇺", name: "Europe" },
];

export default function Trusted() {
  return (
      <section
  className="relative overflow-hidden py-24"
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-orange-600">
            Global Presence
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
            Market We Serve
          </h2>
          <h2 className="mt-4 text-4xl lg:text-3xl font-bold text-orange-500">
            5+ Countries
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600 leading-8">
            We help businesses worldwide with verified B2B databases,
            lead generation, email discovery and custom market research.
          </p>
        </motion.div>

        <div className="mt-16 flex flex-wrap justify-center gap-6">
          {countries.map((country, index) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="flex items-center gap-4 bg-white border border-orange-100 rounded-full px-7 py-4 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <span className="text-3xl">{country.flag}</span>

              <span className="font-semibold text-slate-800">
                {country.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}