"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useState } from "react";

const titles = ["AI Engineer", "Software Developer", "Problem Solver"];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-12 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 order-2 lg:order-1"
        >
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-medium text-foreground/80">
              Hello, I&apos;m
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
              Youssef Adel
            </h1>
            <div className="h-10 md:h-14 overflow-hidden mt-2">
              <motion.div
                key={titleIndex}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-4xl font-semibold text-primary"
              >
                {titles[titleIndex]}
              </motion.div>
            </div>
          </div>

          <p className="text-lg md:text-xl text-foreground/70 max-w-xl leading-relaxed">
            I am a highly motivated computer science student with a strong foundation in AI,
            problem-solving, and software development, eager to build impactful technology-driven solutions.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-6">
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold text-lg rounded-full transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] hover:-translate-y-1 w-full sm:w-auto"
            >
              Contact Me
              <ArrowRight size={20} />
            </a>
            <a
              href="/Youssef_Adel_Boshra_Nashed_CV.pdf"
              download="Youssef_Adel_Boshra_Nashed_CV.pdf"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-card border border-border text-foreground hover:text-primary hover:border-primary font-semibold text-lg rounded-full transition-all hover:-translate-y-1 w-full sm:w-auto"
            >
              Download CV
              <Download size={20} />
            </a>
          </div>

          <div className="flex items-center gap-4 pt-6">
            <a
              href="https://github.com/YoussefAdel2004"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-card border border-border rounded-full text-foreground/80 hover:text-primary hover:border-primary transition-all"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/youssef-adel-ab91562b7"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-card border border-border rounded-full text-foreground/80 hover:text-primary hover:border-primary transition-all"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:justify-end order-1 lg:order-2"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 border-2 border-primary rounded-full animate-[spin_10s_linear_infinite] border-t-transparent border-l-transparent"></div>
            <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-background bg-card shadow-2xl">
              <Image
                src="/profile.jpg"
                alt="Youssef Adel"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
