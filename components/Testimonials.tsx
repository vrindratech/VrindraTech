"use client";

import { motion } from "framer-motion";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Michael Johnson",
    company: "BrightPath Consulting",
    rating: 4.5,
    review:
      "JupitoData provided highly accurate B2B data that helped us improve our lead generation campaigns significantly.",
  },
  {
    name: "Sarah Williams",
    company: "Vertex Global",
    rating: 4,
    review:
      "Professional service, fast delivery and excellent data quality. Highly recommended.",
  },
  {
    name: "David Brown",
    company: "Growth Solutions",
    rating: 5,
    review:
      "Their research team delivered exactly what we needed. The database quality exceeded expectations.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-24 bg-white pt-20 pb-10"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <span className="inline-block rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-orange-600">
            Testimonials
          </span>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="rounded-3xl bg-white p-8 shadow-xl transition-all duration-300"
            >

              {/* Rating */}

              <div className="mb-5 flex gap-1 text-orange-500">

                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star}>
                    {item.rating >= star ? (
                      <FaStar />
                    ) : item.rating >= star - 0.5 ? (
                      <FaStarHalfAlt />
                    ) : (
                      <FaRegStar />
                    )}
                  </span>
                ))}

              </div>

              {/* Review */}

              <p className="leading-8 text-gray-600">
                "{item.review}"
              </p>

              {/* Client */}

              <div className="mt-8">

                <h4 className="text-xl font-bold text-orange-500">
                  {item.name}
                </h4>

                <p className="text-gray-500">
                  {item.company}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}