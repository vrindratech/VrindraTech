"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ShieldCheck,
  Clock3,
  MessageSquare,
  Handshake,
  Users,
  BriefcaseBusiness,
  Target,
  Headphones,
  ThumbsUp,
  LockKeyhole,
  Star,
  Lightbulb,
  Code2,
  Award,
  TrendingUp,
  Settings,
} from "lucide-react";
import { useRef } from "react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Quality First",
    text: "We maintain high standards in design, development, testing and delivery.",
  },
  {
    icon: Clock3,
    title: "Timely Delivery",
    text: "We respect your timeline and work efficiently to deliver projects on schedule.",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    text: "Clear, consistent and honest communication throughout every project stage.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    text: "We build lasting relationships and continue supporting your digital growth.",
  },
];

const stats = [
  {
    icon: Users,
    value: 4,
    suffix: "+",
    title: "Happy Clients",
    text: "Businesses that trust us for their digital success.",
  },
  {
    icon: BriefcaseBusiness,
    value: 4,
    suffix: "+",
    title: "Projects Served",
    text: "Successful projects delivered across different industries.",
  },
  {
    icon: Target,
    value: 99,
    suffix: "%",
    title: "On-Time Delivery",
    text: "Efficient processes designed to keep projects on schedule.",
  },
  {
    icon: Headphones,
    value: 24,
    suffix: "/7",
    title: "Support",
    text: "Responsive support to help keep your business running.",
  },
  {
    icon: ThumbsUp,
    value: 100,
    suffix: "%",
    title: "Client Satisfaction",
    text: "Focused on delivering solutions that meet business expectations.",
  },
  {
    icon: LockKeyhole,
    value: 100,
    suffix: "%",
    title: "Secure & Reliable",
    text: "Secure, scalable and future-ready digital solutions.",
  },
];

const values = [
  {
    icon: Star,
    title: "Client-Centric Approach",
    text: "We prioritize your goals, requirements and business growth.",
  },
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    text: "We use modern technologies to create practical digital solutions.",
  },
  {
    icon: Code2,
    title: "Agile Methodology",
    text: "Flexible development processes for faster delivery and iteration.",
  },
  {
    icon: Award,
    title: "High Code Quality",
    text: "Clean, maintainable and scalable engineering practices.",
  },
  {
    icon: TrendingUp,
    title: "Growth-Focused",
    text: "Solutions designed to support long-term business growth.",
  },
  {
    icon: Settings,
    title: "End-to-End Services",
    text: "From strategy and development to testing, deployment and support.",
  },
];

function AnimatedNumber({
  value,
  suffix,
  active,
}: {
  value: number;
  suffix: string;
  active: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let start = 0;
    const duration = 1400;
    const increment = value / (duration / 25);

    const timer = setInterval(() => {
      start += increment;

      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 25);

    return () => clearInterval(timer);
  }, [active, value]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function WhyJupitodata() {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, {
    once: true,
    amount: 0.25,
  });

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-blue-100/30 blur-3xl" />

        <div className="absolute -left-40 bottom-20 h-[400px] w-[400px] rounded-full bg-indigo-100/20 blur-3xl" />

        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

        {/* =========================================================
            HERO
        ========================================================== */}

        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">

          {/* LEFT CONTENT */}
          <div>
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/70 px-4 py-2 text-sm font-semibold tracking-wide text-blue-600">
                <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />

                BUILDING DIGITAL SUCCESS TOGETHER
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.045em] text-slate-950 sm:text-5xl md:text-6xl lg:text-[64px]">
                Jupitodata Delivers
                <span className="block bg-gradient-to-r from-indigo-600 via-indigo-600 to-indigo-600 bg-clip-text text-transparent">
              Scalable, Secure
                </span>  
                <span className="block">
                  & Result-Driven
                </span>
                <span className="block">
                  Digital Solutions.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-7 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600" />
            </Reveal>

            <Reveal delay={0.22}>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
                We help startups, businesses and enterprises build powerful{" "}
                <span className="font-semibold text-indigo-600">
                  websites, mobile apps, enterprise software
                </span>{" "}
                and cloud solutions that improve efficiency, support growth and
                create long-term business value.
              </p>
            </Reveal>
          </div>

          {/* RIGHT VISUAL */}
          <Reveal
            delay={0.18}
            className="relative flex min-h-[350px] items-center justify-center lg:min-h-[430px]"
          >
            {/* world-map style decorative dots */}
            <div className="absolute right-0 top-0 h-[320px] w-[500px] opacity-30">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage:
                    "radial-gradient(#60a5fa 1.5px, transparent 1.5px)",
                  backgroundSize: "12px 12px",
                  maskImage:
                    "radial-gradient(ellipse at center, black 35%, transparent 75%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse at center, black 35%, transparent 75%)",
                }}
              />
            </div>

            {/* glowing circle */}
            <motion.div
              animate={{
                scale: [1, 1.04, 1],
                opacity: [0.35, 0.55, 0.35],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute h-[330px] w-[330px] rounded-full bg-blue-100 blur-3xl"
            />

            {/* laptop image */}
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [0, 0.4, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 w-full max-w-[570px]"
            >
              <div className="relative">
                <div className="absolute -inset-6 rounded-[40px] bg-blue-100/40 blur-2xl" />

                <img
                  src="/images/jupitodata-laptop.png"
                  alt="Jupitodata digital solutions and software development"
                  className="relative z-10 w-full object-contain drop-shadow-[0_30px_45px_rgba(37,99,235,0.18)]"
                />
              </div>
            </motion.div>
          </Reveal>
        </div>

        {/* =========================================================
            CORE BENEFITS
        ========================================================== */}

        <div className="mt-16 border-y border-slate-200 py-7 lg:mt-20">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">

            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.title}
                  delay={index * 0.08}
                  className={`px-3 ${
                    index !== benefits.length - 1
                      ? "lg:border-r lg:border-slate-200"
                      : ""
                  }`}
                >
                  <div className="flex items-start gap-4 lg:px-7">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <Icon size={28} strokeWidth={1.8} />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            NUMBERS
        ========================================================== */}

        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
        >
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal
                key={item.title}
                delay={index * 0.06}
                className={`py-10 px-4 text-center ${
                  index !== stats.length - 1
                    ? "lg:border-r lg:border-slate-200"
                    : ""
                }`}
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <Icon size={27} strokeWidth={1.8} />
                </div>

                <div className="mt-4 text-4xl font-black tracking-tight text-blue-600 sm:text-5xl">
                  <AnimatedNumber
                    value={item.value}
                    suffix={item.suffix}
                    active={statsInView}
                  />
                </div>

                <h3 className="mt-1 text-base font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mx-auto mt-2 max-w-[170px] text-sm leading-5 text-slate-600">
                  {item.text}
                </p>
              </Reveal>
            );
          })}
        </div>

        {/* =========================================================
            VALUES
        ========================================================== */}

        <Reveal delay={0.1}>
          <div className="mt-8 rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_15px_50px_rgba(15,23,42,0.06)] sm:p-7">

            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6 lg:gap-0">

              {values.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className={`px-4 text-center ${
                      index !== values.length - 1
                        ? "lg:border-r lg:border-slate-200"
                        : ""
                    }`}
                  >
                    <motion.div
                      whileInView={{
                        opacity: [0, 1],
                        scale: [0.8, 1],
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.06,
                      }}
                      className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600"
                    >
                      <Icon size={25} strokeWidth={1.8} />
                    </motion.div>

                    <h3 className="mt-4 text-sm font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}