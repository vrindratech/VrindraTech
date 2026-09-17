"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CalendarDays,
  Check,
  LoaderCircle,
  Mail,
  RefreshCw,
  Send,
  X,
} from "lucide-react";

type Message = {
  id: number;
  role: "assistant" | "user";
  text: string;
};

type Step = {
  prompt: string;
  options?: string[];
  placeholder?: string;
};

type Flow = {
  id: string;
  emoji: string;
  label: string;
  intro: string;
  steps: Step[];
};

const timing = [
  "⚡ ASAP",
  "📅 Within 1 month",
  "📅 1–3 months",
  "🔎 Just exploring",
];

const leadQuestion = {
  prompt: "Would you like the VrindraTech team to review your requirements?",
  options: ["✅ Yes, please", "Maybe later"],
};

const flows: Flow[] = [
  {
    id: "startup",
    emoji: "🚀",
    label: "I have a startup idea",
    intro:
      "That's exciting! 🚀 We can help turn your idea into an MVP and develop it into a scalable product.",
    steps: [
      {
        prompt: "Tell me a little about your idea. What are you planning to build?",
        placeholder: "Describe your idea in a few words...",
      },
      {
        prompt: "Got it. Who is your target customer or user?",
        placeholder: "For example: small businesses, students, or shoppers...",
      },
      {
        prompt: "What are you thinking of building?",
        options: [
          "🌐 Web app",
          "📱 Mobile app",
          "📊 SaaS",
          "🤖 AI product",
          "❓ Not sure yet",
        ],
      },
      { prompt: "When are you hoping to start?", options: timing },
      leadQuestion,
    ],
  },
  {
    id: "website",
    emoji: "🌐",
    label: "I need a website",
    intro: "Absolutely! 🌐 What type of website are you looking to build?",
    steps: [
      {
        prompt: "Choose the closest match.",
        options: [
          "Business website",
          "Startup website",
          "eCommerce",
          "Web application",
          "Landing page",
          "Other",
        ],
      },
      {
        prompt:
          "Do you already have a website, or would this be a new project?",
        options: ["New project", "Existing website"],
      },
      {
        prompt: "What are the main features or functionality you need?",
        placeholder: "Tell us about the pages, features, or integrations...",
      },
      { prompt: "When would you like to start?", options: timing },
      leadQuestion,
    ],
  },
  {
    id: "mobile",
    emoji: "📱",
    label: "I need a mobile app",
    intro:
      "Great! 📱 What type of mobile application are you planning to build?",
    steps: [
      {
        prompt: "Which platform do you need?",
        options: ["🍎 iOS", "🤖 Android", "📱 iOS + Android", "❓ Not sure"],
      },
      {
        prompt: "Is this a new app or an existing application?",
        options: ["New app", "Existing app"],
      },
      {
        prompt: "What are the main features you need?",
        placeholder:
          "For example: login, payments, chat, maps, or notifications...",
      },
      { prompt: "When are you planning to start?", options: timing },
      leadQuestion,
    ],
  },
  {
    id: "ai",
    emoji: "🤖",
    label: "I need an AI solution",
    intro:
      "We'd be happy to explore that with you. 🤖 What would you like AI to help with?",
    steps: [
      {
        prompt: "Choose the closest goal.",
        options: [
          "AI chatbot",
          "AI agent",
          "Business automation",
          "Document processing",
          "Data analysis",
          "AI-powered product",
          "Add AI to an existing product",
          "Not sure",
        ],
      },
      {
        prompt: "Tell me a little about the problem you're trying to solve.",
        placeholder: "What would you like to make easier or faster?",
      },
      {
        prompt:
          "Do you already have an application or business system that AI needs to integrate with?",
        options: ["Yes", "No", "Not sure"],
      },
      {
        prompt:
          "Would you like our team to explore the right AI approach for your business?",
        options: ["✅ Yes, please", "Maybe later"],
      },
    ],
  },
  {
    id: "estimate",
    emoji: "💰",
    label: "I want a project estimate",
    intro:
      "Absolutely. 💰 I can help gather the information needed for an accurate project estimate.",
    steps: [
      {
        prompt: "What are you looking to build?",
        options: [
          "Website",
          "Mobile app",
          "SaaS",
          "AI solution",
          "eCommerce",
          "Custom software",
          "Other",
        ],
      },
      {
        prompt: "What are the main features you need?",
        placeholder: "Share the most important features...",
      },
      {
        prompt:
          "Do you need a backend, database, admin panel, payments, or integrations?",
        placeholder: "List anything you already know you need...",
      },
      { prompt: "When would you like to start?", options: timing },
      {
        prompt: "Do you have an approximate project budget?",
        options: [
          "Under $5K",
          "$5K–$10K",
          "$10K–$25K",
          "$25K+",
          "Not sure",
        ],
      },
      {
        prompt:
          "Thanks! Pricing depends on scope, features, complexity, integrations, and timeline. Would you like us to contact you?",
        options: ["✅ Yes, contact me", "Maybe later"],
      },
    ],
  },
  {
    id: "saas",
    emoji: "📊",
    label: "I want to build a SaaS product",
    intro: "Great! 📊 What type of SaaS product are you planning to build?",
    steps: [
      {
        prompt: "Tell me about your SaaS idea.",
        placeholder: "What will the platform help people do?",
      },
      {
        prompt: "Who will use the platform?",
        placeholder:
          "For example: teams, creators, retailers, or schools...",
      },
      {
        prompt: "Which features are you considering?",
        options: [
          "User accounts",
          "Subscription plans",
          "Payments",
          "Admin dashboard",
          "Analytics",
          "Notifications",
          "API integrations",
          "AI features",
          "Other",
        ],
      },
      {
        prompt:
          "Are you looking to launch an MVP first or build the complete product?",
        options: ["MVP first", "Full product", "Not sure"],
      },
      { prompt: "When are you hoping to start?", options: timing },
      leadQuestion,
    ],
  },
  {
    id: "ecommerce",
    emoji: "🛒",
    label: "I need an eCommerce solution",
    intro: "Absolutely! 🛒 What type of eCommerce solution do you need?",
    steps: [
      {
        prompt: "Choose the closest match.",
        options: [
          "New online store",
          "Shopify",
          "Custom eCommerce",
          "Existing store improvements",
          "eCommerce integration",
          "Not sure",
        ],
      },
      {
        prompt: "What products or services will you be selling?",
        placeholder: "Tell us about your products or services...",
      },
      {
        prompt: "Which features do you need?",
        options: [
          "Payments",
          "Product management",
          "Orders",
          "Inventory",
          "Shipping",
          "Customer accounts",
          "Admin dashboard",
          "Other",
        ],
      },
      { prompt: "When would you like to launch?", options: timing },
      leadQuestion,
    ],
  },
  {
    id: "custom",
    emoji: "💻",
    label: "I need custom software",
    intro:
      "Absolutely. 💻 We can develop software around your specific business requirements.",
    steps: [
      {
        prompt:
          "What business process are you trying to improve, automate, or replace?",
        placeholder: "Describe the current process...",
      },
      {
        prompt: "Who will use the software?",
        placeholder:
          "For example: staff, customers, managers, or partners...",
      },
      {
        prompt: "Do you currently use another system or manual process?",
        options: [
          "Existing software",
          "Spreadsheets/manual process",
          "Another platform",
          "Nothing currently",
        ],
      },
      {
        prompt: "What are the most important features you need?",
        placeholder: "List the features that matter most...",
      },
      leadQuestion,
    ],
  },
  {
    id: "existing",
    emoji: "🔄",
    label: "I want to improve an existing product",
    intro:
      "Sure! 🔄 Tell me about your existing product and what you would like to improve.",
    steps: [
      {
        prompt: "What would you like help with?",
        options: [
          "🐛 Fix bugs",
          "⚡ Improve performance",
          "🎨 Redesign UI/UX",
          "➕ Add features",
          "🤖 Add AI",
          "🔌 Integrate APIs",
          "☁️ Cloud migration",
          "📈 Scale the product",
          "🔄 Modernize technology",
        ],
      },
      {
        prompt:
          "What technology is your existing product built with, if you know?",
        placeholder:
          "For example: React, Next.js, Java, or not sure...",
      },
      {
        prompt:
          "What is the biggest problem you are currently experiencing?",
        placeholder: "Tell us what is not working well...",
      },
      {
        prompt:
          "Would you like the VrindraTech team to review your existing product requirements?",
        options: ["✅ Yes, please", "Maybe later"],
      },
    ],
  },
  {
    id: "team",
    emoji: "💬",
    label: "Talk to our team",
    intro: "Absolutely! 💬 I'll help you connect with the VrindraTech team.",
    steps: [
      {
        prompt: "What would you like to discuss?",
        options: [
          "New project",
          "Existing product",
          "AI solution",
          "Partnership",
          "General enquiry",
          "Other",
        ],
      },
      {
        prompt: "What would you like our team to know about your project?",
        placeholder: "Share a short summary...",
      },
    ],
  },
];

const welcome: Message = {
  id: 1,
  role: "assistant",
  text:
    "Hi! 👋\n\nI'm your VrindraTech AI assistant.\nHave a product idea? Let's explore it and find the right solution for you.",
};

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([welcome]);
  const [input, setInput] = useState("");
  const [flow, setFlow] = useState<Flow | null>(null);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [leadOpen, setLeadOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [scheduleSending, setScheduleSending] = useState(false);
  const [schedule, setSchedule] = useState({ date: "", time: "" });
  const [lead, setLead] = useState({
    name: "",
    email: "",
    company: "",
  });

  const add = (role: Message["role"], text: string) => {
    setMessages((current) => [
      ...current,
      { id: Date.now() + Math.random(), role, text },
    ]);
  };

  const reset = () => {
    setMessages([welcome]);
    setFlow(null);
    setStep(0);
    setAnswers([]);
    setLeadOpen(false);
    setSent(false);
    setScheduleOpen(false);
    setSchedule({ date: "", time: "" });
    setInput("");
    setLead({ name: "", email: "", company: "" });
  };

  const start = (nextFlow: Flow) => {
    setFlow(nextFlow);
    setStep(0);
    setAnswers([]);
    add("user", `${nextFlow.emoji} ${nextFlow.label}`);
    add(
      "assistant",
      `${nextFlow.intro}\n\n${nextFlow.steps[0].prompt}`
    );
  };

  const answer = (value: string) => {
    if (!flow) return;

    const nextAnswers = [...answers, value];
    setAnswers(nextAnswers);
    add("user", value);

    const nextStep = step + 1;
    const needsLead =
      value.toLowerCase().includes("yes") ||
      value.toLowerCase().includes("contact");

    if (
      needsLead ||
      (flow.id === "team" && nextStep >= flow.steps.length)
    ) {
      add(
        "assistant",
        "Great! 📩 Please share your details and our team will review your request."
      );
      setLeadOpen(true);
      return;
    }

    if (nextStep >= flow.steps.length) {
      add(
        "assistant",
        "Thanks for sharing that. 😊 Our team can review the details and guide you on the next step."
      );
      return;
    }

    setStep(nextStep);
    add("assistant", flow.steps[nextStep].prompt);
  };

  const submitMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const value = input.trim();
    if (!value) return;

    setInput("");

    if (flow && !leadOpen && !sent) {
      answer(value);
    } else {
      add("user", value);
      add(
        "assistant",
        "Thanks for sharing. 😊 Our team can review your requirements and help with the right next step."
      );
    }
  };

  const submitLead = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: "c897759e-db41-456d-9e7c-77c66c37d923",
            subject: "🚀 New Project Lead — VrindraTech",
            from_name: "VrindraTech Website Chat",
            ...lead,
            company: lead.company || "Not provided",
            project_type: flow?.label,
            requirement: answers.join(" | "),
            lead_source: "Website Chat",
          }),
        }
      );

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message);
      }

      setLeadOpen(false);
      setSent(true);

      add(
        "assistant",
        "Thanks! 🎉 We've received your request. What would you like to do next?"
      );
    } catch {
      add(
        "assistant",
        "Sorry, we could not send that just now. Please try again or use the contact form. 🙏"
      );
    } finally {
      setSending(false);
    }
  };

  const submitSchedule = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setScheduleSending(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "c897759e-db41-456d-9e7c-77c66c37d923",
          subject: "📅 Call Request — VrindraTech",
          from_name: "VrindraTech Website Chat",
          to: "vrindratech@gmail.com",
          preferred_date: schedule.date,
          preferred_time: schedule.time,
          project_type: flow?.label || "Not specified",
          lead_source: "Website Chat - Schedule a Call",
        }),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message);
      }

      setScheduleOpen(false);
      add(
        "assistant",
        `Thanks! 📅 Your call request for ${schedule.date} at ${schedule.time} has been sent to our team. We'll confirm the meeting by email.`
      );
    } catch {
      add(
        "assistant",
        "Sorry, we could not send your call request right now. Please try again. 🙏"
      );
    } finally {
      setScheduleSending(false);
    }
  };

  const currentStep = flow?.steps[step];

  return (
    <>
      <style jsx>{`
        @keyframes chatbot-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-4px) rotate(-1deg); }
        }

        .chatbot-float {
          animation: chatbot-float 3.2s ease-in-out infinite;
          transform-origin: center bottom;
        }
      `}</style>

      <div className="fixed bottom-4 right-4 z-[9999] flex flex-col items-end font-sans">
      {isOpen && (
        <div
          role="dialog"
          aria-label="VrindraTech AI assistant"
          className="flex w-[390px] max-w-[calc(100vw-24px)] flex-col overflow-hidden rounded-[22px] border border-[#dbe6f4] bg-white shadow-[0_20px_60px_rgba(13,55,110,0.20)]"
          style={{
            height: "min(680px, calc(100vh - 32px))",
            minHeight: 0,
          }}
        >
          {/* HEADER — div is intentional so site-wide header CSS cannot resize the chat */}
          <div
            className="relative flex shrink-0 items-center justify-between overflow-hidden bg-gradient-to-br from-[#073f91] via-[#0a4fa7] to-[#10356e] px-4 text-white"
            style={{ height: 88, minHeight: 88 }}
          >
            <div className="relative flex items-center gap-2.5">
              <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center overflow-hidden">
                <Image
                  src="/images/chatbot.png"
                  alt="VrindraTech chatbot"
                  width={56}
                  height={56}
                  className="chatbot-float h-[52px] w-[52px] object-contain"
                />
              </div>

              <div>
                <div className="text-[17px] font-bold leading-[1.1] tracking-[-0.03em]">
                  VrindraTech
                </div>

                <div className="mt-0.5 flex items-center gap-1.5 text-[11px] text-cyan-100">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,.8)]" />
                  Online
                </div>
              </div>
            </div>

            <div className="relative flex items-center gap-1">
              <button
                type="button"
                aria-label="Start chat again"
                onClick={reset}
                className="rounded-full p-2 text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                <RefreshCw size={18} />
              </button>

              <button
                type="button"
                aria-label="Close chat"
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 text-white/90 transition hover:bg-white/10"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* CHAT BODY */}
          <div className="min-h-0 flex-1 overflow-y-auto bg-white px-3 py-3">
            {!flow && !leadOpen && !sent ? (
              <>
                {/* Welcome message */}
                <div className="mb-3 flex items-start gap-2.5">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center bg-transparent">
                    <Image
                      src="/images/chatbot.png"
                      alt="AI"
                      width={42}
                      height={42}
                      className="h-10 w-10 object-contain"
                    />
                  </div>

                  <div
                    className="rounded-[17px] rounded-tl-[6px] bg-[#f0f5fc] px-3.5 py-2.5 text-[12px] leading-[1.45] text-[#182b4b]"
                  >
                    <p className="mb-1 font-medium">Hi! 👋</p>
                    <p className="font-medium">
                      I&apos;m your VrindraTech AI assistant.
                    </p>
                    <p className="mt-2 font-semibold">
                      What are you looking to build?
                    </p>
                  </div>
                </div>

                {/* Main options */}
                <div className="grid grid-cols-2 gap-2">
                  {flows.map((item, index) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => start(item)}
                      className={`
                        group flex min-h-[58px] items-center gap-1.5
                        rounded-[15px] border px-2 py-2
                        text-left transition-all duration-200
                        hover:-translate-y-[1px]
                        hover:border-[#a9c9ff]
                        hover:bg-[#f5f9ff]
                        ${
                          index === 0
                            ? "border-[#2d74f5] bg-gradient-to-br from-[#1470f7] to-[#1f64e7] text-white shadow-[0_8px_20px_rgba(31,100,231,.18)]"
                            : "border-[#dce7f4] bg-white text-[#263a5b]"
                        }
                      `}
                    >
                      <span
                        className={`
                          flex h-8 w-8 shrink-0 items-center justify-center
                          rounded-full text-[15px]
                          ${
                            index === 0
                              ? "bg-white/15"
                              : "bg-[#eef4fb]"
                          }
                        `}
                      >
                        {item.emoji}
                      </span>

                      <span
                        className={`
                          min-w-0 flex-1 text-[11px] font-semibold
                          leading-[1.25]
                          ${
                            index === 0
                              ? "text-white"
                              : "text-[#263a5b]"
                          }
                        `}
                      >
                        {item.label}
                      </span>

                      <span
                        className={`
                          shrink-0 text-[18px] leading-none
                          ${
                            index === 0
                              ? "text-white/90"
                              : "text-[#6685ff]"
                          }
                        `}
                      >
                        ›
                      </span>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <>
                {/* Conversation */}
                <div className="space-y-3">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.role === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      {message.role === "assistant" && (
                        <div className="mr-2 mt-1 flex h-8 w-8 shrink-0 items-center justify-center bg-transparent">
                          <Image
                            src="/images/chatbot.png"
                            alt="AI"
                            width={34}
                            height={34}
                            className="h-8 w-8 object-contain"
                          />
                        </div>
                      )}

                      <div
                        className={`
                          max-w-[82%] whitespace-pre-line rounded-[15px]
                          px-3.5 py-2.5 text-[12px] leading-[1.5]
                          ${
                            message.role === "user"
                              ? "rounded-br-[5px] bg-[#176cf2] text-white"
                              : "rounded-tl-[5px] bg-[#f0f5fc] text-[#263a5b]"
                          }
                        `}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Current choices */}
                {flow && !leadOpen && !sent && currentStep?.options && (
                  <div className="mt-3 grid grid-cols-1 gap-1.5">
                    {currentStep.options.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => answer(option)}
                        className="rounded-[12px] border border-[#dce7f4] bg-white px-3 py-2 text-left text-[12px] font-semibold text-[#263a5b] transition hover:border-[#9cbfff] hover:bg-[#f4f8ff] hover:text-[#155edb]"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}

                {/* Lead form */}
                {leadOpen && (
                  <form
                    onSubmit={submitLead}
                    className="mt-3 rounded-[16px] border border-[#dce7f4] bg-[#f8fbff] p-3.5"
                  >
                    <div className="mb-3 flex items-center gap-2 text-[13px] font-bold text-[#19375f]">
                      <Mail size={16} className="text-[#176cf2]" />
                      Share your details
                    </div>

                    <label className="mb-2.5 block text-[10px] font-semibold text-[#64748b]">
                      Name
                      <input
                        required
                        value={lead.name}
                        onChange={(event) =>
                          setLead({
                            ...lead,
                            name: event.target.value,
                          })
                        }
                        className="mt-1 w-full rounded-[11px] border border-[#dce7f4] bg-white px-3 py-2.5 text-[12px] text-[#182b4b] outline-none focus:border-[#699cff] focus:ring-4 focus:ring-[#eaf2ff]"
                        placeholder="Your name"
                      />
                    </label>

                    <label className="mb-2.5 block text-[10px] font-semibold text-[#64748b]">
                      Email
                      <input
                        required
                        type="email"
                        value={lead.email}
                        onChange={(event) =>
                          setLead({
                            ...lead,
                            email: event.target.value,
                          })
                        }
                        className="mt-1 w-full rounded-[11px] border border-[#dce7f4] bg-white px-3 py-2.5 text-[12px] text-[#182b4b] outline-none focus:border-[#699cff] focus:ring-4 focus:ring-[#eaf2ff]"
                        placeholder="you@company.com"
                      />
                    </label>

                    <label className="block text-[10px] font-semibold text-[#64748b]">
                      Company{" "}
                      <span className="font-normal text-slate-400">
                        (optional)
                      </span>
                      <input
                        value={lead.company}
                        onChange={(event) =>
                          setLead({
                            ...lead,
                            company: event.target.value,
                          })
                        }
                        className="mt-1 w-full rounded-[11px] border border-[#dce7f4] bg-white px-3 py-2.5 text-[12px] text-[#182b4b] outline-none focus:border-[#699cff] focus:ring-4 focus:ring-[#eaf2ff]"
                        placeholder="Company name"
                      />
                    </label>

                    <button
                      type="submit"
                      disabled={sending}
                      className="mt-3 flex w-full items-center justify-center gap-2 rounded-[11px] bg-[#176cf2] px-4 py-2.5 text-[12px] font-bold text-white shadow-[0_7px_16px_rgba(23,108,242,.2)] hover:bg-[#0f5edc] disabled:opacity-60"
                    >
                      {sending ? (
                        <LoaderCircle
                          className="animate-spin"
                          size={15}
                        />
                      ) : (
                        <Send size={15} />
                      )}
                      {sending ? "Sending..." : "Send to our team"}
                    </button>
                  </form>
                )}

                {sent && (
                  <div className="mt-3 rounded-[16px] border border-emerald-200 bg-emerald-50 p-3.5 text-[12px] text-emerald-900">
                    {!scheduleOpen ? (
                      <>
                        <p className="mb-3 font-bold">
                          What would you like to do next?
                        </p>

                        <div className="grid gap-2">
                          <Link
                            href="/#contact"
                            onClick={() => setIsOpen(false)}
                            className="inline-flex items-center justify-center gap-2 rounded-[11px] bg-emerald-600 px-3 py-2.5 font-semibold text-white"
                          >
                            <Check size={15} />
                            Wait for the team
                          </Link>

                          <button
                            type="button"
                            onClick={() => setScheduleOpen(true)}
                            className="inline-flex items-center justify-center gap-2 rounded-[11px] border border-emerald-300 bg-white px-3 py-2.5 font-semibold text-emerald-800"
                          >
                            <CalendarDays size={15} />
                            Schedule a call
                          </button>
                        </div>
                      </>
                    ) : (
                      <form onSubmit={submitSchedule} className="grid gap-3">
                        <div>
                          <p className="font-bold">Choose a preferred call time</p>
                          <p className="mt-1 text-[11px] text-emerald-800/75">
                            We&apos;ll email you to confirm the appointment.
                          </p>
                        </div>

                        <label className="grid gap-1 text-[11px] font-semibold text-emerald-900">
                          Date
                          <input
                            required
                            type="date"
                            value={schedule.date}
                            onChange={(event) =>
                              setSchedule({
                                ...schedule,
                                date: event.target.value,
                              })
                            }
                            className="rounded-[10px] border border-emerald-200 bg-white px-3 py-2.5 text-[12px] font-normal text-slate-800 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                          />
                        </label>

                        <label className="grid gap-1 text-[11px] font-semibold text-emerald-900">
                          Time
                          <input
                            required
                            type="time"
                            value={schedule.time}
                            onChange={(event) =>
                              setSchedule({
                                ...schedule,
                                time: event.target.value,
                              })
                            }
                            className="rounded-[10px] border border-emerald-200 bg-white px-3 py-2.5 text-[12px] font-normal text-slate-800 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                          />
                        </label>

                        <div className="grid grid-cols-2 gap-2">
                          <button
                            type="button"
                            onClick={() => setScheduleOpen(false)}
                            className="rounded-[11px] border border-emerald-300 bg-white px-3 py-2.5 font-semibold text-emerald-800"
                          >
                            Back
                          </button>
                          <button
                            type="submit"
                            disabled={scheduleSending}
                            className="inline-flex items-center justify-center gap-2 rounded-[11px] bg-emerald-600 px-3 py-2.5 font-semibold text-white disabled:opacity-60"
                          >
                            {scheduleSending ? (
                              <LoaderCircle className="animate-spin" size={15} />
                            ) : (
                              <CalendarDays size={15} />
                            )}
                            {scheduleSending ? "Sending..." : "Send request"}
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                )}
              </>
            )}
          </div>

          {/* INPUT */}
          <div className="shrink-0 border-t border-[#e5edf7] bg-white px-3 pb-2 pt-2">
            <form
              onSubmit={submitMessage}
              className="flex h-[52px] items-center gap-2 rounded-full border border-[#dce7f4] bg-[#f4f8fd] px-4 shadow-[0_3px_10px_rgba(15,60,110,.06)] focus-within:border-[#a8c6f8]"
            >
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder={
                  flow ? "Type your answer..." : "Type your message..."
                }
                aria-label="Type your message"
                className="min-w-0 flex-1 bg-transparent text-[12px] text-[#243b5d] outline-none placeholder:text-[#91a3bb]"
              />

              <button
                type="submit"
                aria-label="Send message"
                disabled={!input.trim()}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#176cf2] text-white shadow-[0_5px_12px_rgba(23,108,242,.22)] transition hover:bg-[#0f5edc] disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Send size={15} />
              </button>
            </form>

            <div className="mt-1 flex items-center justify-center gap-1 text-[9px] text-[#8395ad]">
              <span>♢</span>
              Your information is safe with us.
            </div>
          </div>
        </div>
      )}

      {/* CLOSED FLOATING BUTTON */}
      {!isOpen && (
        <button
          type="button"
          aria-label="Open VrindraTech AI assistant"
          onClick={() => setIsOpen(true)}
          className="group relative flex h-[64px] w-[64px] items-center justify-center bg-transparent p-0 transition hover:scale-[1.03]"
        >
          <Image
            src="/images/chatbot.png"
            alt="VrindraTech chatbot"
            width={68}
            height={68}
            className="chatbot-float h-[64px] w-[64px] object-contain drop-shadow-[0_8px_16px_rgba(13,93,204,.20)]"
          />

        </button>
      )}
      </div>
    </>
  );
}
