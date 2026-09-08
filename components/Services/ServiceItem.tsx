"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function ServiceItem({
  icon: Icon,
  title,
  description,
  index,
}: ServiceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.08,
        duration: 0.6,
      }}
      className="group relative flex flex-col items-center text-center"
    >
      {/* Animated Timeline Dot */}
      <motion.div
        whileHover={{ scale: 1.4 }}
        className="
        absolute
        top-12
        hidden
        h-3
        w-3
        rounded-full
        bg-cyan-400
        shadow-[0_0_25px_rgba(34,211,238,.9)]
        lg:block
      "
      />

      {/* Hexagon */}
      <motion.div
        whileHover={{
          y: -8,
          scale: 1.05,
        }}
        transition={{
          duration: 0.35,
        }}
        className="relative"
      >
        {/* Glow */}

        <div
          className="
          absolute
          inset-0
          rounded-full
          bg-cyan-400/20
          blur-3xl
          opacity-0
          transition
          duration-500
          group-hover:opacity-100
        "
        />

        {/* Rotating Border */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
          absolute
          inset-0
          rounded-[24px]
        "
        >
          <div
            className="
            h-full
            w-full
            rounded-[24px]
            bg-gradient-to-r
            from-cyan-400/50
            via-violet-400/50
            to-cyan-400/50
            blur-sm
            opacity-0
            transition
            duration-500
            group-hover:opacity-100
          "
          />
        </motion.div>

        {/* Hexagon */}

        <div
          className="
          relative
          flex
          h-28
          w-28
          items-center
          justify-center
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
        "
          style={{
            clipPath:
              "polygon(25% 6.7%,75% 6.7%,100% 50%,75% 93.3%,25% 93.3%,0% 50%)",
          }}
        >
          {/* Inner Light */}

          <div
            className="
            absolute
            inset-0
            bg-gradient-to-br
            from-white/10
            via-transparent
            to-transparent
          "
          />

          <motion.div
            whileHover={{
              rotate: 8,
              scale: 1.15,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <Icon
              size={34}
              className="
              text-cyan-300
              drop-shadow-[0_0_10px_rgba(34,211,238,.7)]
            "
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Title */}

      <h3 className="mt-8 text-xl font-bold text-white transition group-hover:text-cyan-300">
        {title}
      </h3>

      {/* Description */}

      <p className="mt-4 max-w-[220px] text-sm leading-7 text-slate-400">
        {description}
      </p>
    </motion.div>
  );
}