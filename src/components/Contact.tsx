"use client";

import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    const body = `Hello Youssef,%0D%0A%0D%0AMy name is ${name}.%0D%0A%0D%0A${message}`;
    window.location.href = `mailto:youssefelkess8@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Get In Touch</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            I&apos;m currently open to new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-center space-y-4 md:space-y-6"
          >
            <div className="group/card flex items-center gap-4 md:gap-6 p-4 md:p-6 rounded-3xl md:rounded-[2rem] bg-card/5 backdrop-blur-md border border-border/40 hover:bg-card/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 hidden md:block" />
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-xl md:rounded-2xl flex items-center justify-center text-primary shrink-0 group-hover/card:scale-110 group-hover/card:bg-primary group-hover/card:text-primary-foreground transition-all duration-500 shadow-sm">
                <Mail className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <div className="overflow-hidden">
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-foreground/50 mb-1">Email</p>
                <a href="mailto:youssefelkess8@gmail.com" className="text-foreground font-bold hover:text-primary transition-colors text-sm sm:text-base md:text-lg truncate block">
                  youssefelkess8@gmail.com
                </a>
              </div>
            </div>

            <div className="group/card flex items-center gap-4 md:gap-6 p-4 md:p-6 rounded-3xl md:rounded-[2rem] bg-card/5 backdrop-blur-md border border-border/40 hover:bg-card/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 hidden md:block" />
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-xl md:rounded-2xl flex items-center justify-center text-primary shrink-0 group-hover/card:scale-110 group-hover/card:bg-primary group-hover/card:text-primary-foreground transition-all duration-500 shadow-sm">
                <Phone className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <div>
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-foreground/50 mb-1">Phone</p>
                <p className="text-foreground font-bold text-sm sm:text-base md:text-lg">
                  +20 120 276 4040
                </p>
              </div>
            </div>

            <div className="group/card flex items-center gap-4 md:gap-6 p-4 md:p-6 rounded-3xl md:rounded-[2rem] bg-card/5 backdrop-blur-md border border-border/40 hover:bg-card/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 hidden md:block" />
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-xl md:rounded-2xl flex items-center justify-center text-primary shrink-0 group-hover/card:scale-110 group-hover/card:bg-primary group-hover/card:text-primary-foreground transition-all duration-500 shadow-sm">
                <MapPin className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <div>
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-foreground/50 mb-1">Location</p>
                <p className="text-foreground font-bold text-sm sm:text-base md:text-lg">
                  Egypt
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 bg-card/10 backdrop-blur-md border border-border/40 p-6 sm:p-8 md:p-12 rounded-3xl md:rounded-[2.5rem] shadow-2xl relative overflow-hidden group"
          >
            {/* Background Glow - GPU Optimized */}
            <div className="absolute -inset-4 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10 pointer-events-none hidden md:block" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none hidden md:block" />

            <form className="space-y-4 md:space-y-6 relative z-10" onSubmit={handleSubmit} suppressHydrationWarning>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2 md:space-y-3">
                  <label htmlFor="name" className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-foreground/70 pl-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 md:px-5 md:py-4 bg-background/50 backdrop-blur-md border border-border/50 rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground font-medium shadow-sm hover:border-primary/30 text-sm md:text-base"
                    suppressHydrationWarning
                  />
                </div>
                <div className="space-y-2 md:space-y-3">
                  <label htmlFor="email" className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-foreground/70 pl-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 md:px-5 md:py-4 bg-background/50 backdrop-blur-md border border-border/50 rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground font-medium shadow-sm hover:border-primary/30 text-sm md:text-base"
                    suppressHydrationWarning
                  />
                </div>
              </div>

              <div className="space-y-2 md:space-y-3">
                <label htmlFor="subject" className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-foreground/70 pl-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 md:px-5 md:py-4 bg-background/50 backdrop-blur-md border border-border/50 rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground font-medium shadow-sm hover:border-primary/30 text-sm md:text-base"
                  suppressHydrationWarning
                />
              </div>

              <div className="space-y-2 md:space-y-3">
                <label htmlFor="message" className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-foreground/70 pl-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Your message here..."
                  className="w-full px-4 py-3 md:px-5 md:py-4 bg-background/50 backdrop-blur-md border border-border/50 rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground font-medium shadow-sm hover:border-primary/30 resize-none text-sm md:text-base"
                  suppressHydrationWarning
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 md:gap-3 py-4 md:py-5 bg-foreground text-background font-black text-base md:text-lg rounded-xl md:rounded-2xl hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-xl hover:shadow-primary/40 hover:-translate-y-1 cursor-pointer group/btn mt-4 md:mt-6"
                suppressHydrationWarning
              >
                Send Message
                <Send size={20} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

