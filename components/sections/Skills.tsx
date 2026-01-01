"use client";
import { motion } from "framer-motion";
import { skills } from "@/data/skills"; // Importing the data we made earlier

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Arsenal</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A full-stack approach to AI. From training large-scale models to deploying them in production environments.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl hover:border-blue-500/50 transition-colors group"
              >
                <div className="mb-4 inline-block p-3 bg-zinc-800 rounded-lg group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center text-zinc-400 text-sm">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}