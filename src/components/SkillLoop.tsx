"use client";
import { motion } from "framer-motion";
import { STACKS } from "@constants/stack";

export default function SkillLoop() {
  return (
    <>
      <motion.div
        className="absolute h-full flex items-center gap-5 pr-5 whitespace-nowrap heading-xl text-right bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 100,
          ease: "linear",
        }}
      >
        {STACKS.map((stack) => (
          <div key={stack.name} className="flex items-center">
            <p>{stack.name}</p>
            <div className="w-2 h-2 md:w-6 md:h-6 bg-red-500 rounded-full ml-4" />
          </div>
        ))}
      </motion.div>
      <motion.div
        className="absolute h-full flex items-center gap-5 pr-5 whitespace-nowrap heading-xl text-right bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 100,
          ease: "linear",
        }}
      >
        {STACKS.map((stack) => (
          <div key={stack.name} className="flex items-center">
            <p>{stack.name}</p>
            <div className="w-2 h-2 md:w-6 md:h-6 bg-red-500 rounded-full ml-4" />
          </div>
        ))}
      </motion.div>
    </>
  );
}
