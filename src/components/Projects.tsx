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
  },
  {
    title: "Data Center Network Design",
    description: "Designed and simulated a scalable data center network with routers, switches, VLANs, and routing protocols ensuring reliability and fault tolerance.",
    tech: ["Cisco Packet Tracer", "Networking", "VLANs", "Routing"],
    github: "https://github.com/YoussefAdel2004",
    details: "#",
    thumbnail: "bg-sky-500/20",
    image: "/data-center.png",
  },
  {
    title: "CS224N GPT-2 Multi-Task NLP System",
    description: "Extended GPT-2 transformer for sentiment classification, paraphrase detection, and sonnet generation with improved classifier architecture.",
    tech: ["PyTorch", "Transformers", "NLP", "Python"],
    github: "https://github.com/YoussefAdel2004",
    details: "#",
    thumbnail: "bg-purple-500/20",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            A selection of my best work in AI, Machine Learning, and Software Engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background border border-border rounded-3xl overflow-hidden group hover:border-primary/50 transition-all shadow-sm hover:shadow-xl hover:shadow-primary/5 flex flex-col h-full"
            >
              {/* Thumbnail / Image */}
              <div className={`h-48 ${project.thumbnail} relative overflow-hidden flex items-center justify-center`}>
                {project.image ? (
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80" />
                    <Layers className="w-16 h-16 text-foreground/20 group-hover:scale-110 group-hover:text-primary/50 transition-all duration-500" />
                  </>
                )}
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70 mb-6 flex-1 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-foreground/80 hover:text-primary transition-colors"
                  >
                    <FaGithub size={18} />
                    Code
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-foreground/80 hover:text-primary transition-colors ml-auto"
                  >
                    Details
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
