"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-black flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-2xl"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Ready to Collaborate?
        </h2>
        <p className="text-zinc-400 text-lg mb-10">
          I'm currently looking for internships and new opportunities. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <a 
          href="mailto:your.email@vit.ac.in" 
          className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform"
        >
          <Mail size={20} />
          Say Hello
        </a>

        <div className="flex items-center justify-center gap-8 mt-16 text-zinc-500">
          <a href="https://github.com" target="_blank" className="hover:text-white transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" className="hover:text-blue-400 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" className="hover:text-sky-400 transition-colors">
            <Twitter size={24} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}