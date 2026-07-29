import { Mail, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background border-t border-border/40 pt-16 pb-8 md:pt-24 md:pb-12 px-6 md:px-12 overflow-hidden">
      {/* Footer Glow */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent rounded-full pointer-events-none -z-10" />
      
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-6xl font-black text-foreground mb-4 md:mb-6 tracking-tighter leading-tight">
            Let's build something <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">amazing together.</span>
          </h2>
          <p className="text-foreground/60 text-base md:text-xl max-w-2xl mb-8 md:mb-10 font-medium px-4">
            I'm currently looking for new opportunities and collaborations. My inbox is always open.
          </p>
          <a
            href="mailto:youssefelkess8@gmail.com"
            className="group flex items-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 bg-foreground text-background rounded-full font-bold text-base md:text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-xl hover:shadow-primary/30 hover:-translate-y-1"
          >
            Say Hello
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-border/40">
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#" className="text-3xl font-black tracking-tight text-primary hover:opacity-80 transition-opacity">
              Youssef<span className="text-foreground">.</span>
            </a>
            <p className="text-foreground/50 text-sm font-medium">
              AI Engineer & Software Developer
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/YoussefAdel2004"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-card/50 border border-border/50 text-foreground/70 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group"
            >
              <FaGithub size={22} className="group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://linkedin.com/in/youssef-adel-ab91562b7"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-card/50 border border-border/50 text-foreground/70 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group"
            >
              <FaLinkedin size={22} className="group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="mailto:youssefelkess8@gmail.com"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-card/50 border border-border/50 text-foreground/70 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group"
            >
              <Mail size={22} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
        
        <div className="mt-12 flex justify-center md:justify-start">
          <p className="text-foreground/40 text-sm font-medium">
            &copy; {currentYear} Youssef Adel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
