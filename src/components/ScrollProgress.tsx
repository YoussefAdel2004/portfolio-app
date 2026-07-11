"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  // Create a spring animation for the scroll progress to make it ultra-smooth
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-blue-500 to-primary origin-left z-[10000] shadow-[0_2px_10px_rgba(59,130,246,0.3)]"
      style={{ scaleX }}
    />
  );
}
