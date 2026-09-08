"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const technologyCategories = [
  {
    id: "frontend",
    icon: "⚛️",
    title: "Frontend Technologies",
    subtitle: "Responsive web interfaces",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Angular",
      "Vue.js",
    ],
  },

  {
    id: "backend",
    icon: "🖥️",
    title: "Backend Technologies",
    subtitle: "Secure & scalable server-side development",
    technologies: [
      "Node.js",
      "Express.js",
      "NestJS",
      "Laravel",
      "Spring Boot",
      "Python",
      "CakePHP",
      "Yii2 Framework",
      "Zend Framework",
      "ASP.NET MVC",
      "PHP",
      "Core PHP",
      ".NET Core",
      "Java Spring Boot",
      "Ruby on Rails",
      "C#",
    ],
  },

  {
    id: "mobile",
    icon: "📱",
    title: "Mobile Development",
    subtitle: "Native & cross-platform mobile apps",
    technologies: [
      "Flutter",
      "React Native",
      "Swift (Native iOS)",
      "Kotlin (Native Android)",
      "Ionic",
    ],
  },

  {
    id: "database",
    icon: "🗄️",
    title: "Database",
    subtitle: "Reliable and scalable databases",
    technologies: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Firebase",
      "Redis",
    ],
  },

  {
    id: "cloud",
    icon: "☁️",
    title: "Cloud & Hosting",
    subtitle: "Cloud infrastructure & deployment",
    technologies: [
      "AWS",
      "Microsoft Azure",
      "Google Cloud",
      "Vercel",
      "Netlify",
    ],
  },

  {
    id: "ecommerce",
    icon: "🛒",
    title: "E-Commerce Development",
    subtitle: "Scalable online stores & commerce solutions",
    technologies: [
      "Shopify",
      "WooCommerce",
      "Magento 2",
      "Magento Enterprise",
      "Adobe Commerce",
      "BigCommerce",
      "NopCommerce",
      "OpenCart",
    ],
  },

  {
    id: "devops",
    icon: "⚙️",
    title: "DevOps",
    subtitle: "Automation & CI/CD pipelines",
    technologies: [
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Jenkins",
      "Nginx",
    ],
  },

  {
    id: "businessintelligence",
    icon: "📊",
    title: "Business Intelligence & Analytics",
    subtitle: "Data-driven insights & reporting",
    technologies: [
      "Power BI",
      "Tableau",
    ],
  },

  {
    id: "cms",
    icon: "📝",
    title: "CMS Development",
    subtitle: "Flexible content management solutions",
    technologies: [
      "WordPress",
      "Drupal",
      "Sitecore",
      "Joomla",
      "Umbraco",
      "SharePoint",
    ],
  },

  {
    id: "ai",
    icon: "🤖",
    title: "AI & Machine Learning",
    subtitle: "Next-generation AI development",
    technologies: [
      "OpenAI",
      "Claude",
      "Gemini",
      "LangChain",
      "TensorFlow",
      "Hugging Face",
      "Pinecone",
    ],
  },
];

export default function TechnologySection() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section
      id="technology"
      className="relative overflow-hidden bg-[#F8FBFF] pb-10"
    >
      {/* =========================
          BACKGROUND BLUR
      ========================== */}

      <div
        className="
          absolute
          -left-40
          -top-32
          h-[720px]
          w-[720px]
          rounded-full
          bg-blue-400/10
          blur-[180px]
        "
      />

      <div
        className="
          absolute
          right-[-180px]
          top-0
          h-[700px]
          w-[700px]
          rounded-full
          bg-pink-300/20
          blur-[180px]
        "
      />

      <div
        className="
          absolute
          bottom-[-260px]
          left-1/2
          h-[800px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-indigo-400/10
          blur-[220px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* =========================
            HEADER
        ========================== */}

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
            duration: 0.6,
          }}
          className="text-center"
        >
          {/* Badge */}

          <span
            className="
              inline-flex
              rounded-full
              border
              border-indigo-200
              bg-indigo-50
              px-5
              py-2
              text-sm
              font-semibold
              uppercase
              tracking-[0.18em]
              text-indigo-600
            "
          >
            Our Technology Stack
          </span>

          {/* Heading */}

          <h2
            className="
              mt-6
              text-5xl
              font-black
              leading-tight
              text-slate-900
            "
          >
            Technologies

            <span
              className="
                block
                bg-gradient-to-r
                from-indigo-600
                via-blue-500
                to-violet-500
                bg-clip-text
                text-transparent
              "
            >
              We Work With
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-4
              mb-4
              max-w-3xl
              text-lg
              leading-9
              text-slate-600
            "
          >
            We help businesses build and grow with professional web
            development, custom software, mobile applications and
            AI-powered digital solutions using modern technologies.
          </p>
        </motion.div>

        {/* =========================
            TECHNOLOGY ACCORDION
        ========================== */}

        <div
          className="
            mx-auto
            max-w-8xl
            pb-10
            grid
            grid-cols-1
            gap-5
            lg:grid-cols-2
            lg:gap-6
            items-start
          "
        >
          {technologyCategories.map((category) => {
            const isOpen = open === category.id;

            return (
              <motion.div
                key={category.id}
                transition={{
                  duration: 0.35,
                }}
                className="
                  self-start
                  h-fit
                  w-full
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-slate-200
                  bg-white
                  shadow-[0_10px_40px_rgba(15,23,42,.06)]
                  transition-all
                  duration-300
                  hover:border-blue-200
                "
              >

                {/* =========================
                    HEADER BUTTON
                ========================== */}

                <button
                  type="button"
                  onClick={() =>
                    setOpen(isOpen ? null : category.id)
                  }
                  aria-expanded={isOpen}
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-between
                    px-8
                    py-8
                    text-left
                    transition-all
                    duration-300
                    hover:bg-indigo-50/40
                  "
                >

                  {/* Left Content */}

                  <div className="flex items-center gap-6">

                    {/* Icon */}

                    <div
                      className="
                        flex
                        h-16
                        w-16
                        shrink-0
                        items-center
                        justify-center
                        rounded-3xl
                        bg-gradient-to-br
                        from-blue-500
                        via-cyan-500
                        to-indigo-500
                        text-3xl
                        text-white
                        shadow-lg
                      "
                    >
                      {category.icon}
                    </div>

                    {/* Title */}

                    <div>

                      <h3
                        className="
                          text-2xl
                          font-bold
                          text-slate-900
                        "
                      >
                        {category.title}
                      </h3>

                      <p
                        className="
                          mt-2
                          text-slate-500
                        "
                      >
                        {category.subtitle}
                      </p>

                    </div>
                  </div>

                  {/* =========================
                      ARROW
                  ========================== */}

                  <motion.div
                    animate={{
                      rotate: isOpen ? 180 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-slate-100
                    "
                  >
                    <ChevronDown
                      size={22}
                      className="text-slate-700"
                    />
                  </motion.div>

                </button>

                {/* =========================
                    ACCORDION CONTENT
                ========================== */}

                <AnimatePresence initial={false}>

                  {isOpen && (

                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden"
                    >

                      <div
                        className="
                          border-t
                          border-slate-100
                          px-8
                          py-8
                        "
                      >

                        {/* Technology Pills */}

                        <motion.div
                          initial="hidden"
                          animate="visible"
                          variants={{
                            hidden: {},
                            visible: {
                              transition: {
                                staggerChildren: 0.05,
                              },
                            },
                          }}
                          className="
                            flex
                            flex-wrap
                            gap-4
                          "
                        >

                          {category.technologies.map((tech) => (

                            <motion.div
                              key={tech}
                              variants={{
                                hidden: {
                                  opacity: 0,
                                  y: 20,
                                  scale: 0.95,
                                },
                                visible: {
                                  opacity: 1,
                                  y: 0,
                                  scale: 1,
                                },
                              }}
                              whileHover={{
                                y: -3,
                                scale: 1.03,
                              }}
                              transition={{
                                duration: 0.2,
                              }}
                              className="
                                group
                                relative
                                overflow-hidden
                                rounded-full
                                border
                                border-slate-200
                                bg-white
                                px-5
                                py-3
                                transition-all
                                duration-300
                                hover:border-blue-300
                                hover:bg-blue-50
                                hover:shadow-lg
                              "
                            >

                              {/* Hover Glow */}

                              <div
                                className="
                                  absolute
                                  inset-0
                                  bg-gradient-to-r
                                  from-indigo-500/5
                                  via-blue-500/5
                                  to-violet-500/5
                                  opacity-0
                                  transition-all
                                  duration-500
                                  group-hover:opacity-100
                                "
                              />

                              {/* Technology Name */}

                              <span
                                className="
                                  relative
                                  z-10
                                  text-sm
                                  font-semibold
                                  text-slate-700
                                  transition-colors
                                  duration-300
                                  group-hover:text-blue-600
                                "
                              >
                                {tech}
                              </span>

                            </motion.div>

                          ))}

                        </motion.div>

                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}