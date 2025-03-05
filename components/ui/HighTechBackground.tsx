"use client";

import { motion } from "framer-motion";

export const HighTechBackground = () => {
  return (
    <motion.div
      className="absolute inset-0 z-0"
      animate={{
        background: [
          "radial-gradient(ellipse at center, #1e3a8a, #111827)",
          "radial-gradient(ellipse at center, #1e40af, #111827)",
          "radial-gradient(ellipse at center, #1e3a8a, #111827)",
        ],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: "mirror",
      }}
      style={{
        backgroundSize: "200% 200%",
      }}
    />
  );
};
