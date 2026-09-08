"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import {
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlineClock,
  HiArrowRight,
} from "react-icons/hi2";

import {
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const form = e.currentTarget;

      // Get all form values
      const formData = new FormData(form);

      // Convert FormData to normal object
      const object = Object.fromEntries(formData);

      // Add your Web3Forms Access Key
      const data = {
        ...object,
        access_key: "c897759e-db41-456d-9e7c-77c66c37d923",

        subject: "New Project Enquiry - VrindraTech",

        from_name: "VrindraTech Website",
      };

      // Send form to Web3Forms
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

      console.log("Web3Forms response:", result);

      if (result.success) {
        setSuccessMessage(
          "Thank you! Your enquiry has been sent successfully. We will contact you soon."
        );

        // Clear form
        form.reset();
      } else {
        setErrorMessage(
          result.message ||
            "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.error(
        "Web3Forms submission error:",
        error
      );

      setErrorMessage(
        "Unable to send your enquiry. Please check your internet connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white pt-10 pb-8"
    >
      {/* Background Blur */}
      <div className="absolute -left-40 -top-32 h-[720px] w-[720px] rounded-full bg-blue-400/10 blur-[180px]" />

      <div className="absolute right-[-180px] top-0 h-[700px] w-[700px] rounded-full bg-pink-300/20 blur-[180px]" />

      <div className="absolute bottom-[-260px] left-1/2 h-[800px] w-[900px] -translate-x-1/2 rounded-full bg-indigo-400/10 blur-[220px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">
            Contact Us
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Let's Build Something

            <span className="block bg-gradient-to-r from-indigo-600 via-blue-500 to-violet-500 bg-clip-text pb-2 text-transparent">
              Amazing Together
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-600">
            Whether you're starting a new project or looking
            for a reliable technology partner, we'd love to
            hear about your ideas.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="mt-20 grid gap-10 lg:grid-cols-[420px_1fr]">

          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-indigo-600 via-blue-500 to-violet-500 p-10 text-white shadow-xl"
          >
            <h3 className="text-3xl font-bold">
              Get In Touch
            </h3>

            <p className="mt-5 leading-8 text-blue-100">
              We'd be happy to discuss your project,
              answer your questions, or provide a free
              consultation.
            </p>

            {/* Phone */}
            <div className="mt-10 flex gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                <HiOutlinePhone className="text-2xl" />
              </div>

              <div>
                <p className="text-blue-100">
                  Phone
                </p>

                <a
                  href="tel:+918878535837"
                  className="text-xl font-semibold hover:text-cyan-100"
                >
                  +91 8878535837
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="mt-8 flex gap-5">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-[22px] bg-white/15">
                <HiOutlineEnvelope className="text-[30px] text-white" />
              </div>

              <div>
                <p className="text-blue-100">
                  Email
                </p>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=vrindratech@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md font-semibold hover:text-cyan-100"
                >
                  vrindratech@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="mt-8 flex gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                <HiOutlineMapPin className="text-2xl" />
              </div>

              <div>
                <p className="text-blue-100">
                  Location
                </p>

                <h4 className="text-xl font-semibold">
                  Ahmedabad, Gujarat
                </h4>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-8 flex gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                <HiOutlineClock className="text-2xl" />
              </div>

              <div>
                <p className="text-blue-100">
                  Working Hours
                </p>

                <h4 className="text-xl font-semibold">
                  Mon – Sat | 10 AM – 7 PM
                </h4>
              </div>
            </div>

            {/* Social */}
            <div className="mt-12 flex gap-4">

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 transition hover:bg-white hover:text-blue-600"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://wa.me/918878535837"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 transition hover:bg-white hover:text-green-600"
              >
                <FaWhatsapp />
              </a>

            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-xl"
          >

            <h3 className="text-3xl font-bold text-slate-900">
              Tell Us About Your Project
            </h3>

            <p className="mt-3 text-slate-500">
              Fill in the details below and our team will contact you within 24 hours.
            </p>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-6"
            >

              {/* Name & Email */}
              <div className="grid gap-6 md:grid-cols-2">

                <div>
                  <label className="mb-2 block font-medium text-slate-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="w-full rounded-2xl border border-slate-200 px-5 py-4 text-indigo-700 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium text-slate-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    className="w-full rounded-2xl border border-slate-200 px-5 py-4 text-indigo-700 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100"
                  />
                </div>

              </div>

              {/* Phone & Company */}
              <div className="grid gap-6 md:grid-cols-2">

                <div>
                  <label className="mb-2 block font-medium text-slate-700">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 XXXXX XXXXX"
                    required
                    className="w-full rounded-2xl border border-slate-200 px-5 py-4 text-indigo-700 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium text-slate-700">
                    Company Name
                  </label>

                  <input
                    type="text"
                    name="company"
                    placeholder="Your Company"
                    className="w-full rounded-2xl border border-slate-200 px-5 py-4 text-indigo-700 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100"
                  />
                </div>

              </div>

              {/* Service */}
              <div>

                <label className="mb-2 block font-medium text-slate-700">
                  Service Required
                </label>

                <select
                  name="service"
                  required
                  defaultValue=""
                  className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-indigo-700 outline-none transition-all duration-300 focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100"
                >
                  <option value="" disabled>
                    Select a Service
                  </option>

                  <option value="Website Development">
                    Website Development
                  </option>

                  <option value="Mobile App Development">
                    Mobile App Development
                  </option>

                  <option value="Custom Software Development">
                    Custom Software Development
                  </option>

                  <option value="UI / UX Design">
                    UI / UX Design
                  </option>

                  <option value="Digital Marketing">
                    Digital Marketing
                  </option>

                  <option value="Social Media Marketing">
                    Social Media Marketing
                  </option>
                </select>

              </div>

              {/* Message */}
              <div>

                <label className="mb-2 block font-medium text-slate-700">
                  Project Details
                </label>

                <textarea
                  name="message"
                  rows={6}
                  placeholder="Briefly describe your project requirements..."
                  required
                  className="w-full rounded-2xl border border-slate-200 px-5 py-4 text-indigo-700 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100"
                />

              </div>

              {/* Success Message */}
              {successMessage && (
                <div className="rounded-2xl border border-green-200 bg-green-50 px-5 py-4 text-sm font-medium text-green-700">
                  {successMessage}
                </div>
              )}

              {/* Error Message */}
              {errorMessage && (
                <div className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-700">
                  {errorMessage}
                </div>
              )}

              {/* CTA */}
              <div className="flex flex-wrap gap-4 pt-2">

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex items-center gap-3 rounded-2xl bg-[#2563EB] px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#1D4ED8] hover:shadow-blue-500/40 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting
                    ? "Sending..."
                    : "Send Message"}

                  {!isSubmitting && (
                    <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  )}
                </button>

                {/* Separate WhatsApp Chat */}
                <a
                  href="https://wa.me/918878535837?text=Hi%20VrindraTech,%20I%20would%20like%20to%20discuss%20my%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-2xl border border-green-500 px-8 py-4 font-semibold text-green-600 transition-all duration-300 hover:bg-green-500 hover:text-white"
                >
                  <FaWhatsapp />
                  Chat on WhatsApp
                </a>

              </div>

            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
}