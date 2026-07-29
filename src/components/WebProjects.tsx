"use client";

import { motion } from "framer-motion";
import { Maximize2, Code2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

export type ProjectData = {
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  link: string;
  mediaType: "video" | "image";
  mediaSrc: string;
  gallery?: { type: "video" | "image"; src: string }[];
};

const webProjects: ProjectData[] = [
  {
    title: "Beach Resort",
    description: "A visually stunning resort landing page focusing on aesthetic UI/UX and smooth scrolling.",
    longDescription: "A visually stunning resort landing page focusing on aesthetic UI/UX and smooth scrolling. This project demonstrates advanced frontend layout techniques, ensuring a seamless experience across all devices. The primary goal was to create an immersive environment that makes users feel like they are already on vacation, with beautiful video backgrounds and parallax effects.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    link: "#",
    mediaType: "image",
    mediaSrc: "/web-projects/beach/Screenshot 2026-07-29 182935.webp",
    gallery: [
      { type: "image", src: "/web-projects/beach/Screenshot 2026-07-29 182935.webp" },
      { type: "image", src: "/web-projects/beach/Screenshot 2026-07-29 182956.webp" },
      { type: "image", src: "/web-projects/beach/Screenshot 2026-07-29 183017.webp" },
      { type: "image", src: "/web-projects/beach/Screenshot 2026-07-29 183032.webp" },
      { type: "image", src: "/web-projects/beach/Screenshot 2026-07-29 183043.webp" },
      { type: "image", src: "/web-projects/beach/Screenshot 2026-07-29 183057.webp" },
      { type: "image", src: "/web-projects/beach/Screenshot 2026-07-29 183109.webp" }
    ]
  },
  {
    title: "Luxury Car Showcase",
    description: "A premium 3D-like showcase for high-end vehicles with dynamic interactions.",
    longDescription: "A premium showcase for high-end vehicles with dynamic interactions. Built with modern web technologies, this platform allows users to explore luxury cars in high detail. Features include dynamic filtering, interactive galleries, smooth page transitions, and a fully responsive design that works flawlessly on mobile devices.",
    tech: ["Next.js", "Three.js", "Tailwind"],
    link: "#",
    mediaType: "image",
    mediaSrc: "/web-projects/car/Screenshot 2026-07-19 162441.webp",
    gallery: [
      { type: "image", src: "/web-projects/car/Screenshot 2026-07-19 162441.webp" },
      { type: "image", src: "/web-projects/car/Screenshot 2026-07-19 162501.webp" },
      { type: "image", src: "/web-projects/car/Screenshot 2026-07-19 162516.webp" },
      { type: "image", src: "/web-projects/car/Screenshot 2026-07-19 162529.webp" },
      { type: "image", src: "/web-projects/car/Screenshot 2026-07-19 162544.webp" },
      { type: "image", src: "/web-projects/car/Screenshot 2026-07-19 162602.webp" },
      { type: "image", src: "/web-projects/car/Screenshot 2026-07-19 162621.webp" },
      { type: "image", src: "/web-projects/car/Screenshot 2026-07-19 162706.webp" },
      { type: "image", src: "/web-projects/car/Screenshot 2026-07-19 162718.webp" },
      { type: "image", src: "/web-projects/car/Screenshot 2026-07-19 162730.webp" },
      { type: "image", src: "/web-projects/car/Screenshot 2026-07-19 162804.webp" },
      { type: "image", src: "/web-projects/car/Screenshot 2026-07-19 162822.webp" }
    ]
  },
  {
    title: "Cloud9 Workspace",
    description: "A modern co-working space platform with sleek glassmorphism design.",
    longDescription: "Cloud9 Workspace helps users find and book premium desk spaces, meeting rooms, and private offices. The application features a clean, intuitive interface heavily utilizing glassmorphism, real-time availability checking, and a comprehensive user dashboard. It was designed to offer a friction-less booking experience.",
    tech: ["React", "Vite", "Tailwind CSS"],
    link: "#",
    mediaType: "image",
    mediaSrc: "/web-projects/cloud9/Screenshot 2026-07-19 155146.webp",
    gallery: [
      { type: "image", src: "/web-projects/cloud9/Screenshot 2026-07-19 155146.webp" },
      { type: "image", src: "/web-projects/cloud9/Screenshot 2026-07-19 155413.webp" },
      { type: "image", src: "/web-projects/cloud9/Screenshot 2026-07-19 155431.webp" },
      { type: "image", src: "/web-projects/cloud9/Screenshot 2026-07-19 155445.webp" },
      { type: "image", src: "/web-projects/cloud9/Screenshot 2026-07-19 155456.webp" },
      { type: "image", src: "/web-projects/cloud9/Screenshot 2026-07-19 155507.webp" },
      { type: "image", src: "/web-projects/cloud9/Screenshot 2026-07-19 155656.webp" },
      { type: "image", src: "/web-projects/cloud9/Screenshot 2026-07-19 155707.webp" },
      { type: "image", src: "/web-projects/cloud9/Screenshot 2026-07-19 155721.webp" },
      { type: "image", src: "/web-projects/cloud9/Screenshot 2026-07-19 155736.webp" }
    ]
  },
  {
    title: "Artisan Coffee",
    description: "An elegant e-commerce front-end for a specialty coffee roaster.",
    longDescription: "Designed to highlight the rich aesthetic of artisanal coffee, this project includes product browsing, a shopping cart, and a seamless checkout flow simulation. The UI emphasizes typography, high-quality imagery, and smooth transitions to reflect the premium nature of the coffee beans being sold.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    link: "#",
    mediaType: "image",
    mediaSrc: "/web-projects/coffee/Screenshot 2026-06-29 142136.webp",
    gallery: [
      { type: "image", src: "/web-projects/coffee/Screenshot 2026-06-29 142136.webp" },
      { type: "image", src: "/web-projects/coffee/Screenshot 2026-06-29 142204.webp" },
      { type: "image", src: "/web-projects/coffee/Screenshot 2026-06-29 142307.webp" },
      { type: "image", src: "/web-projects/coffee/Screenshot 2026-06-29 142411.webp" },
      { type: "image", src: "/web-projects/coffee/Screenshot 2026-06-29 142651.webp" }
    ]
  },
  {
    title: "Elite Gym Tracker",
    description: "A dark-mode focused fitness application dashboard for tracking workouts.",
    longDescription: "Elite Gym Tracker provides users with detailed analytics on their fitness journey. It features interactive charts, progress tracking, and a highly customizable dashboard tailored for hardcore fitness enthusiasts. The dark mode theme reduces eye strain during late-night workout reviews.",
    tech: ["React", "Chart.js", "Tailwind"],
    link: "#",
    mediaType: "image",
    mediaSrc: "/web-projects/gym/Screenshot 2026-07-06 164632.webp",
    gallery: [
      { type: "image", src: "/web-projects/gym/Screenshot 2026-07-06 164632.webp" },
      { type: "image", src: "/web-projects/gym/Screenshot 2026-07-06 164731.webp" },
      { type: "image", src: "/web-projects/gym/Screenshot 2026-07-06 164807.webp" },
      { type: "image", src: "/web-projects/gym/Screenshot 2026-07-06 164833.webp" },
      { type: "image", src: "/web-projects/gym/Screenshot 2026-07-06 164856.webp" },
      { type: "image", src: "/web-projects/gym/Screenshot 2026-07-06 164945.webp" },
      { type: "image", src: "/web-projects/gym/Screenshot 2026-07-06 165012.webp" }
    ]
  }
];

export default function WebProjects() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <>
      <div className="w-full">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pt-4">
            {webProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative rounded-[2rem] bg-black/5 dark:bg-card/10 backdrop-blur-xl border border-border/60 overflow-hidden hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 flex cursor-pointer ${
                  index === 0 ? "flex-col md:flex-row md:col-span-2" : "flex-col"
                }`}
                onClick={() => setSelectedProject(project)}
              >
                {/* Image Container (Top / Left) */}
                <div className={`relative overflow-hidden bg-black/20 ${
                  index === 0 
                    ? "w-full md:w-[55%] aspect-video md:aspect-auto border-b md:border-b-0 md:border-r border-border/40" 
                    : "w-full aspect-[4/3] border-b border-border/40"
                }`}>
                  {project.mediaType === "video" ? (
                    <video
                      src={`${project.mediaSrc}#t=0.1`}
                      preload="metadata"
                      muted
                      playsInline
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <img
                      src={project.mediaSrc}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  )}
                  
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                  
                  {/* Play Icon for Videos */}
                  {project.mediaType === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-14 h-14 rounded-full bg-background/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white shadow-xl group-hover:bg-primary/80 transition-colors">
                        <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content Container (Bottom / Right) */}
                <div className={`p-6 md:p-8 flex flex-col justify-between bg-gradient-to-b from-transparent to-background/20 ${
                  index === 0 ? "w-full md:w-[45%]" : "flex-1"
                }`}>
                  <div>
                    <h3 className={`font-black text-foreground mb-3 group-hover:text-primary transition-colors duration-300 ${
                      index === 0 ? "text-3xl md:text-4xl" : "text-2xl"
                    }`}>
                      {project.title}
                    </h3>
                    <p className="text-foreground/80 text-sm md:text-base font-medium mb-6 line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t, i) => (
                        <span key={i} className="text-[10px] md:text-xs font-bold px-3 py-1.5 bg-foreground/5 dark:bg-foreground/10 border border-foreground/10 text-foreground rounded-full shadow-sm">
                          {t}
                        </span>
                      ))}
                    </div>

                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="inline-flex items-center gap-2 text-sm font-black text-foreground hover:text-primary transition-colors w-fit uppercase tracking-widest group/btn"
                    >
                      View Details <Maximize2 size={16} className="group-hover/btn:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
