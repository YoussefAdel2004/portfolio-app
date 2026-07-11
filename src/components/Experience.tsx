"use client";

import { motion } from "framer-motion";
import { Briefcase, Award, CheckCircle2 } from "lucide-react";

const experience = [
  {
    title: "System Performance Optimizer",
    company: "University of Virginia Training Program",
    date: "2026",
    description: "Worked on improving the SharkPulse web platform by optimizing latency. Contributed to backend and frontend improvements, resulting in faster response times.",
    highlight: true,
  },
  {
    title: "ITI Yellow Belt Program",
    company: "Information Technology Institute (ITI)",
    date: "2025",
    description: "Intensive training program focused on advanced software engineering and technology skills.",
    highlight: true,
  },
  {
    title: "Machine Learning Intern, Data Science",
    company: "Code Alpha",
    date: "2025",
    description: "Applied machine learning algorithms and developed data science models to solve complex problems.",
    highlight: false,
  },
  {
    title: "Digital Transformation & Data Literacy",
    company: "CIB Bank",
    date: "Summer 2024",
    description: "Gained hands-on experience in digital transformation initiatives and data analysis workflows in the banking sector.",
    highlight: false,
  },
];

const achievements = [
  {
    text: "Next City AI Hackathon – Alamein International University – 1st Place Winner (2026)",
    highlight: true,
  },
  {
    text: "ECPC (Egyptian Collegiate Programming Contest) Participant – Summer 2024",
    highlight: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Experience Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <Briefcase size={28} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Experience</h2>
              </div>
            </motion.div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-6 md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-border before:via-border before:to-transparent">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-12 md:pl-16"
                >
                  <div className={`absolute left-0 mt-1.5 h-10 w-10 md:h-12 md:w-12 rounded-full border-4 border-background flex items-center justify-center shadow-sm ${exp.highlight ? "bg-primary text-primary-foreground" : "bg-card text-primary"}`}>
                    <div className={`w-3 h-3 rounded-full ${exp.highlight ? "bg-primary-foreground" : "bg-primary"}`} />
                  </div>
                  <div className={`p-6 rounded-2xl transition-colors ${exp.highlight ? "bg-primary/5 border-2 border-primary shadow-lg shadow-primary/10" : "bg-card border border-border hover:border-primary/50"}`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                      <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                      <span className={`text-sm font-medium px-3 py-1 rounded-full w-fit ${exp.highlight ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"}`}>
                        {exp.date}
                      </span>
                    </div>
                    <p className="text-foreground/80 font-bold mb-4">{exp.company}</p>
                    <p className="text-foreground/70 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements & Certs Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <Award size={28} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Achievements</h2>
              </div>
            </motion.div>

            <div className="space-y-4 mb-12">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`flex items-start gap-4 p-6 rounded-3xl border transition-all ${
                    achievement.highlight
                      ? "bg-primary/10 border-primary shadow-lg shadow-primary/5"
                      : "bg-card border-border hover:border-primary/30"
                  }`}
                >
                  {achievement.highlight ? (
                    <Award className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5 animate-pulse" />
                  ) : (
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  )}
                  <span className={`text-lg leading-relaxed ${achievement.highlight ? "text-foreground font-semibold" : "text-foreground/80 font-medium"}`}>
                    {achievement.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Certifications Snapshot */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">Top Certifications</h3>
              <div className="space-y-4">
                {[
                  "ITI – Yellow Belt Training Program",
                  "Machine Learning for AI",
                  "Engineering Practices for Building Quality Software",
                  "Neural Networks and Deep Learning",
                  "Agile Development and Scrum",
                ].map((cert, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-background border border-border rounded-xl hover:border-primary/50 transition-colors">
                    <span className="text-foreground/80 font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
