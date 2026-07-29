"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, BrainCircuit } from "lucide-react";
import Projects from "./Projects";
import WebProjects from "./WebProjects";

export default function ProjectShowcase() {
  const [activeTab, setActiveTab] = useState<"ai" | "web">("web");

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent rounded-full pointer-events-none -z-10" />
      
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          {/* Dynamic Header */}
          <div className="flex items-center justify-center gap-3 mb-4">
            {activeTab === "ai" ? (
              <BrainCircuit className="w-8 h-8 md:w-10 md:h-10 text-primary" />
            ) : (
              <Code2 className="w-8 h-8 md:w-10 md:h-10 text-primary" />
            )}
            <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight">
              {activeTab === "ai" ? "Featured AI Projects" : "Web Engineering"}
            </h2>
          </div>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg md:text-xl font-medium min-h-[60px]">
            {activeTab === "ai" 
              ? "A selection of my best work in AI, Machine Learning, and Software Engineering."
              : "A collection of production-ready web applications focusing on premium UI/UX, performant architecture, and modern design systems."
            }
          </p>
        </motion.div>

        {/* Premium Tab Switcher */}
        <div className="flex justify-center mb-20">
          <div className="inline-flex p-1.5 bg-card/20 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.12)] relative">
            {["web", "ai"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as "ai" | "web")}
                className={`relative z-10 flex items-center gap-2 px-8 py-3.5 md:px-10 md:py-4 rounded-full text-sm md:text-base font-black transition-colors duration-300 ${
                  activeTab === tab ? "text-background" : "text-foreground/50 hover:text-foreground"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-primary to-primary/90 rounded-full shadow-lg -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {tab === "web" ? <Code2 size={20} /> : <BrainCircuit size={20} />}
                <span>{tab === "web" ? "Web Engineering" : "AI & ML"}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === "ai" ? <Projects /> : <WebProjects />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
