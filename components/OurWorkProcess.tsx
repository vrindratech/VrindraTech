"use client";

import { motion } from "framer-motion";
import {
  Search,
  Map,
  Palette,
  Code2,
  ShieldCheck,
  Rocket,
  Headphones,
  ArrowUpRight,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "PROJECT ANALYSIS",
    tagline: "Define Business Goals & Project Requirements",
    icon: Search,
  },
  {
    number: "02",
    title: "PROJECT PLANNING",
    tagline: "Build a Clear Development Strategy & Roadmap",
    icon: Map,
  },
  {
    number: "03",
    title: "PROJECT UI/UX DESIGNING",
    tagline: "Create User-Centered UI/UX Designs & Prototypes",
    icon: Palette,
  },
  {
    number: "04",
    title: "PROJECT DEVELOPMENT",
    tagline: "Build Scalable Websites, Apps & Software Solutions",
    icon: Code2,
  },
  {
    number: "05",
    title: "PROJECT TESTING",
    tagline: "Ensure Quality, Performance & Security",
    icon: ShieldCheck,
  },
  {
    number: "06",
    title: "PROJECT DEPLOYMENT",
    tagline: "Deploy & Launch Your Digital Product Successfully",
    icon: Rocket,
  },
  {
    number: "07",
    title: "PROJECT SUPPORT",
    tagline: "Provide Ongoing Maintenance & Technical Support",
    icon: Headphones,
  },
];

export default function ProjectDevelopmentProcess() {
  return (
    <section
      id="project-development-process"
      aria-labelledby="project-development-process-title"
      className="relative overflow-hidden bg-[#070b18] py-24 text-white md:py-32"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />

        {/* Blue glow */}

        <div
          className="
            absolute
            -left-[250px]
            top-[10%]
            h-[600px]
            w-[600px]
            rounded-full
            bg-blue-600/10
            blur-[150px]
          "
        />

        {/* Violet glow */}

        <div
          className="
            absolute
            -right-[250px]
            bottom-[5%]
            h-[600px]
            w-[600px]
            rounded-full
            bg-violet-600/10
            blur-[160px]
          "
        />

        {/* Center glow */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[400px]
            w-[800px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-indigo-500/[0.05]
            blur-[150px]
          "
        />
      </div>

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div className="relative mx-auto max-w-[1500px] px-6 lg:px-10">

        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          {/* Left */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <div className="mb-6 flex items-center gap-4">

              <span className="text-xs font-bold uppercase tracking-[0.32em] text-blue-400">
                Project Development Process
              </span>

              <span className="h-px w-14 bg-gradient-to-r from-blue-500 to-transparent" />

            </div>

            <h2
              id="project-development-process-title"
              className="
                max-w-2xl
                text-4xl
                font-black
                leading-[0.95]
                tracking-[-0.05em]
                text-white
                md:text-5xl
                lg:text-6xl
              "
            >
              Our Project
              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-blue-400
                  via-indigo-400
                  to-violet-400
                  bg-clip-text
                  text-transparent
                "
              >
                Development Process
              </span>
            </h2>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="lg:max-w-2xl lg:justify-self-end"
          >
            <h3
              className="
                text-xl
                font-bold
                leading-8
                text-slate-200
                md:text-2xl
              "
            >
              From Strategy to Launch, We Build Digital Solutions That Drive
              Business Growth
            </h3>

            <p
              className="
                mt-4
                text-sm
                leading-7
                text-slate-400
                md:text-base
              "
            >
              Our end-to-end digital development process transforms business
              ideas into scalable websites, mobile applications, custom
              software, and AI-powered solutions.
            </p>
          </motion.div>

        </div>

        {/* ===================================================
            DESKTOP PROCESS
        =================================================== */}

        <div className="relative mt-28 hidden xl:block">

          {/* =================================================
              HORIZONTAL LINE
          ================================================= */}

          <div
            className="
              absolute
              left-[3.5%]
              right-[3.5%]
              top-1/2
              h-px
              -translate-y-1/2
              bg-gradient-to-r
              from-blue-500/10
              via-blue-400/50
              to-violet-500/10
            "
          />

          {/* Soft glow */}

          <div
            className="
              pointer-events-none
              absolute
              left-[3.5%]
              right-[3.5%]
              top-1/2
              h-10
              -translate-y-1/2
              rounded-full
              bg-blue-500/[0.08]
              blur-3xl
            "
          />

          {/* Animated beam */}

          <motion.div
            animate={{
              x: ["-20%", "750%"],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              left-0
              top-1/2
              z-10
              h-[3px]
              w-[12%]
              -translate-y-1/2
              rounded-full
              bg-gradient-to-r
              from-transparent
              via-blue-400
              to-transparent
              shadow-[0_0_18px_rgba(96,165,250,.8)]
            "
          />

          {/* =================================================
              PROCESS NODES
          ================================================= */}

          <div
            className="
              absolute
              left-[3.5%]
              right-[3.5%]
              top-1/2
              z-20
              flex
              -translate-y-1/2
              items-center
              justify-between
            "
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                animate={{
                  scale: [1, 1.12, 1],
                  opacity: [0.65, 1, 0.65],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.4,
                  ease: "easeInOut",
                }}
                className="
                  h-3
                  w-3
                  rounded-full
                  border
                  border-blue-300/40
                  bg-blue-400
                  shadow-[0_0_18px_rgba(96,165,250,.8)]
                "
              />
            ))}
          </div>

          {/* =================================================
              PROCESS CARDS
          ================================================= */}

          <div className="grid grid-cols-7 gap-4">

            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isTop = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{
                    opacity: 0,
                    y: isTop ? -25 : 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                  }}
                  className={`
                    relative
                    ${isTop ? "pb-[230px]" : "pt-[230px]"}
                  `}
                >

                  {/* =================================================
                      CARD
                  ================================================= */}

                  <motion.article
                    whileHover={{
                      y: isTop ? -8 : 8,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="
                      group
                      relative
                      flex
                      min-h-[330px]
                      flex-col
                      overflow-hidden
                      rounded-[26px]
                      border
                      border-white/[0.08]
                      bg-white/[0.045]
                      p-5
                      backdrop-blur-xl
                      shadow-[0_20px_60px_rgba(0,0,0,.15)]
                      transition-all
                      duration-500
                      hover:border-blue-400/20
                      hover:bg-white/[0.07]
                      hover:shadow-[0_25px_70px_rgba(37,99,235,.14)]
                    "
                  >

                    {/* Glow */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        -right-20
                        -top-20
                        h-40
                        w-40
                        rounded-full
                        bg-blue-500/15
                        opacity-0
                        blur-[65px]
                        transition
                        duration-500
                        group-hover:opacity-100
                      "
                    />

                    {/* Number */}

                    <div className="relative flex items-start justify-between">

                      <span
                        className="
                          bg-gradient-to-r
                          from-blue-400
                          to-violet-400
                          bg-clip-text
                          text-3xl
                          font-black
                          leading-none
                          tracking-[-0.06em]
                          text-transparent
                        "
                      >
                        {step.number}
                      </span>

                      <ArrowUpRight
                        size={17}
                        className="
                          text-slate-600
                          transition-all
                          duration-300
                          group-hover:-translate-y-1
                          group-hover:translate-x-1
                          group-hover:text-blue-400
                        "
                      />

                    </div>

                    {/* Icon */}

                    <div
                      className="
                        relative
                        mt-7
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/10
                        bg-white/[0.06]
                        text-blue-400
                        transition-all
                        duration-300
                        group-hover:border-blue-400/30
                        group-hover:bg-blue-500/10
                        group-hover:text-blue-300
                      "
                    >
                      <Icon
                        size={20}
                        strokeWidth={1.7}
                      />
                    </div>

                    {/* Title */}

                    <h3
                      className="
                        relative
                        mt-5
                        min-h-[48px]
                        text-[16px]
                        font-black
                        leading-6
                        tracking-tight
                        text-white
                      "
                    >
                      {step.title}
                    </h3>

                    {/* Tagline */}

                    <p
                      className="
                        relative
                        mt-3
                        text-[12px]
                        leading-5
                        text-slate-400
                      "
                    >
                      {step.tagline}
                    </p>

                    {/* Footer */}

                    <div className="relative mt-auto pt-6">

                      <div
                        className="
                          h-px
                          bg-gradient-to-r
                          from-white/10
                          via-white/5
                          to-transparent
                        "
                      />

                      <div className="mt-3 flex items-center justify-between">

                        <span
                          className="
                            text-[8px]
                            font-bold
                            uppercase
                            tracking-[0.2em]
                            text-slate-600
                            transition
                            group-hover:text-blue-400/60
                          "
                        >
                          Development Stage
                        </span>

                        <span className="text-[9px] font-bold text-slate-700">
                          {step.number}
                        </span>

                      </div>
                    </div>

                  </motion.article>

                  {/* =================================================
                      VERTICAL CONNECTOR
                  ================================================= */}

                  <div
                    className={`
                      pointer-events-none
                      absolute
                      left-1/2
                      z-10
                      w-px
                      -translate-x-1/2
                      bg-gradient-to-b
                      from-transparent
                      via-blue-400/45
                      to-transparent
                      ${
                        isTop
                          ? "bottom-0 h-[230px]"
                          : "top-0 h-[230px]"
                      }
                    `}
                  />

                </motion.div>
              );
            })}

          </div>
        </div>

        {/* ===================================================
            TABLET
        =================================================== */}

        <div className="mt-20 hidden md:block xl:hidden">

          <div
            className="
              overflow-x-auto
              pb-8
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            <div className="flex min-w-[1200px]">

              {processSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className="relative w-[170px] shrink-0"
                  >

                    {index < processSteps.length - 1 && (
                      <div
                        className="
                          absolute
                          left-[50px]
                          right-0
                          top-7
                          h-px
                          bg-gradient-to-r
                          from-blue-400/40
                          to-violet-400/20
                        "
                      />
                    )}

                    {/* Node */}

                    <div className="relative z-10 flex justify-center">

                      <div
                        className="
                          flex
                          h-14
                          w-14
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/10
                          bg-[#0b1020]
                          text-xs
                          font-black
                          text-blue-400
                          shadow-[0_0_25px_rgba(59,130,246,.15)]
                        "
                      >
                        {step.number}
                      </div>

                    </div>

                    {/* Card */}

                    <div
                      className="
                        mx-2
                        mt-8
                        flex
                        min-h-[280px]
                        flex-col
                        rounded-[24px]
                        border
                        border-white/[0.08]
                        bg-white/[0.045]
                        p-5
                        backdrop-blur-xl
                      "
                    >

                      <div
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-white/10
                          bg-white/[0.06]
                          text-blue-400
                        "
                      >
                        <Icon size={19} />
                      </div>

                      <h3 className="mt-5 text-sm font-black leading-5 text-white">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-xs leading-5 text-slate-400">
                        {step.tagline}
                      </p>

                      <div className="mt-auto pt-5">

                        <div className="h-px bg-white/10" />

                        <span className="mt-3 block text-[8px] font-bold uppercase tracking-[0.15em] text-slate-600">
                          Development Stage
                        </span>

                      </div>
                    </div>

                  </div>
                );
              })}

            </div>
          </div>
        </div>

        {/* ===================================================
            MOBILE
        =================================================== */}

        <div className="mt-20 md:hidden">

          <div className="relative">

            {/* Vertical line */}

            <div
              className="
                absolute
                bottom-8
                left-[27px]
                top-8
                w-px
                bg-gradient-to-b
                from-blue-500/10
                via-blue-400/50
                to-violet-500/10
              "
            />

            <div className="space-y-7">

              {processSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.article
                    key={step.number}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.15,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.05,
                    }}
                    className="relative flex gap-5"
                  >

                    {/* Node */}

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-14
                        w-14
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/10
                        bg-[#0b1020]
                        text-xs
                        font-black
                        text-blue-400
                        shadow-[0_0_25px_rgba(59,130,246,.15)]
                      "
                    >
                      {step.number}
                    </div>

                    {/* Card */}

                    <div
                      className="
                        flex
                        flex-1
                        min-h-[230px]
                        flex-col
                        rounded-[24px]
                        border
                        border-white/[0.08]
                        bg-white/[0.045]
                        p-6
                        backdrop-blur-xl
                      "
                    >

                      <div
                        className="
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-white/10
                          bg-white/[0.06]
                          text-blue-400
                        "
                      >
                        <Icon size={20} />
                      </div>

                      <h3 className="mt-5 text-lg font-black text-white">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {step.tagline}
                      </p>

                      <div className="mt-auto pt-5">

                        <div className="h-px bg-white/10" />

                        <span className="mt-3 block text-[9px] font-bold uppercase tracking-[0.18em] text-slate-600">
                          Development Stage
                        </span>

                      </div>

                    </div>
                  </motion.article>
                );
              })}

            </div>
          </div>
        </div>

        {/* ===================================================
            BOTTOM MESSAGE
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto mt-20 max-w-3xl text-center"
        >

          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400/60 md:text-xs">
            One Process. Every Possibility.
          </p>

          <p className="mt-5 text-base leading-7 text-slate-400 md:text-lg md:leading-8">
            Strategy, design and engineering working together to create
            digital products built for long-term growth.
          </p>

        </motion.div>

      </div>
    </section>
  );
}