"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  Play,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "JupitoData",
    category: "B2B Data & Lead Generation",
    description:
      "Business Outcomes - 🟢 Stronger Online Presence  🟢 Improved Customer Engagement 🟢 Better Lead Generation ",
    video: "/Projects/portfolio-preview.mp4",
    website: "https://www.jupitodata.com",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "SEO",
    ],
    number: "01",
    accent: "orange",
  },

  {
  id: 2,
  title: "Gupta Mobiles",
  category: "Business & E-Commerce",
  description:
    " 🟢 Development in Progress",
  video: "/Projects/portfoliogm.mp4",
  website: "https://www.guptamobiles.com",
  technologies: [
    "Next.js",
    "React",
    "UI/UX",
    "Responsive",
  ],
  number: "02",
  accent: "blue",
},
];

export default function OurWork() {
  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#F8FBFF]
        text-slate-900
      "
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
            opacity-[0.35]
            [background-image:linear-gradient(rgba(15,23,42,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,.035)_1px,transparent_1px)]
            [background-size:70px_70px]
          "
        />

        {/* Orange Glow */}

        <div
          className="
            absolute
            -left-52
            top-20
            h-[600px]
            w-[600px]
            rounded-full
            bg-orange-400/[0.08]
            blur-[160px]
          "
        />

        {/* Blue Glow */}

        <div
          className="
            absolute
            -right-52
            top-[30%]
            h-[650px]
            w-[650px]
            rounded-full
            bg-blue-400/[0.08]
            blur-[170px]
          "
        />

        {/* Bottom Glow */}

        <div
          className="
            absolute
            bottom-[-300px]
            left-1/2
            h-[600px]
            w-[900px]
            -translate-x-1/2
            rounded-full
            bg-indigo-400/[0.05]
            blur-[180px]
          "
        />
      </div>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
  className="
    relative
    px-6
    pb-4
    pt-4
    sm:pb-5
    sm:pt-44
  "
>
        <div className="mx-auto max-w-5xl text-center">

          {/* Eyebrow */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              mb-6
              flex
              items-center
              justify-center
              gap-3
            "
          >
           
           <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-indigo-200
              bg-indigo-50
              px-5
              py-2
              text-xs
              font-bold
              uppercase
              tracking-[0.2em]
              text-indigo-600
              sm:text-sm
            "
          >
            OUR WORK
          </span>

            
          </motion.div>

          {/* Heading */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="
              text-4xl
              font-black
              leading-[1.05]
              tracking-[-0.045em]
              text-slate-950
              sm:text-6xl
              lg:text-7xl
            "
          >
            Digital Solutions

            <span
              className="
                block
                bg-gradient-to-r
                from-indigo-500
                via-indigo-600
                to-amber-500
                bg-clip-text
                text-transparent
              "
            >
              Built to Perform.
            </span>
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
            className="
              mx-auto
              mt-2
              max-w-2xl
              text-base
              leading-8
              text-slate-500
              sm:text-lg
            "
          >
            Explore our portfolio of high-performance websites, custom software, mobile applications and AI-powered digital solutions built to help businesses grow, scale and succeed online.
          </motion.p>
        </div>
      </section>

      {/* =====================================================
          PROJECT SHOWCASE
      ===================================================== */}

      <section
  className="
    relative
    -mt-16
    px-2
    pb-2
    sm:-mt-32
    sm:pb-2
  "
>
        <div className="mx-auto max-w-7xl">

          <div
            className="
              grid
              gap-8
              lg:grid-cols-2
            "
          >
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{
                  opacity: 0,
                  y: 45,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                className="group relative"
              >

                {/* =================================================
                    OUTER PREMIUM GLOW
                ================================================= */}

                <div
                  className={`
                    pointer-events-none
                    absolute
                    -inset-[2px]
                    rounded-[34px]
                    opacity-0
                    blur-xl
                    transition
                    duration-500
                    group-hover:opacity-100

                    ${
                      project.accent === "orange"
                        ? "bg-orange-500/20"
                        : "bg-blue-500/20"
                    }
                  `}
                />

                {/* =================================================
                    MAIN CARD
                ================================================= */}

                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[32px]
                    border
                    border-slate-200
                    bg-white
                    p-3
                    shadow-[0_20px_70px_rgba(15,23,42,0.07)]
                    transition-all
                    duration-500
                    group-hover:-translate-y-2
                    group-hover:border-slate-300
                    group-hover:shadow-[0_30px_90px_rgba(15,23,42,0.12)]
                    sm:p-4
                  "
                >

                  {/* =================================================
                      VIDEO FRAME
                  ================================================= */}

                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-[24px]
                      bg-slate-950
                    "
                  >

                    {/* Premium Inner Border */}

                    <div
                      className={`
                        pointer-events-none
                        absolute
                        inset-0
                        z-20
                        rounded-[24px]
                        border

                        ${
                          project.accent === "orange"
                            ? "border-orange-400/30"
                            : "border-blue-400/30"
                        }
                      `}
                    />

                    {/* Video */}

                  <video
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  className="
    block
    h-[380px]
    w-full
    object-cover
    sm:h-[430px]
    lg:h-[460px]
  "
>
  <source
    src={project.video}
    type="video/mp4"
  />
</video>
                    </div>

                  {/* =================================================
                      PROJECT INFORMATION
                  ================================================= */}

                  <div
                    className="
                      px-2
                      pb-2
                      pt-6
                      sm:px-3
                      sm:pt-7
                    "
                  >

                    {/* Category */}

                    <div
                      className="
                        flex
                        items-center
                        gap-2
                      "
                    >
                      <Sparkles
                        size={14}
                        className={
                          project.accent === "orange"
                            ? "text-orange-500"
                            : "text-blue-500"
                        }
                      />

                      <span
                        className={`
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.2em]

                          ${
                            project.accent === "orange"
                              ? "text-orange-600"
                              : "text-blue-600"
                          }
                        `}
                      >
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}

                    <div
                      className="
                        mt-3
                        flex
                        items-start
                        justify-between
                        gap-4
                      "
                    >
                      <h2
                        className="
                          text-3xl
                          font-black
                          tracking-[-0.035em]
                          text-slate-950
                          sm:text-4xl
                        "
                      >
                        {project.title}
                      </h2>

                      {/* Small decorative icon */}

                      <div
                        className="
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-slate-200
                          bg-slate-50
                          transition
                          duration-300
                          group-hover:border-orange-200
                          group-hover:bg-orange-50
                        "
                      >
                        <ArrowUpRight
                          size={18}
                          className="
                            text-slate-500
                            transition
                            duration-300
                            group-hover:-translate-y-0.5
                            group-hover:translate-x-0.5
                            group-hover:text-orange-500
                          "
                        />
                      </div>
                    </div>

                    {/* Description */}

                    <p
                      className="
                        mt-4
                        max-w-xl
                        text-sm
                        leading-7
                        text-slate-500
                        sm:text-base
                      "
                    >
                      {project.description}
                    </p>

                    {/* =================================================
                        TECHNOLOGIES
                    ================================================= */}

                    <div
                      className="
                        mt-5
                        flex
                        flex-wrap
                        gap-2
                      "
                    >
                      {project.technologies.map(
                        (technology) => (
                          <span
                            key={technology}
                            className="
                              rounded-full
                              border
                              border-slate-200
                              bg-slate-50
                              px-3
                              py-1.5
                              text-[10px]
                              font-semibold
                              text-slate-500
                              transition
                              duration-300
                              group-hover:border-slate-300
                            "
                          >
                            {technology}
                          </span>
                        )
                      )}
                    </div>

                    {/* =================================================
                        BOTTOM CTA
                    ================================================= */}

                    <div
                      className="
                        mt-4
                        flex
                        items-center
                        justify-between
                        border-t
                        border-slate-100
                        pt-5
                      "
                    >

                      <span
                        className="
                          text-xs
                          font-semibold
                          uppercase
                          tracking-[0.15em]
                          text-slate-400
                        "
                      >
                        Website Project
                      </span>

                      {/* Visit Website */}

                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          items-center
                          rounded-full
                          border
                          border-slate-200
                          bg-white
                          px-5
                          py-2.5
                          text-sm
                          font-bold
                          text-slate-900
                          shadow-sm
                          transition-all
                          duration-300
                          hover:-translate-y-0.5
                          hover:border-orange-300
                          hover:bg-orange-50
                          hover:text-orange-600
                          hover:shadow-md
                        "
                      >
                        Visit Website
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

    {/* =====================================================
    PREMIUM VRINDRA CTA
===================================================== */}

<section className="relative -mt-[430px] px-6 pb-4 sm:-mt-[150px] sm:pb-4">  <motion.div
    initial={{
      opacity: 0,
      y: 25,
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
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="
      group
      relative
      mx-auto
      max-w-6xl
      overflow-hidden
      rounded-[30px]
      border
      border-white/10
      bg-[#070B1A]
      px-6
      py-10
      text-center
      shadow-[0_25px_80px_rgba(15,23,42,0.18)]
      sm:px-10
      sm:py-12
      lg:px-16
      lg:py-8
    "
  >

    {/* ================= BACKGROUND GRID ================= */}

    <div
      className="
        pointer-events-none
        absolute
        inset-0
        opacity-[0.06]
        [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)]
        [background-size:60px_60px]
      "
    />

    {/* ================= BLUE GLOW ================= */}

    <div
      className="
        pointer-events-none
        absolute
        -left-32
        top-1/2
        h-[300px]
        w-[300px]
        -translate-y-1/2
        rounded-full
        bg-blue-500/20
        blur-[110px]
      "
    />

    {/* ================= VIOLET GLOW ================= */}

    <div
      className="
        pointer-events-none
        absolute
        -right-32
        top-1/2
        h-[300px]
        w-[300px]
        -translate-y-1/2
        rounded-full
        bg-violet-500/20
        blur-[110px]
      "
    />

    {/* ================= CONTENT ================= */}

    <div className="relative z-10">

      {/* Small Label */}

      <div
        className="
          flex
          items-center
          justify-center
          gap-3
        "
      >
        <span
          className="
            h-px
            w-8
            bg-gradient-to-r
            from-transparent
            to-blue-400
          "
        />

        <span
          className="
            text-[10px]
            font-bold
            uppercase
            tracking-[0.28em]
            text-blue-400
            sm:text-xs
          "
        >
          Have a Project in Mind?
        </span>

        <span
          className="
            h-px
            w-8
            bg-gradient-to-l
            from-transparent
            to-violet-400
          "
        />
      </div>

      {/* ================= HEADING ================= */}

      <h2
        className="
          mt-2
          text-3xl
          font-black
          leading-tight
          tracking-[-0.04em]
          text-white
          sm:text-4xl
          lg:text-5xl
        "
      >
        Let's build something{" "}

        <span
          className="
            bg-gradient-to-r
            from-blue-400
            via-indigo-400
            to-violet-500
            bg-clip-text
            text-transparent
          "
        >
          remarkable.
        </span>
      </h2>

      {/* ================= DESCRIPTION ================= */}

      <p
        className="
          mx-auto
          mt-4
          max-w-2xl
          text-sm
          leading-6
          text-slate-400
          sm:text-base
        "
      >
        Tell us about your idea and let's turn it into a
        digital experience that helps your business grow.
      </p>

      {/* ================= CTA ================= */}

      <div className="mt-2">

        <Link
          href="/#contact"
          className="
            inline-flex
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-gradient-to-r
            from-blue-500
            via-indigo-500
            to-violet-500
            px-7
            py-3
            text-sm
            font-bold
            text-white
            shadow-[0_8px_30px_rgba(59,130,246,0.25)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-[0_12px_40px_rgba(99,102,241,0.35)]
          "
        >
          Start Your Project
        </Link>

      </div>

    </div>

    {/* ================= TOP GLOW LINE ================= */}

    <div
      className="
        pointer-events-none
        absolute
        left-1/2
        top-0
        h-px
        w-[65%]
        -translate-x-1/2
        bg-gradient-to-r
        from-transparent
        via-blue-400/60
        to-transparent
      "
    />

    {/* ================= BOTTOM GLOW LINE ================= */}

    <div
      className="
        pointer-events-none
        absolute
        bottom-0
        left-1/2
        h-px
        w-[65%]
        -translate-x-1/2
        bg-gradient-to-r
        from-transparent
        via-violet-400/50
        to-transparent
      "
    />

  </motion.div>

</section>
    </main>
  );
}