"use client";

import { motion } from "framer-motion";
import TechnologyCard from "./TechnologyCard";

interface Technology {
  name: string;
  icon: React.ElementType;
  color: string;
  description: string;
}

interface Props {
  title: string;
  icon: string;
  technologies: Technology[];
}

export default function TechnologyCategory({
  title,
  icon,
  technologies,
}: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Category Header */}

      <div className="flex items-center gap-4 mb-10">

        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            from-blue-500
            via-cyan-500
            to-indigo-500
            text-3xl
            shadow-lg
          "
        >
          {icon}
        </div>

        <div className="flex-1">

          <h3 className="text-3xl font-bold text-slate-900">
            {title}
          </h3>

          <div
            className="
              mt-3
              h-1
              w-32
              rounded-full
              bg-gradient-to-r
              from-indigo-600
              via-blue-500
              to-violet-500
            "
          />

        </div>

      </div>

      {/* Technologies */}

      <div
        className="
          grid
          gap-6
          grid-cols-2
          sm:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
        "
      >

        {technologies.map((tech, index) => (

          <motion.div
            key={tech.name}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.05,
            }}
          >

            <TechnologyCard
              name={tech.name}
              icon={tech.icon}
              color={tech.color}
              description={tech.description}
            />

          </motion.div>

        ))}

      </div>

    </motion.section>
  );
}