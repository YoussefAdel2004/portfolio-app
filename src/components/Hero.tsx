"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
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
      {/* Dot Pattern & Subtle Glow for Depth - Optimized for GPU */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(var(--dot-color)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" />
      <div className="absolute top-[-100px] left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent rounded-full -z-10 animate-[pulse_4s_ease-in-out_infinite]" />
      <div className="absolute bottom-[-100px] right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent rounded-full -z-10 animate-[pulse_6s_ease-in-out_infinite] delay-1000" />

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
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 dark:from-gray-300 dark:via-white dark:to-gray-500 drop-shadow-sm">
              Youssef Adel
            </h1>
            <div className="h-10 md:h-14 overflow-hidden mt-2">
              <motion.div
                key={titleIndex}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-4xl font-bold text-foreground/80 tracking-wide"
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
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium text-lg rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:bg-primary/90 hover:-translate-y-1 w-full sm:w-auto"
            >
              Contact Me
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/Youssef_Adel_Boshra_Nashed_CV.pdf"
              download="Youssef_Adel_Boshra_Nashed_CV.pdf"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-background/50 backdrop-blur-md border border-border/50 text-foreground hover:bg-foreground/5 hover:border-foreground/30 font-semibold text-lg rounded-full transition-all hover:-translate-y-1 w-full sm:w-auto"
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
            <a
              href="https://www.instagram.com/webvision_224/"
              target="_blank"
              rel="noreferrer"
              className="group relative flex items-center gap-2 px-5 py-3 rounded-full overflow-hidden backdrop-blur-md bg-background/30 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute inset-0 -z-20 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500" />
              <div className="absolute inset-[1px] -z-10 bg-background/90 backdrop-blur-xl rounded-full" />
              
              <FaInstagram size={24} className="text-pink-500 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-sm bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-orange-500 pr-1">See My Work</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:justify-end order-1 lg:order-2"
        >
          <div className="relative w-72 h-72 md:w-[400px] md:h-[400px]">
            {/* Spinning gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-300 via-gray-500 to-gray-800 dark:from-gray-800 dark:via-gray-400 dark:to-gray-900 rounded-full animate-[spin_3s_linear_infinite] opacity-50 blur-[1px]"></div>
            <div className="absolute inset-[3px] rounded-full overflow-hidden bg-background shadow-xl">
              <Image
                src="/profile.png"
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
