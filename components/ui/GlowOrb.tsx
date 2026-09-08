import Image from "next/image";
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
        ease: "easeInOut",
      }}
      className="absolute right-0 top-20"
    >
      <Image
        src="/images/glass-orb.webp"
        width={180}
        height={180}
        alt=""
        priority
      />
    </motion.div>
  );
}