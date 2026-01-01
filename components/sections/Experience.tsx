"use client";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Machine Learning Intern",
    company: "Blackbox GPS Technology", // Replace with your actual company
    period: "July 2025 - Nov 2025",
    description: "Developed predictive models for vehicle tracking data and optimized data pipelines for real-time processing.",
  },
  {
    id: 2,
    role: "Summer Research Fellow",
    company: "National University of Singapore", // Replace with your actual experience
    period: "June 2025",
    description: "Conducted research on advanced computer vision algorithms and contributed to a published paper on object detection.",
  },
  {
    id: 3,
    role: "Computer Science Student",
    company: "Vellore Institute of Technology",
    period: "2024 - Present",
    description: "Specializing in Artificial Intelligence and Machine Learning. Relevant coursework: Data Structures, Probability, Operating Systems.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-16 text-center"
        >
          Professional Journey
        </motion.h2>

        <div className="relative border-l border-zinc-800 ml-3 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-zinc-900" />
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <span className="text-sm text-zinc-500 font-mono flex items-center gap-1 mt-1 sm:mt-0">
                  <Calendar size={14} />
                  {exp.period}
                </span>
              </div>
              
              <div className="text-blue-400 font-medium mb-3 flex items-center gap-2">
                <Briefcase size={16} />
                {exp.company}
              </div>
              
              <p className="text-zinc-400 leading-relaxed max-w-2xl">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}