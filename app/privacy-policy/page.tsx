"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Shield, 
  ArrowRight, 
  Lock, 
  Database, 
  Share2, 
  Eye, 
  CheckCircle, 
  Globe, 
  Zap,
  Users,
  FileText,
  Mail
} from "lucide-react";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

export default function PrivacyPolicyPage() {
 const sections = [
  {
    title: "1. Introduction",
    icon: FileText,
    color: "from-indigo-500 to-blue-500",
    content: `VrindraTech respects your privacy and is committed to protecting your personal information. This Privacy Policy explains what information we collect, how we use it, and how we protect it when you use our website or contact us.`,
  },

  {
    title: "2. Information We Collect",
    icon: Database,
    color: "from-indigo-500 to-violet-500",
    content: `We may collect information that you provide directly, including:

• Name
• Email address
• Phone number
• Company name
• Project or service requirements
• Information submitted through our contact forms

We may also collect basic technical information such as IP address, browser type, device information, and website usage data.`,
  },

  {
    title: "3. How We Use Your Information",
    icon: Zap,
    color: "from-indigo-500 to-blue-500",
    content: `We use your information to:

• Respond to inquiries and requests
• Discuss and provide our services
• Understand project requirements
• Communicate with you about projects
• Improve our website and services
• Maintain website security
• Comply with applicable legal requirements`,
  },

  {
    title: "4. Data Security",
    icon: Lock,
    color: "from-indigo-500 to-violet-500",
    content: `We take reasonable technical and organizational measures to protect your personal information from unauthorized access, loss, misuse, alteration, or disclosure.

However, no method of internet transmission or electronic storage is completely secure.`,
  },

  {
    title: "5. Information Sharing",
    icon: Share2,
    color: "from-indigo-500 to-violet-500",
    content: `VrindraTech does not sell or rent your personal information.

We may share information only when necessary with:

• Service providers supporting our website or services
• Technology and infrastructure providers
• Government or legal authorities when required by law
• Parties involved in a legitimate business transaction

We only share information when reasonably necessary for the relevant purpose.`,
  },

  {
    title: "6. Third-Party Links",
    icon: Globe,
    color: "from-sky-400 to-sky-500",
    content: `Our website may contain links to third-party websites or services. We are not responsible for their privacy practices or content.

We recommend reviewing the privacy policies of third-party websites before providing them with personal information.`,
  },

  {
    title: "7. Your Privacy Rights",
    icon: CheckCircle,
    color: "from-indigo-500 to-violet-500",
    content: `Subject to applicable law, you may have the right to:

• Request access to your personal information
• Request correction of inaccurate information
• Request deletion where legally applicable
• Withdraw consent where applicable
• Opt out of certain communications

You can contact us to make a privacy-related request.`,
  },

  {
    title: "8. Cookies & Tracking",
    icon: Eye,
    color: "from-pink-400 to-pink-500",
    content: `We may use cookies and analytics technologies to understand website usage, improve performance, and enhance your experience.

We may use services such as Google Analytics for website analytics.

You can control or disable cookies through your browser settings. Some website features may not work properly if cookies are disabled.`,
  },

  {
    title: "9. Children's Privacy",
    icon: Users,
    color: "from-orange-400 to-orange-500",
    content: `Our website and services are intended for general and business use. We do not knowingly collect personal information from children where such collection is prohibited by applicable law.

If you believe that a child has provided personal information to us, please contact us so we can take appropriate action.`,
  },

  {
    title: "10. International Transfers",
    icon: Globe,
    color: "from-violet-400 to-violet-500",
    content: `VrindraTech may work with clients and technology providers located in different countries. As a result, personal information may be processed or stored outside your country of residence.

Where required, we take reasonable steps to ensure that personal information is handled appropriately and securely.`,
  },

  {
    title: "11. Policy Updates",
    icon: Zap,
    color: "from-fuchsia-400 to-fuchsia-500",
    content: `We may update this Privacy Policy when our services, practices, or legal requirements change.

Any updates will be published on this page with the revised "Last Updated" date.

We recommend reviewing this page periodically for the latest information.`,
  },

  {
    title: "12. Contact Us",
    icon: Mail,
    color: "from-rose-400 to-rose-500",
    content: `If you have questions about this Privacy Policy or want to make a privacy-related request, please contact us:

Email: vrindratech@gmail.com
Phone: +91 8878535837
Response time: Within 24 Hours`,

  },
];

  return (
    <main className="bg-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute -left-40 -top-20 h-[700px] w-[700px] rounded-full bg-blue-400/5 blur-[180px]" />
        <div className="absolute right-[-200px] top-20 h-[700px] w-[700px] rounded-full bg-violet-400/5 blur-[180px]" />
        <div className="absolute bottom-[-300px] left-1/2 h-[800px] w-[900px] -translate-x-1/2 rounded-full bg-indigo-400/5 blur-[220px]" />
      </div>

      {/* HERO SECTION */}
      <section className="mx-auto max-w-[1450px] px-6 pt- pb-3">
        <motion.div
          initial="hidden"
          animate="show"
          variants={containerVariants}
          className="text-center"
        >
          <motion.div variants={fadeUp} className="flex justify-center mb-4">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-xl shadow-blue-200">
              <Shield className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl font-bold text-gray-900 pb-2 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-blue-500 to-violet-500"
          >
            Privacy Policy
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-2"
          >
            Your privacy is important to us. We are committed to being transparent
            about how we collect and use your data.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-sm text-gray-400"
          >
            Last Updated: September 2026
          </motion.p>
        </motion.div>
      </section>

      {/* CONTENT SECTION */}
      <section className="mx-auto max-w-4xl px-6 pb-20 -mt-30">
        <motion.div
          initial="hidden"
          animate="show"
          variants={containerVariants}
          className="grid gap-4"
        >
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={index}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-8 hover:border-blue-200 transition-all duration-300 hover:shadow-lg hover:shadow-blue-100"
              >
                {/* Gradient Background */}
                <div className={`absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-3xl`} />

                <div className="relative z-10">
                  {/* Header with Icon */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-br ${section.color} shadow-lg shadow-blue-200/50`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mt-1">
                      {section.title}
                    </h2>
                  </div>

                  {/* Content */}
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line text-sm md:text-base">
                    {section.content}
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* CTA SECTION */}
          <motion.div
            variants={fadeUp}
            className="mt-8 relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-violet-500 p-8 text-white shadow-2xl"
          >
            {/* Decorative Elements */}
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-4">
                <Zap className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-3">Have Questions About Your Privacy?</h3>
                  <p className="text-indigo-100 mb-6">
                    We're here to help. If you have any concerns or questions about our privacy practices, contact our team directly.
                  </p>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition-colors shadow-lg hover:shadow-xl"
                  >
                    Get in Touch
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Footer Info */}
          <motion.div
            variants={fadeUp}
            className="mt-8 text-center py-6 border-t border-gray-100"
          >
            <p className="text-gray-600 text-sm">
              At Vrindra Tech Technologies, we believe transparency builds trust. Your data security is our priority.
            </p>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
