"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function YoutubeButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href="https://www.youtube.com/@dusunax" target="_blank">
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95, rotate: 360 }}
        className="w-32 h-32 rounded-full flex items-center justify-center px-5 py-3 bg-red-600 text-white cursor-pointer shadow-lg"
      >
        <YoutubeIcon />
        {isHovered && <Tooltip />}
      </motion.div>
    </Link>
  );
}

function YoutubeIcon() {
  return (
    <motion.div
      className="relative w-20 h-20"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 w-full h-full"
      >
        <polygon points="30,20 30,80 80,50" fill="white" />
      </svg>
    </motion.div>
  );
}

function Tooltip() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-40 absolute top-2 -translate-y-full left-1/2 -translate-x-1/2 px-3 py-1 bg-[#222222] text-white text-sm text-center rounded-md shadow-lg"
    >
      Watch on YouTube Channel✨
    </motion.div>
  );
}
