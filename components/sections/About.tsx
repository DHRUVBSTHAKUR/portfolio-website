"use client";
import { motion } from "framer-motion";
import { FileText, Award, Globe } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold mb-6 text-white">Behind the Code</h2>
          
          <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
            <p>
              {/* Added your name here 👇 */}
              <span className="text-white font-semibold">I&apos;m Dhruv,</span> an engineer who bridges the gap between <span className="text-blue-400 font-semibold">theoretical AI research</span> and <span className="text-emerald-400 font-semibold">production engineering</span>.
            </p>
            <p>
              My philosophy is simple: Models are only as good as the value they deliver. Whether it&apos;s optimizing inference latency for edge devices or architecting scalable RAG pipelines, I focus on building systems that work in the real world, not just in a notebook.
            </p>
          </div>

          {/* Quick Stats / Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="flex flex-col items-center p-4 bg-zinc-950 rounded-xl border border-zinc-800">
              <Award className="text-yellow-500 mb-2" size={24} />
              <span className="text-2xl font-bold text-white">3+</span>
              <span className="text-sm text-zinc-500">Years Experience</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-zinc-950 rounded-xl border border-zinc-800">
              <Globe className="text-blue-500 mb-2" size={24} />
              <span className="text-2xl font-bold text-white">10+</span>
              <span className="text-sm text-zinc-500">Projects Deployed</span>
            </div>
            
            {/* Resume Button - MAKE SURE resume.pdf IS IN PUBLIC FOLDER */}
            <a 
              href="/resume.pdf" 
              target="_blank" // Opens in new tab
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-4 bg-white hover:bg-zinc-200 transition-colors rounded-xl cursor-pointer group"
            >
              <FileText className="text-black mb-2 group-hover:scale-110 transition-transform" size={24} />
              <span className="font-bold text-black">Download CV</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}