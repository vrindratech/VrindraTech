"use client";

import {
  Globe,
  Smartphone,
  MonitorCog,
  BrainCircuit,
  Cloud,
  ShoppingCart,
} from "lucide-react";

import ServiceItem from "./ServiceItem";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Fast, SEO-friendly websites built with modern technologies for better performance, user experience and search visibility.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Custom Android and iOS mobile applications designed for performance, scalability and seamless user experiences.",
  },
  {
    icon: MonitorCog,
    title: "Custom Software Development",
    description:
      "Scalable CRM, ERP, SaaS and enterprise software solutions tailored to your business processes and goals.",
  },
  {
    icon: BrainCircuit,
    title: "AI Solutions",
    description:
      "AI-powered chatbots, automation, RAG systems and intelligent business assistants that improve productivity and efficiency.",
  },
      {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Secure cloud infrastructure, CI/CD pipelines and deployment automation for reliable and scalable digital products.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Development",
    description:
      "High-performance e-commerce websites and online stores designed to improve user experience, conversions and business growth.",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden py-24">

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">
            OUR EXPERTISE
          </span>

          <h2 className="mt-8 text-6xl font-black text-white">
            Services We Offer
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-400">
            We build websites, mobile applications,
            enterprise software and AI-powered digital
            products that help businesses grow faster.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative mt-16">

          <div className="absolute left-0 right-0 top-14 hidden h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent lg:block" />

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">

            {services.map((service, index) => (
              <ServiceItem
                key={service.title}
                {...service}
                index={index}
              />
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}