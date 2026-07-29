"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 md:space-y-8"
          >
            <h3 className="text-3xl md:text-5xl font-black text-foreground leading-[1.2] md:leading-[1.1] tracking-tighter mb-6">
              Building smart solutions with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50">Artificial Intelligence</span>.
            </h3>
            
            <div className="space-y-4 md:space-y-6 text-base md:text-xl text-foreground/70 leading-relaxed font-medium">
              <p>
                I am a third-year undergraduate student pursuing a Bachelor&apos;s in Computer Science
                with a major in Artificial Intelligence Science at Al Alamein International University (AIU).
              </p>
              <p>
                My passion lies in developing intelligent systems, from AI-powered medical diagnostic tools
                to complex NLP transformers like GPT-2. I strongly believe in the intersection of robust
                software engineering practices and cutting-edge machine learning research.
              </p>
              <p>
                When I&apos;m not coding or participating in hackathons, I&apos;m actively expanding my knowledge through certifications and exploring new ways technology can solve real-world problems.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 w-full relative group mt-8 lg:mt-0"
          >
            {/* 3D Glass Card Effect - Optimized for GPU */}
            <div className="absolute -inset-1 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent rounded-[3rem] opacity-50 group-hover:opacity-100 transition-opacity duration-700 -z-10 hidden md:block" />
            
            <div className="bg-card/10 backdrop-blur-md border border-border/40 p-6 md:p-12 rounded-3xl md:rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              {/* Subtle top inner glow */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
              
              <h3 className="text-2xl font-extrabold mb-8 text-foreground tracking-tight">Quick Details</h3>
              <ul className="space-y-8 relative z-20">
                <li className="flex items-center gap-6 group/item">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0 group-hover/item:scale-110 group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-all duration-500 shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-foreground/50 font-bold mb-1">Location</p>
                    <p className="text-lg text-foreground font-bold">Egypt</p>
                  </div>
                </li>
                <li className="flex items-center gap-6 group/item">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0 group-hover/item:scale-110 group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-all duration-500 shadow-sm">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-foreground/50 font-bold mb-1">Email</p>
                    <a href="mailto:youssefelkess8@gmail.com" className="text-lg text-foreground font-bold hover:text-primary transition-colors">
                      youssefelkess8@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-6 group/item">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0 group-hover/item:scale-110 group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-all duration-500 shadow-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-foreground/50 font-bold mb-1">Phone</p>
                    <p className="text-lg text-foreground font-bold">+20 120 276 4040</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
