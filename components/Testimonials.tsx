"use client";

import { motion } from "framer-motion";
import { FaComments } from "react-icons/fa";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-24 bg-white pt-20 pb-20"
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-orange-600">
            Testimonials
          </span>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            What Our Clients Say
          </h2>

          <p className="mt-6 text-lg text-gray-500">
            Client testimonials will be published here soon.
          </p>
        </div>

        {/* Coming Soon Card */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-orange-100 bg-orange-50 p-16 text-center shadow-lg"
        >
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-md">
            <FaComments className="text-4xl text-orange-500" />
          </div>

          <h3 className="mt-8 text-3xl font-bold text-slate-900">
            Client Testimonials Coming Soon
          </h3>
        </motion.div>

      </div>
    </section>
  );
}