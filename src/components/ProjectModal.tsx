"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import type { ProjectData } from "./WebProjects";

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      setCurrentMediaIndex(0); // reset on new project
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  if (!project) return null;

  const gallery = project.gallery && project.gallery.length > 0 
    ? project.gallery 
    : [{ type: project.mediaType, src: project.mediaSrc }];

  const nextMedia = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevMedia = () => {
    setCurrentMediaIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
          />

          {/* Optimized Glow */}
          <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

          {/* Modal Content */}
          <div className="relative z-10 w-full max-w-7xl max-h-[90vh] flex flex-col pointer-events-auto">
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="absolute -top-12 right-0 md:-right-4 text-white hover:text-primary bg-black/50 hover:bg-black/80 rounded-full p-2 backdrop-blur-md transition-all duration-300 z-50 border border-white/10"
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300, delay: 0.1 }}
              className="flex flex-col lg:flex-row w-full bg-card rounded-2xl md:rounded-[2rem] overflow-hidden border border-border/50 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
            {/* Left Column: Carousel */}
            <div className="w-full lg:w-[65%] bg-black/60 relative group min-h-[300px] h-[40vh] lg:h-auto flex items-center justify-center overflow-hidden">
              {gallery.map((media, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-300 ${
                    currentMediaIndex === index ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  {media.type === "video" ? (
                    <video
                      src={media.src}
                      autoPlay={currentMediaIndex === index}
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <img
                      src={media.src}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>
              ))}

              {/* Carousel Controls */}
              {gallery.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); prevMedia(); }}
                    className="absolute left-4 z-20 p-3 rounded-full bg-black/40 text-white hover:bg-primary hover:text-primary-foreground backdrop-blur-md transition-all duration-300 border border-white/10 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextMedia(); }}
                    className="absolute right-4 z-20 p-3 rounded-full bg-black/40 text-white hover:bg-primary hover:text-primary-foreground backdrop-blur-md transition-all duration-300 border border-white/10 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
                  >
                    <ChevronRight size={24} />
                  </button>

                  {/* Dots */}
                  <div className="absolute bottom-4 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
                    {gallery.map((_, i) => (
                      <button
                        key={i}
                        onClick={(e) => { e.stopPropagation(); setCurrentMediaIndex(i); }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          currentMediaIndex === i ? "w-6 bg-primary" : "bg-white/50 hover:bg-white"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Right Column: Details */}
            <div className="w-full lg:w-[35%] p-8 md:p-12 flex flex-col justify-between overflow-y-auto max-h-[60vh] lg:max-h-none bg-gradient-to-br from-card/90 to-background/95 relative">
              {/* Subtle background glow - Optimized */}
              <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent rounded-full pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-px bg-primary/60"></span>
                  <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase">Case Study</span>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-br from-white via-white/90 to-white/40 mb-8 leading-tight">
                  {project.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map((t, i) => (
                    <span 
                      key={i} 
                      className="text-xs md:text-sm font-bold px-4 py-2 bg-primary/10 border border-primary/20 text-primary rounded-full shadow-[0_0_15px_rgba(var(--primary),0.1)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="w-full h-px bg-gradient-to-r from-border/50 to-transparent mb-10" />

                <h4 className="text-sm font-black text-white/40 uppercase tracking-widest mb-4">Project Overview</h4>
                <p className="text-foreground/80 text-lg leading-relaxed font-medium">
                  {project.longDescription || project.description}
                </p>
              </div>

            </div>
          </motion.div>
        </div>
        </div>
      )}
    </AnimatePresence>
  );
}
