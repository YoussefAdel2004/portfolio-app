"use client";

import { motion } from "framer-motion";
import { Code2, BrainCircuit, Globe, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 size={24} />,
    skills: ["Python", "Java", "C++", "R", "JavaScript", "TypeScript"],
  },
  {
    title: "AI & Machine Learning",
    icon: <BrainCircuit size={24} />,
    skills: ["TensorFlow", "scikit-learn", "OpenCV", "Computer Vision", "NLP", "Data Preprocessing", "Association Rules"],
  },
  {
    title: "Web Development",
    icon: <Globe size={24} />,
    skills: ["HTML5", "CSS3", "Next.js", "Tailwind CSS", "React", "R Shiny"],
  },
  {
    title: "Databases",
    icon: <Database size={24} />,
    skills: ["MySQL", "Relational Database Systems", "Data Modeling"],
  },
  {
    title: "Tools & Platforms",
    icon: <Wrench size={24} />,
    skills: ["Visual Studio Code", "Git", "GitHub", "Linux", "Cisco Packet Tracer"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Technical Skills</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            A comprehensive overview of my technical expertise, ranging from core programming to advanced AI model development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card border border-border p-8 rounded-3xl hover:border-primary/50 transition-colors group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-background border border-border text-foreground/80 rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
