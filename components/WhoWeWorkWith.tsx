"use client";

import {
  FaRocket,
  FaUserTie,
  FaChartLine,
  FaBullhorn,
  FaUsers,
  FaHandshake,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaRocket />,
    title: "Startups",
    description:
      "Building outbound from scratch and need verified contacts fast.",
  },
  {
    icon: <FaUserTie />,
    title: "CEOs & Founders",
    description:
      "Scaling revenue and need decision-maker data without the heavy price tag.",
  },
  {
    icon: <FaChartLine />,
    title: "Sales Teams",
    description:
      "Tired of bounced emails and outdated leads—need pipeline-ready contacts.",
  },
  {
    icon: <FaBullhorn />,
    title: "Marketing Teams",
    description:
      "Running campaigns that need accurate, segmented B2B lists to convert.",
  },
  {
    icon: <FaUsers />,
    title: "Staffing & Recruitment",
    description:
      "Need verified company and HR contact data to win new clients.",
  },
  {
    icon: <FaHandshake />,
    title: "B2B Agencies",
    description:
      "Need custom data for their own clients with white-label friendly delivery.",
  },
];

export default function WhoWeWorkWith() {
  return (
    <section
      id="who-we-work-with"
      className="pt-20 pb-10 bg-white from-white to-gray-50 "
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="inline-block rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-orange-600">
            Who We Work With
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
            Built For Growing Businesses
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
            JupitoData is built for teams who are done chasing bad data.
            We help businesses reach the right decision-makers faster with
            verified B2B contacts and custom research.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {cards.map((card, index) => (
            <div
              key={index}
              className="
                group
                rounded-3xl
                border
                border-gray-200
                bg-white
                p-8
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-orange-500
                hover:shadow-xl
              "
            >
              <div
                className="
                  mb-6
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-orange-100
                  text-3xl
                  text-orange-500
                  transition
                  group-hover:bg-orange-500
                  group-hover:text-white
                "
              >
                {card.icon}
              </div>

              <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                {card.title}
              </h3>

              <p className="leading-8 text-gray-600">
                {card.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}