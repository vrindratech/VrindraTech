"use client";

import Link from "next/link";
import { FaArrowLeft, FaArrowRight, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  FaFileContract,
  FaCheckCircle,
  FaInfoCircle,
  FaExclamationTriangle,
  FaBalanceScale,
} from "react-icons/fa";
import { useState } from "react";

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: string[];
}

const sections: Section[] = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    icon: <FaCheckCircle className="w-6 h-6" />,
    content: [
      "By accessing and using the Vrindra Tech website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.",
      "These Terms and Conditions constitute the entire agreement between you and Vrindra Tech regarding the use of our services and supersede any prior agreements between you and Vrindra Tech.",
    ],
  },
  {
    id: "use-license",
    title: "2. Use License",
    icon: <FaFileContract className="w-6 h-6" />,
    content: [
      "Permission is granted to temporarily download one copy of the materials (information or software) on Vrindra Tech's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:",
      "• Modifying or copying the materials\n• Using the materials for any commercial purpose or for any public display (commercial or non-commercial)\n• Attempting to decompile or reverse engineer any software contained on the website\n• Removing any copyright or other proprietary notations from the materials\n• Transferring the materials to another person or 'mirroring' the materials on any other server\n• Accessing or using the website for any automated purpose (such as with bots, scrapers, or data mining tools)",
      "This license shall automatically terminate if you violate any of these restrictions and may be terminated by Vrindra Tech at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.",
    ],
  },
  {
    id: "disclaimer",
    title: "3. Disclaimer",
    icon: <FaExclamationTriangle className="w-6 h-6" />,
    content: [
      "The materials on Vrindra Tech's website are provided on an 'as is' basis. Vrindra Tech makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
      "Further, Vrindra Tech does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.",
      "We do not guarantee that our website will be available at all times or that it will be error-free. We may perform maintenance or updates at any time that may temporarily interrupt availability or service.",
    ],
  },
  {
    id: "limitations",
    title: "4. Limitations of Liability",
    icon: <FaBalanceScale className="w-6 h-6" />,
    content: [
      "In no event shall Vrindra Tech or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the Vrindra Tech website, even if Vrindra Tech or an authorized representative has been notified orally or in writing of the possibility of such damage.",
      "Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.",
      "Our total liability to you for all damages, losses, and causes of action shall not exceed the amount paid by you, if any, for accessing our services.",
    ],
  },
  {
    id: "accuracy",
    title: "5. Accuracy of Materials",
    icon: <FaInfoCircle className="w-6 h-6" />,
    content: [
      "The materials appearing on Vrindra Tech's website could include technical, typographical, or photographic errors. Vrindra Tech does not warrant that any of the materials on its website are accurate, complete, or current.",
      "Vrindra Tech may make changes to the materials contained on its website at any time without notice. However, Vrindra Tech does not make any commitment to update the materials.",
      "We strive to provide accurate information about our services, but we do not guarantee the accuracy or completeness of all information on our website.",
    ],
  },
  {
    id: "links",
    title: "6. Links",
    icon: <FaArrowRight className="w-6 h-6" />,
    content: [
      "Vrindra Tech has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Vrindra Tech of the site. Use of any such linked website is at the user's own risk.",
      "If you find a link that is broken or leads to inappropriate content, please contact us immediately. We will make efforts to correct or remove such links.",
      "Vrindra Tech is not responsible for any third-party content, advertisements, or materials on linked websites. We recommend reviewing the terms and conditions of any linked website before using it.",
    ],
  },
  {
    id: "modifications",
    title: "7. Modifications",
    icon: <FaFileContract className="w-6 h-6" />,
    content: [
      "Vrindra Tech may revise these terms and conditions for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms and conditions.",
      "We will make reasonable efforts to notify users of significant changes to these terms, but it is your responsibility to review this page periodically for changes.",
      "Your continued use of the website following any modifications constitutes your acceptance of the modified terms and conditions.",
    ],
  },
  {
    id: "governing-law",
    title: "8. Governing Law",
    icon: <FaBalanceScale className="w-6 h-6" />,
    content: [
      "These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.",
      "If any part of these terms and conditions is found to be invalid or unenforceable, the remaining parts will continue to be valid and enforceable.",
      "The failure of Vrindra Tech to exercise or enforce any right or provision does not constitute a waiver of such right or provision.",
    ],
  },
  {
    id: "user-responsibilities",
    title: "9. User Responsibilities",
    icon: <FaCheckCircle className="w-6 h-6" />,
    content: [
      "You agree not to use our website for any illegal or unauthorized purpose or in violation of any laws or regulations. You agree not to:",
      "• Transmit any harmful, threatening, abusive, defamatory, obscene, or otherwise objectionable material\n• Impersonate any person or entity or misrepresent your affiliation with any person or entity\n• Disrupt the normal flow of dialogue within our website or services\n• Upload or transmit viruses or any other harmful code\n• Collect or track personal information of others without consent\n• Spam, phish, or engage in any form of harassment",
      "Violation of these responsibilities may result in immediate termination of your access to our services and legal action.",
    ],
  },
  {
    id: "intellectual-property",
    title: "10. Intellectual Property Rights",
    icon: <FaCheckCircle className="w-6 h-6" />,
    content: [
      "All content on the Vrindra Tech website, including but not limited to text, graphics, logos, images, and software, is the property of Vrindra Tech or its content suppliers and is protected by international copyright laws.",
      "You agree not to reproduce, republish, transmit, or distribute any content from our website without our prior written consent. Any permitted use must include proper attribution to Vrindra Tech.",
      "The Vrindra Tech name, logo, and other trademarks are the exclusive property of Vrindra Tech and may not be used without express written permission.",
    ],
  },
  {
    id: "services-warranty",
    title: "11. Services and Warranty",
    icon: <FaInfoCircle className="w-6 h-6" />,
    content: [
      "Vrindra Tech provides web development, mobile app development, software solutions, UI/UX design, and digital marketing services. While we strive to deliver high-quality work that meets your requirements, we cannot guarantee specific results or outcomes.",
      "Service delivery timelines are estimates and may be subject to change based on project complexity, requirements changes, or external factors. We will make best efforts to meet agreed-upon deadlines.",
      "Client feedback and changes requested after the initial agreement may impact project timeline and cost. Additional charges may apply for significant changes or additions to the original scope of work.",
    ],
  },
  {
    id: "payment-terms",
    title: "12. Payment Terms",
    icon: <FaCheckCircle className="w-6 h-6" />,
    content: [
      "Unless otherwise specified in a written contract, payment terms are net 30 days from invoice date. All payments should be made according to the invoice instructions provided.",
      "Late payments may incur interest charges at the rate of 1.5% per month or the maximum rate allowed by law, whichever is lower. Vrindra Tech reserves the right to suspend services for overdue accounts.",
      "All currency conversions and transaction fees are the responsibility of the client. Vrindra Tech is not liable for any banking or currency exchange charges.",
    ],
  },
  {
    id: "confidentiality",
    title: "13. Confidentiality",
    icon: <FaLock className="w-6 h-6" />,
    content: [
      "Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared during the course of our business relationship. This includes but is not limited to business plans, strategies, financial information, and technical specifications.",
      "Confidential information may only be disclosed to employees or contractors who need to know such information to perform their duties. All parties must sign appropriate confidentiality agreements.",
      "This obligation does not apply to information that is publicly available, or that we are legally required to disclose.",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function TermsAndConditionsPage() {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (id: string) => {
    setExpandedSections((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  return (
    <>
      {/* ================= HERO SECTION ================= */}

      <section className="relative overflow-hidden bg-[#08111F] pt-40 pb-32">
        {/* Blue & Cyan Glow */}
        <div className="absolute -top-40 -left-32 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-[160px]" />
        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-violet-500/10 blur-[170px]" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:55px_55px]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-3 rounded-full border border-indigo-400/30 bg-indigo-500/20 px-7 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-indigo-300">
              <FaFileContract />
              Terms & Conditions
            </span>

            <h1 className="mt-8 text-6xl md:text-7xl font-bold text-white leading-tight">
              Our Terms &{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                Conditions
              </span>
            </h1>

            <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
              Please read our terms and conditions carefully. By using our services, you agree to be bound by these terms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= TABLE OF CONTENTS ================= */}

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Quick Navigation
            </h2>
            <p className="text-gray-600 text-lg">
              Jump to any section to learn more
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {sections.map((section) => (
              <motion.a
                key={section.id}
                href={`#${section.id}`}
                variants={itemVariants}
                className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-300 group"
              >
                <div className="text-indigo-600 group-hover:text-violet-500 transition-colors">
                  {section.icon}
                </div>
                <span className="font-medium text-gray-700 group-hover:text-indigo-600 transition-colors">
                  {section.title}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= TERMS CONTENT ================= */}

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {sections.map((section) => (
              <motion.div
                key={section.id}
                id={section.id}
                variants={itemVariants}
                className="mb-12 rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-8 py-6 flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-start gap-4 text-left">
                    <div className="text-indigo-600 mt-1 flex-shrink-0">
                      {section.icon}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {section.title}
                    </h3>
                  </div>
                  <div
                    className={`text-2xl text-indigo-600 flex-shrink-0 transition-transform duration-300 ${
                      expandedSections.includes(section.id)
                        ? "rotate-180"
                        : ""
                    }`}
                  >
                    ▼
                  </div>
                </button>

                {expandedSections.includes(section.id) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-8 pb-6 border-t border-gray-200"
                  >
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      {section.content.map((paragraph, idx) => (
                        <p key={idx} className="text-base">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Contact for Questions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
                  className="mt-8 p-8 rounded-xl bg-gradient-to-r from-indigo-50 to-violet-50 border border-indigo-200"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Questions About Our Terms?
            </h3>
            <p className="text-gray-700 mb-6">
              If you have any questions or concerns about these terms and conditions, please don't hesitate to contact us.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-600 via-blue-500 to-violet-500 px-8 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Contact Us
              <FaArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}

      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Ready to Start?
              </h3>
              <p className="text-gray-600">
                Join us in creating amazing digital solutions for your business.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="group flex items-center gap-3 rounded-full border-2 border-gray-300 px-8 py-3 font-semibold text-slate-700 transition-all duration-300 hover:border-indigo-600 hover:bg-indigo-50"
              >
                <FaArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                Back to Home
              </Link>

              <Link
                href="/#contact"
                className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-600 via-blue-500 to-violet-500 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Get Started
                <FaArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
