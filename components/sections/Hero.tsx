"use client";
import { motion } from "framer-motion";
import { ArrowDown, Brain, Server } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col md:flex-row overflow-hidden bg-black text-white">
      
      {/* LEFT SIDE: The Scientist */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full bg-zinc-900 flex flex-col justify-center items-center md:items-end p-8 border-b md:border-b-0 md:border-r border-zinc-800">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-right"
        >
          <div className="flex justify-center md:justify-end mb-4">
            <Brain className="w-12 h-12 text-blue-500" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Data Scientist
            </span>
          </h2>
          <p className="text-zinc-400 max-w-md mt-4 text-lg font-light">
            Analyzing complex datasets, building predictive models, and turning mathematical theory into intelligence.
          </p>
        </motion.div>
      </div>

      {/* RIGHT SIDE: The Engineer */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full bg-black flex flex-col justify-center items-center md:items-start p-8 pb-20 md:pb-8">
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left"
        >
           <div className="flex justify-center md:justify-start mb-4">
            <Server className="w-12 h-12 text-emerald-500" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
              ML Engineer
            </span>
          </h2>
          <p className="text-zinc-400 max-w-md mt-4 text-lg font-light">
            Deploying scalable agents, optimizing inference latency, and engineering robust MLOps pipelines.
          </p>
        </motion.div>
      </div>

      {/* CENTER CTA - DESKTOP ONLY */}
      {/* Positioned absolutely in the center of the screen (X-axis) and near bottom (Y-axis) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="hidden md:flex absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 flex-col items-center gap-2 text-zinc-400 hover:text-white transition-colors cursor-pointer group"
      >
        <a href="#projects" className="flex flex-col items-center gap-2">
          <span className="text-sm font-medium tracking-widest uppercase bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
            View Projects
          </span>
          <div className="bg-black/50 p-3 rounded-full border border-white/10 group-hover:bg-white/10 transition-colors backdrop-blur-sm">
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </div>
        </a>
      </motion.div>

    </section>
  );
}