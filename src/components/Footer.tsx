import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <a href="#" className="text-2xl font-bold tracking-tighter text-primary">
            YA<span className="text-foreground">.</span>
          </a>
          <p className="text-foreground/60 text-sm">
            Building intelligent solutions for tomorrow.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/YoussefAdel2004"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-foreground/60 hover:text-primary transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/youssef-adel-ab91562b7"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-foreground/60 hover:text-primary transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:youssefelkess8@gmail.com"
            className="p-2 text-foreground/60 hover:text-primary transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
      
      <div className="container mx-auto max-w-6xl mt-8 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-foreground/50 text-sm">
          &copy; {currentYear} Youssef Adel. All rights reserved.
        </p>
        <p className="text-foreground/50 text-sm">
          Designed & Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
