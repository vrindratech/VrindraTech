"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Compass,
  Cpu,
  Headphones,
  Lightbulb,
  Rocket,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  TestTube2,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiOpenjdk,
  SiSpringboot,
  SiPython,
  SiFlutter,
  SiSwift,
  SiKotlin,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiOpenaigym,
} from "react-icons/si";
import { LiaLinkedinIn } from "react-icons/lia";

const technologies = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Java", icon: SiOpenjdk, color: "#E76F00" },
  { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { name: "Swift", icon: SiSwift, color: "#F05138" },
  { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
  { name: "React Native", icon: SiReact, color: "#61DAFB" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "AI Solutions", icon: SiOpenaigym, color: "#10A37F" },
];

const services = [
  {
    number: "01",
    icon: Target,
    title: "Strategy",
    description:
      "We understand your business goals, users, challenges and technical requirements before defining the right digital solution.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "UI/UX Design",
    description:
      "We create intuitive, responsive and conversion-focused digital experiences that make complex products easier to use.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Development",
    description:
      "We build modern websites, custom software, mobile applications and scalable digital products using reliable technologies.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Growth",
    description:
      "We optimize performance, SEO, usability and digital experiences to help your product support long-term business growth.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    icon: Search,
    text: "We understand your business, users, goals and technical requirements.",
  },
  {
    number: "02",
    title: "Plan",
    icon: Compass,
    text: "We define the right product strategy, features, technology and development roadmap.",
  },
  {
    number: "03",
    title: "Design",
    icon: Sparkles,
    text: "We turn requirements into clear, intuitive and responsive user experiences.",
  },
  {
    number: "04",
    title: "Develop",
    icon: Code2,
    text: "We build secure, scalable and high-performance digital solutions.",
  },
  {
    number: "05",
    title: "Test",
    icon: TestTube2,
    text: "We test functionality, responsiveness, performance and user experience before launch.",
  },
  {
    number: "06",
    title: "Deploy",
    icon: Rocket,
    text: "We launch your product carefully and make sure everything works as expected.",
  },
  {
    number: "07",
    title: "Support",
    icon: Headphones,
    text: "We remain available for maintenance, improvements, troubleshooting and ongoing support.",
  },
];

const reasons = [
  {
    icon: Target,
    title: "Business First",
    text: "We start with your business problem and goals—not technology for technology's sake.",
  },
  {
    icon: Rocket,
    title: "Fast & Focused Delivery",
    text: "We keep the development process focused so your product can move from idea to launch efficiently.",
  },
  {
    icon: Cpu,
    title: "Modern Engineering",
    text: "We use modern frameworks, clean architecture and scalable technology to build for the future.",
  },
  {
    icon: Users,
    title: "Clear Communication",
    text: "You stay informed throughout the project with transparent communication and clear progress.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Driven",
    text: "Testing, responsiveness, performance and reliability are part of the delivery process.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    text: "Our relationship doesn't end at deployment. We're ready to help when you need us.",
  },
];

const projects = [
  {
    title: "JUPITO DATA",
    category: "Web Development",
    description:
      "A modern B2B digital experience designed to strengthen online presence and connect businesses with their customers.",
    image: "/images/jupitodata.png",
    href: "https://www.jupitodata.com/",
  },
  {
    title: "GUPTA MOBILES",
    category: "E-Commerce",
    description:
      "A conversion-focused e-commerce experience designed around a simple and engaging customer journey.",
    image: "/images/guptamobile.png",
    href: "https://www.guptamobiles.com/",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function About() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative isolate overflow-hidden bg-white">
        {/* Ambient background */}

        <div className="pointer-events-none absolute inset-0 -z-10">
          <motion.div
            animate={{
              x: [0, 40, -20, 0],
              y: [0, -25, 20, 0],
              scale: [1, 1.08, 0.96, 1],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[5%] top-[8%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.09] blur-[120px]"
          />

          <motion.div
            animate={{
              x: [0, -35, 20, 0],
              y: [0, 25, -15, 0],
              scale: [1, 0.95, 1.08, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[0] right-[20%] h-[450px] w-[450px] rounded-full bg-violet-500/[0.09] blur-[130px]"
          />

          <div className="absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-blue-50/70 via-transparent to-transparent" />

          <div className="absolute right-0 top-0 h-[500px] w-[500px] opacity-30 [background-image:radial-gradient(#6366f1_1px,transparent_1px)] [background-size:18px_18px] [mask-image:linear-gradient(to_bottom_left,black,transparent)]" />
        </div>

<div className="mx-auto grid max-w-[1500px] items-start gap-14 px-6 pb-4 pt-16 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-16 lg:pb-2 lg:pt-8">          {/* Left */}

          <div className="relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-7 flex items-center gap-4"
            >
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="max-w-[850px] text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[78px]"
            >
              We Build Digital Products That{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 bg-clip-text text-transparent">
                Move Businesses Forward.
              </span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                    delay: 0.15,
                  },
                },
              }}
              className="mt-7 max-w-2xl text-lg leading-8 text-slate-500"
            >
              We are a modern IT and digital product company, started in 2026,
              delivering custom web development, software solutions, mobile
              applications, UI/UX design and AI-powered digital experiences.
            </motion.p>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                    delay: 0.25,
                  },
                },
              }}
              className="mt-4 max-w-2xl text-base leading-7 text-slate-500"
            >
              From understanding your requirements to design, development,
              testing, deployment and ongoing support, we stay involved
              throughout the entire product lifecycle.
            </motion.p>

            {/* Proof points */}

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                    delay: 0.35,
                  },
                },
              }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Proof text="Started in 2026" />
              <Proof text="6+ Years IT Experience" />
              <Proof text="Fast Delivery" />
              <Proof text="24/7 Support" />
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                    delay: 0.45,
                  },
                },
              }}
              className="mt-9"
            >
              <a
                href="#founder"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_15px_35px_-12px_rgba(79,70,229,0.6)] transition hover:scale-[1.02]"
              >
                Meet the Founder

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </motion.div>
          </div>

          {/* Right visual — laptop artwork */}
          <motion.div
            initial={{
              opacity: 0,
              x: 55,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex min-h-[400px] items-center justify-center lg:min-h-[470px]"
          >
            {/* Soft glow behind the laptop */}
            <motion.div
              aria-hidden="true"
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.28, 0.42, 0.28],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-[8%] top-[18%] h-[380px] w-[380px] rounded-full bg-indigo-500/20 blur-[90px] sm:h-[450px] sm:w-[450px]"
            />

            {/* Subtle ambient blue glow */}
            <motion.div
              aria-hidden="true"
              animate={{
                x: [0, 12, 0],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[8%] left-[12%] h-28 w-28 rounded-full bg-blue-400/10 blur-3xl"
            />

            {/* Laptop */}
            <motion.div
              animate={{
                y: [0, -9, 0],
                rotateZ: [0, -0.35, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 w-full max-w-[760px]"
            >
              <img
                src="/images/about-laptop.png"
                alt="Modern laptop displaying a digital business dashboard"
                className="h-auto w-full object-contain drop-shadow-[0_35px_45px_rgba(30,64,175,0.20)]"
              />
            </motion.div>

            {/* Small floating accent */}
            <motion.div
              aria-hidden="true"
              animate={{
                y: [0, -13, 0],
                rotate: [0, 8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-[7%] top-[13%] z-20 h-11 w-11 rounded-2xl bg-gradient-to-br from-blue-500/30 to-violet-500/30 shadow-lg shadow-blue-500/10 backdrop-blur-sm"
            />

            <motion.div
              aria-hidden="true"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[12%] right-[10%] z-20 h-7 w-7 rounded-full bg-blue-400/30"
            />
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          WHY WE STARTED
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#090d25] py-24 text-white md:py-32">
        <div className="absolute right-0 top-0 h-full w-[45%] bg-gradient-to-l from-indigo-600/20 to-transparent" />

        <div className="relative mx-auto max-w-[1450px] px-6 md:px-10 lg:px-16">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <span className="text-md font-bold uppercase tracking-[0.3em] text-indigo-400">
               Why We Started
              </span>

              <h2 className="mt-6 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
                Great ideas shouldn't take forever to become reality.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="max-w-3xl text-lg leading-8 text-slate-300">
                We started in{" "}
                <strong className="text-white">2026</strong> with a simple
                goal: help businesses move from idea to execution faster.
              </p>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                With more than{" "}
                <strong className="text-white">6 years of IT experience</strong>
                , we understand that successful digital products need more
                than code. They need clear communication, thoughtful design,
                reliable engineering, thorough testing and dependable support.
              </p>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Our approach is simple:
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <DarkPrinciple
                  number="01"
                  title="Understand"
                  text="Understand the business before building the solution."
                />

                <DarkPrinciple
                  number="02"
                  title="Deliver"
                  text="Build and deliver efficiently without compromising quality."
                />

                <DarkPrinciple
                  number="03"
                  title="Grow"
                  text="Create technology that helps businesses grow faster."
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOUNDER
      ===================================================== */}

      <section
        id="founder"
        className="relative overflow-hidden bg-white py-24 md:py-32"
      >
        <div className="pointer-events-none absolute left-[-150px] top-1/3 h-[350px] w-[350px] rounded-full bg-blue-500/[0.06] blur-[110px]" />

        <div className="relative mx-auto max-w-[1450px] px-6 md:px-10 lg:px-16">
          <div className="mb-14">
            <span className="text-md font-bold uppercase tracking-[0.3em] text-indigo-600">
                Founder
            </span>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.045em] md:text-6xl">
              Built from experience.
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent">
                Driven by impact.
              </span>
            </h2>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Founder card */}

            <Reveal>
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-5 rounded-[35px] bg-gradient-to-br from-blue-500/20 to-violet-500/20 blur-2xl" />

                <div className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-slate-50 p-5 shadow-[0_25px_80px_-35px_rgba(15,23,42,0.3)]">
                  {/* Founder Image */}
                  <div className="overflow-hidden rounded-[22px] bg-slate-100">
                    <img
                      src="/images/founder.jpeg"
                      alt="Rashmi Dhanotiya - Founder of Vrindra Tech"
                      className="aspect-[4/5] h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                    />
                  </div>

                  <div className="flex items-center justify-between px-2 pt-5">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                        Experience
                      </p>

                      <p className="mt-1 text-2xl font-semibold text-slate-950">
                        6+ Years
                      </p>

                      <p className="text-xs text-slate-500">
                        In IT & Technology
                      </p>
                    </div>

                    <a
                      href="https://www.linkedin.com/in/vrindra-tech-80572b433/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View Founder LinkedIn profile"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-indigo-600 transition hover:border-blue-300 hover:bg-blue-50"
                    >
                      <LiaLinkedinIn size={19} />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Note */}

            <Reveal delay={0.1}>
              <div className="relative">
                <div className="mb-7 text-7xl font-serif leading-none text-indigo-100">
                  “
                </div>

                <h3 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                  A Note from the Founder
                </h3>

                <div className="mt-7 max-w-3xl space-y-5 text-base leading-8 text-slate-600 md:text-lg">
                  <p>
                    I started this company with a simple belief — businesses
                    shouldn't have to wait months to turn a good idea into a
                    working digital product.
                  </p>

                  <p>
                    With more than{" "}
                    <strong className="text-slate-950">
                      6 years of experience in IT and software development
                    </strong>
                    , I've seen how unnecessary complexity, slow communication
                    and inefficient development processes can delay business
                    growth.
                  </p>

                  <p>
                    We started this company to do things differently:
                    understand the business first, focus on what actually
                    matters, build with modern technology, test thoroughly and
                    deliver efficiently — without compromising quality.
                  </p>

                  <p>
                    Our goal isn't simply to deliver software. It's to help
                    businesses launch faster, operate better and grow with
                    confidence.
                  </p>
                </div>

                <div className="mt-9 flex flex-wrap items-center gap-5">
                  <div>
                    <p className="font-semibold text-slate-950">
                      Rashmi Dhanotiya
                    </p>

                    <p className="mt-1 text-md text-slate-500">
                      Founder & Technology Lead
                    </p>
                  </div>

                  <div className="h-10 w-px bg-slate-200" />

                  <a
                    href="https://www.linkedin.com/in/vrindra-tech-80572b433/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition hover:text-indigo-600"
                  >
                    Connect on LinkedIn
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          OUR PHILOSOPHY
      ===================================================== */}

      <section className="relative overflow-hidden bg-slate-50 py-24 md:py-32">
        <div className="mx-auto max-w-[1450px] px-6 md:px-10 lg:px-16">
          <Reveal>
            <span className="text-md font-bold uppercase tracking-[0.3em] text-indigo-600">
               Our Philosophy
            </span>

            <h2 className="mt-6 max-w-5xl text-4xl font-semibold leading-tight tracking-[-0.05em] md:text-7xl">
              Technology should{" "}
              <span className="text-indigo-600">solve problems.</span>
              <br />
              Not create more of them.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-4">
            <PhilosophyCard
              icon={Lightbulb}
              title="Useful"
              text="Technology should solve real business problems."
            />

            <PhilosophyCard
              icon={Workflow}
              title="Simple"
              text="Complex systems should feel simple to use."
            />

            <PhilosophyCard
              icon={ShieldCheck}
              title="Reliable"
              text="Products should work when your customers need them."
            />

            <PhilosophyCard
              icon={TrendingUp}
              title="Future Ready"
              text="Build today with tomorrow's growth in mind."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT WE DO
      ===================================================== */}

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1450px] px-6 md:px-10 lg:px-16">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <Reveal>
              <span className="text-md font-bold uppercase tracking-[0.3em] text-indigo-600">
                What We Do
              </span>

              <h2 className="mt-5 max-w-lg text-4xl font-semibold tracking-[-0.045em] md:text-6xl">
                We turn ideas into digital products.
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-slate-500">
                From strategy and UI/UX design to software development,
                testing, deployment and support, we provide end-to-end digital
                product development services.
              </p>
            </Reveal>

            <div className="grid gap-4 md:grid-cols-2">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <Reveal key={service.number} delay={index * 0.08}>
                    <motion.div
                      whileHover={{ y: -6 }}
                      className="group h-full rounded-[25px] border border-slate-200 bg-white p-7 shadow-[0_15px_50px_-35px_rgba(15,23,42,0.35)] transition hover:border-blue-200 hover:shadow-[0_25px_60px_-35px_rgba(79,70,229,0.35)]"
                    >
                      <div className="flex items-start justify-between">
                        <span className="text-xs font-bold tracking-[0.2em] text-indigo-600">
                          {service.number}
                        </span>

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-indigo-600 transition group-hover:bg-blue-600 group-hover:text-white">
                          <Icon size={20} />
                        </div>
                      </div>

                      <h3 className="mt-9 text-2xl font-semibold text-slate-950">
                        {service.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-slate-500">
                        {service.description}
                      </p>
                    </motion.div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY DNA
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f7f9ff] py-24 md:py-28">
        {/* Premium ambient motion */}
        <motion.div
          aria-hidden="true"
          animate={{
            x: [0, 35, -15, 0],
            y: [0, -20, 20, 0],
            scale: [1, 1.08, 0.98, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-32 top-0 h-[430px] w-[430px] rounded-full bg-blue-500/[0.08] blur-[120px]"
        />

        <motion.div
          aria-hidden="true"
          animate={{
            x: [0, -25, 20, 0],
            y: [0, 20, -15, 0],
            scale: [1, 0.96, 1.05, 1],
          }}
          transition={{
            duration: 21,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -left-48 bottom-0 h-[400px] w-[400px] rounded-full bg-violet-500/[0.07] blur-[125px]"
        />

        <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-[0.58fr_1.42fr] lg:gap-10">
            {/* LEFT — fixed content */}
            <Reveal>
              <div className="max-w-[510px]">
                <span className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-600">
                  06 / Technology DNA
                </span>

                <h2 className="mt-7 text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-[70px]">
                  Modern
                  <br />
                  technology.
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                    Real business
                    <br />
                    impact.
                  </span>
                </h2>

                <p className="mt-8 max-w-[500px] text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
                  We use reliable, modern and scalable technologies to build
                  secure, high-performance websites, custom software
                  applications, mobile products and AI-powered solutions.
                </p>
              </div>
            </Reveal>

            {/* RIGHT — large continuous technology showcase */}
            <div className="relative min-w-0">
              {/* Top direction indicator */}
              <div className="mb-6 hidden items-center gap-5 md:flex">

                  </div>

              <div className="relative overflow-hidden">
                {/* Stronger edge fade for the large showcase */}
                <div className="pointer-events-none absolute left-0 top-0 z-30 h-full w-10 bg-gradient-to-r from-[#f7f9ff] via-[#f7f9ff]/80 to-transparent sm:w-16" />
                <div className="pointer-events-none absolute right-0 top-0 z-30 h-full w-10 bg-gradient-to-l from-[#f7f9ff] via-[#f7f9ff]/80 to-transparent sm:w-16" />

                <TechMarquee
                  items={technologies.slice(0, 8)}
                  direction="left"
                  duration={30}
                />
              </div>

              {/* Second direction indicator */}
              <div className="my-2 hidden items-center gap-5 md:flex">
               
              </div>

              <div className="relative overflow-hidden">
                <div className="pointer-events-none absolute left-0 top-0 z-30 h-full w-10 bg-gradient-to-r from-[#f7f9ff] via-[#f7f9ff]/80 to-transparent sm:w-16" />
                <div className="pointer-events-none absolute right-0 top-0 z-30 h-full w-10 bg-gradient-to-l from-[#f7f9ff] via-[#f7f9ff]/80 to-transparent sm:w-16" />

                <TechMarquee
                  items={technologies.slice(8, 16)}
                  direction="right"
                  duration={34}
                />
              </div>
            </div>
          </div>

          {/* Bottom value strip */}
          <Reveal delay={0.12}>
            <div className="mt-16 grid overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/75 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.35)] backdrop-blur-sm sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: ShieldCheck,
                  title: "Secure & Reliable",
                  description: "Secure and dependable digital solutions.",
                  color: "text-blue-600",
                  bg: "bg-blue-50",
                },
                {
                  icon: TrendingUp,
                  title: "Scalable Solutions",
                  description: "Technology built to grow with your business.",
                  color: "text-emerald-500",
                  bg: "bg-emerald-50",
                },
                {
                  icon: Sparkles,
                  title: "High Performance",
                  description: "Fast, optimized and production-ready experiences.",
                  color: "text-violet-600",
                  bg: "bg-violet-50",
                },
                {
                  icon: Headphones,
                  title: "24/7 Support",
                  description: "Ongoing technical support when you need it.",
                  color: "text-rose-500",
                  bg: "bg-rose-50",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className={`flex items-center gap-4 px-6 py-6 sm:px-7 lg:px-8 ${
                      index !== 3
                        ? "border-b border-slate-200/80 lg:border-b-0 lg:border-r"
                        : ""
                    }`}
                  >
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${item.bg}`}
                    >
                      <Icon className={`h-7 w-7 ${item.color}`} />
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>
      {/* =====================================================
          OUR APPROACH
      ===================================================== */}

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1450px] px-6 md:px-10 lg:px-16">
          <Reveal>
            <span className="text-md font-bold uppercase tracking-[0.3em] text-indigo-600">
               Our Approach
            </span>

            <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
              Understand the business.
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent">
                Build the right technology.
              </span>
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-4 md:grid-cols-4">
            {[
              {
                number: "01",
                title: "Understand",
                text: "We start by understanding your business, users and goals.",
              },
              {
                number: "02",
                title: "Design",
                text: "We create intuitive experiences around real user needs.",
              },
              {
                number: "03",
                title: "Build",
                text: "We develop clean, scalable and reliable digital products.",
              },
              {
                number: "04",
                title: "Improve",
                text: "We test, optimize and continuously improve the product.",
              },
            ].map((item, index) => (
              <Reveal key={item.number} delay={index * 0.08}>
                <div className="relative h-full rounded-[25px] border border-slate-200 bg-white p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-indigo-500 text-sm font-bold text-white">
                    {item.number}
                  </div>

                  <h3 className="mt-8 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CLIENTS CHOOSE US
      ===================================================== */}

      <section className="bg-slate-50 py-24 md:py-32">
        <div className="mx-auto max-w-[1450px] px-6 md:px-10 lg:px-16">
          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
            <Reveal>
              <span className="text-md font-bold uppercase tracking-[0.3em] text-indigo-600">
                 Why Clients Choose Us
              </span>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] md:text-6xl">
                Your growth is our priority.
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-slate-500">
                We combine business understanding, modern engineering and
                reliable communication to create long-term partnerships.
              </p>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;

                return (
                  <Reveal key={reason.title} delay={index * 0.06}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="group rounded-[24px] border border-slate-200 bg-white p-7 transition hover:border-blue-200"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-indigo-600 transition group-hover:bg-blue-600 group-hover:text-white">
                        <Icon size={19} />
                      </div>

                      <h3 className="mt-6 text-lg font-semibold">
                        {reason.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {reason.text}
                      </p>
                    </motion.div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          NUMBERS
      ===================================================== */}

      <section className="border-y border-slate-200 bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-[1450px] grid-cols-2 px-6 md:px-10 lg:grid-cols-4 lg:px-16">
          <Metric value="6+" label="Years IT Experience" />
          <Metric value="2026" label="Company Founded" />
          <Metric value="100%" label="Quality Focus" />
          <Metric value="24/7" label="Support Available" />
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#090d25] py-24 text-white md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(79,70,229,0.25),transparent_35%)]" />

        <div className="relative mx-auto max-w-[1450px] px-6 md:px-10 lg:px-16">
          <Reveal>
            <span className="text-md font-bold uppercase tracking-[0.3em] text-indigo-400">
               Our Process
            </span>

            <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
              From idea to deployment.
              <br />
              <span className="text-indigo-400">We stay with you.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400">
              Our end-to-end software development process covers discovery,
              design, development, testing, deployment and ongoing support.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-5 md:grid-cols-4 lg:grid-cols-7">
            {process.map((step, index) => {
              const Icon = step.icon;

              return (
                <Reveal key={step.number} delay={index * 0.05}>
                  <div className="group relative h-full border-t border-white/10 pt-6">
                    <span className="text-xs font-bold tracking-[0.2em] text-indigo-400">
                      {step.number}
                    </span>

                    <div className="mt-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-indigo-400 transition group-hover:border-blue-400/50 group-hover:bg-blue-500/10">
                      <Icon size={19} />
                    </div>

                    <h3 className="mt-5 font-semibold">{step.title}</h3>

                    <p className="mt-2 text-xs leading-5 text-slate-400">
                      {step.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          OUR WORK
      ===================================================== */}

      <section className="bg-slate-50 py-24 md:py-32">
        <div className="mx-auto max-w-[1450px] px-6 md:px-10 lg:px-16">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <span className="text-md font-bold uppercase tracking-[0.3em] text-indigo-600">
                Selected Work
              </span>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] md:text-6xl">
                Our work speaks for us.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500">
                Explore selected web development, e-commerce and custom
                software projects built for real business needs.
              </p>
            </Reveal>

            <a
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-600"
            >
              View All Projects
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.08}>
                <a
                  href={project.href}
                  target={project.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    project.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group block"
                >
                  <div className="relative  overflow-hidden rounded-[25px] border border-slate-200 bg-slate-100">
                <img
                     src={project.image}
                  />

                    <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg transition group-hover:bg-blue-600 group-hover:text-white">
                      <ArrowUpRight size={17} />
                    </div>
                  </div>
                 
                  <div className="mt-5">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
                      {project.category}
                    </span>

                    <h3 className="mt-2 text-2xl font-semibold">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {project.description}
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CLIENT TRUST
      ===================================================== */}

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1450px] px-6 md:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <Reveal>
              <span className="text-md font-bold uppercase tracking-[0.3em] text-indigo-600">
               Client Trust
              </span>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] md:text-6xl">
                Trusted by businesses building what's next.
              </h2>

              <p className="mt-5 max-w-md text-base leading-7 text-slate-500">
                Real experiences, real projects and long-term partnerships
                built through communication, quality and reliable delivery.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-[30px] border border-slate-200 bg-slate-50 p-8 md:p-12">
                <div className="text-6xl font-serif leading-none text-indigo-100">
                  “
                </div>

                <blockquote className="mt-4 max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-slate-900 md:text-4xl">
                  They understood exactly what we needed and delivered a great
                  website.
                </blockquote>

                <div className="mt-9 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-indigo-500 text-sm font-bold text-white">
                    MB
                  </div>

                  <div>
                    <p className="font-semibold text-slate-950">
                      Mitesh Bourashi
                    </p>

                    <p className="text-sm text-slate-500">
                      Founder & CEO, JupitoData
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.linkedin.com/company/jupitodata/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-600"
                >
                  View Client LinkedIn
                  <LiaLinkedinIn size={16} />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative overflow-hidden px-5 pb-10">
        <div className="relative mx-auto max-w-[1450px] overflow-hidden rounded-[35px] bg-[#090d25] px-6 py-20 text-white md:px-12 md:py-28 lg:px-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(99,102,241,0.35),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.2),transparent_35%)]" />

          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 3, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[8%] top-[20%] hidden h-24 w-24 rotate-12 rounded-[25px] border border-white/10 bg-gradient-to-br from-blue-500/30 to-violet-500/30 backdrop-blur-md lg:block"
          />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <Reveal>
              <span className="text-md font-bold uppercase tracking-[0.3em] text-indigo-400">
                Let's Build Together
              </span>

              <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.045em] md:text-6xl">
                Have a problem worth solving?
                <br />
                <span className="text-indigo-400">
                  Let's turn it into something digital.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400">
                Whether you're starting a new product, modernizing an existing
                system, or building your next digital experience, we're ready
                to help—from strategy to deployment and beyond.
              </p>
            </Reveal>

            <motion.a
              href="/contact"
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-violet-500 px-8 py-4 text-sm font-semibold text-white shadow-[0_15px_40px_-12px_rgba(79,70,229,0.7)]"
            >
              Start a Project
              <ArrowUpRight size={18} />
            </motion.a>
          </div>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   REUSABLE COMPONENTS
========================================================= */

function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
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
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

function Proof({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-medium text-slate-600 shadow-sm backdrop-blur">
      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-white">
        <Check size={10} strokeWidth={3} />
      </span>

      {text}
    </div>
  );
}

function DarkPrinciple({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <span className="text-xs font-bold tracking-[0.2em] text-indigo-400">
        {number}
      </span>

      <h3 className="mt-4 font-semibold">{title}</h3>

      <p className="mt-2 text-xs leading-5 text-slate-400">{text}</p>
    </div>
  );
}

function PhilosophyCard({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ElementType;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/[0.06]"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-indigo-600">
        <Icon size={19} />
      </div>

      <h3 className="mt-6 font-semibold">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
    </motion.div>
  );
}

function Metric({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="border-slate-200 px-5 py-7 text-center sm:px-8 lg:border-r lg:last:border-r-0">
      <motion.p
        initial={{
          opacity: 0,
          y: 15,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="text-4xl font-semibold tracking-[-0.05em] text-indigo-600 md:text-5xl"
      >
        {value}
      </motion.p>

      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
        {label}
      </p>
    </div>
  );
}
function TechMarquee({
  items,
  direction,
  duration,
}: {
  items: {
    name: string;
    icon: React.ElementType;
    color: string;
  }[];
  direction: "left" | "right";
  duration: number;
}) {
  const repeatedItems = [...items, ...items, ...items];

  return (
    <div className="overflow-hidden py-2">
      <motion.div
        className="flex w-max gap-4 sm:gap-5"
        animate={{
          x: direction === "left" ? ["0%", "-33.333333%"] : ["-33.333333%", "0%"],
        }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {repeatedItems.map((tech, index) => {
          const Icon = tech.icon;

          return (
            <motion.div
              key={`${tech.name}-${index}`}
              whileHover={{ y: -7, scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className="group relative flex h-[155px] w-[145px] shrink-0 flex-col items-center justify-center overflow-hidden rounded-[26px] border border-slate-200/90 bg-white shadow-[0_14px_35px_-22px_rgba(15,23,42,0.35)] transition-all duration-300 hover:border-slate-300 hover:shadow-[0_22px_45px_-20px_rgba(15,23,42,0.20)] sm:h-[170px] sm:w-[160px] sm:rounded-[28px]"
            >
              <div
                className="pointer-events-none absolute -inset-8 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-15"
                style={{ backgroundColor: tech.color }}
              />

              <div className="relative z-10 flex h-[70px] w-[70px] items-center justify-center rounded-[22px] bg-slate-50 transition-all duration-300 group-hover:bg-white group-hover:shadow-sm sm:h-[76px] sm:w-[76px]">
                <Icon
                  size={43}
                  style={{ color: tech.color }}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <h3 className="relative z-10 mt-5 text-center text-sm font-bold tracking-[-0.01em] text-slate-800 sm:text-[15px]">
                {tech.name}
              </h3>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

function TeamPlaceholder({
  role,
}: {
  role: string;
}) {
  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
      className="group rounded-[25px] border border-slate-200 bg-white p-5 shadow-sm"
    >
      <div className="flex aspect-[1.3] items-center justify-center overflow-hidden rounded-[18px] bg-gradient-to-br from-blue-50 via-white to-violet-100">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 text-2xl font-bold text-white shadow-xl transition group-hover:scale-105">
          {role.charAt(0)}
        </div>
      </div>

      <div className="mt-5">
        <p className="font-semibold text-slate-950">
          {role} Team
        </p>

        <p className="mt-1 text-xs text-slate-500">
          Building better digital experiences.
        </p>
      </div>
    </motion.div>
  );
}