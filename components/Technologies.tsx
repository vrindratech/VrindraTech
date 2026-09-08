"use client";

import { motion } from "framer-motion";

const technologies = [
  {
    name: "React",
    logo: "/images/icons/react.png",
  },
  {
    name: "Next.js",
    logo: "/images/icons/nextjs.png",
  },
  {
    name: "Java",
    logo: "/images/icons/java.png",
  },
  {
    name: "Spring Boot",
    logo: "/images/icons/springboot.png",
  },
  {
    name: "Flutter",
    logo: "/images/icons/flutter.png",
  },
  {
    name: "Node.js",
    logo: "/images/icons/node.png",
  },
  {
    name: "AWS",
    logo: "/images/icons/aws.png",
  },
  {
    name: "Docker",
    logo: "/images/icons/docker.png",
  },
  {
    name: "Figma",
    logo: "/images/icons/figma.png",
  },
];

export default function Technologies() {
  return (
    <section className="bg-white pt-20 pb-10">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center"
        >

          <span className="inline-flex rounded-full bg-cyan-50 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            Technologies
          </span>

          <h2 className="mt-5 text-5xl font-bold text-slate-900">
            Built With Modern Technologies
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-slate-500">
            We leverage industry-leading technologies and frameworks to build
            scalable, secure, and high-performance digital solutions tailored
            to your business.
          </p>

        </motion.div>

        {/* Technology Grid */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
          className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        >

          {technologies.map((tech, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="
              group
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-8
              text-center
              transition
              duration-300
              hover:border-cyan-200
              hover:shadow-[0_20px_50px_rgba(37,99,235,.12)]"
            >

              <img
                src={tech.logo}
                alt={tech.name}
                className="
                mx-auto
                h-16
                grayscale
                transition
                duration-300
                group-hover:grayscale-0"
              />

              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {tech.name}
              </h3>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  );
}