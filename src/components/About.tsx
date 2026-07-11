"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Mail, Phone } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-card/30">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Quick Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 bg-background border border-border p-8 rounded-3xl shadow-sm lg:order-2 lg:-mt-8 w-full"
          >
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Quick Details</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <p className="text-sm text-foreground/60 font-medium">Education</p>
                  <p className="text-foreground font-semibold">AIU - AI Science Major</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-foreground/60 font-medium">Location</p>
                  <p className="text-foreground font-semibold">Egypt</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-foreground/60 font-medium">Email</p>
                  <a href="mailto:youssefelkess8@gmail.com" className="text-foreground font-semibold hover:text-primary transition-colors">
                    youssefelkess8@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-foreground/60 font-medium">Phone</p>
                  <p className="text-foreground font-semibold">+20 120 276 4040</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-8 space-y-6 text-lg text-foreground/80 leading-relaxed lg:order-1"
          >
            <p>
              I am a third-year undergraduate student pursuing a Bachelor&apos;s in Computer Science 
              with a major in Artificial Intelligence Science at Al Alamein International University (AIU).
              Currently holding a CGPA of 3.865/4.0, I am expected to graduate in 2027.
            </p>
            <p>
              My passion lies in developing intelligent systems, from AI-powered medical diagnostic tools 
              to complex NLP transformers like GPT-2. I strongly believe in the intersection of robust 
              software engineering practices and cutting-edge machine learning research.
            </p>
            <p>
              When I&apos;m not coding or participating in hackathons (like the Next City AI Hackathon where 
              my team secured 1st place), I&apos;m actively expanding my knowledge through certifications and 
              exploring new ways technology can solve real-world problems.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
