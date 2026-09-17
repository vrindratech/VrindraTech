import Image from "next/image";

const faqs = [
  {
    question: "How much does it cost to build a website or mobile app?",
    answer: (
      <>
        The cost of <strong>website development or mobile app development</strong> depends on the project&apos;s scope, features, UI/UX requirements, technology, integrations, and complexity. At <strong>VrindraTech, a custom software development company</strong>, we first understand your requirements and then provide a tailored development plan and estimate. Whether you need a business website, eCommerce platform, mobile app, SaaS product, or custom software, we build solutions around your business goals and budget.
      </>
    ),
  },
  {
    question: "How long does it take to develop a website, mobile app, or MVP?",
    answer: (
      <>
        The <strong>website development timeline, mobile app development timeline, or MVP development timeline</strong> depends on the project&apos;s features and complexity. A simple business website can typically be developed within a few weeks, while a complex mobile application, SaaS platform, or custom software product may take several months. Our <strong>software development process</strong> includes requirement analysis, UI/UX design, development, testing, deployment, and post-launch support.
      </>
    ),
  },
  {
    question: "Do you work with US startups and international clients?",
    answer: (
      <>
        Yes. <strong>VrindraTech is a software development company working with US startups, founders, small businesses, and international clients.</strong> We provide web development, mobile app development, SaaS development, AI development, eCommerce development, and custom software development services. Our remote development process uses modern collaboration and project management tools to maintain clear communication and regular project updates across different time zones.
      </>
    ),
  },
  {
    question: "Can you build both the frontend and backend for my application?",
    answer: (
      <>
        Yes. VrindraTech provides <strong>full-stack development services</strong>, covering both <strong>frontend and backend development</strong>. Our team can develop responsive web applications, backend APIs, databases, authentication systems, admin dashboards, payment integrations, third-party API integrations, and cloud infrastructure. This allows businesses and startups to work with one <strong>full-stack software development partner</strong> from product concept through deployment.
      </>
    ),
  },
  {
    question: "Can you add AI features or automation to my existing product?",
    answer: (
      <>
        Yes. VrindraTech provides <strong>AI development and AI integration services</strong> for websites, mobile applications, SaaS platforms, and existing software systems. We can integrate AI-powered chatbots, intelligent search, document processing, content generation, data analysis, recommendations, and <strong>AI business automation</strong> into your existing product. Our <strong>AI software development services</strong> are designed around practical business requirements and measurable use cases.
      </>
    ),
  },
  {
    question: "Can you build an MVP for my startup before developing the full product?",
    answer: (
      <>
        Yes. VrindraTech provides <strong>startup MVP development services</strong> to help founders turn their ideas into working digital products. Our <strong>MVP development team</strong> can handle product planning, UI/UX design, frontend development, backend development, API integration, databases, authentication, payments, testing, and deployment. Starting with an MVP allows startups to launch their core product, gather user feedback, and expand based on real-world requirements.
      </>
    ),
  },
  {
    question: "Can you develop a custom SaaS product from scratch?",
    answer: (
      <>
        Yes. VrindraTech provides <strong>custom SaaS development services</strong> for startups and businesses looking to build software-as-a-service products from the ground up. Our <strong>SaaS development team</strong> can help with product architecture, UI/UX design, frontend and backend development, databases, user authentication, subscription management, payment integration, APIs, admin dashboards, cloud deployment, and ongoing SaaS maintenance.
      </>
    ),
  },
  {
    question: "Do you provide website, mobile app, and software maintenance after launch?",
    answer: (
      <>
        Yes. VrindraTech provides <strong>website maintenance, mobile app maintenance, and software maintenance services</strong> after your product goes live. Our ongoing technical support can include bug fixes, security updates, performance optimization, cloud and server maintenance, API updates, application updates, monitoring, and new feature development. This helps businesses keep their digital products secure, reliable, and ready to scale.
      </>
    ),
  },
  {
    question: "Who owns the source code and intellectual property after development?",
    answer: (
      <>
        <strong>Source code ownership and intellectual property rights</strong> are defined in the project agreement. Where the agreement provides for transfer after completion and payment, the client receives ownership of the agreed deliverables, including applicable source code, design assets, and documentation. We recommend clearly defining <strong>software intellectual property and source code ownership</strong> before development begins.
      </>
    ),
  },
  {
    question: "How can I start my project with VrindraTech?",
    answer: (
      <>
        Starting your project with VrindraTech is simple. Whether you need a <strong>web development company, mobile app development company, MVP development partner, SaaS development team, or AI development company</strong>, you can share your business idea, project requirements, target users, preferred platform, timeline, and budget with our team.
        <br />
        <br />
        We&apos;ll review your requirements, discuss the right technology approach, define the project scope, and outline the next steps for development.
      </>
    ),
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative overflow-hidden bg-[#f8fbff] py-24 text-slate-900 md:py-32">
      <div className="pointer-events-none absolute -left-48 top-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-48 bottom-0 h-[500px] w-[500px] rounded-full bg-indigo-400/10 blur-[160px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
          <div className="text-center md:text-left">
            <span className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">
              FAQ
            </span>
            <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
              Do You Have Any Questions
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:mx-0">
              Everything you need to know about working with VrindraTech.
            </p>
          </div>

          <div>
            <Image
              src="/images/faq.png"
              alt="VrindraTech FAQ illustration showing common questions about services, timelines, pricing, support, and process"
              width={1536}
              height={1024}
              className="h-auto w-full object-contain"
              priority
            />
          </div>
        </div>

        <div className="mt-14 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-slate-200 bg-white px-6 shadow-[0_12px_40px_rgba(15,23,42,0.05)] transition hover:border-indigo-200"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left text-lg font-bold text-slate-900 marker:hidden">
                {faq.question}
                <span className="shrink-0 text-2xl font-normal text-indigo-500 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="border-t border-slate-100 pb-6 pt-5 text-base leading-8 text-slate-600">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}