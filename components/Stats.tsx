"use client";

import { motion } from "framer-motion";
import { FaUsers, FaGlobe, FaChartLine, FaSearch } from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers size={32} />,
    value: "5+",
    title: "Happy Clients",
  },
  {
    icon: <FaChartLine size={32} />,
    value: "Pinpoint",
    title: "Accuracy",
  },
    {
    icon: <FaGlobe size={32} />,
    value: "5+",
    title: "Countries Covered",
  },
  {
    icon: <FaSearch size={32} />,
    value: "100%",
    title: "Custom Research",
  },
];

export default function Stats() {
  return (
    <section className="pt-20 pb-10 bg-white">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">

        {stats.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            className="bg-white rounded-3xl shadow-xl p-8 text-center border"
          >
            <div className="text-orange-500 flex justify-center mb-5">
              {item.icon}
            </div>

            <h2 className="text-4xl text-gray-700 font-bold">
              {item.value}
            </h2>

            <p className="mt-2 text-gray-500">
              {item.title}
            </p>
          </motion.div>
        ))}

      </div>

    </section>
  );
}