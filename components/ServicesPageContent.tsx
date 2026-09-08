"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  Bug,
  ClipboardCheck,
  Brain,
  BrainCircuit,
  Building2,
  ChartNoAxesCombined,
  ChevronDown,
  Clapperboard,
  Cloud,
  Code2,
  Coins,
  Cpu,
  Database,
  Factory,
  Gauge,
  Globe2,
  GraduationCap,
  Headphones,
  HeartPulse,
  Landmark,
  Landmark as GovernmentIcon,
  Megaphone,
  MonitorCheck,
  MousePointerClick,
  Palette,
  Plane,
  Rocket,
  Search,
  Settings2,
  Share2,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  Truck,
  Users,
  Utensils,
  Workflow,
  Zap,
} from "lucide-react";
const categories = [
  {
    id: "custom-software",
    title: "Custom Software Development",
    bullets: [
      "Custom Software Development Services",
      "Enterprise Software Development",
      "Custom Web Application Development",
      "SaaS Application Development",
      "CRM & ERP Software Development",
      "Business Process Automation Solutions",
      "AI-Powered Software Development",
      "API Development & Third-Party Integration",
      "Custom Dashboard & Admin Panel Development",
      "MVP Product Development",
      "Database Design & Software Architecture",
    ],
  },

  {
    id: "website-development",
    title: "Website Development",
    bullets: [
      "Business Website Development",
      "Corporate Website Development",
      "Custom Website Development",
      "E-commerce Website Development",
      "Landing Page Development",
      "CMS Website Development",
      "WordPress Website Development",
      "Shopify Website Development",
      "Website Redesign Services",
      "Website Maintenance & Support",
    ],
  },

  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    bullets: [
      "Cross-Platform Mobile App Development",
      "Android App Development",
      "iOS App Development",
      "Hybrid Mobile App Development",
      "Enterprise Mobile App Development",
      "E-commerce Mobile App Development",
      "On-Demand App Development",
      "AI Mobile App Development",
      "IoT Mobile App Development",
      "Mobile App Maintenance & Support",
    ],
  },

  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    bullets: [
      "UI/UX Design Services",
      "Website UI/UX Design",
      "Mobile App UI/UX Design",
      "Product Design",
      "Dashboard UI/UX Design",
      "Admin Panel Design",
      "Wireframing & Prototyping",
      "UX Research & Strategy",
      "Design System Development",
      "Social Media Graphic Design",
    ],
  },

  {
    id: "ai-iot-solutions",
    title: "AI & IoT Solutions",
    bullets: [
      "AI Chatbot Development",
      "AI Agent Development",
      "Generative AI Development",
      "Enterprise AI Solutions",
      "Large Language Model (LLM) Integration",
      "Natural Language Processing (NLP) Solutions",
      "Machine Learning Development",
      "Predictive Analytics Solutions",
      "Computer Vision Solutions",
      "AI Workflow Automation",
      "Smart Home IoT Solutions",
      "Industrial IoT (IIoT) Solutions",
      "IoT Dashboard Development",
      "Connected Device Integration",
      "Sensor Integration Services",
      "IoT Maintenance & Support",
    ],
  },

  {
    id: "digital-marketing",
    title: "Digital Marketing",
    bullets: [
      "Search Engine Optimization (SEO)",
      "Answer Engine Optimization (AEO)",
      "Local SEO Services",
      "Technical SEO",
      "Pay-Per-Click (PPC) Advertising",
      "Google Ads Management",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "Marketing Automation",
      "Conversion Rate Optimization (CRO)",
      "Lead Generation Services",
      "Online Reputation Management (ORM)",
      "Google Business Profile Optimization",
      "Analytics & Performance Reporting",
    ],
  },

  {
    id: "cms-development",
    title: "CMS Development",
    bullets: [
      "WordPress Development",
      "Shopify Development",
      "Headless CMS Development",
      "Custom CMS Development",
      "CMS Migration Services",
      "CMS Maintenance & Support",
      "Content Management Solutions",
      "WordPress Plugin Development",
      "Shopify Theme Development",
      "CMS Performance Optimization",
    ],
  },

  {
    id: "ecommerce-development",
    title: "E-Commerce Development",
    bullets: [
      "Shopify Store Development",
      "WooCommerce Development",
      "Magento Development",
      "Custom E-commerce Development",
      "Marketplace Development",
      "Multi-Vendor Marketplace Development",
      "Payment Gateway Integration",
      "Inventory Management Solutions",
      "Subscription Commerce Solutions",
      "E-commerce Maintenance & Support",
    ],
  },

  {
    id: "full-stack-development",
    title: "Full-Stack Development",
    bullets: [
      "Frontend Development",
      "Backend Development",
      "Full-Stack Web Development",
      "REST API Development",
      "GraphQL API Development",
      "Database Design & Development",
      "Authentication & Security",
      "Cloud Application Development",
      "Microservices Development",
      "DevOps & CI/CD Services",
    ],
  },

  {
    id: "enterprise-solutions",
    title: "Enterprise Solutions",
    bullets: [
      "Enterprise Software Development",
      "CRM & ERP Implementation",
      "Business Process Automation",
      "Digital Transformation Services",
      "Cloud Migration Services",
      "Enterprise System Integration",
      "Enterprise Dashboard Development",
      "Business Intelligence Solutions",
      "Legacy Application Modernization",
      "Enterprise Consulting Services",
    ],
  },

  {
    id: "enterprise-ai",
    title: "Enterprise AI",
    bullets: [
      "Enterprise AI Development",
      "AI Agent Development",
      "AI Chatbot Development",
      "Generative AI Solutions",
      "AI Consulting & Strategy",
      "Document Intelligence Solutions",
      "Intelligent Process Automation",
      "Knowledge Management AI",
      "Enterprise Search Solutions",
      "AI Workflow Automation",
    ],
  },
];

const categoryTheme = [
  {
    border: "border-blue-200/80 hover:border-blue-400/80",
    ring: "ring-blue-500/10",
    accent: "text-blue-600",
    icon: "from-blue-500 to-indigo-600",
  },
  {
    border: "border-cyan-200/80 hover:border-cyan-400/80",
    ring: "ring-cyan-500/10",
    accent: "text-cyan-600",
    icon: "from-cyan-400 to-blue-600",
  },
  {
    border: "border-violet-200/80 hover:border-violet-400/80",
    ring: "ring-violet-500/10",
    accent: "text-violet-600",
    icon: "from-violet-500 to-indigo-600",
  },
];
const industries = [
  {
    title: "Healthcare",
    icon: HeartPulse,
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "Banking & Financial Services",
    icon: Landmark,
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    title: "E-commerce & Retail",
    icon: ShoppingCart,
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    title: "Manufacturing",
    icon: Factory,
    gradient: "from-green-500 to-emerald-400",
  },
  {
    title: "Education & EdTech",
    icon: GraduationCap,
    gradient: "from-amber-500 to-yellow-400",
  },
  {
    title: "Real Estate",
    icon: Building2,
    gradient: "from-orange-500 to-amber-400",
  },
  {
    title: "Logistics & Supply Chain",
    icon: Truck,
    gradient: "from-red-500 to-orange-400",
  },
  {
    title: "Travel & Hospitality",
    icon: Plane,
    gradient: "from-pink-500 to-rose-400",
  },
  {
    title: "Food & Restaurant",
    icon: Utensils,
    gradient: "from-fuchsia-500 to-pink-400",
  },
  {
    title: "SaaS & Software Products",
    icon: BrainCircuit,
    gradient: "from-violet-500 to-purple-400",
  },
  {
    title: "FinTech",
    icon: Coins,
    gradient: "from-purple-500 to-indigo-400",
  },
  {
    title: "Media & Entertainment",
    icon: Clapperboard,
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    title: "Government & Public Sector",
    icon: GovernmentIcon,
    gradient: "from-indigo-500 to-blue-400",
  },
  {
    title: "Artificial Intelligence (AI)",
    icon: Cpu,
    gradient: "from-cyan-500 to-blue-500",
  },
];

const mainServices = [
  {
    title: "Digital Growth Strategy",
    description:
      "Data-driven growth strategies aligned with your business goals to create sustainable and scalable digital growth.",
    icon: TrendingUp,
    tags: ["Strategy", "Research", "SEO", "Analytics"],
    accent: "blue",
    featured: true,
  },
  {
    title: "Lead Generation",
    description:
      "Attract, engage and convert high-quality B2B and B2C leads that strengthen your sales pipeline.",
    icon: Users,
    tags: ["B2B", "B2C", "Lead Funnels"],
    accent: "cyan",
  },
  {
    title: "SEO & Organic Growth",
    description:
      "Improve search visibility, rank higher on Google and drive consistent organic traffic with technical and content SEO.",
    icon: Search,
    tags: ["Keyword Research", "Technical SEO", "On-Page SEO"],
    accent: "blue",
  },
  {
    title: "Performance Marketing",
    description:
      "ROI-focused paid campaigns designed to generate qualified traffic, leads and conversions.",
    icon: MousePointerClick,
    tags: ["PPC", "Google Ads", "Optimization"],
    accent: "blue",
  },
  {
    title: "Conversion Rate Optimization",
    description:
      "Turn more website visitors into customers using data-backed CRO, UX optimization and funnel improvements.",
    icon: Target,
    tags: ["CRO", "A/B Testing", "Funnels"],
    accent: "violet",
  },
  {
    title: "Marketing Automation",
    description:
      "Automate campaigns, customer journeys and repetitive marketing workflows to improve efficiency.",
    icon: Workflow,
    tags: ["Email", "Automation", "Workflows"],
    accent: "violet",
  },
  {
    title: "CRM & Sales Automation",
    description:
      "Connect CRM systems and automate sales workflows to improve follow-ups, conversions and customer relationships.",
    icon: Settings2,
    tags: ["CRM", "Sales", "Integration"],
    accent: "violet",
  },
  {
    title: "Analytics & Business Intelligence",
    description:
      "Transform business data into actionable insights through dashboards, reporting and performance analytics.",
    icon: BarChart3,
    tags: ["Analytics", "Dashboards", "BI"],
    accent: "cyan",
  },
];

const additionalServices = [
  {
    title: "Online Reputation Management",
    short: "ORM",
    icon: Globe2,
  },
  {
    title: "Pay-Per-Click Advertising",
    short: "PPC",
    icon: MousePointerClick,
  },
  {
    title: "Influencer Marketing",
    short: "Influencer",
    icon: Users,
  },
  {
    title: "App Store Optimization",
    short: "ASO",
    icon: Smartphone,
  },
  {
    title: "Social Media Growth",
    short: "Social",
    icon: Share2,
  },
  {
    title: "Website Performance Optimization",
    short: "Performance",
    icon: Gauge,
  },
  {
    title: "Digital Marketing",
    short: "Marketing",
    icon: Megaphone,
  },
];

const accentClasses = {
  blue: {
    icon: "from-blue-500 to-indigo-600",
    glow: "bg-blue-500/20",
    border: "group-hover:border-blue-400/50",
    text: "text-blue-400",
    line: "from-blue-500 via-cyan-400 to-transparent",
  },
  cyan: {
    icon: "from-cyan-400 to-blue-600",
    glow: "bg-cyan-400/20",
    border: "group-hover:border-cyan-400/50",
    text: "text-cyan-400",
    line: "from-cyan-400 via-blue-500 to-transparent",
  },
  violet: {
    icon: "from-violet-500 to-indigo-600",
    glow: "bg-violet-500/20",
    border: "group-hover:border-violet-400/50",
    text: "text-violet-400",
    line: "from-violet-500 via-blue-500 to-transparent",
  },
};

const supportServices = [
  {
    id: "support",
    title: "24/7 Support",
    description:
      "Expert technical assistance whenever your website, application, or business software needs attention.",
    icon: Headphones,
    accent: "orange",
    details: ["Technical troubleshooting", "Emergency support", "Production assistance"],
  },
  {
    id: "amc",
    title: "Annual Maintenance Contracts",
    description:
      "Structured AMC plans for predictable, proactive, and long-term digital product maintenance.",
    icon: ClipboardCheck,
    accent: "blue",
    details: ["Scheduled maintenance", "Priority support", "Regular health checks"],
  },
  {
    id: "application",
    title: "Application Monitoring",
    description:
      "Continuous monitoring to detect application errors, downtime, and performance issues early.",
    icon: MonitorCheck,
    accent: "violet",
    details: ["Health monitoring", "Error tracking", "Availability alerts"],
  },
  {
    id: "website",
    title: "Website Maintenance",
    description:
      "Keep your business website secure, updated, fast, and technically healthy.",
    icon: Globe2,
    accent: "cyan",
    details: ["Technical updates", "Security maintenance", "Website optimization"],
  },
  {
    id: "software",
    title: "Software Maintenance",
    description:
      "Ongoing updates, enhancements, compatibility improvements, and technical support for custom software.",
    icon: Settings2,
    accent: "violet",
    details: ["Software updates", "Feature improvements", "Compatibility fixes"],
  },
  {
    id: "performance",
    title: "Performance Monitoring",
    description:
      "Track speed, stability, and resource usage to deliver a consistently better user experience.",
    icon: Gauge,
    accent: "blue",
    details: ["Performance tracking", "Speed optimization", "Resource monitoring"],
  },
  {
    id: "security",
    title: "Security Updates",
    description:
      "Stay protected with timely security patches, dependency updates, and vulnerability fixes.",
    icon: ShieldCheck,
    accent: "cyan",
    details: ["Security patches", "Dependency updates", "Vulnerability fixes"],
  },
  {
    id: "bugs",
    title: "Bug Fixes",
    description:
      "Identify root causes and resolve software issues quickly to reduce downtime and disruption.",
    icon: Bug,
    accent: "violet",
    details: ["Bug identification", "Root-cause analysis", "Regression testing"],
  },
];

const networkServices = [
  {
    title: "WEB DEVELOPMENT",
    icon: Code2,
    color: "#3B82F6",
    position: "web",
  },
  {
    title: "AI & MACHINE LEARNING",
    icon: Brain,
    color: "#8B5CF6",
    position: "ai",
  },
  {
    title: "UI/UX DESIGN",
    icon: Palette,
    color: "#3B82F6",
    position: "ui",
  },
  {
    title: "CLOUD SOLUTIONS",
    icon: Cloud,
    color: "#3B82F6",
    position: "cloud",
  },
  {
    title: "MOBILE APP DEVELOPMENT",
    icon: Smartphone,
    color: "#6366F1",
    position: "mobile",
  },
  {
    title: "DATA & ANALYTICS",
    icon: BarChart3,
    color: "#8B5CF6",
    position: "data",
  },
  {
    title: "SOFTWARE DEVELOPMENT",
    icon: ShieldCheck,
    color: "#3B82F6",
    position: "software",
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Trusted by Businesses",
    description:
      "Delivering secure, scalable and reliable business solutions.",
  },
  {
    icon: Rocket,
    title: "Innovation at Core",
    description:
      "We use emerging technologies to drive real-world impact.",
  },
  {
    icon: Headphones,
    title: "End-to-End Support",
    description:
      "From strategy to deployment and beyond, we've got you covered.",
  },
];

export default function ServicesSection() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <section className="relative overflow-hidden bg-[#fbfcff] text-slate-900">

      {/* =========================================================
          HERO BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Blue atmosphere */}

        <div
          className="
            absolute
            -left-[300px]
            top-[50px]
            h-[650px]
            w-[650px]
            rounded-full
            bg-blue-100/40
            blur-[160px]
          "
        />

        {/* Violet atmosphere */}

        <div
          className="
            absolute
            right-[-250px]
            top-[150px]
            h-[600px]
            w-[600px]
            rounded-full
            bg-violet-100/40
            blur-[160px]
          "
        />
  {/* Top glow */}

        <div
          className="
            absolute
            left-1/2
            top-0
            h-[400px]
            w-[800px]
            -translate-x-1/2
            rounded-full
            bg-blue-100/40
            blur-[150px]
          "
        />
         {/* Left glow */}

        <div
          className="
            absolute
            -left-40
            top-1/2
            h-[400px]
            w-[400px]
            rounded-full
            bg-cyan-100/30
            blur-[140px]
          "
        />
         {/* Right glow */}

        <div
          className="
            absolute
            -right-40
            bottom-0
            h-[400px]
            w-[400px]
            rounded-full
            bg-violet-100/30
            blur-[140px]
          "
        />
        {/* Bottom cyan glow */}

        <div
          className="
            absolute
            bottom-[-300px]
            left-1/2
            h-[600px]
            w-[900px]
            -translate-x-1/2
            rounded-full
            bg-cyan-100/30
            blur-[180px]
          "
        />

      </div>

      {/* =========================================================
          HERO
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-10">

        <div className="grid items-center gap-10 lg:grid-cols-[0.78fr_1.22fr]">

          {/* =====================================================
              LEFT SIDE
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative z-30"
          >

            {/* Label */}

            <div className="mb-7 flex items-center gap-3">


              <span
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-indigo-600
                "
              >
                Services & Solutions
              </span>

            </div>

            {/* Heading */}

            <h1
              className="
                max-w-xl
                text-5xl
                font-black
                leading-[1.04]
                tracking-[-0.045em]
                text-[#0b1736]
                sm:text-6xl
                lg:text-[62px]
                xl:text-[68px]
              "
            >
              Full-Service
              <br />

              <span className="bg-gradient-to-r from-[#172554] via-[#2563eb] to-[#7c3aed] bg-clip-text text-transparent">
                Digital
              </span>

              <br />

              Capabilities
            </h1>

            {/* Description */}

            <p
              className="
                mt-7
                max-w-lg
                text-base
                leading-8
                text-slate-600
                sm:text-lg
              "
            >
              Explore our service categories, discover detailed
              capabilities, and find the right technology solutions
              to move your business forward.
            </p>

            {/* Accent */}

            <div className="mt-8 h-[3px] w-16 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />

            {/* Benefits */}

            <div className="mt-8 space-y-5">

              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;

                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + index * 0.1,
                    }}
                    className="group flex items-start gap-4"
                  >

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-blue-100
                        bg-white
                        shadow-[0_8px_30px_rgba(37,99,235,.08)]
                        transition-all
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:border-blue-200
                        group-hover:shadow-[0_12px_35px_rgba(37,99,235,.15)]
                      "
                    >
                      <Icon
                        size={20}
                        className="text-blue-600"
                      />
                    </div>

                    <div>

                      <h3 className="text-sm font-bold text-[#0b1736] sm:text-base">
                        {benefit.title}
                      </h3>

                      <p className="mt-1 max-w-sm text-sm leading-6 text-slate-500">
                        {benefit.description}
                      </p>

                    </div>

                  </motion.div>
                );
              })}

            </div>

          </motion.div>

          {/* =====================================================
              RIGHT SIDE — ANIMATED SERVICE NETWORK
          ====================================================== */}

          <div className="relative h-[580px] w-full sm:h-[640px]">

            {/* Flowing background */}

            <FlowingBackground />

            {/* Connection SVG */}

            <svg
              viewBox="0 0 700 620"
              className="
                pointer-events-none
                absolute
                inset-0
                h-full
                w-full
                overflow-visible
              "
            >

              <AnimatedPath
                d="M145 120 C240 120 270 165 320 220"
                color="#3B82F6"
              />

              <AnimatedPath
                d="M555 110 C475 110 445 160 390 220"
                color="#8B5CF6"
              />

              <AnimatedPath
                d="M95 285 C190 285 245 285 300 305"
                color="#3B82F6"
                dashed
              />

              <AnimatedPath
                d="M400 305 C480 305 525 290 610 290"
                color="#3B82F6"
                dashed
              />

              <AnimatedPath
                d="M120 455 C210 455 255 410 315 350"
                color="#6366F1"
              />

              <AnimatedPath
                d="M390 350 C460 410 500 455 585 455"
                color="#8B5CF6"
              />

              <AnimatedPath
                d="M350 370 L350 525"
                color="#3B82F6"
              />

            </svg>

            {/* =================================================
                CENTER HUB
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                type: "spring",
              }}
              className="
                absolute
                left-1/2
                top-1/2
                z-20
                flex
                h-[175px]
                w-[175px]
                -translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
                sm:h-[190px]
                sm:w-[190px]
              "
            >

              {/* Rotating outer ring */}

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 28,
                  repeat: Infinity,
                  ease: [0, 0, 1, 1],
                }}
                className="
                  absolute
                  inset-[-18px]
                  rounded-full
                  border
                  border-dashed
                  border-blue-200/70
                "
              />

              {/* Second ring */}

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: [0, 0, 1, 1],
                }}
                className="
                  absolute
                  inset-[-5px]
                  rounded-full
                  border
                  border-blue-100
                "
              />

              {/* Glow */}

              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.25, 0.4, 0.25],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  absolute
                  inset-0
                  rounded-full
                  bg-blue-200/30
                  blur-3xl
                "
              />

              {/* Main glass hub */}

              <div
                className="
                  relative
                  flex
                  h-[145px]
                  w-[145px]
                  flex-col
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white
                  bg-white/90
                  shadow-[0_20px_70px_rgba(37,99,235,.16)]
                  backdrop-blur-xl
                  sm:h-[155px]
                  sm:w-[155px]
                "
              >

                {/* Logo mark */}

                <div className="relative mb-3 h-9 w-9">

                  <motion.div
                    animate={{
                      rotate: [0, 90, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      absolute
                      left-1
                      top-1
                      h-7
                      w-7
                      rounded-sm
                      border-2
                      border-blue-400
                    "
                  />

                  <div
                    className="
                      absolute
                      left-4
                      top-0
                      h-7
                      w-7
                      rounded-sm
                      border-2
                      border-violet-400
                    "
                  />

                  <div
                    className="
                      absolute
                      left-3
                      top-3
                      h-7
                      w-7
                      rounded-sm
                      border-2
                      border-indigo-400
                    "
                  />

                </div>

                <span
                  className="
                    text-center
                    text-base
                    font-black
                    leading-5
                    tracking-tight
                    text-[#0b1736]
                    sm:text-lg
                  "
                >
                  DIGITAL
                  <br />
                  SOLUTIONS
                </span>

              </div>

            </motion.div>

            {/* =================================================
                SERVICE NODES
            ================================================== */}

            {networkServices.map((service, index) => (
              <ServiceNode
                key={service.title}
                service={service}
                index={index}
              />
            ))}

          </div>

        </div>

      </div>

      {/* =========================================================
          BUSINESS GROWTH & DIGITAL ACCELERATION
      ========================================================== */}

<section
  id="growth-services"
  className="
    relative
    overflow-hidden
    bg-white
    py-28
    text-slate-900
  "
>
  {/* =========================================================
      BACKGROUND GLOW
  ========================================================= */}

  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    {/* Large blue glow */}
    <motion.div
      animate={{
        x: [0, 60, 0],
        y: [0, -40, 0],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        absolute
        -left-40
        top-20
        h-[500px]
        w-[500px]
        rounded-full
        bg-blue-500/10
        blur-[140px]
      "
    />

    {/* Violet glow */}
    <motion.div
      animate={{
        x: [0, -70, 0],
        y: [0, 50, 0],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        absolute
        -right-40
        top-1/3
        h-[500px]
        w-[500px]
        rounded-full
        bg-violet-500/10
        blur-[150px]
      "
    />

    {/* Cyan glow */}
    <motion.div
      animate={{
        scale: [1, 1.15, 1],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        absolute
        bottom-0
        left-1/2
        h-[350px]
        w-[350px]
        -translate-x-1/2
        rounded-full
        bg-cyan-400/10
        blur-[130px]
      "
    />

    {/* Grid */}
    <div
      className="
        absolute
        inset-0
        opacity-[0.035]
        [background-image:linear-gradient(rgba(15,23,42,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,.055)_1px,transparent_1px)]
        [background-size:80px_80px]
      "
    />
  </div>

  {/* =========================================================
      CONTENT
  ========================================================= */}

  <div className="relative z-10 mx-auto max-w-7xl px-6">

    {/* =======================================================
        HEADING
    ======================================================= */}

    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mx-auto max-w-4xl text-center"
    >
      {/* Badge */}

      <div
        className="
          mx-auto
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-blue-400/20
          bg-blue-500/[0.07]
          px-5
          py-2
          text-xs
          font-bold
          uppercase
          tracking-[0.25em]
          text-indigo-600
          shadow-[0_0_30px_rgba(59,130,246,.08)]
        "
      >
        <Sparkles size={14} />

        Growth Services

        <Sparkles size={14} />
      </div>

      {/* Heading */}

      <h2
        className="
          mt-7
          text-4xl
          font-black
          tracking-tight
          text-slate-900
          sm:text-5xl
          lg:text-6xl
        "
      >
        Business Growth &{" "}
        <span
          className="
            bg-gradient-to-r
            from-blue-500
            via-indigo-600
            to-violet-500
            bg-clip-text
            text-transparent
          "
        >
          Digital Acceleration
        </span>
      </h2>

      <p
        className="
          mx-auto
          mt-6
          max-w-3xl
          text-base
          leading-8
          text-slate-600
          sm:text-lg
        "
      >
        Turn your digital presence into measurable business growth
        with data-driven strategies, SEO, performance marketing,
        automation and conversion-focused experiences.
      </p>
    </motion.div>

    {/* =======================================================
        MAIN SERVICES GRID
    ======================================================= */}

    <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

      {mainServices.map((service, index) => {
        const Icon = service.icon;

        const accent =
          accentClasses[
            service.accent as keyof typeof accentClasses
          ];

        return (
          <motion.div
            key={ service.title }
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-80px",
            }}
            transition={{
              duration: 0.55,
              delay: index * 0.06,
            }}
            whileHover={{
              y: -8,
            }}
            className={`
              group
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-slate-200
              bg-white
              p-7
              backdrop-blur-xl
              transition-all
              duration-500
              hover:bg-slate-50
              hover:shadow-[0_25px_80px_rgba(0,0,0,.35)]
              ${accent.border}
            `}
          >

            {/* Card top glow */}

            <div
              className={`
                absolute
                left-0
                right-0
                top-0
                h-px
                bg-gradient-to-r
                ${accent.line}
                opacity-70
              `}
            />

            {/* Hover glow */}

            <div
              className={`
                absolute
                -right-20
                -top-20
                h-40
                w-40
                rounded-full
                ${accent.glow}
                opacity-0
                blur-[70px]
                transition-opacity
                duration-500
                group-hover:opacity-100
              `}
            />

            {/* Header */}

            <div className="relative z-10 flex items-start justify-between">

              {/* Icon */}

              <div
                className={`
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  ${accent.icon}
                  shadow-[0_10px_35px_rgba(37,99,235,.22)]
                `}
              >
                <Icon
                  size={25}
                  strokeWidth={1.8}
                  className="text-white"
                />
              </div>

              {/* Number */}

             
            </div>

            {/* Title */}

            <h3
              className="
                relative
                z-10
                mt-7
                text-xl
                font-bold
                tracking-tight
                text-slate-900
              "
            >
              {service.title}
            </h3>

            {/* Description */}

            <p
              className="
                relative
                z-10
                mt-3
                text-sm
                leading-7
                text-slate-600
              "
            >
              {service.description}
            </p>

            {/* Tags */}

            <div
              className="
                relative
                z-10
                mt-6
                flex
                flex-wrap
                gap-2
              "
            >
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="
                    rounded-full
                    border
                    border-slate-200
                    bg-slate-50
                    px-3
                    py-1.5
                    text-[11px]
                    font-medium
                    text-slate-600
                    transition-colors
                    duration-300
                    group-hover:text-slate-600
                  "
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Arrow */}

            <div
              className="
                relative
                z-10
                mt-7
                flex
                items-center
                justify-between
              "
            >
             

          
            </div>
          </motion.div>
        );
      })}

    </div>

    {/* =======================================================
        ADDITIONAL SERVICES
    ======================================================= */}

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
      }}
      transition={{
        duration: 0.7,
      }}
      className="
        mt-6
        rounded-[28px]
        border
        border-slate-200
        bg-slate-50/70
        p-5
        backdrop-blur-xl
      "
    >

      <div
        className="
          mb-5
          flex
          items-center
          gap-3
        "
      >
        <div
          className="
            h-2
            w-2
            rounded-full
            bg-cyan-400
            shadow-[0_0_15px_rgba(34,211,238,.8)]
          "
        />

        <span
          className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.2em]
            text-slate-500
          "
        >
          Additional Growth Capabilities
        </span>
      </div>

      <div
        className="
          grid
          grid-cols-2
          gap-3
          sm:grid-cols-3
          lg:grid-cols-7
        "
      >

        {additionalServices.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.title}
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.05,
              }}
              whileHover={{
                y: -4,
              }}
              className="
                group
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                p-4
                text-center
                transition-all
                duration-300
                hover:border-blue-400/30
                hover:bg-blue-500/[0.06]
              "
            >

              <div
                className="
                  mx-auto
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-gradient-to-br
                  from-blue-500/20
                  to-violet-500/20
                  text-blue-400
                  transition-all
                  duration-300
                  group-hover:scale-110
                  group-hover:shadow-[0_0_25px_rgba(59,130,246,.2)]
                "
              >
                <Icon size={18} />
              </div>

              <p
                className="
                  mt-3
                  text-xs
                  font-semibold
                  leading-5
                  text-slate-600
                "
              >
                {service.title}
              </p>

              <span
                className="
                  mt-1
                  block
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-wider
                  text-slate-600
                "
              >
                {service.short}
              </span>

            </motion.div>
          );
        })}

      </div>
    </motion.div>

    {/* =======================================================
        SEO / GROWTH VISUAL STRIP
    ======================================================= */}

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
      }}
      transition={{
        duration: 0.7,
      }}
      className="
        relative
        mt-6
        overflow-hidden
        rounded-[30px]
        border
        border-blue-200
        bg-gradient-to-r
        from-blue-50
        via-white
        to-violet-50
        px-7
        py-8
      "
    >

      {/* Animated graph */}

      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          right-0
          w-1/2
          opacity-20
        "
      >
        <svg
          viewBox="0 0 500 180"
          className="h-full w-full"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="
              M0 160
              C50 155 60 125 100 130
              C140 135 150 100 190 108
              C230 115 250 80 285 88
              C325 98 335 60 370 65
              C410 70 430 35 500 15
            "
            stroke="url(#growthGradient)"
            strokeWidth="3"
          />

          <defs>
            <linearGradient
              id="growthGradient"
              x1="0"
              y1="0"
              x2="1"
              y2="0"
            >
              <stop
                stopColor="#22D3EE"
              />
              <stop
                offset="0.5"
                stopColor="#3B82F6"
              />
              <stop
                offset="1"
                stopColor="#8B5CF6"
              />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-2xl">

        <div
          className="
            flex
            items-center
            gap-2
            text-xs
            font-semibold
            uppercase
            tracking-[0.2em]
            text-blue-400
          "
        >
          <ChartNoAxesCombined size={16} />

          Data-driven growth
        </div>

        <h3
          className="
            mt-3
            text-2xl
            font-bold
            text-slate-900
          "
        >
          From visibility to conversion —
          <span className="text-blue-400">
            {" "}
            we optimize the entire growth journey.
          </span>
        </h3>

        <p
          className="
            mt-3
            text-sm
            leading-7
            text-slate-600
          "
        >
          SEO, paid acquisition, website performance,
          conversion optimization, automation and analytics
          work together to create a scalable digital growth engine.
        </p>

      </div>

      {/* Floating glow */}

      <motion.div
        animate={{
          x: [0, 30, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          -right-20
          top-1/2
          h-48
          w-48
          -translate-y-1/2
          rounded-full
          bg-blue-500/10
          blur-[80px]
        "
      />

    </motion.div>

    {/* =======================================================
        CTA
    ======================================================= */}

    <motion.div
      initial={{
        opacity: 0,
        scale: 0.98,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
      }}
      className="
        relative
        mt-8
        overflow-hidden
        rounded-[30px]
        border
        border-slate-200
        bg-white
        px-7
        py-9
        text-center
        backdrop-blur-xl
        sm:px-10
      "
    >

      <div
        className="
          absolute
          left-1/2
          top-0
          h-px
          w-1/2
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-blue-400
          to-transparent
        "
      />

      <div
        className="
          mx-auto
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-br
          from-blue-500
          to-violet-600
          shadow-[0_0_35px_rgba(59,130,246,.25)]
        "
      >
        <Zap size={22} className="text-white" />
      </div>

      <h3
        className="
          mt-5
          text-2xl
          font-bold
          text-slate-900
        "
      >
        Ready to accelerate your business growth?
      </h3>

      <p
        className="
          mx-auto
          mt-3
          max-w-2xl
          text-sm
          leading-7
          text-slate-600
        "
      >
        Let's build a measurable growth strategy that
        turns traffic into leads, leads into customers,
        and customers into long-term business value.
      </p>

      <motion.a
        href="/#contact"
        whileHover={{
          scale: 1.04,
        }}
        whileTap={{
          scale: 0.97,
        }}
        className="
          mt-7
          inline-flex
          items-center
          gap-2
          rounded-full
          bg-gradient-to-r
          from-blue-500
          via-indigo-500
          to-violet-600
          px-7
          py-3.5
          text-sm
          font-semibold
          text-white
          shadow-[0_10px_35px_rgba(59,130,246,.25)]
          transition-all
          duration-300
          hover:shadow-[0_15px_50px_rgba(59,130,246,.4)]
        "
      >
        Start Growing Today

        <ArrowUpRight size={17} />
      </motion.a>

    </motion.div>

  </div>
</section>

      {/* =========================================================
          SUPPORT & MAINTENANCE
          Premium interactive replacement for /images/Support.png
      ========================================================== */}

      <section
        id="support-maintenance"
        aria-labelledby="support-maintenance-heading"
        className="relative overflow-hidden bg-[#05070D] py-24 text-white sm:py-28"
      >
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -left-48 top-20 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[150px]"
          />
          <motion.div
            animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -right-48 top-1/3 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[150px]"
          />
          <div className="absolute bottom-0 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[150px]" />

          {/* Technical grid */}
          <div
            className="
              absolute inset-0 opacity-[0.035]
              [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)]
              [background-size:70px_70px]
            "
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

          {/* Heading */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl text-center"
          >
            <div
              className="
                mx-auto inline-flex items-center gap-2 rounded-full
                border border-cyan-400/20 bg-cyan-400/[0.06]
                px-5 py-2 text-xs font-bold uppercase tracking-[0.22em]
                text-indigo-400 shadow-[0_0_35px_rgba(34,211,238,.08)]
              "
            >
              <Headphones size={14} />
              IT Support & Maintenance
            </div>

            <h2
              id="support-maintenance-heading"
              className="
                mt-7 text-4xl font-black tracking-tight text-white
                sm:text-5xl lg:text-6xl
              "
            >
              Keep Your Digital Products
              <span className="block bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-500 bg-clip-text text-transparent">
                Fast, Secure & Reliable
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
              Proactive website maintenance, application monitoring, software
              maintenance, security updates, bug fixes, performance monitoring,
              and 24/7 technical support for long-term digital stability.
            </p>
          </motion.header>

          {/* Interactive system visual */}

            {/* Left health panel removed */}

            {/* Right: service cards (grid - 3 per row) */}
            <div className="w-full grid items-stretch gap-6 sm:grid-cols-1 lg:grid-cols-4">
              {supportServices.map((service, index) => {
                const Icon = service.icon;

                const accent =
                  service.accent === "orange"
                    ? {
                        icon: "from-orange-400 to-amber-500",
                        glow: "bg-orange-500/15",
                        border: "hover:border-orange-400/30",
                        text: "text-orange-300",
                      }
                    : service.accent === "cyan"
                    ? {
                        icon: "from-cyan-400 to-blue-500",
                        glow: "bg-cyan-500/15",
                        border: "hover:border-cyan-400/30",
                        text: "text-cyan-300",
                      }
                    : service.accent === "violet"
                    ? {
                        icon: "from-violet-400 to-fuchsia-500",
                        glow: "bg-violet-500/15",
                        border: "hover:border-violet-400/30",
                        text: "text-violet-300",
                      }
                    : {
                        icon: "from-blue-400 to-indigo-500",
                        glow: "bg-blue-500/15",
                        border: "hover:border-blue-400/30",
                        text: "text-blue-300",
                      };

                return (
                  <motion.article
                    key={service.id}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    whileHover={{ y: -5 }}
                    className={`
                      group relative overflow-hidden rounded-[24px]
                      border border-white/[0.08] bg-white/[0.035]
                      p-5 backdrop-blur-xl transition-all duration-300
                      ${accent.border}
                      hover:bg-white/[0.055]
                      hover:shadow-[0_18px_55px_rgba(0,0,0,.25)]
                      flex flex-col h-full justify-between
                    `}
                  >
                    <div
                      className={`absolute -right-12 -top-12 h-32 w-32 rounded-full ${accent.glow} blur-3xl transition-opacity duration-300 group-hover:opacity-100`}
                    />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between gap-3">
                        <div
                          className={`
                            flex h-12 w-12 items-center justify-center
                            rounded-2xl bg-gradient-to-br ${accent.icon}
                            text-white shadow-lg
                          `}
                        >
                          <Icon size={23} strokeWidth={1.9} />
                        </div>

                      </div>

                      <h3 className="mt-5 text-lg font-bold tracking-tight text-white">
                        {service.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {service.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {service.details.map((detail) => (
                          <span
                            key={detail}
                            className="rounded-full border border-white/[0.07] bg-black/20 px-2.5 py-1 text-[10px] font-medium text-slate-500 transition-colors group-hover:text-slate-300"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>

                     
                      </div>
                  </motion.article>
                );
              })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 rounded-[28px] border border-blue-400/15 bg-gradient-to-r from-blue-500/[0.08] via-cyan-400/[0.05] to-violet-500/[0.08] p-6 backdrop-blur-xl sm:p-7"
          >
            <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
              <div>
                <p className="text-lg font-bold text-white">
                  Need dependable website or software maintenance?
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Let our team monitor, secure, optimize, and maintain your digital products.
                </p>
              </div>

              <motion.a
                href="/#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-violet-600 px-6 py-3 text-sm font-bold text-white shadow-[0_10px_35px_rgba(59,130,246,.22)]"
              >
                Get Maintenance Support
                <ArrowUpRight size={17} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          SERVICE CATEGORIES
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-20 pb-20 lg:px-8 sm:pt-28 lg:pt-20">

        <div className="mb-10 text-center">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-600">
            Explore Our Capabilities
          </p>

          <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">
            Our Complete Service Portfolio
          </h2>

        </div>

        <div className="space-y-4">
          {categories.map((category, categoryIndex) => {
            const isOpen = openSection === category.id;
            const theme = categoryTheme[categoryIndex % categoryTheme.length];

            return (
              <motion.div
                key={category.id}
                layout
                className={`
                  group relative overflow-hidden rounded-[28px]
                  border bg-white
                  shadow-[0_12px_45px_rgba(15,23,42,.055)]
                  transition-all duration-500
                  ${theme.border}
                  ${isOpen ? `ring-4 ${theme.ring} shadow-[0_20px_60px_rgba(37,99,235,.10)]` : ""}
                `}
              >
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className={`absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r ${theme.icon}`}
                />

                <button
                  type="button"
                  onClick={() => setOpenSection(isOpen ? null : category.id)}
                  aria-expanded={isOpen}
                  aria-controls={`${category.id}-capabilities`}
                  className="
                    flex w-full items-center justify-between gap-5
                    px-6 py-6 text-left
                    transition-colors duration-300
                    hover:bg-slate-50/80
                    sm:px-8 sm:py-7
                  "
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-3">
                      <span
                        className={`hidden h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-r sm:block ${theme.icon}`}
                      />
                      <h3 className="text-xl font-black tracking-tight text-[#0b1736] sm:text-2xl">
                        {category.title}
                      </h3>
                    </div>

                    <p className={`mt-1.5 text-sm font-semibold ${theme.accent}`}>
                      {category.bullets.length} capabilities
                    </p>
                  </div>

                  <motion.div
                    animate={{
                      rotate: isOpen ? 180 : 0,
                      scale: isOpen ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`
                      flex h-11 w-11 shrink-0 items-center justify-center
                      rounded-full border bg-slate-50
                      transition-colors duration-300
                      ${theme.border}
                    `}
                  >
                    <ChevronDown size={21} className={theme.accent} />
                  </motion.div>
                </button>

                {isOpen && (
                  <motion.div
                    id={`${category.id}-capabilities`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className={`border-t ${theme.border.split(" ")[0]} px-6 pb-7 pt-6 sm:px-8`}>
                      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {category.bullets.map((bullet, bulletIndex) => (
                          <motion.li
                            key={bullet}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.3,
                              delay: bulletIndex * 0.025,
                            }}
                            whileHover={{ y: -2 }}
                            className={`
                              relative overflow-hidden rounded-2xl
                              border border-slate-200 bg-slate-50/70
                              px-5 py-4 text-sm leading-6 text-slate-700
                              transition-all duration-300
                              hover:bg-white ${theme.border}
                              hover:shadow-[0_10px_30px_rgba(15,23,42,.06)]
                            `}
                          >
                            <span
                              className={`mr-2 inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r align-middle ${theme.icon}`}
                            />
                            {bullet}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* =========================================================
          INDUSTRIES
      ========================================================== */}

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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="text-center"
        >

          {/* Label */}

          <div className="flex justify-center">

            <div
              className="
                inline-flex
                items-center
                gap-4
                rounded-full
                border
                border-blue-200
                bg-white/80
                px-5
                py-2.5
                shadow-[0_8px_30px_rgba(37,99,235,.08)]
                backdrop-blur-xl
              "
            >

              <span className="h-[2px] w-8 bg-gradient-to-r from-blue-500 to-cyan-400" />

              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.28em]
                  text-blue-600
                "
              >
                Industries
              </span>

              <span className="h-[2px] w-8 bg-gradient-to-r from-violet-500 to-purple-500" />

            </div>

          </div>

          {/* Heading */}

          <h2
            className="
              mt-6
              text-5xl
              font-black
              tracking-[-0.045em]
              text-[#0b1736]
              sm:text-6xl
              lg:text-7xl
            "
          >
            Industries{" "}

            <span
              className="
                bg-gradient-to-r
                from-blue-600
                via-indigo-600
                to-violet-600
                bg-clip-text
                text-transparent
              "
            >
              We Serve
            </span>
          </h2>

          {/* Description */}

          <div className="mx-auto mt-7 max-w-3xl">

            <div
              className="
                inline-flex
                max-w-full
                items-center
                gap-4
                rounded-full
                border
                border-blue-100
                bg-white/80
                px-6
                py-3
                shadow-[0_10px_40px_rgba(37,99,235,.06)]
                backdrop-blur-xl
              "
            >

              <span className="text-xl">
                🚀
              </span>

              <span
                className="
                  text-sm
                  font-medium
                  leading-6
                  text-slate-600
                  sm:text-base
                "
              >
                We deliver innovative solutions tailored to your
                industry's unique challenges.
              </span>

            </div>

          </div>

        </motion.div>
 <div
          className="
            relative
            mx-auto
            mt-14
            w-full
            max-w-[1500px]
            px-8
            sm:px-10
            lg:px-14
            xl:px-16
          "
        >
          <div
            className="
              grid
              grid-cols-2
              gap-4
              sm:grid-cols-3
              md:grid-cols-4
              lg:grid-cols-7
              lg:gap-5
              xl:gap-6
            "
          >

          {industries.map((industry, index) => {

            const Icon = industry.icon;

            return (
              <motion.div
                key={industry.title}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.045,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative"
              >

                {/* Card */}

                <div
                  className="
                    relative
                    h-full
                    overflow-hidden
                    rounded-[22px]
                    border
                    border-slate-200
                    bg-white
                    shadow-[0_10px_35px_rgba(15,23,42,.06)]
                    transition-all
                    duration-500
                    group-hover:border-blue-200
                    group-hover:shadow-[0_20px_50px_rgba(37,99,235,.15)]
                  "
                >

                  {/* Top gradient */}

                  <div
                    className={`
                      absolute
                      left-0
                      right-0
                      top-0
                      h-1
                      bg-gradient-to-r
                      ${industry.gradient}
                    `}
                  />

                  {/* Icon section */}

                  <div className="flex justify-center px-4 pt-6">

                    <div
                      className={`
                        relative
                        flex
                        h-[76px]
                        w-[76px]
                        items-center
                        justify-center
                        rounded-[22px]
                        bg-gradient-to-br
                        ${industry.gradient}
                        shadow-lg
                        transition-all
                        duration-500
                        group-hover:scale-110
                        group-hover:rotate-2
                      `}
                    >

                      {/* Inner glow */}

                      <div
                        className="
                          absolute
                          inset-0
                          rounded-[22px]
                          bg-white/10
                        "
                      />

                      <Icon
                        size={34}
                        strokeWidth={1.8}
                        className="relative z-10 text-white"
                      />

                    </div>

                  </div>

                  {/* Content */}

                  <div className="flex min-h-[105px] items-center justify-center px-3 py-5">

                    <h3
                      className="
                        text-center
                        text-[13px]
                        font-bold
                        leading-5
                        text-slate-700
                        transition-colors
                        duration-300
                        group-hover:text-blue-600
                        sm:text-sm
                      "
                    >
                      {industry.title}
                    </h3>

                  </div>

                  {/* Hover shine */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      -translate-x-full
                      bg-gradient-to-r
                      from-transparent
                      via-white/40
                      to-transparent
                      transition-transform
                      duration-700
                      group-hover:translate-x-full
                    "
                  />

                </div>

              </motion.div>
            );
          })}

          </div>
        </div>

        {/* ===================================================
            BOTTOM MESSAGE
        ==================================================== */}

        <motion.div
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
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
          className="mt-14 text-center"
        >

          <p className="text-sm text-slate-500">
            Have a unique business requirement?
          </p>

          <a
            href="/#contact"
            className="
              mt-2
              inline-flex
              items-center
              gap-2
              font-bold
              text-blue-600
              transition-all
              duration-300
              hover:gap-3
            "
          >
            Let's build a solution for your industry
            <span>→</span>
          </a>

        </motion.div>
    </section>
  );
}

/* ===============================================================
   SERVICE NODE
================================================================ */

function ServiceNode({
  service,
  index,
}: {
  service: {
    title: string;
    icon: React.ElementType;
    color: string;
    position: string;
  };
  index: number;
}) {
  const Icon = service.icon;

  const positions: Record<string, string> = {
    web: "left-[3%] top-[12%]",
    ai: "right-[1%] top-[10%]",
    ui: "left-[-1%] top-[39%]",
    cloud: "right-[-2%] top-[39%]",
    mobile: "left-[3%] bottom-[13%]",
    data: "right-[2%] bottom-[13%]",
    software: "left-1/2 bottom-[-1%] -translate-x-1/2",
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
        delay: 0.2 + index * 0.08,
      }}
      whileHover={{
        y: -5,
        scale: 1.04,
      }}
      className={`absolute z-30 ${positions[service.position]}`}
    >

      <div
        className="
          flex
          min-w-[150px]
          items-center
          gap-3
          rounded-full
          border
          border-blue-100
          bg-white/90
          px-3
          py-3
          pr-5
          shadow-[0_12px_35px_rgba(37,99,235,.10)]
          backdrop-blur-xl
          transition-all
          duration-300
          hover:border-blue-200
          hover:shadow-[0_18px_45px_rgba(37,99,235,.18)]
          sm:min-w-[170px]
        "
      >

        <motion.div
          animate={{
            boxShadow: [
              `0 0 0px ${service.color}00`,
              `0 0 22px ${service.color}30`,
              `0 0 0px ${service.color}00`,
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.4,
          }}
          className="
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-blue-100
            bg-white
          "
        >
          <Icon
            size={21}
            style={{
              color: service.color,
            }}
          />
        </motion.div>

        <span
          className="
            max-w-[125px]
            text-[11px]
            font-bold
            leading-4
            tracking-wide
            text-[#0b1736]
            sm:text-xs
          "
        >
          {service.title}
        </span>

      </div>

    </motion.div>
  );
}

/* ===============================================================
   ANIMATED CONNECTION
================================================================ */

function AnimatedPath({
  d,
  color,
  dashed = false,
}: {
  d: string;
  color: string;
  dashed?: boolean;
}) {
  return (
    <>

      {/* Glow */}

      <path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth="8"
        strokeLinecap="round"
        opacity="0.045"
      />

      {/* Main line */}

      <motion.path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray={dashed ? "5 8" : "0"}
        initial={{
          pathLength: 0,
          opacity: 0,
        }}
        whileInView={{
          pathLength: 1,
          opacity: 0.75,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.4,
          delay: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Connection nodes */}

      <motion.circle
        cx={dashed ? "300" : "320"}
        cy={dashed ? "305" : "220"}
        r="3.5"
        fill={color}
        animate={{
          opacity: [0.2, 1, 0.2],
          scale: [0.8, 1.3, 0.8],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

    </>
  );
}

/* ===============================================================
   FLOWING BACKGROUND
================================================================ */

function FlowingBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      <svg
        viewBox="0 0 700 620"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >

        <motion.path
          d="M-100 450 C100 250 180 520 350 390 C500 270 550 430 800 170"
          stroke="#60A5FA"
          strokeWidth="1"
          opacity="0.11"
          animate={{
            x: [0, 12, 0],
            y: [0, -5, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        <motion.path
          d="M-100 490 C100 300 200 550 360 420 C510 290 600 450 800 220"
          stroke="#A78BFA"
          strokeWidth="1"
          opacity="0.08"
          animate={{
            x: [0, -15, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        <path
          d="M-100 520 C100 330 190 570 370 440 C520 330 620 480 800 250"
          stroke="#93C5FD"
          strokeWidth="1"
          opacity="0.07"
        />

      </svg>

    </div>
  );
}