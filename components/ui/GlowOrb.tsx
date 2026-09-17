import { motion } from "framer-motion";

export default function GlassOrb() {
  return (
    <motion.div
      animate={{
        y: [-8, 8, -8],
        rotate: [-2, 2, -2],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="absolute right-0 top-20"
    >
      <div className="h-[180px] w-[180px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.95),rgba(96,165,250,0.7),rgba(59,130,246,0.28),rgba(15,23,42,0.08))] shadow-[0_0_80px_rgba(59,130,246,0.35)]" aria-hidden="true" />
    </motion.div>
  );
}