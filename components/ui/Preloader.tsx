"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const terminalLines = [
  "> Initializing neural networks...",
  "> Loading modules: TensorFlow, PyTorch...",
  "> Optimizing weights...",
  "> Access granted: DHRUV.AI"
];

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Show lines one by one
    if (index < terminalLines.length - 1) {
      const timeout = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 500); // Speed of typing lines
      return () => clearTimeout(timeout);
    } else {
      // Once done, wait a bit and hide
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: -1000, transition: { duration: 0.8, ease: "easeInOut" } }} // Slide up animation
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black text-white font-mono"
        >
          <div className="w-full max-w-md p-6">
            <div className="space-y-2">
              {terminalLines.slice(0, index + 1).map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`${
                    i === terminalLines.length - 1 ? "text-emerald-400" : "text-zinc-500"
                  }`}
                >
                  {line}
                  {i === index && (
                    <span className="animate-pulse inline-block w-2 h-4 bg-emerald-400 ml-1 align-middle" />
                  )}
                </motion.p>
              ))}
            </div>
            
            {/* Loading Bar */}
            <div className="mt-8 h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
               <motion.div 
                 initial={{ width: "0%" }}
                 animate={{ width: "100%" }}
                 transition={{ duration: 2.5, ease: "linear" }}
                 className="h-full bg-emerald-500"
               />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}