"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCommentDots,
  FaPaperPlane,
  FaUser,
  FaBuilding,
  FaChevronDown,
  FaCheckCircle,
} from "react-icons/fa";

const services = [
  "Data Collection",
  "Lead Generation & Research",
  "Contact List Building",
  "Web Research & Scraping",
  "LinkedIn Research",
  "Data Enrichment",
  "Company Research",
  "Custom Data Project",
  "Product Based Research",
];

const trustBadges = [
  "Human Verified",
  "Custom Build",
  "GDPR Compliant",
  "Quality Assured",
];

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    const data = {
      access_key: "bd28fb9b-56d7-409d-b210-b4e0cd70a812",
      subject: "New Lead from JupitoData Website",
      from_name: "JupitoData Website",
      ...form,
    };

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (result.success) {
        setSuccess(
          "✅ Thank you! Your inquiry has been sent successfully."
        );

        setForm({
          name: "",
          email: "",
          company: "",
          service: "",
          message: "",
        });
      } else {
        setError("❌ Unable to send your message.");
      }
    } catch (err) {
      console.error(err);
      setError("❌ Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden pt-20 pb-10"
      style={{
        backgroundColor: "#FFF9F5",
        backgroundImage: `
          linear-gradient(rgba(249,115,22,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(249,115,22,0.05) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.08),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >

            <span className="inline-block rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-orange-600">
              Get In Touch
            </span>

            <h2 className="mt-6 text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
              Let's Build Your
              <span className="block text-orange-500">
                Data Strategy
              </span>
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-600">
              Ready to unlock verified business data and qualified
              leads? Tell us about your project and our experts
              will prepare a custom solution tailored to your
              business.
            </p>
                        {/* Contact Cards */}

            <div className="mt-14 space-y-7">

              {/* Email */}

              <motion.a
                href="mailto:mitesh@jupitodata.com"
                whileHover={{ x: 8 }}
                className="flex items-center gap-5 rounded-2xl bg-white p-5 shadow-lg transition"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100">
                  <FaEnvelope size={24} className="text-orange-500" />
                </div>

                <div>
                  <p className="text-gray-500">Email Us</p>
                  <h3 className="text-xl font-bold text-slate-900">
                    mitesh@jupitodata.com
                  </h3>
                </div>
              </motion.a>

              {/* Phone */}

              <motion.a
                href="tel:+917990542781"
                whileHover={{ x: 8 }}
                className="flex items-center gap-5 rounded-2xl bg-white p-5 shadow-lg transition"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100">
                  <FaPhoneAlt size={22} className="text-orange-500" />
                </div>

                <div>
                  <p className="text-gray-500">Call Us</p>
                  <h3 className="text-xl font-bold text-slate-900">
                    +91 7990542781
                  </h3>
                </div>
              </motion.a>

              {/* Location */}

              <motion.div
                whileHover={{ x: 8 }}
                className="flex items-center gap-5 rounded-2xl bg-white p-5 shadow-lg"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100">
                  <FaMapMarkerAlt size={22} className="text-orange-500" />
                </div>

                <div>
                  <p className="text-gray-500">Global Coverage</p>

                  <h3 className="text-xl font-bold text-slate-900">
                    India • USA • UK • Canada • Australia • Europe
                  </h3>
                </div>
              </motion.div>

            </div>

            {/* Trust Badges */}

            <div className="mt-10 flex flex-wrap gap-4">

              {trustBadges.map((badge, index) => (

                <motion.div
                  key={badge}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.12,
                  }}
                  whileHover={{
                    y: -5,
                    scale: 1.05,
                  }}
                  className="group relative flex cursor-pointer items-center gap-3 overflow-hidden rounded-full border border-orange-100 bg-white px-6 py-3 shadow-md transition-all hover:border-orange-500 hover:shadow-xl"
                >

                  <FaCheckCircle className="text-orange-500" />

                  <span className="font-medium text-gray-700">
                    {badge}
                  </span>

                </motion.div>

              ))}

            </div>

          </motion.div>

          {/* FORM */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .8 }}
              className="relative rounded-[35px] border border-gray-100 bg-white p-10 shadow-[0_25px_70px_rgba(0,0,0,0.08)]"
            >

              <div className="grid gap-8 md:grid-cols-2">
              {/* Full Name */}

<div>
  <label className="mb-3 block font-semibold text-gray-700">
    Full Name
  </label>

  <div className="relative">
    <FaUser className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-500" />

    <input
      type="text"
      name="name"
      value={form.name}
      onChange={handleChange}
      required
      placeholder="John Smith"
      className="w-full rounded-2xl border border-gray-200 py-4 pl-14 pr-5 text-black placeholder:text-gray-400 transition-all duration-300 hover:border-orange-300 hover:shadow-lg focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-100"
    />
  </div>
</div>

{/* Email */}

<div>
  <label className="mb-3 block font-semibold text-gray-700">
    Email Address
  </label>

  <div className="relative">
    <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-500" />

    <input
      type="email"
      name="email"
      value={form.email}
      onChange={handleChange}
      required
      placeholder="john@email.com"
      className="w-full rounded-2xl border border-gray-200 py-4 pl-14 pr-5 text-black placeholder:text-gray-400 transition-all duration-300 hover:border-orange-300 hover:shadow-lg focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-100"
    />
  </div>
</div>

{/* Company */}

<div>
  <label className="mb-3 block font-semibold text-gray-700">
    Company
  </label>

  <div className="relative">
    <FaBuilding className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-500" />

    <input
      type="text"
      name="company"
      value={form.company}
      onChange={handleChange}
      placeholder="Company Name"
      className="w-full rounded-2xl border border-gray-200 py-4 pl-14 pr-5 text-black placeholder:text-gray-400 transition-all duration-300 hover:border-orange-300 hover:shadow-lg focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-100"
    />
  </div>
</div>

{/* Service */}

<div>
  <label className="mb-3 block font-semibold text-gray-700">
    Select a Service
  </label>

  <div className="relative">

    <select
      name="service"
      value={form.service}
      onChange={handleChange}
      required
      className="w-full appearance-none rounded-2xl border border-gray-200 bg-white py-4 pl-5 pr-14 text-[15px] text-black transition-all duration-300 hover:border-orange-300 hover:shadow-lg focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-100"
    >
      <option value="">Select Service</option>

      {services.map((service) => (
        <option key={service} value={service}>
          {service}
        </option>
      ))}
    </select>

    <FaChevronDown className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-orange-500" />

  </div>
</div>

</div>
{/* Project Details */}

<div className="mt-8">

  <label className="mb-3 block font-semibold text-gray-700">
    Project Details
  </label>

  <div className="relative">

    <FaCommentDots className="absolute left-5 top-6 text-orange-500" />

    <textarea
      rows={4}
      name="message"
      value={form.message}
      onChange={handleChange}
      required
      placeholder="Tell us about your project requirements..."
      className="w-full rounded-2xl border border-gray-200 py-4 pl-14 pr-5 text-black placeholder:text-gray-400 transition-all duration-300 hover:border-orange-300 hover:shadow-lg focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-100"
    />

  </div>

</div>

{/* Submit Button */}

<motion.button
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.98 }}
  type="submit"
  disabled={loading}
  className="group mt-10 flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 py-5 text-xl font-semibold text-white shadow-xl transition disabled:cursor-not-allowed disabled:opacity-70"
>

  {loading ? "Sending..." : "Send Message"}

  <FaPaperPlane className="transition duration-300 group-hover:translate-x-2 group-hover:-translate-y-1" />

</motion.button>

{/* Success */}

{success && (
  <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-4 text-center text-green-700">
    {success}
  </div>
)}

{/* Error */}

{error && (
  <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-center text-red-700">
    {error}
  </div>
)}

</motion.form>

</motion.div>

</div>
      </div>
    </section>
  );
}