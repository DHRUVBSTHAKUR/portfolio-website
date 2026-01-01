"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-black/30 border-b border-white/10"
      >
        <div className="text-xl font-bold tracking-tighter text-white z-50">
          DHRUV<span className="text-blue-500">.AI</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-white transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Contact Button (Desktop) */}
        <div className="hidden md:block">
           <Link
            href="#contact"
            className="px-4 py-2 text-sm font-semibold text-black bg-white rounded-full hover:bg-zinc-200 transition-colors"
          >
            Contact Me
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold text-zinc-400 hover:text-white"
              >
                {link.name}
              </Link>
            ))}
             <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="px-8 py-3 text-lg font-bold text-black bg-white rounded-full"
              >
                Contact Me
              </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}