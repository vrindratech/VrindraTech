import type { Metadata } from "next";
import { ArrowUpRight, BriefcaseBusiness, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore open roles at VrindraTech in international business development, React Native development, HR recruitment, and SEO.",
  alternates: {
    canonical: "https://vrindratech.com/career",
  },
};

const openings = [
  {
    title: "Business Development Executive (BDE)",
    experience: "5+ years",
    summary:
      "Build a qualified international sales pipeline through research-led outbound prospecting and thoughtful client conversations.",
    responsibilities: [
      "Research international markets, target accounts, and decision-makers to define high-fit prospect lists.",
      "Generate and qualify leads through channels such as LinkedIn, email outreach, referrals, and relevant business platforms.",
      "Understand prospect needs, present suitable services, and schedule discovery calls for the sales team.",
      "Maintain accurate activity, lead, and opportunity records in the CRM, and report pipeline progress consistently.",
      "Test outreach messaging and follow-up cadences, using response and conversion data to improve results.",
      "Coordinate with marketing and delivery teams to ensure proposals and client handovers are clear and timely.",
    ],
    requirements: [
      "At least 5 years of experience in B2B business development or international lead generation, preferably for technology or digital services.",
      "Demonstrated experience prospecting international clients and engaging decision-makers across time zones.",
      "Strong written and spoken English, with clear, professional email and call communication.",
      "Working knowledge of CRM platforms, LinkedIn prospecting, email outreach, and lead qualification practices.",
      "Confident discovery, presentation, negotiation, follow-up, and objection-handling skills.",
      "Self-managed, target-focused approach with reliable reporting and attention to detail.",
    ],
  },
  {
    title: "React Native Developer",
    experience: "3+ years",
    summary:
      "Develop and maintain polished cross-platform mobile applications for Android and iOS, from implementation through release.",
    responsibilities: [
      "Build responsive, reliable mobile experiences using React Native and modern JavaScript or TypeScript.",
      "Deliver features for both Android and iOS, accounting for platform-specific behavior and interface conventions.",
      "Integrate REST APIs and third-party SDKs, and collaborate with backend, design, and product teammates.",
      "Write maintainable, reusable code and take part in code reviews, testing, and technical planning.",
      "Debug performance, layout, and device-specific issues across emulators and physical devices.",
      "Support application builds, release preparation, and ongoing updates for the Google Play and Apple App stores.",
    ],
    requirements: [
      "At least 3 years of professional React Native development experience.",
      "Strong JavaScript or TypeScript fundamentals and practical experience shipping apps on both Android and iOS.",
      "Experience with navigation, state management, API integration, local storage, and common mobile UI patterns.",
      "Understanding of mobile debugging, performance optimization, and accessibility-minded implementation.",
      "Familiarity with Git, testing practices, app signing, and store deployment workflows.",
      "Able to communicate implementation decisions clearly and work collaboratively across disciplines.",
    ],
  },
  {
    title: "HR Recruiter",
    experience: "2+ years",
    summary:
      "Run organized, people-first recruitment processes and help teams find the right talent efficiently.",
    responsibilities: [
      "Manage full-cycle recruitment from role intake and sourcing through screening, interviews, offers, and joining.",
      "Partner with hiring managers to clarify role requirements, selection criteria, and interview plans.",
      "Source candidates through job boards, professional networks, referrals, and other relevant channels.",
      "Conduct initial interviews, assess role fit, and present concise, evidence-based candidate summaries.",
      "Coordinate interview schedules and maintain timely, respectful communication with candidates.",
      "Keep applicant records and hiring pipeline reports accurate, and suggest improvements to recruitment workflows.",
    ],
    requirements: [
      "At least 2 years of hands-on recruitment experience, ideally across technical and non-technical roles.",
      "Strong sourcing, resume screening, interviewing, and candidate relationship skills.",
      "Clear communication and sound judgment when handling candidate and employee information confidentially.",
      "Comfortable coordinating multiple openings, stakeholders, and interview schedules at once.",
      "Experience using applicant tracking systems, spreadsheets, or structured hiring trackers.",
      "Organized, dependable, and committed to a fair and positive candidate experience.",
    ],
  },
  {
    title: "SEO Specialist",
    experience: "3+ years",
    summary:
      "Improve organic visibility and qualified traffic through measurable technical, on-page, and off-page SEO work.",
    responsibilities: [
      "Plan keyword research, search-intent analysis, and content optimization for relevant target audiences.",
      "Audit technical SEO issues including crawlability, indexation, site structure, page speed, and mobile usability.",
      "Optimize page titles, metadata, headings, internal links, structured data, and landing-page content.",
      "Develop ethical link acquisition and off-page strategies that support authority and relevant referral traffic.",
      "Monitor rankings, organic traffic, conversions, and technical health, and translate findings into clear actions.",
      "Collaborate with content, design, and development teams to prioritize and implement SEO improvements.",
    ],
    requirements: [
      "At least 3 years of practical SEO experience with evidence of improving organic performance.",
      "Strong understanding of technical, on-page, off-page, and local SEO fundamentals.",
      "Hands-on experience with Google Search Console and GA4, plus common SEO research and crawling tools.",
      "Ability to interpret analytics, diagnose ranking or traffic changes, and communicate recommendations clearly.",
      "Working knowledge of HTML, structured data, canonicalization, redirects, and website performance factors.",
      "Careful, analytical approach and a commitment to sustainable, search-engine-compliant practices.",
    ],
  },
];

function ApplicationLink({ role }: { role: string }) {
  const subject = encodeURIComponent(`Application: ${role}`);

  return (
    <a
      href={`https://mail.google.com/mail/?view=cm&fs=1&to=support@vrindratech.com&su=${subject}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-11 items-center gap-2 rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700"
    >
      Apply for this role <ArrowUpRight size={17} aria-hidden="true" />
    </a>
  );
}

export default function CareerPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <section className="relative isolate overflow-hidden border-b border-indigo-100 bg-[#f6f6ff] px-6 pb-16 pt-32 sm:pb-20 sm:pt-36">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-50 [background-image:linear-gradient(rgba(79,70,229,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(79,70,229,0.055)_1px,transparent_1px)] [background-size:36px_36px]" />
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-indigo-800">
            <BriefcaseBusiness size={17} aria-hidden="true" /> Careers at VrindraTech
          </p>
          <h1 className="max-w-4xl text-4xl font-black leading-tight text-slate-950 sm:text-6xl">
            Do meaningful work. <span className="text-indigo-800">Grow with us.</span>
          </h1>
          <div className="mt-7">
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              We are hiring across business development, mobile engineering,
              recruitment, and search. Find the role that fits your experience
              and bring your craft to a team building digital products.
            </p>
          </div>
          <p className="mt-8 text-sm font-semibold text-slate-500">
            4 open positions
          </p>
        </div>
      </section>

      <section className="px-6 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl space-y-6">
          {openings.map((opening, index) => (
            <article
              key={opening.title}
              className="scroll-mt-28 border-t-2 border-slate-900 py-7 sm:py-9"
            >
              <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
                <div>
                  <p className="text-sm font-bold tabular-nums text-indigo-800">
                    ROLE 0{index + 1}
                  </p>
                  <h2 className="mt-3 text-2xl font-extrabold leading-tight sm:text-3xl">
                    {opening.title}
                  </h2>
                  <p className="mt-3 inline-flex rounded-sm bg-indigo-50 px-3 py-1.5 text-sm font-semibold text-indigo-900">
                    Experience: {opening.experience}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-600">
                    Location: Remote
                  </p>
                  <p className="mt-5 max-w-lg leading-7 text-slate-600">
                    {opening.summary}
                  </p>
                  <div className="mt-7">
                    <ApplicationLink role={opening.title} />
                  </div>
                </div>

                <div className="grid gap-7 sm:grid-cols-2">
                  <div>
                    <h3 className="text-base font-bold text-slate-950">
                      What you will do
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {opening.responsibilities.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
                          <Check className="mt-1 shrink-0 text-indigo-700" size={16} aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-950">
                      What you will bring
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {opening.requirements.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
                          <Check className="mt-1 shrink-0 text-indigo-700" size={16} aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

    </main>
  );
}