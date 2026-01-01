"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, Star } from "lucide-react";
import { projects } from "@/data/projects";
import { useRef, useEffect, useState } from "react";

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null); // Ref for the whole section
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // State to track if user is looking

  // 1. INTERSECTION OBSERVER: Detect when the section is on screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only start scrolling when the section is actually visible
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // 2. SCROLL ENGINE
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;

    const scroll = () => {
      // Logic: Scroll ONLY if:
      // 1. The section is visible on screen (isVisible)
      // 2. The user is NOT hovering/touching (isPaused)
      if (isVisible && !isPaused && scrollContainer) {
        
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        
        if (scrollContainer.scrollLeft >= maxScroll - 1) {
             // Reset to start
             scrollContainer.scrollLeft = 0;
        } else {
          // Scroll speed
          scrollContainer.scrollLeft += 1;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, isVisible]); // Dependencies ensure loop updates when visibility changes

  return (
    <section 
      id="projects" 
      ref={sectionRef} // Attach observer here
      className="py-20 px-0 bg-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 flex items-center gap-3 text-white">
            <Code2 className="text-cyan-400" size={40} />
            Selected Work
          </h2>
          <p className="text-zinc-400 max-w-2xl text-lg">
            From GraphRAG reasoning engines to Real-Time voice agents.
            <span className="block text-sm text-cyan-500 mt-2 font-mono">
              * Top 3 projects highlighted (System Architecture & Research)
            </span>
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        className="flex overflow-x-auto gap-8 px-6 pb-12 pt-4 scrollbar-hide"
        style={{ scrollBehavior: "auto" }} 
      >
        {projects.map((project, index) => {
          const isFeatured = index < 3; 
          
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`
                relative flex-shrink-0 w-[85vw] md:w-[450px] rounded-2xl overflow-hidden flex flex-col
                bg-zinc-900 border transition-all duration-300 group
                ${isFeatured 
                  ? "border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:shadow-[0_0_50px_rgba(6,182,212,0.3)]" 
                  : "border-zinc-800 hover:border-zinc-600"
                }
              `}
            >
              {/* Featured Badge (Top 3 Only) */}
              {isFeatured && (
                <div className="absolute top-4 right-4 z-20">
                  <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full border border-cyan-500/30">
                    <Star size={12} fill="currentColor" /> Featured
                  </span>
                </div>
              )}

              {/* Gradient Hover Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="p-8 flex flex-col h-full relative z-10">
                <h3 className={`text-2xl font-bold mb-3 transition-colors ${isFeatured ? 'text-white' : 'group-hover:text-white'}`}>
                  {project.title}
                </h3>
                
                <p className="text-zinc-400 mb-6 leading-relaxed flex-grow text-sm md:text-base">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className={`text-xs font-medium px-3 py-1 rounded-full border 
                        ${isFeatured 
                          ? "bg-cyan-950/30 text-cyan-200 border-cyan-500/20" 
                          : "bg-zinc-800 text-zinc-300 border-zinc-700"
                        }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links Footer */}
                <div className="flex items-center gap-4 mt-auto">
                  <a 
                    href={project.links.github} 
                    className="flex items-center gap-2 text-sm font-semibold text-white hover:text-cyan-400 transition-colors"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  <a 
                    href={project.links.demo} 
                    className="flex items-center gap-2 text-sm font-semibold text-white hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
        
        {/* Spacer at the end */}
        <div className="w-12 flex-shrink-0" />
      </div>
    </section>
  );
}