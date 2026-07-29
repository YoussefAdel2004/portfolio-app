"use client";

import { motion } from "framer-motion";
import { ExternalLink, Layers } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

const projects = [
  {
    title: "Medical Diagnosis Expert System",
    description: "An advanced AI-powered medical triage expert system using forward-chaining inference with certainty factors to provide explainable diagnosis paths.",
    tech: ["Python", "Tkinter", "Next.js", "AI Inference"],
    github: "https://github.com/YoussefAdel2004",
    details: "#",
    thumbnail: "bg-blue-500/20",
    image: "/medical.png",
  },
  {
    title: "AURA Classroom Assistant",
    description: "A smart classroom system using computer vision, speech recognition, and NLP to automate attendance and analyze student engagement via facial recognition.",
    tech: ["Computer Vision", "NLP", "Speech Recognition", "Python"],
    github: "https://github.com/YoussefAdel2004",
    details: "#",
    thumbnail: "bg-emerald-500/20",
    image: "/aura.png",
  },
  {
    title: "Kidney Failure Prediction Model",
    description: "Built a machine learning classification model to predict kidney failure using medical datasets with data preprocessing and feature selection.",
    tech: ["scikit-learn", "Machine Learning", "Data Science", "Python"],
    github: "https://github.com/YoussefAdel2004",
    details: "#",
    thumbnail: "bg-orange-500/20",
    image: "/kidney.png",
  }
];

export default function Projects() {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-32 py-4">
        {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group relative rounded-[2.5rem] bg-black/5 dark:bg-card/10 backdrop-blur-md border border-border/60 overflow-hidden hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 flex flex-col md:flex-row gap-0 md:gap-8"
              >
                {/* Image Section */}
                <div className={`w-full md:w-[45%] lg:w-[40%] relative overflow-hidden ${isEven ? 'md:order-1' : 'md:order-2'} bg-black/5`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 z-10" />
                  
                  <div className={`absolute inset-0 ${project.thumbnail} mix-blend-multiply opacity-40 group-hover:opacity-0 transition-opacity duration-700 z-10`} />
                  
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center aspect-video md:aspect-auto transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Subtle hover overlay glow */}
                  <div className="absolute -inset-4 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-1000 -z-10" />
                </div>

                {/* Content Section */}
                <div className={`w-full md:w-[55%] lg:w-[60%] p-8 md:p-12 lg:py-16 flex flex-col justify-center ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                  <h3 className="text-3xl md:text-4xl font-black text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-foreground/80 text-lg md:text-xl font-medium leading-relaxed mb-8 max-w-xl">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 md:gap-3 mb-10">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-[10px] md:text-xs font-semibold px-3 py-1.5 md:px-4 md:py-2 bg-foreground/5 dark:bg-foreground/10 border border-foreground/10 text-foreground rounded-full shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center w-14 h-14 bg-foreground text-background rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-primary/30 hover:-translate-y-1 group/btn"
                    >
                      <FaGithub size={24} className="group-hover/btn:scale-110 transition-transform" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 text-base font-bold text-foreground hover:text-primary transition-colors group/link"
                    >
                      View Live Project
                      <span className="flex items-center justify-center w-8 h-8 rounded-full border border-border/60 group-hover/link:border-primary group-hover/link:bg-primary/10 transition-colors">
                        <ExternalLink size={14} className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
  );
}
