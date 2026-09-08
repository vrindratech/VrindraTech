"use client";

import { motion } from "framer-motion";

export default function HeroArtwork() {
  return (
    <motion.div
  initial={{
    opacity: 0,
    scale: 0.95,
  }}
  animate={{
    opacity: 0.8,
    scale: 1,
  }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
  }}
  className="relative flex h-[650px] w-[650px] items-center justify-center"
  style={{ perspective: "1600px" }}
>
      {/* Background Glow */}

      <div className="absolute h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="absolute h-[280px] w-[280px] rounded-full bg-violet-500/10 blur-[100px]" />

      {/* Main Cube */}

      <div
        className="relative h-[260px] w-[260px]"
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateX(-22deg) rotateY(35deg)",
        }}
      >
                {/* FRONT */}

        <div
          className="absolute inset-0 rounded-[32px] border border-white/40 backdrop-blur-3xl shadow-[0_30px_80px_rgba(99,102,241,.25)]"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,.28), rgba(255,255,255,.05))",
            transform: "translateZ(130px)",
          }}
        >
          <div className="absolute inset-6 flex flex-col justify-between">

            <div>
              <div className="text-xs uppercase tracking-[0.35em] text-cyan-300">
                WEBSITE
              </div>

              <h3 className="mt-3 text-2xl font-bold text-white">
                Development
              </h3>

              <p className="mt-3 text-xs leading-5 text-white/70">
                Modern responsive websites built using
                React, Next.js, Tailwind CSS and
                enterprise technologies.
              </p>
            </div>

            <div className="space-y-3">

              <div className="flex items-center gap-2">
                <div className="h-2 w-20 rounded-full bg-cyan-400" />
                <span className="text-[10px] text-white/70">React</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="h-2 w-16 rounded-full bg-indigo-400" />
                <span className="text-[10px] text-white/70">Next.js</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="h-2 w-12 rounded-full bg-violet-400" />
                <span className="text-[10px] text-white/70">SEO</span>
              </div>

            </div>

          </div>
        </div>
        {/* RIGHT */}

        <div
          className="absolute inset-0 rounded-[32px] border border-white/30 backdrop-blur-3xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(99,102,241,.25), rgba(255,255,255,.05))",
            transform: "rotateY(90deg) translateZ(130px)",
          }}
        >
          <div className="absolute inset-6">

            <div className="text-xs uppercase tracking-[0.3em] text-blue-300">
              MOBILE
            </div>

            <div className="mt-3 text-2xl font-bold text-white">
              Apps
            </div>

            <div className="mt-6 space-y-3">

              <div className="h-2 rounded-full bg-white/40" />

              <div className="h-2 w-5/6 rounded-full bg-cyan-400" />

              <div className="h-2 w-2/3 rounded-full bg-white/30" />

              <div className="mt-6 flex gap-3">

                <div className="h-12 w-8 rounded-xl border border-white/30 bg-white/10" />

                <div className="h-12 w-8 rounded-xl border border-white/30 bg-cyan-400/20" />

                <div className="h-12 w-8 rounded-xl border border-white/30 bg-indigo-400/20" />

              </div>

            </div>

          </div>
        </div>
                {/* TOP */}

        <div
          className="absolute inset-0 rounded-[32px] border border-white/30 backdrop-blur-3xl"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,.45), rgba(255,255,255,.05))",
            transform: "rotateX(90deg) translateZ(130px)",
          }}
        >
          <div className="absolute inset-6 flex flex-col items-center justify-center">

            <div className="text-xs uppercase tracking-[0.35em] text-cyan-300">
              CLOUD
            </div>

            <div className="mt-5 text-6xl">
              ☁️
            </div>

            <div className="mt-5 flex gap-3">
              <div className="h-3 w-3 rounded-full bg-cyan-400" />
              <div className="h-3 w-3 rounded-full bg-indigo-400" />
              <div className="h-3 w-3 rounded-full bg-violet-400" />
            </div>

          </div>
        </div>
                {/* LEFT */}

        <div
          className="absolute inset-0 rounded-[32px] border border-white/30 backdrop-blur-3xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(168,85,247,.25), rgba(255,255,255,.05))",
            transform: "rotateY(-90deg) translateZ(130px)",
          }}
        >
          <div className="absolute inset-6">

            <div className="text-xs uppercase tracking-[0.3em] text-violet-300">
              AI
            </div>

            <div className="mt-3 text-2xl font-bold text-white">
              Solutions
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">

              <div className="h-12 rounded-xl bg-violet-500/30 border border-white/20" />

              <div className="h-12 rounded-xl bg-cyan-500/20 border border-white/20" />

              <div className="h-12 rounded-xl bg-indigo-500/20 border border-white/20" />

              <div className="col-span-3 h-2 rounded-full bg-white/20" />

            </div>

          </div>
        </div>
                {/* BACK */}

        <div
          className="absolute inset-0 rounded-[32px] border border-white/20 backdrop-blur-3xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,.10), rgba(79,70,229,.08))",
            transform: "rotateY(180deg) translateZ(130px)",
          }}
        >
          <div className="absolute inset-6">

            <div className="text-xs uppercase tracking-[0.3em] text-indigo-300">
              ANALYTICS
            </div>

            <div className="mt-8 flex items-end gap-3 h-32">

              <div className="w-5 h-10 rounded bg-blue-500/60" />

              <div className="w-5 h-16 rounded bg-blue-500/60" />

              <div className="w-5 h-24 rounded bg-cyan-400" />

              <div className="w-5 h-20 rounded bg-indigo-400" />

              <div className="w-5 h-28 rounded bg-violet-400" />

            </div>

          </div>
        </div>
                {/* BOTTOM */}

        <div
          className="absolute inset-0 rounded-[32px] border border-white/20 backdrop-blur-3xl"
          style={{
            background:
              "linear-gradient(180deg, rgba(79,70,229,.15), rgba(255,255,255,.05))",
            transform: "rotateX(-90deg) translateZ(130px)",
          }}
        >
          <div className="absolute inset-6 flex flex-col items-center justify-center">

            <div className="text-xs uppercase tracking-[0.35em] text-cyan-300">
              SECURITY
            </div>

            <div className="mt-5 text-5xl">
              🔒
            </div>

            <div className="mt-5 h-2 w-24 rounded-full bg-cyan-400" />

          </div>
        </div>
        </div>
              {/* Floating Dashboard */}

      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [0, 2, 0, -2, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-6 top-16 h-44 w-36 rounded-[28px] border border-white/40 bg-white/10 backdrop-blur-3xl shadow-[0_20px_60px_rgba(99,102,241,.18)]"
      >
        <div className="absolute inset-5">

          <div className="text-[10px] uppercase tracking-[0.35em] text-cyan-400">
            LIVE
          </div>

          <h4 className="mt-2 text-lg font-semibold text-indigo-400">
            Dashboard
          </h4>

          <div className="mt-2 space-y-3">

            <div className="h-2 rounded-full bg-cyan-400" />

            <div className="h-2 w-5/6 rounded-full bg-white/30" />

            <div className="h-2 w-2/3 rounded-full bg-white/20" />

          </div>

          <div className="absolute bottom-0 left-0 right-0 flex gap-2">

            <div className="flex-1 rounded-xl bg-indigo-500/30 p-3 text-center text-xs text-white">
              2 Active Projects
            </div>

            <div className="rounded-xl bg-cyan-400/20 p-3 text-white">
              ↗
            </div>

          </div>

        </div>
      </motion.div>

      {/* Floating Code Card */}

      <motion.div
        animate={{
          y: [0, 12, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-8 bottom-16 h-32 w-32 rounded-[24px] border border-white/40 bg-gradient-to-br from-indigo-400/20 to-blue-400/10 backdrop-blur-3xl shadow-[0_25px_60px_rgba(79,70,229,.20)]"
      >
        <div className="absolute inset-4">

          <div className="space-y-2">

            <div className="h-2 w-12 rounded bg-cyan-400" />

            <div className="h-2 w-8 rounded bg-white/40" />

            <div className="h-2 w-16 rounded bg-indigo-400" />

            <div className="h-2 w-10 rounded bg-white/30" />

          </div>

          <div className="absolute bottom-0 right-0 text-xl font-bold text-cyan-300">
            {"</>"}
          </div>

        </div>
      </motion.div>

      {/* Floating Orb */}

      <motion.div
        animate={{
          y: [0, -18, 0],
          x: [0, 8, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-20 top-14 h-10 w-10 rounded-full border border-white/40 bg-gradient-to-br from-cyan-300/60 to-blue-500/40 backdrop-blur-xl shadow-[0_10px_30px_rgba(59,130,246,.35)]"
      />

      {/* Small Orb */}

      <motion.div
        animate={{
          y: [0, 10, 0],
          scale: [1, .9, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-24 left-16 h-6 w-6 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500 shadow-[0_10px_25px_rgba(139,92,246,.5)]"
      />

      {/* Grid Dots */}


      {/* Light Reflection */}

      <div className="absolute left-1/2 top-20 h-80 w-20 -translate-x-1/2 rotate-12 rounded-full bg-white/20 blur-3xl" />

      {/* Bottom Shadow */}

      <div className="absolute bottom-8 h-16 w-[340px] rounded-full bg-black/20 blur-3xl" />

      {/* Glass Glow */}

      <div className="absolute h-[420px] w-[420px] rounded-full bg-gradient-to-r from-indigo-500/10 via-blue-400/5 to-cyan-400/10 blur-[130px]" />

    </motion.div>
  );
}