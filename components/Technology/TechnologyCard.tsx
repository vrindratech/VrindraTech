"use client";

import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

interface Props {
  name: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

export default function TechnologyCard({
  name,
  description,
  icon: Icon,
  color,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-lg
        transition-all
        duration-500
        hover:border-blue-300
        hover:shadow-[0_25px_60px_rgba(37,99,235,.12)]
      "
    >

      {/* Theme Hover Overlay */}

      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition-all
          duration-500
          bg-gradient-to-br
          from-indigo-500/[0.03]
          via-blue-500/[0.02]
          to-violet-500/[0.03]
        "
      />

      {/* Reflection Sweep */}

      <div
        className="
          absolute
          inset-0
          overflow-hidden
          pointer-events-none
        "
      >
        <div
          className="
            absolute
            -left-32
            top-0
            h-full
            w-20
            -skew-x-12
            bg-gradient-to-r
            from-transparent
            via-white/70
            to-transparent
            opacity-0
            group-hover:opacity-100
            group-hover:translate-x-[340px]
            transition-all
            duration-1000
          "
        />
      </div>

      {/* Top Border */}

      <div
        className="
          absolute
          left-0
          top-0
          h-[3px]
          w-0
          bg-gradient-to-r
          from-indigo-600
          via-blue-500
          to-violet-500
          transition-all
          duration-500
          group-hover:w-full
        "
      />

      {/* Icon */}

      <motion.div
        whileHover={{
          rotate: 8,
          scale: 1.08,
        }}
        className="
          relative
          z-10
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-br
          from-indigo-50
          via-blue-50
          to-violet-50
          shadow-md
        "
      >
        <Icon className={`text-4xl ${color}`} />
      </motion.div>

      {/* Name */}

      <h3
        className="
          relative
          z-10
          mt-6
          text-xl
          font-bold
          text-slate-900
          transition-colors
          duration-300
          group-hover:text-indigo-600
        "
      >
        {name}
      </h3>

      {/* Description */}

      <p
        className="
          relative
          z-10
          mt-3
          text-sm
          leading-7
          text-slate-500
        "
      >
        {description}
      </p>

      {/* Learn More */}

      <div
        className="
          relative
          z-10
          mt-6
          inline-flex
          items-center
          gap-2
          text-sm
          font-semibold
          text-indigo-600
          opacity-0
          transition-all
          duration-300
          group-hover:gap-3
          group-hover:opacity-100
        "
      >
        Learn More

        <HiArrowRight />
      </div>

    </motion.div>
  );
}