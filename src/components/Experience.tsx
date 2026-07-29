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
          <div className="lg:pr-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10 md:mb-16"
            >
              <div className="flex items-center gap-3 md:gap-4 mb-4">
                <div className="p-3 md:p-4 bg-primary/10 rounded-xl md:rounded-2xl text-primary shadow-sm">
                  <Briefcase className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight">Experience</h2>
              </div>
            </motion.div>

            <div className="space-y-10 md:space-y-12 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:ml-6 md:before:translate-x-0 before:h-full before:w-0.5 md:before:w-1 before:bg-gradient-to-b before:from-primary/50 before:via-primary/20 before:to-transparent">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-12 md:pl-20 group"
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-0 top-2 h-8 w-8 md:h-14 md:w-14 rounded-full border-2 md:border-4 border-background flex items-center justify-center shadow-md md:shadow-xl z-10 transition-transform duration-500 md:group-hover:scale-110 ${exp.highlight ? "bg-primary text-primary-foreground" : "bg-card/80 backdrop-blur-sm text-primary"}`}>
                    <div className={`w-2 h-2 md:w-4 md:h-4 rounded-full ${exp.highlight ? "bg-background animate-pulse" : "bg-primary/50"}`} />
                  </div>
                  
                  {/* Experience Card */}
                  <div className={`p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] transition-all duration-500 relative overflow-hidden ${exp.highlight ? "bg-card/20 backdrop-blur-md border border-primary/30 shadow-xl md:shadow-2xl md:shadow-primary/10 hover:-translate-y-1 md:hover:shadow-primary/20" : "bg-card/10 backdrop-blur-md border border-border/40 hover:border-primary/30 hover:-translate-y-1 md:hover:shadow-xl"}`}>
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent hidden md:block" />
                    
                    {exp.highlight && (
                       <div className="absolute -inset-4 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent rounded-full opacity-50 md:opacity-0 md:group-hover:opacity-50 transition-opacity duration-1000 -z-10" />
                    )}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2 md:gap-3 relative z-20">
                      <h3 className="text-xl md:text-2xl font-black text-foreground tracking-tight">{exp.title}</h3>
                      <span className={`text-[10px] md:text-xs font-bold uppercase tracking-widest px-3 py-1.5 md:px-4 md:py-2 rounded-full w-fit ${exp.highlight ? "bg-primary text-primary-foreground shadow-md" : "bg-primary/10 text-primary"}`}>
                        {exp.date}
                      </span>
                    </div>
                    <p className={`font-bold mb-4 md:mb-6 text-base md:text-lg relative z-20 ${exp.highlight ? "text-primary" : "text-foreground/80"}`}>{exp.company}</p>
                    <p className="text-foreground/70 text-sm md:text-base leading-relaxed font-medium relative z-20">{exp.description}</p>
                    
                    {/* Background glowing blob for highlighted cards */}
                    {exp.highlight && (
                       <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full opacity-50 md:opacity-0 md:group-hover:opacity-50 transition-opacity duration-1000 -z-10" />
                    )}
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
              className="mb-10 md:mb-16 mt-16 lg:mt-0"
            >
              <div className="flex items-center gap-3 md:gap-4 mb-4">
                <div className="p-3 md:p-4 bg-primary/10 rounded-xl md:rounded-2xl text-primary shadow-sm">
                  <Award className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight">Achievements</h2>
              </div>
            </motion.div>

            <div className="space-y-4 md:space-y-6 mb-16">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`flex items-start gap-4 md:gap-5 p-6 md:p-8 rounded-3xl md:rounded-[2rem] border transition-all duration-500 group md:hover:-translate-y-1 relative overflow-hidden ${achievement.highlight
                      ? "bg-card/20 backdrop-blur-2xl border-primary/40 shadow-xl shadow-primary/10"
                      : "bg-card/10 backdrop-blur-xl border-border/40 hover:border-primary/30 hover:shadow-lg"
                    }`}
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 hidden md:block" />
                  
                  {achievement.highlight ? (
                    <div className="bg-amber-500/10 p-2 md:p-3 rounded-lg md:rounded-xl shrink-0 mt-1">
                      <Award className="w-6 h-6 md:w-8 md:h-8 text-amber-500 animate-pulse" />
                    </div>
                  ) : (
                    <div className="bg-primary/10 p-2 md:p-3 rounded-lg md:rounded-xl shrink-0 mt-1">
                      <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-primary md:group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  )}
                  <span className={`text-base md:text-lg leading-relaxed ${achievement.highlight ? "text-foreground font-bold" : "text-foreground/80 font-medium"}`}>
                    {achievement.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Certifications Snapshot */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card/5 backdrop-blur-2xl border border-border/40 rounded-[2.5rem] p-10 relative overflow-hidden group hover:border-primary/30 transition-colors duration-500"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <h3 className="text-3xl font-black text-foreground mb-8 tracking-tight">Top Certifications</h3>
              <div className="space-y-4 relative z-10">
                {[
                  "ITI – Yellow Belt Training Program",
                  "Machine Learning for AI",
                  "Engineering Practices for Building Quality Software",
                  "Neural Networks and Deep Learning",
                  "Agile Development and Scrum",
                ].map((cert, index) => (
                  <div key={index} className="flex items-center gap-4 p-5 bg-background/40 backdrop-blur-sm border border-border/30 rounded-2xl hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group/cert hover:pl-6 cursor-default">
                    <div className="w-2 h-2 rounded-full bg-primary/40 group-hover/cert:bg-primary group-hover/cert:scale-150 transition-all duration-300" />
                    <span className="text-foreground/80 font-semibold">{cert}</span>
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
