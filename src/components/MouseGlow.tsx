"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export default function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      const x = e.clientX;
      const y = e.clientY;
      
      // A beautiful multi-color spotlight effect mimicking the reference site
      const glowStr = resolvedTheme === "dark" 
        ? `radial-gradient(600px circle at ${x}px ${y}px, rgba(120, 119, 198, 0.2), rgba(45, 20, 100, 0.05), transparent 40%)`
        : `radial-gradient(600px circle at ${x}px ${y}px, rgba(120, 119, 198, 0.15), rgba(45, 20, 100, 0.05), transparent 40%)`;
        
      glowRef.current.style.background = glowStr;
      glowRef.current.style.opacity = "1";
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [resolvedTheme]);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-500 opacity-0 dark:mix-blend-screen"
    />
  );
}
