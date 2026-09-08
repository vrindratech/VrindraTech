"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowDown,
  Globe,
  ShoppingBag,
  Quote,
  Star,
  Code2,
  Crosshair,
  LockKeyhole,
  TrendingUp,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "JUPITO DATA",
    category: "WEB DEVELOPMENT",
    type: "Corporate Website",
    description:
      "A modern digital experience designed to strengthen the brand's online presence and connect businesses with their customers.",
    technologies: ["Next.js", "React", "SEO"],
    icon: Globe,
    theme: "orange",
    delivery: "Delivered in just 8 days",
    visual: "video",
    video: "/projects/portfolio-preview.mp4",
  },
  {
    number: "02",
    title: "Gupta Mobiles",
    category: "E-COMMERCE",
    type: "E-Commerce Platform",
    description:
      "A conversion-focused online shopping experience built around a seamless and engaging customer journey.",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    icon: ShoppingBag,
    theme: "purple",
    visual: "video",
    video: "/projects/portfoliogm.mp4",
  },
];

const testimonial = {
  client: "Mitesh Bourashi",
  role: "Founder & CEO",
  company: "JupitoData",
  quote:
    "They understood exactly what we needed and delivered a great website.",
  video: "/projects/client-feedbacks.mp4",
  linkedin: "https://www.linkedin.com/company/jupitodata/",
};

export default function FeaturedProjects() {
  return (
    <main>
      {/* =========================================================
          PORTFOLIO HERO
      ========================================================= */}

      <PortfolioHero />

      {/* =========================================================
          SELECTED PROJECTS
      ========================================================= */}

      <section
        id="projects"
        className="relative overflow-hidden bg-white py-24 md:py-2"
      >
        <div className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/[0.035] blur-[140px]" />

        <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-purple-500/[0.03] blur-[120px]" />

        <div className="relative mx-auto max-w-[1450px] px-6 md:px-10 lg:px-16">
          <div className="mb-14 flex items-center justify-between border-b border-slate-200 pb-6">
            <div>
              <h2 className="mt-3 bg-gradient-to-r from-indigo-600 via-blue-500 to-violet-500 bg-clip-text text-3xl font-semibold text-transparent">
                Digital experiences that create impact.
              </h2>
            </div>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.number}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CLIENT TESTIMONIAL
      ========================================================= */}

      <section className="relative overflow-hidden bg-white px-6 pb-0 pt-12 md:px-12 lg:px-20 lg:pb-0 lg:pt-16">
        <div className="pointer-events-none absolute -right-24 top-40 h-48 w-48 rounded-full bg-cyan-200/30 blur-3xl" />

        <div className="pointer-events-none absolute bottom-20 -left-20 h-56 w-56 rounded-full bg-blue-200/25 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-6xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-5 flex items-center justify-center gap-4"
            >
              <span className="text-lg font-semibold uppercase tracking-[0.28em] text-blue-600">
                Client Testimonial
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mx-auto max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-slate-950 md:text-6xl lg:text-[72px]"
            >
              What Our Clients Say
              <br />
              <span className="bg-gradient-to-r from-indigo-600 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                About Our Services
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-500 md:text-lg"
            >
              Real experiences from businesses we&apos;ve helped build,
              grow, and succeed.
            </motion.p>
          </div>

          {/* Reduced gap before testimonial */}
          <div className="relative mx-auto mt-8 max-w-6xl">
            <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]">
              {/* Video */}

              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="group relative"
              >
                <div className="absolute -inset-3 rounded-[30px] bg-gradient-to-r from-blue-400/30 via-cyan-400/25 to-violet-400/30 opacity-70 blur-xl transition duration-700 group-hover:opacity-100" />

                <div className="relative overflow-hidden rounded-[28px] border border-blue-200 bg-slate-950 shadow-[0_25px_80px_-30px_rgba(37,99,235,0.45)]">
                  <div className="relative flex items-center justify-center bg-slate-950">
                    <video
                      src={testimonial.video}
                      controls
                      playsInline
                      preload="metadata"
                      className="block h-auto max-h-[560px] w-full object-contain"
                    />

                    <div className="pointer-events-none absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-white/95 px-4 py-2 text-xs font-semibold text-slate-800 shadow-lg backdrop-blur-md">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white">
                        <Quote size={12} />
                      </span>
                      CLIENT VIDEO
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Client Information */}

              <motion.div
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative"
              >
                <Quote
                  size={64}
                  strokeWidth={1.5}
                  className="mb-5 text-blue-100"
                />

                <blockquote className="max-w-lg text-2xl font-semibold leading-[1.25] tracking-[-0.025em] text-slate-950 md:text-3xl">
                  “{testimonial.quote}”
                </blockquote>

                <div className="my-7 h-0.5 w-10 bg-blue-600" />

                <h3 className="text-xl font-semibold text-slate-950">
                  {testimonial.client}
                </h3>

                <p className="mt-2 text-sm font-medium text-blue-600">
                  {testimonial.role}
                </p>

                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <p className="text-md font-medium text-orange-600">
                    {testimonial.company}
                  </p>

                  <a
                    href={testimonial.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Jupito Data on LinkedIn"
                    className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-blue-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                  >
                    View LinkedIn Profile
                    <span className="text-base">↗</span>
                  </a>
                </div>

                <div className="mt-7 flex items-center gap-4 border-t border-slate-200 pt-6">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <motion.div
                        key={star}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.45 + star * 0.08 }}
                      >
                        <Star
                          size={17}
                          fill="currentColor"
                          className="text-blue-600"
                        />
                      </motion.div>
                    ))}
                  </div>

                  <span className="text-sm font-medium text-slate-500">
                    5.0 Rating
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="bg-white px-6 pb-28 pt-0 md:px-12 lg:px-20">
        <div
          className="
            relative mx-auto max-w-7xl
            overflow-hidden rounded-[32px]
            border border-slate-200
            bg-white
            px-8 py-12
            text-center
            shadow-[0_20px_70px_-35px_rgba(37,99,235,0.25)]
            md:px-16 md:py-16
          "
        >
          {/* Soft theme glow */}

          <div
            className="
              pointer-events-none absolute
              left-1/2 top-0
              h-72 w-72
              -translate-x-1/2
              rounded-full
              bg-blue-500/10
              blur-[110px]
            "
          />

          <div
            className="
              pointer-events-none absolute
              -bottom-24 left-1/2
              h-56 w-56
              -translate-x-1/2
              rounded-full
              bg-violet-500/10
              blur-[100px]
            "
          />

          <div className="relative z-10">
            {/* Eyebrow */}

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="
                mb-5
                text-xs
                font-semibold
                uppercase
                tracking-[0.28em]
                text-blue-600
              "
            >
              Your Project Could Be Next
            </motion.p>

            {/* Heading */}

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="
                mx-auto
                max-w-4xl
                text-4xl
                font-semibold
                leading-[1.02]
                tracking-[-0.045em]
                text-slate-950
                md:text-6xl
                lg:text-[72px]
              "
            >
              Have an idea?
              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-indigo-600
                  via-blue-500
                  to-violet-500
                  bg-clip-text
                  text-transparent
                "
              >
                Let&apos;s build it.
              </span>
            </motion.h2>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="
                mx-auto
                mt-7
                max-w-2xl
                text-base
                leading-7
                text-slate-600
                md:text-lg
              "
            >
              Let&apos;s turn your business idea into a digital
              product your customers will love.
            </motion.p>

            {/* CTA Button */}

            <motion.a
              href="/#contact"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="
                relative
                mt-9
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-gradient-to-r
                from-indigo-600
                via-blue-500
                to-violet-500
                px-8
                py-4
                text-base
                font-semibold
                text-white
                shadow-[0_12px_30px_-10px_rgba(79,70,229,0.55)]
                transition-all
                duration-300
                hover:shadow-[0_18px_40px_-10px_rgba(79,70,229,0.65)]
              "
            >
              Start a Project

              <ArrowUpRight size={18} strokeWidth={2} />
            </motion.a>
          </div>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   PORTFOLIO HERO
========================================================= */

const highlights = [
  {
    icon: Crosshair,
    title: "Business-Focused",
    description: "Digital solutions designed around real business goals.",
  },
  {
    icon: Code2,
    title: "Modern Technology",
    description: "Built with modern frameworks and scalable technologies.",
  },
  {
    icon: LockKeyhole,
    title: "Scalable & Secure",
    description: "Reliable digital products designed for long-term growth.",
  },
  {
    icon: TrendingUp,
    title: "Fastest Delivery",
    description: "High-quality solutions, delivered without delays.",
  },
];

function PortfolioHero() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 25, 0],
            scale: [1, 1.08, 0.96, 1],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[8%] top-[12%] h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[110px]"
        />

        <motion.div
          animate={{
            x: [0, -25, 20, 0],
            y: [0, 25, -20, 0],
            scale: [1, 0.94, 1.08, 1],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[2%] right-[18%] h-[360px] w-[360px] rounded-full bg-violet-500/10 blur-[120px]"
        />

        <div className="absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-blue-50/60 via-transparent to-transparent" />

        <div className="absolute right-0 top-0 h-[320px] w-[420px] opacity-35 [background-image:radial-gradient(#7c8cff_1px,transparent_1px)] [background-size:18px_18px] [mask-image:linear-gradient(to_bottom_left,black,transparent)]" />

        <motion.div
          animate={{ x: ["-5%", "5%", "-5%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-100px] left-[-10%] h-48 w-[120%] rounded-[50%] border-t border-blue-200/60 bg-gradient-to-r from-transparent via-blue-100/30 to-violet-100/40"
        />
      </div>

      <FloatingParticle
        className="right-[29%] top-[17%]"
        delay={0}
        size="h-2 w-2"
      />

      <FloatingParticle
        className="right-[12%] top-[28%]"
        delay={1.5}
        size="h-3 w-3"
      />

      <FloatingParticle
        className="right-[38%] top-[38%]"
        delay={2.5}
        size="h-2 w-2"
      />

      <FloatingParticle
        className="bottom-[21%] right-[24%]"
        delay={1}
        size="h-2 w-2"
      />

      <FloatingParticle
        className="bottom-[17%] right-[8%]"
        delay={3}
        size="h-3 w-3"
      />

      <div className="relative mx-auto max-w-[1500px] px-6 pb-24 pt-28 md:px-10 md:pb-28 md:pt-32 lg:px-16 lg:pb-32 lg:pt-2">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-7 flex items-center gap-4"
            />

            <motion.h1
  initial={{ opacity: 0, y: 35 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.8,
    delay: 0.1,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="w-full max-w-[1200px] text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[86px]"
>
  Digital Solutions
  <br />

  <span className="inline-block max-w-full bg-gradient-to-r from-indigo-600 via-blue-500 to-violet-500 bg-clip-text text-transparent">
    That Move Businesses Forward.
  </span>
</motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-7 max-w-3xl text-xl font-semibold tracking-tight text-slate-800 md:text-2xl"
            >
              Websites, Software & Digital Experiences That Deliver.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-5 max-w-3xl text-base leading-7 text-slate-500 md:text-lg md:leading-8"
            >
              Explore our portfolio of custom web development, software
              solutions, UI/UX design, and digital products built to help
              businesses grow, improve customer experiences, and achieve
              measurable results.
            </motion.p>

            <div className="mt-9 grid max-w-4xl grid-cols-2 gap-x-5 gap-y-6 md:grid-cols-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.45 + index * 0.1,
                    }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-blue-600 shadow-sm transition-all duration-300 group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:shadow-md">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>

                    <h3 className="text-sm font-semibold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 text-xs leading-5 text-slate-500">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="mt-10 flex flex-wrap items-center gap-5"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-600 via-blue-500 to-violet-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_-10px_rgba(79,70,229,0.55)] transition-shadow duration-300 hover:shadow-[0_18px_40px_-10px_rgba(79,70,229,0.65)]"
              >
                Explore Our Projects
                <ArrowUpRight size={17} />
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 transition-colors hover:text-blue-600"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white">
                  <ArrowDown size={17} />
                </span>

                Scroll to Explore
              </motion.a>
            </motion.div>
          </div>

          <div className="relative flex min-h-[500px] items-center justify-center lg:min-h-[650px]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
              className="absolute h-[390px] w-[390px] rounded-full border border-blue-200/60 md:h-[520px] md:w-[520px]"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="absolute h-[300px] w-[500px] rounded-[50%] border border-violet-200/50 md:h-[380px] md:w-[620px]"
            />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
              className="absolute h-[440px] w-[280px] rounded-[50%] border border-blue-100/70 md:h-[600px] md:w-[380px]"
            />

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.35, 0.55, 0.35],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute h-64 w-64 rounded-full bg-blue-500/20 blur-[80px]"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
              transition={{
                opacity: { duration: 0.8 },
                scale: { duration: 0.8 },
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="relative z-10"
            >
              <div className="absolute -inset-12 rounded-full bg-blue-500/20 blur-[55px]" />

              <div className="relative grid h-48 w-48 rotate-[-8deg] grid-cols-2 grid-rows-2 gap-1 md:h-64 md:w-64">
                <CubePiece
                  gradient="from-blue-50 to-blue-100"
                  delay={0}
                />

                <CubePiece
                  gradient="from-blue-100 to-violet-100"
                  delay={0.15}
                />

                <CubePiece
                  gradient="from-blue-500 to-indigo-600"
                  dark
                  delay={0.3}
                />

                <CubePiece
                  gradient="from-indigo-500 to-violet-600"
                  dark
                  delay={0.45}
                />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[15%] left-[12%] z-20 h-10 w-10 rotate-12 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 shadow-[0_15px_35px_-10px_rgba(79,70,229,0.6)]"
            />

            <motion.div
              animate={{ y: [0, -20, 0], x: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-[8%] top-[17%] z-20 h-12 w-12 rounded-full bg-gradient-to-br from-blue-400 to-violet-600 shadow-[0_15px_35px_-8px_rgba(79,70,229,0.55)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingParticle({
  className,
  delay,
  size,
}: {
  className: string;
  delay: number;
  size: string;
}) {
  return (
    <motion.div
      animate={{
        y: [0, -14, 0],
        opacity: [0.35, 1, 0.35],
        scale: [1, 1.25, 1],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute ${className} ${size} rounded-full bg-gradient-to-br from-blue-400 to-violet-500 shadow-lg shadow-blue-500/20`}
    />
  );
}

function CubePiece({
  gradient,
  dark = false,
  delay,
}: {
  gradient: string;
  dark?: boolean;
  delay: number;
}) {
  return (
    <motion.div
      animate={{ opacity: [0.85, 1, 0.85] }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`relative overflow-hidden rounded-[12px] border ${
        dark ? "border-white/10" : "border-blue-100"
      } bg-gradient-to-br ${gradient} shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)]`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent" />

      {dark && (
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10" />
      )}
    </motion.div>
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const Icon = project.icon;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 70,
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
        duration: 0.75,
        ease: "easeOut",
      }}
      className="sticky top-8"
      style={{
        zIndex: index + 1,
      }}
    >
      <div
        className="
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-slate-200
          bg-white
          shadow-[0_25px_80px_-35px_rgba(15,23,42,0.25)]
        "
      >
        {/* TOP BAR */}

        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5 md:px-8">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-xs font-semibold text-white">
              {project.number}
            </span>

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Featured Project
            </span>
          </div>

          <span className="hidden text-xs font-medium text-slate-400 md:block">
            {project.category}
          </span>
        </div>

        {/* MAIN CONTENT */}

        <div className="grid lg:grid-cols-[1.25fr_0.75fr]">
          {/* PROJECT VISUAL */}

          <div className="relative min-h-[420px] overflow-hidden bg-[#f5f7fb] p-5 md:min-h-[550px] md:p-8">
            <div
              className={`
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[60%]
                w-[70%]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                blur-[90px]
                ${
                  project.theme === "orange"
                    ? "bg-orange-300/20"
                    : project.theme === "purple"
                      ? "bg-purple-400/20"
                      : project.theme === "blue"
                        ? "bg-blue-400/20"
                        : "bg-cyan-400/20"
                }
              `}
            />

            <ProjectVisual
              type={project.visual}
              video={project.video}
            />

            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
              <div className="rounded-full border border-white/80 bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-slate-500 shadow-sm backdrop-blur-md">
                {project.number} /{" "}
                {projects.length.toString().padStart(2, "0")}
              </div>
            </div>
          </div>

          {/* PROJECT INFORMATION */}

          <div className="flex flex-col justify-between bg-white p-7 md:p-10 lg:p-12">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-cyan-500" />

                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                  {project.category}
                </span>
              </div>

              <h3 className="mt-7 text-4xl font-semibold tracking-[-0.045em] text-slate-950 md:text-5xl">
                {project.title}
              </h3>

              <p className="mt-3 text-sm font-medium text-slate-400">
                {project.type}
              </p>

              <p className="mt-7 max-w-md text-base leading-7 text-slate-500">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="
                      rounded-full
                      border
                      border-slate-200
                      bg-slate-50
                      px-4
                      py-2
                      text-xs
                      font-medium
                      text-slate-600
                    "
                  >
                    {technology}
                  </span>
                ))}
              </div>
              {project.delivery && (
  <div className="mt-8 flex items-center gap-2">
    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
    <span className="text-[14px] font-semibold text-emerald-600">
      {project.delivery}
    </span>
  </div>
)}
            </div>

            {/* BOTTOM ACTION */}

            <div className="mt-12 flex items-center justify-between border-t border-slate-100 pt-7">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
                  <Icon
                    size={18}
                    strokeWidth={1.8}
                    className="text-slate-700"
                  />
                </div>

                <div>
                  <span className="block text-xs font-medium text-slate-400">
                    Digital Experience
                  </span>
                </div>
              </div>

              <a
                href={
                  project.number === "01"
                    ? "https://www.jupitodata.com/"
                    : "https://www.guptamobiles.com/"
                }
                target={
                  project.number === "01" ? "_blank" : undefined
                }
                rel={
                  project.number === "01"
                    ? "noopener noreferrer"
                    : undefined
                }
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-gradient-to-r
                  from-[#4F46FF]
                  via-[#3285F5]
                  to-[#8B5CF6]
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_10px_30px_rgba(79,70,229,0.18)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-[0_15px_35px_rgba(79,70,229,0.28)]
                "
              >
                VISIT WEBSITE

                <ArrowUpRight
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   PROJECT VISUAL
========================================================= */

function ProjectVisual({
  type,
  video,
}: {
  type: string;
  video?: string;
}) {
  if (type === "video" && video) {
    return (
      <div className="relative z-10 flex h-full min-h-[420px] items-center justify-center md:min-h-[550px]">
        <div className="w-full max-w-[760px] overflow-hidden rounded-[20px] border border-slate-300 bg-white shadow-[0_30px_70px_-25px_rgba(15,23,42,0.25)]">
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            preload="metadata"
            className="block h-auto max-h-[500px] w-full object-contain"
          />
        </div>
      </div>
    );
  }

  if (type === "website") {
    return (
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="w-full max-w-[760px]">
          <div className="overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-[0_30px_70px_-25px_rgba(15,23,42,0.35)]">
            <div className="flex h-10 items-center gap-2 border-b border-slate-100 bg-slate-50 px-4">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

              <div className="ml-4 h-5 flex-1 rounded-full bg-white" />
            </div>

            <div className="grid min-h-[330px] grid-cols-2 bg-slate-950">
              <div className="flex flex-col justify-center p-7">
                <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-orange-400">
                  Verified Business Data
                </span>

                <h4 className="mt-4 text-3xl font-bold leading-tight text-white">
                  Verified
                  <br />
                  Business Data
                  <br />

                  <span className="text-orange-400">
                    That Accelerates
                  </span>
                </h4>

                <p className="mt-4 max-w-[220px] text-xs leading-5 text-white/50">
                  Modern data solutions built for growing businesses.
                </p>

                <div className="mt-6 h-8 w-28 rounded-full bg-orange-400" />
              </div>

              <div className="relative overflow-hidden bg-gradient-to-br from-orange-300 via-orange-500 to-slate-900">
                <div className="absolute right-6 top-8 h-24 w-24 rounded-2xl bg-white/80 backdrop-blur" />

                <div className="absolute bottom-10 left-8 right-8 flex items-end gap-3">
                  {[40, 65, 90, 120, 150].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-md bg-white/70"
                      style={{
                        height,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* =========================================================
     E-COMMERCE
  ========================================================= */

  if (type === "shop") {
    return (
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="w-full max-w-[700px]">
          <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_30px_70px_-25px_rgba(15,23,42,0.25)]">
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
              <div className="text-lg font-bold text-slate-950">
                NEXORA
              </div>

              <div className="flex gap-5 text-xs text-slate-400">
                <span>Shop</span>
                <span>Collections</span>
                <span>About</span>
              </div>

              <ShoppingBag size={17} />
            </div>

            <div className="grid grid-cols-2 gap-4 bg-slate-50 p-6">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="overflow-hidden rounded-2xl bg-white"
                >
                  <div className="h-28 bg-gradient-to-br from-purple-100 to-purple-300" />

                  <div className="p-4">
                    <div className="h-2 w-20 rounded-full bg-slate-200" />
                    <div className="mt-3 h-2 w-12 rounded-full bg-slate-100" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}