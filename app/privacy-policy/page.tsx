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
      content: `Vrindra Tech Technologies ("we", "our", "us", or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.

Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our services.`,
    },
    {
      title: "2. Information We Collect",
      icon: Database,
      color: "from-indigo-500 to-violet-500",
      content: `We may collect information about you in a variety of ways:

• Personal Data: Name, email, phone, company name, project details
• Automatic Data Collection: IP address, browser type, OS, referring URLs, pages visited
• Cookies & Tracking: Usage patterns and preferences for enhanced experience`,
    },
    {
      title: "3. How We Use Your Information",
      icon: Zap,
      color: "from-indigo-500 to-blue-500",
      content: `• Provide and improve our services
• Process inquiries and respond to requests
• Send marketing communications (with consent)
• Monitor and analyze trends and activities
• Detect and prevent technical issues
• Comply with legal requirements
• Personalize your experience
• Conduct research and analytics`,
    },
    {
      title: "4. Data Security",
      icon: Lock,
      color: "from-indigo-500 to-violet-500",
      content: `We implement comprehensive security measures:

• SSL/TLS encrypted data transmission
• Secure password authentication
• Regular security audits and updates
• Limited access to personal information
• Confidentiality agreements with all staff

While we strive to protect your data, no system is 100% secure.`,
    },
    {
      title: "5. Information Sharing",
      icon: Share2,
      color: "from-indigo-500 to-violet-500",
      content: `We do not sell or rent your data. We may share information:

• With service providers assisting us
• When required by law
• To protect our rights and security
• In connection with business transactions
• With your explicit consent`,
    },
    {
      title: "6. Third-Party Links",
      icon: Globe,
      color: "from-sky-400 to-sky-500",
      content: `Our website contains links to third-party sites. We are not responsible for their privacy practices. We encourage you to review external websites' privacy policies before sharing information.`,
    },
    {
      title: "7. Your Privacy Rights",
      icon: CheckCircle,
      color: "from-indigo-500 to-violet-500",
      content: `• Right to Access your personal information
• Right to Correction of inaccurate data
• Right to Deletion of your information
• Right to Opt-Out of marketing communications
• Right to Data Portability

Contact us to exercise these rights.`,
    },
    {
      title: "8. Cookies & Tracking",
      icon: Eye,
      color: "from-pink-400 to-pink-500",
      content: `We use cookies to improve your experience. You can control settings through your browser. We use analytics tools like Google Analytics to understand behavior and improve services. Disabling cookies may affect functionality.`,
    },
    {
      title: "9. Children's Privacy",
      icon: Users,
      color: "from-orange-400 to-orange-500",
      content: `Our services are not directed to children under 13 years. We do not knowingly collect information from children under 13. If discovered, we will delete such information immediately.`,
    },
    {
      title: "10. International Transfers",
      icon: Globe,
      color: "from-violet-400 to-violet-500",
      content: `Your information may be transferred, stored, and processed in countries outside your residence. These countries may have different data protection laws than your home country.`,
    },
    {
      title: "11. Policy Updates",
      icon: Zap,
      color: "from-fuchsia-400 to-fuchsia-500",
      content: `We may update this policy to reflect changes in practices or legal requirements. Material changes will be posted on our website with an updated date. Continued use indicates acceptance.`,
    },
    {
      title: "12. Contact Us",
      icon: Mail,
      color: "from-rose-400 to-rose-500",
      content: `For privacy questions, reach out to:

Email: privacy@Vrindra Tech.com
Phone: +91 XXXXXXX
Address: [Your Company Address]

Response time: Within 30 days`,
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
            Last Updated: January 2024
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
                    href="#contact"
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
