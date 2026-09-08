"use client";

import Link from "next/link";
import GradientBorder from "@/components/ui/GradientBorder";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  ArrowRight,
  ChevronDown,
  Heart,
  Box,
  Users,
  Trophy,
  Headphones,
  Computer,
} from "lucide-react";
import HeroArtwork from "./HeroArtwork";

/* =========================================================
   ANIMATIONS
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: 70,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

/* =========================================================
   HERO
========================================================= */

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f8faff]">

      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -left-40 -top-32 h-[720px] w-[720px] rounded-full bg-blue-400/10 blur-[180px]" />

        <div className="absolute right-[-180px] top-0 h-[700px] w-[700px] rounded-full bg-pink-300/20 blur-[180px]" />

        <div className="absolute bottom-[-260px] left-1/2 h-[800px] w-[900px] -translate-x-1/2 rounded-full bg-indigo-400/10 blur-[220px]" />

      </div>

      <div className="relative z-10">

       
        {/* ================= HERO ================= */}

        <div
          className="
            mx-auto
            grid
            max-w-[1500px]
            grid-cols-1
            xl:grid-cols-2
            items-center
            gap-8
            px-6
            xl:px-8
            pt-4
            pb-20
          "
        >
                    {/* ================= LEFT CONTENT ================= */}

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="max-w-[680px]"
          >
            {/* Badge */}

<GradientBorder className="rounded-[25px] p-[1px]">
  <motion.div
    variants={fadeUp}
    whileHover={{
      y: -3,
      scale: 1.02,
    }}
    className="
      relative
      inline-flex
      items-center
      gap-4
      rounded-[24px]
      bg-white
      px-6
      py-3
    "
  >
    <div
      className="
        flex
        h-8
        w-12
        items-center
        justify-center
        rounded-full
        bg-gradient-to-br
        from-indigo-500
        via-blue-500
        to-violet-500
        text-white
      "
    >
      <Computer size={20} />
    </div>

    <span className="text-lg font-semibold tracking-tight">
      <span className="text-slate-700">
        Delivering
      </span>{" "}

      <span className="bg-gradient-to-r from-indigo-600 via-blue-500 to-violet-500 bg-clip-text text-transparent">
        Future-Ready
      </span>{" "}

      <span className="text-slate-700">
        Solutions
      </span>
    </span>
  </motion.div>
</GradientBorder>
            {/* Heading */}

            <motion.h1
              variants={fadeUp}
              className="
                mt-12
                text-5xl
                md:text-6xl
                lg:text-7xl
                xl:text-[74px]
                font-black
                leading-tight
                leading-[1.1]
                tracking-[-2px]
                text-slate-900
              "
            >
              Transforming Ideas Into

              <br />
<span
  className="
    inline-block
    min-w-[700px]
    min-h-[95px]
    whitespace-nowrap
    bg-gradient-to-r
    from-indigo-600
    via-blue-500
    to-violet-500
    bg-clip-text
    text-transparent
  "
>
  <TypeAnimation
    sequence={[
      "Website Development",
      2000,
      "Mobile App Development",
      2000,
      "Custom Software",
      2000,
      "AI Solutions",
      2000,
    ]}
    speed={50}
    repeat={Infinity}
    cursor={false}
  />
</span>

              <br />

              For Modern Businesses
            </motion.h1>

            {/* Description */}

            <motion.p
              variants={fadeUp}
              className="
                mt-8
                max-w-[640px]
                text-lg
                md:text-xl
                xl:text-[23px]
                leading-9
                text-slate-600
              "
            >
              From websites and mobile apps to enterprise software and AI-powered solutions, we transform ideas into scalable digital products.
              <br />
              <br />
            </motion.p>

            {/* Buttons */}

            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-wrap gap-5"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  group
                  flex
                  h-16
                  items-center
                  gap-4
                  rounded-2xl
                  bg-gradient-to-r
                  from-indigo-600
                  via-blue-600
                  to-violet-500
                  px-8
                  text-lg
                  font-semibold
                  text-white
                  shadow-[0_18px_55px_rgba(79,70,229,.35)]
                "
              >
                Let's Build Together

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-1">

                  <ArrowRight size={20} />

                </span>
              </motion.button>
<GradientBorder>
              <motion.button
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  h-16
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white/80
                  px-10
                  text-lg
                  font-semibold
                  text-slate-800
                  backdrop-blur-xl
                  shadow-lg
                "
              >
                Explore Services
              </motion.button>
              </GradientBorder>
            </motion.div>

            {/* Highlights */}


          </motion.div>
                    {/* ================= RIGHT CONTENT ================= */}

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="show"
            className="relative flex items-center justify-end"
          >
            {/* Background Glow */}

            <div className="absolute h-[550px] w-[550px] rounded-full bg-blue-500/10 blur-[120px]" />

            <div className="absolute right-10 top-10 h-[180px] w-[180px] rounded-full bg-pink-400/20 blur-[80px]" />

            {/* Floating Artwork */}
                
            <motion.div
  animate={{
    y: [0, -15, 0],
    rotate: [0, 1, 0, -1, 0],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="relative translate-x-12 -translate-y-30"
>
  <HeroArtwork />
</motion.div>
            
          </motion.div>

        </div>
                {/* ================= STATS SECTION ================= */}

        <div className="mx-auto -mt-4 max-w-[1400px] px-6 xl:px-8 pb-4">

          <motion.div
          
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              grid
              grid-cols-2
              md:grid-cols-4
              overflow-hidden
              rounded-[32px]
              border
              border-white/60
              bg-white/60
              backdrop-blur-2xl
              shadow-[0_30px_80px_rgba(15,23,42,.08)]
            "
          >

            <StatCard
              icon={<Box size={28} />}
              title="4+"
              text="Projects Delivered"
            />

            <StatCard
              icon={<Users size={28} />}
              title="4+"
              text="Happy Clients"
            />

            <StatCard
              icon={<Trophy size={28} />}
              title="100%"
              text="Client Satisfaction"
            />

            <StatCard
              icon={<Headphones size={28} />}
              title="24/7"
              text="Technical Support"
            />

          </motion.div>

        </div>

      </div>

    </section>
  );
}

/* ==========================================================
   TYPES
========================================================== */

interface StatProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

/* ==========================================================
   STAT CARD
========================================================== */

function StatCard({
  icon,
  title,
  text,
}: StatProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.03,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        group
        relative
        flex
        items-center
        gap-8
        border-r
        border-slate-200/60
        px-10
        py-10
        last:border-r-0
      "
    >
      {/* Icon */}

      <div
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-br
          from-indigo-100
          via-blue-100
          to-violet-100
          text-indigo-600
          shadow-md
        "
      >
        {icon}
      </div>

      {/* Text */}

      <div>

        <h3
          className="
            text-3xl
            md:text-4xl
            font-black
            text-slate-900
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-2
            text-sm
            md:text-base
            text-slate-500
          "
        >
          {text}
        </p>

      </div>

      {/* Hover Effect */}
<div
  className="
    absolute
    inset-0
    opacity-0
    group-hover:opacity-100
    transition-all
    duration-500
    pointer-events-none
  "
  style={{
    background:
      "linear-gradient(135deg, rgba(9, 10, 85, 0.06) 0%, rgba(60, 7, 60, 0.04) 50%, rgba(40, 12, 106, 0.06) 100%)",
  }}
/>
    </motion.div>
  );
}