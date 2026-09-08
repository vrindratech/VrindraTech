import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Brain,
  CheckCircle2,
  ChevronDown,
  Code2,
  GraduationCap,
  Laptop,
  MessageSquare,
  Rocket,
  Users,
  UserRoundCheck,
  BriefcaseBusiness,
  FolderKanban,
  Clock3,
  Send,
} from "lucide-react";

/* =========================================================
   SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title:
    "Online IT Training & Internship Programs with Mentorship | VRINDRA Technologies",

  description:
    "Join online IT training and internship programs with personalized mentorship, hands-on projects, technology guidance and career-focused learning for students, graduates, freshers and working professionals.",

  keywords: [
    "IT training for college students",
    "IT training for freshers",
    "online IT training",
    "online technology training",
    "online internship program",
    "IT training for graduates",
    "IT training for working professionals",
    "career switch training",
    "software development training",
    "IT internship for freshers",
    "technology internship",
    "software development internship",
    "Java training",
    "React training",
    "Next.js training",
    "AI training",
    "data analytics training",
    "industry oriented training",
    "IT mentor for students",
    "fresher training program",
    "college student internship",
    "technology training program",
  ],

  alternates: {
    canonical: "/training-internship",
  },

  openGraph: {
    title:
      "Online IT Training & Internship Programs with Mentorship",
    description:
      "Build practical technology skills through online IT training, expert mentorship, hands-on projects and career-focused internship programs.",
    url: "/training-internship",
    siteName: "VRINDRA Technologies",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Online IT Training & Internship Programs | VRINDRA Technologies",
    description:
      "Online technology training and internship programs for students, graduates, freshers and working professionals with dedicated mentorship and practical projects.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* =========================================================
   DATA
========================================================= */

const technologies = [
  {
    title: "Full Stack Development",
    description:
      "Learn how modern web applications are planned, developed, tested and deployed.",
    icon: Code2,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "REST APIs",
    ],
  },

  {
    title: "Java Development",
    description:
      "Build a strong foundation in Java backend development and enterprise application concepts.",
    icon: Laptop,
    technologies: [
      "Java",
      "Spring Boot",
      "REST API",
      "SQL",
      "JPA",
      "Hibernate",
    ],
  },

  {
    title: "AI & Generative AI",
    description:
      "Understand practical AI concepts and learn how modern AI applications are built.",
    icon: Brain,
    technologies: [
      "Python",
      "AI Fundamentals",
      "Generative AI",
      "Prompt Engineering",
      "APIs",
      "AI Applications",
    ],
  },

  {
    title: "Data Analytics",
    description:
      "Learn how to transform raw data into useful business insights and reports.",
    icon: BarChart3,
    technologies: [
      "Excel",
      "SQL",
      "Python",
      "Power BI",
      "Data Visualization",
      "Analytics",
    ],
  },

  {
    title: "Mobile App Development",
    description:
      "Learn the fundamentals of building modern mobile applications.",
    icon: SmartphoneIcon,
    technologies: [
      "Flutter",
      "React Native",
      "API Integration",
      "Mobile UI",
      "Firebase",
    ],
  },

  {
    title: "Cloud & DevOps",
    description:
      "Understand deployment, cloud infrastructure and modern development workflows.",
    icon: Rocket,
    technologies: [
      "AWS",
      "Git",
      "GitHub",
      "Docker",
      "CI/CD",
      "Cloud Fundamentals",
    ],
  },
];

const curriculum = [
  {
    number: "01",
    title: "Technology Foundation",
    description:
      "Programming fundamentals, development environment setup, Git, GitHub, databases, APIs and software development concepts.",
  },

  {
    number: "02",
    title: "Technology Specialization",
    description:
      "Choose a technology track based on your career goal and learn the tools used in real-world development environments.",
  },

  {
    number: "03",
    title: "Hands-On Practice",
    description:
      "Complete coding exercises, assignments, debugging tasks and practical technology challenges under mentor guidance.",
  },

  {
    number: "04",
    title: "Real-World Project",
    description:
      "Work on a structured project from requirement analysis through development, testing and deployment.",
  },

  {
    number: "05",
    title: "Career Preparation",
    description:
      "Resume guidance, GitHub/project presentation, interview preparation and professional communication.",
  },
];

const benefits = [
  "Dedicated mentor assigned to guide your training journey",
  "Personalized technology roadmap based on your career goal",
  "Hands-on assignments and practical development exercises",
  "Real-world project experience",
  "Code review and technical feedback",
  "Git and GitHub workflow exposure",
  "Resume and project guidance",
  "Interview preparation",
  "Flexible online learning environment",
  "Guidance based on your selected technology and career goal",
];

const internshipStructure = [
  {
    title: "Orientation",
    description:
      "Understand the company environment, project workflow, tools and expectations.",
  },
  {
    title: "Technology Training",
    description:
      "Build practical knowledge in the selected technology stack with mentor support.",
  },
  {
    title: "Project Assignment",
    description:
      "Work on a structured project designed around practical development requirements.",
  },
  {
    title: "Mentor Reviews",
    description:
      "Receive regular feedback, technical guidance and project reviews.",
  },
  {
    title: "Final Evaluation",
    description:
      "Present your project and demonstrate your understanding of the technology.",
  },
];

const admissionSteps = [
  "Submit the training or internship enquiry form.",
  "Our team reviews your preferred technology and learning objective.",
  "Attend an initial counselling or discussion session.",
  "Select the appropriate training or internship track.",
  "Complete admission formalities and online onboarding.",
  "Get your mentor and personalized learning roadmap.",
  "Start your online training and practical project work.",
];

/* =========================================================
   PAGE
========================================================= */

export default function TrainingInternshipPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: "VRINDRA Technologies",
        description:
          "Online technology training and internship programs for students, graduates, freshers and working professionals.",
        url: "https://www.yourdomain.com/training-internship",
      },

      {
        "@type": "Course",
        name: "IT Training and Internship Program",
        description:
          "Industry-oriented online technology training and internship program for students, graduates, freshers and working professionals.",
        provider: {
          "@type": "Organization",
          name: "VRINDRA Technologies",
        },
        audience: {
          "@type": "EducationalAudience",
          educationalRole: "student",
        },
      },

      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Who can apply for the training program?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "College students, graduates, freshers, working professionals and career switchers interested in building practical technology skills can enquire about the program.",
            },
          },
          {
            "@type": "Question",
            name: "Will I get a mentor?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Yes. Participants are assigned a mentor who provides technology guidance, project support and feedback during the training journey.",
            },
          },
          {
            "@type": "Question",
            name: "Which technologies can I learn?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Training tracks can include full stack development, Java development, AI and Generative AI, data analytics, mobile app development and cloud and DevOps fundamentals.",
            },
          },
          {
            "@type": "Question",
            name: "Can freshers apply for an internship?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Yes. Freshers can submit an enquiry for available internship opportunities and technology tracks.",
            },
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8faff] text-slate-900">

      {/* =====================================================
          STRUCTURED DATA
      ===================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* =====================================================
          HERO
      ===================================================== */}

     <section className="relative overflow-hidden">
  {/* Background */}
  <div className="absolute inset-0">
    <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-indigo-400/10 blur-[150px]" />

    <div className="absolute right-[-180px] top-0 h-[650px] w-[650px] rounded-full bg-blue-400/10 blur-[160px]" />

    <div className="absolute bottom-[-250px] left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-violet-400/10 blur-[180px]" />
  </div>

  <div className="relative mx-auto max-w-[1400px] px-6 pt-10 pb-8 lg:px-8 lg:pt-14 lg:pb-12">

    <div className="grid items-start gap-6 lg:grid-cols-[1.05fr_.95fr] lg:gap-8">

      {/* LEFT — HERO CONTENT */}
      <div className="max-w-4xl">

        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-indigo-200 bg-white/70 px-5 py-3 shadow-sm backdrop-blur-xl">
          <GraduationCap
            size={20}
            className="text-indigo-600"
          />

          <span className="text-sm font-semibold text-indigo-700">
            Online Training • Mentorship • Internship • Career Guidance
          </span>
        </div>

        <h1 className="text-5xl font-black leading-[1.05] tracking-[-2px] text-slate-950 md:text-6xl lg:text-7xl">
          Build Real-World{" "}
          <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 bg-clip-text text-transparent">
            Technology Skills
          </span>
          {" "}With Expert Mentorship
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
          Industry-oriented online IT training and internship programs designed
          for college students, graduates, freshers, working professionals and
          career switchers who want practical technology skills, real project
          experience and career guidance.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="#enquiry"
            className="group flex h-14 items-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-7 font-semibold text-white shadow-[0_18px_45px_rgba(79,70,229,.25)] transition hover:-translate-y-1"
          >
            Apply for Training

            <ArrowRight
              size={19}
              className="transition group-hover:translate-x-1"
            />
          </Link>

          <Link
            href="#programs"
            className="flex h-14 items-center rounded-2xl border border-slate-200 bg-white/80 px-7 font-semibold text-slate-800 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white"
          >
            Explore Programs
          </Link>
        </div>

        {/* Trust Points */}
        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-indigo-600" />
            Mentor Guided
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-indigo-600" />
            Practical Projects
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-indigo-600" />
            Career Focused
          </div>
        </div>
      </div>

      {/* RIGHT — TRAINING / TECHNOLOGY IMAGE */}
      <div className="relative flex items-center justify-center lg:justify-end">

        <div className="absolute right-4 top-1/2 h-[430px] w-[430px] -translate-y-1/2 rounded-full bg-violet-400/20 blur-[90px]" />

        <div className="relative w-full max-w-[570px]">
          <Image
            src="/images/student-grow.png"
            alt="Student learning software development and technology skills"
            width={1024}
            height={1024}
            priority
            className="relative z-10 h-auto w-full object-contain drop-shadow-[0_30px_55px_rgba(79,70,229,.18)]"
          />
        </div>
      </div>

    </div>
  </div>
</section>
      {/* =====================================================
          WHO CAN APPLY
      ===================================================== */}

      <section className="relative py-20">
        
        <div className="mx-auto max-w-[1200px] px-6 lg:px-2">
          
          <span className="text-sm font-bold uppercase tracking-[3px] text-indigo-600">
              WHO CAN APPLY ?
            </span>
                        <div className="mt-8 space-y-4"/>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

            <AudienceCard
              icon={<GraduationCap size={28} />}
              title="College Students"
              text="Build practical technology skills alongside your college education through structured online training."
            />

            <AudienceCard
              icon={<Rocket size={28} />}
              title="Freshers & Graduates"
              text="Gain practical experience, build projects and prepare for your first technology role."
            />

            <AudienceCard
              icon={<BriefcaseBusiness size={28} />}
              title="Working Professionals"
              text="Upskill in a new technology or strengthen your existing technical profile with flexible online learning."
            />

            <AudienceCard
              icon={<UserRoundCheck size={28} />}
              title="Career Switchers"
              text="Explore a new technology path with mentor guidance, practical assignments and project-based learning."
            />

          </div>

        </div>

      </section>

      {/* =====================================================
          MENTORSHIP
      ===================================================== */}

      <section className="relative bg-white py-24">

        <div className="mx-auto grid max-w-[1200px] gap-14 px-6 lg:grid-cols-2 lg:items-center lg:px-8">

          <div>

            <span className="text-sm font-bold uppercase tracking-[3px] text-indigo-600">
              Personalized Mentorship
            </span>

            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
              Your technology journey,
              <span className="text-indigo-600">
                {" "}guided by a mentor.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Online training becomes more effective when you have someone to guide you.
              Each participant can be assigned a mentor based on the selected
              technology track and program structure.
            </p>

            <div className="mt-8 space-y-4">

              <Feature
                icon={<UserRoundCheck size={20} />}
                title="Dedicated Mentor"
                text="Get guidance throughout your learning and project journey."
              />

              <Feature
                icon={<MessageSquare size={20} />}
                title="Regular Feedback"
                text="Discuss questions, assignments, implementation and project challenges."
              />

              <Feature
                icon={<Code2 size={20} />}
                title="Technical Reviews"
                text="Improve your code, project structure and development practices."
              />

              <Feature
                icon={<Rocket size={20} />}
                title="Career Direction"
                text="Understand what skills and projects can strengthen your technology profile."
              />

            </div>

          </div>

          <div className="relative flex items-center justify-center lg:justify-end">

            {/* Soft visual glow */}
            <div className="pointer-events-none absolute right-0 top-1/2 h-[480px] w-[480px] -translate-y-1/2 rounded-full bg-indigo-500/15 blur-[110px]" />

            <div className="relative w-full max-w-[650px]">

              {/* Main mentorship visual */}
              <div className="relative overflow-visible rounded-[38px] border border-slate-200/80 bg-white/80 p-3 shadow-[0_35px_90px_rgba(40,50,120,0.16)] backdrop-blur-xl">

                <div className="relative aspect-[1.3/1] overflow-hidden rounded-[30px]">
                  <Image
                    src="/images/mentor.png"
                    alt="Personalized IT mentorship and software development training"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 650px"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/20 via-transparent to-transparent" />
                </div>

               

               

               

                {/* Bottom message */}
                <div className="flex items-center justify-between border-t border-slate-200 px-5 pb-4 pt-6 sm:px-8">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
                      Personalized Mentorship
                    </p>

                    <h3 className="mt-1 text-2xl font-black tracking-tight text-slate-950">
                      Learn. Build. Grow.
                    </h3>
                  </div>

                  <Link
                    href="#enquiry"
                    aria-label="Learn more about mentorship"
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg transition-transform duration-300 hover:scale-105"
                  >
                    <ArrowRight size={23} />
                  </Link>
                </div>

              </div>
            </div>
          </div>

          </div>


      </section>

      {/* =====================================================
          TECHNOLOGY PROGRAMS
      ===================================================== */}

     <section
  id="programs"
  className="relative overflow-hidden py-24"
>
  {/* Soft background glow */}
  <div className="pointer-events-none absolute right-[-120px] top-[-100px] h-[420px] w-[420px] rounded-full bg-indigo-400/10 blur-[110px]" />

  <div className="mx-auto max-w-[1300px] px-6 lg:px-8">

    {/* TOP CONTENT */}
    <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_360px]">

      {/* LEFT — Heading */}
      <SectionHeading
        eyebrow="Technology Tracks"
        title="Choose the right technology path for your career"
        description="Explore practical online training tracks designed to help students, graduates, freshers and working professionals build relevant technology skills."
      />

      {/* RIGHT — IMAGE */}
      <div className="relative hidden justify-end lg:flex">
        <div className="absolute inset-0 rounded-full bg-indigo-400/10 blur-[70px]" />

        <div className="relative w-[330px]">
          <Image
            src="/images/technology-track.png"
            alt="Technology training and career development"
            width={700}
            height={700}
            className="h-auto w-full object-contain"
          />
        </div>
      </div>

    </div>

    {/* TECHNOLOGY CARDS */}
    <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      {technologies.map((technology) => {
        const Icon = technology.icon;

        return (
          <article
            key={technology.title}
            className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
              <Icon size={27} />
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              {technology.title}
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              {technology.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {technology.technologies.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        );
      })}

    </div>

  </div>
</section>
      {/* =====================================================
          CURRICULUM
      ===================================================== */}

      <section className="bg-slate-950 py-24 text-white">

        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">

          <SectionHeading
            dark
            eyebrow="Curriculum"
            title="Learn, practice, build and prepare"
            description="The training journey is structured around technology fundamentals, practical assignments, projects and career preparation."
          />

          <div className="mt-14 grid gap-5">

            {curriculum.map((item) => (

              <div
                key={item.number}
                className="grid gap-5 rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:grid-cols-[90px_250px_1fr] md:items-center"
              >

                <span className="text-4xl font-black text-indigo-400">
                  {item.number}
                </span>

                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

                <p className="leading-7 text-slate-400">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          WHAT YOU GET
      ===================================================== */}

      <section className="py-24">

        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">

          <SectionHeading
            eyebrow="Program Benefits"
            title="More than just classroom training"
            description="The objective is to help you understand technology, practice it and demonstrate what you can build."
          />

          <div className="mt-14 grid gap-x-12 gap-y-5 md:grid-cols-2">

            {benefits.map((benefit) => (

              <div
                key={benefit}
                className="flex gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
              >

                <CheckCircle2
                  size={21}
                  className="mt-0.5 shrink-0 text-indigo-600"
                />

                <span className="text-slate-700">
                  {benefit}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          INTERNSHIP STRUCTURE
      ===================================================== */}

      <section className="bg-indigo-50/60 py-24">

        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">

          <SectionHeading
            eyebrow="Internship Structure"
            title="Experience how a real technology project works"
            description="The internship structure combines technology learning, practical work, mentor reviews and project evaluation."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">

            {internshipStructure.map((item, index) => (

              <article
                key={item.title}
                className="relative rounded-3xl border border-white bg-white p-6 shadow-sm"
              >

                <span className="text-sm font-bold text-indigo-600">
                  0{index + 1}
                </span>

                <h3 className="mt-5 text-lg font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          BUSINESS MODEL
      ===================================================== */}

      <section className="py-24">

        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">

          <SectionHeading
            eyebrow="Program Model"
            title="A transparent training and internship structure"
            description="Training is delivered online. Program duration, fees and exact technology tracks can be customized based on the selected training or internship pathway."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            <InfoCard
              icon={<Clock3 size={25} />}
              title="Duration"
              text="Program duration can vary by technology track, training level and internship structure."
            />

            <InfoCard
              icon={<Laptop size={25} />}
              title="100% Online"
              text="Training is delivered online, making it accessible from anywhere with mentor guidance, practical assignments and project support."
            />

            <InfoCard
              icon={<Users size={25} />}
              title="Mentorship"
              text="Participants receive mentor guidance throughout the applicable training and project journey."
            />

            <InfoCard
              icon={<BookOpen size={25} />}
              title="Curriculum"
              text="The curriculum combines technology fundamentals, practical assignments, project development and career preparation."
            />

            <InfoCard
              icon={<BriefcaseBusiness size={25} />}
              title="Internship"
              text="Internship participants work through a structured project and evaluation process."
            />

            <InfoCard
              icon={<MessageSquare size={25} />}
              title="Career Guidance"
              text="Participants can receive guidance around projects, resumes, technical profiles and interview preparation."
            />

          </div>

        </div>

      </section>

      {/* =====================================================
          FEES
      ===================================================== */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-[1100px] px-6 lg:px-8">

          <SectionHeading
            eyebrow="Training Fees"
            title="Choose a program based on your learning goal"
            description="Training fees depend on the selected technology, duration, mentor involvement and internship structure."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            <PricingCard
              title="Foundation"
              description="For students starting their technology journey."
              features={[
                "Technology fundamentals",
                "Learning roadmap",
                "Practical assignments",
                "Mentor guidance",
              ]}
              price="Enquire"
            />

            <PricingCard
              featured
              title="Career Track"
              description="For students and freshers preparing for technology roles."
              features={[
                "Specialized technology training",
                "Mentor guidance",
                "Hands-on projects",
                "Code/project reviews",
                "Career preparation",
              ]}
              price="Enquire"
            />

            <PricingCard
              title="Internship"
              description="For candidates looking for structured practical experience."
              features={[
                "Technology onboarding",
                "Project assignment",
                "Mentor reviews",
                "Final evaluation",
                "Mentor-guided project work",
              ]}
              price="Enquire"
            />

          </div>

          <p className="mt-7 text-center text-sm leading-6 text-slate-500">
            Fees are customized according to the <strong>course or technology selected</strong>,
            duration, learning level, mentor involvement and program structure.
          </p>

        </div>

      </section>


      {/* =====================================================
          ADMISSION PROCESS
      ===================================================== */}

      <section className="bg-slate-950 py-24 text-white">

        <div className="mx-auto max-w-[1100px] px-6 lg:px-8">

          <SectionHeading
            dark
            eyebrow="Admission Process"
            title="How to apply"
            description="Start with an enquiry and our team will help you identify the appropriate training or internship pathway."
          />

          <div className="mt-14 grid gap-4">

            {admissionSteps.map((step, index) => (

              <div
                key={step}
                className="flex items-start gap-5 rounded-3xl border border-white/10 bg-white/[0.04] p-6"
              >

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-600 font-bold">
                  {index + 1}
                </div>

                <div>
                  <p className="leading-7 text-slate-300">
                    {step}
                  </p>
                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          ENQUIRY FORM
      ===================================================== */}

      <section
        id="enquiry"
        className="relative overflow-hidden py-24"
      >

        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50" />

        <div className="relative mx-auto max-w-[1100px] px-6 lg:px-8">

          <div className="grid overflow-hidden rounded-[40px] border border-white bg-white/80 shadow-[0_30px_100px_rgba(15,23,42,.10)] backdrop-blur-xl lg:grid-cols-[.8fr_1.2fr]">

            {/* Form Intro */}

            <div className="bg-gradient-to-br from-indigo-600 to-violet-600 p-8 text-white md:p-12">

              <span className="text-sm font-bold uppercase tracking-[3px] text-indigo-100">
                Start Your Journey
              </span>

              <h2 className="mt-5 text-4xl font-black leading-tight">
                Enquire about training or internship
              </h2>

              <p className="mt-6 leading-7 text-indigo-100">
                Tell us about your education, preferred technology and career
                goal. Our team can guide you toward the most suitable
                training or internship option.
              </p>

              <div className="mt-10 space-y-5">

                <div className="flex gap-3">
                  <CheckCircle2 size={20} />
                  <span>Technology guidance</span>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 size={20} />
                  <span>Mentor allocation</span>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 size={20} />
                  <span>Project-based learning</span>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 size={20} />
                  <span>Career-focused guidance</span>
                </div>

              </div>

            </div>

            {/* Form */}

            <form className="space-y-6 p-8 md:p-12">

              <div className="grid gap-5 md:grid-cols-2">

                <FormField
                  label="Full Name"
                  name="name"
                  placeholder="Enter your full name"
                  required
                />

                <FormField
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />

              </div>

              <div className="grid gap-5 md:grid-cols-2">

                <FormField
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  required
                />

                <FormField
                  label="College / University"
                  name="college"
                  placeholder="Enter your college"
                />

              </div>

              <div className="grid gap-5 md:grid-cols-2">

                <div>
                  <label
                    htmlFor="status"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    You Are
                  </label>

                  <select
                    id="status"
                    name="status"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="college-student">
                      College Student
                    </option>
                    <option value="fresher">
                      Fresher
                    </option>
                    <option value="graduate">
                      Recent Graduate
                    </option>
                    <option value="working">
                      Working Professional
                    </option>
                    <option value="career-switcher">
                      Career Switcher
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="program"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Interested In
                  </label>

                  <select
                    id="program"
                    name="program"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Program
                    </option>
                    <option value="training">
                      Technology Training
                    </option>
                    <option value="internship">
                      Internship
                    </option>
                    <option value="training-internship">
                      Training + Internship
                    </option>
                  </select>
                </div>

              </div>

              <div>
                <label
                  htmlFor="technology"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Preferred Technology
                </label>

                <select
                  id="technology"
                  name="technology"
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Technology
                  </option>
                  <option value="full-stack">
                    Full Stack Development
                  </option>
                  <option value="java">
                    Java Development
                  </option>
                  <option value="ai">
                    AI & Generative AI
                  </option>
                  <option value="data-analytics">
                    Data Analytics
                  </option>
                  <option value="mobile">
                    Mobile App Development
                  </option>
                  <option value="cloud">
                    Cloud & DevOps
                  </option>
                  <option value="not-sure">
                    Not Sure — Need Guidance
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Your Enquiry
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your career goal, current skills or what you want to learn..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white p-4 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              <button
                type="submit"
                className="group flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
              >
                Submit Training Enquiry

                <Send
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </button>

              <p className="text-center text-xs leading-5 text-slate-500">
                By submitting this form, you agree to be contacted regarding
                training and internship opportunities.
              </p>

            </form>

          </div>

        </div>

      </section>

  {/* =====================================================
    FAQ
===================================================== */}

<section className="pt-24 pb-4">

  <div className="mx-auto max-w-[900px] px-6 lg:px-8">

    <SectionHeading
      eyebrow="Frequently Asked Questions"
      title="Training & internship FAQs"
      description="Find answers to common questions before submitting your enquiry."
    />

    <div className="mt-12 space-y-4">

      <FAQ
        question="Who can apply for the training program?"
        answer="College students, graduates, freshers, working professionals and career switchers interested in developing practical technology skills can submit an enquiry. The appropriate program can depend on the participant's current knowledge, preferred technology and career objective."
      />

      <FAQ
        question="Will I get a mentor during training?"
        answer="Yes. The program is designed around mentor guidance. Mentor allocation can depend on the selected technology track and program structure."
      />

      <FAQ
        question="Which technologies are available?"
        answer="Available tracks can include Full Stack Development, Java Development, AI and Generative AI, Data Analytics, Mobile App Development and Cloud & DevOps fundamentals."
      />

      <FAQ
        question="Can freshers apply for internships?"
        answer="Yes. Freshers can submit an internship enquiry. Students, graduates, working professionals and career switchers can also enquire about available training or internship opportunities."
      />

      <FAQ
        question="Is the training online?"
        answer="Yes. The training is delivered online. Participants can learn remotely with mentor guidance, practical assignments, project support and technology-specific learning."
      />

      <FAQ
        question="How much does the training cost?"
        answer="Fees depend on the course or technology selected, duration, learning level, mentor involvement and program structure. Submit the enquiry form to receive the applicable fee details."
      />

    </div>

  </div>

</section>


{/* =====================================================
    FINAL CTA
===================================================== */}

<section className="-mt-30 px-6 pb-10 lg:-mt-30 lg:px-8">

  <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[40px] bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 px-8 py-16 text-center text-white shadow-[0_30px_90px_rgba(79,70,229,.25)] md:px-16">

    <GraduationCap
      size={42}
      className="mx-auto"
    />

    <h2 className="mt-6 text-4xl font-black md:text-5xl">
      Start Building Your Technology Career
    </h2>

    <p className="mx-auto mt-5 max-w-2xl leading-7 text-indigo-100">
      Whether you are a college student or a fresher, take the first
      step toward practical technology skills and real project
      experience.
    </p>

    <Link
      href="#enquiry"
      className="mt-8 inline-flex h-14 items-center gap-3 rounded-2xl bg-white px-7 font-bold text-indigo-700 transition hover:-translate-y-1"
    >
      Submit an Enquiry
      <ArrowRight size={19} />
    </Link>

  </div>

</section>

    </main>
  );
}

/* =========================================================
   REUSABLE COMPONENTS
========================================================= */

function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-3xl">

      <span
        className={`text-sm font-bold uppercase tracking-[3px] ${
          dark ? "text-indigo-400" : "text-indigo-600"
        }`}
      >
        {eyebrow}
      </span>

      <h2
        className={`mt-4 text-4xl font-black tracking-tight md:text-5xl ${
          dark ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>

      <p
        className={`mt-5 text-lg leading-8 ${
          dark ? "text-slate-400" : "text-slate-600"
        }`}
      >
        {description}
      </p>

    </div>
  );
}

function AudienceCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <article className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
        {icon}
      </div>

      <h3 className="mt-6 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-600">
        {text}
      </p>

    </article>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
        {icon}
      </div>

      <div>

        <h3 className="font-bold">
          {title}
        </h3>

        <p className="mt-1 leading-6 text-slate-600">
          {text}
        </p>

      </div>

    </div>
  );
}

function RoadmapStep({
  number,
  title,
  active = false,
}: {
  number: string;
  title: string;
  active?: boolean;
}) {
  return (
    <div className="flex items-center gap-4">

      <div
        className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold ${
          active
            ? "bg-indigo-600 text-white"
            : "bg-slate-100 text-slate-500"
        }`}
      >
        {number}
      </div>

      <span
        className={`font-semibold ${
          active ? "text-slate-900" : "text-slate-500"
        }`}
      >
        {title}
      </span>

    </div>
  );
}

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
        {icon}
      </div>

      <h3 className="mt-5 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-600">
        {text}
      </p>

    </article>
  );
}

function PricingCard({
  title,
  description,
  features,
  price,
  featured = false,
}: {
  title: string;
  description: string;
  features: string[];
  price: string;
  featured?: boolean;
}) {
  return (
    <article
      className={`relative rounded-[30px] border p-7 ${
        featured
          ? "border-indigo-500 bg-indigo-600 text-white shadow-[0_25px_70px_rgba(79,70,229,.25)]"
          : "border-slate-200 bg-white text-slate-900 shadow-sm"
      }`}
    >

      {featured && (
        <span className="absolute right-6 top-6 rounded-full bg-white/15 px-3 py-1 text-xs font-bold">
          Popular
        </span>
      )}

      <h3 className="text-2xl font-black">
        {title}
      </h3>

      <p
        className={`mt-3 leading-6 ${
          featured ? "text-indigo-100" : "text-slate-600"
        }`}
      >
        {description}
      </p>

      <div className="mt-7 text-3xl font-black">
        {price}
      </div>

      <div className="mt-7 space-y-4">

        {features.map((feature) => (

          <div
            key={feature}
            className="flex gap-3"
          >

            <CheckCircle2
              size={19}
              className={`mt-0.5 shrink-0 ${
                featured ? "text-indigo-200" : "text-indigo-600"
              }`}
            />

            <span
              className={
                featured ? "text-indigo-50" : "text-slate-600"
              }
            >
              {feature}
            </span>

          </div>

        ))}

      </div>

      <Link
        href="#enquiry"
        className={`mt-8 flex h-12 items-center justify-center rounded-xl font-semibold ${
          featured
            ? "bg-white text-indigo-700"
            : "bg-indigo-600 text-white"
        }`}
      >
        Enquire Now
      </Link>

    </article>
  );
}

function FormField({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>

      <label
        htmlFor={name}
        className="mb-2 block text-sm font-semibold text-slate-700"
      >
        {label}
        {required && (
          <span className="ml-1 text-red-500">*</span>
        )}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
      />

    </div>
  );
}

function FAQ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <details className="group rounded-2xl border border-slate-200 bg-white">

      <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-6 font-bold">

        <span>{question}</span>

        <ChevronDown
          size={20}
          className="shrink-0 transition-transform group-open:rotate-180"
        />

      </summary>

      <div className="px-6 pb-6 leading-7 text-slate-600">
        {answer}
      </div>

    </details>
  );
}

/* =========================================================
   ICON HELPER
========================================================= */

function SmartphoneIcon({
  size = 24,
}: {
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect
        width="14"
        height="20"
        x="5"
        y="2"
        rx="2"
        ry="2"
      />
      <path d="M12 18h.01" />
    </svg>
  );
}