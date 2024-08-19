"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Tooltip from "./ToolTip";

export default function YoutubeButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href="https://www.youtube.com/@dusunax" target="_blank">
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95, rotate: 360 }}
        transition={{ delay: 0.5 }}
        className="w-32 h-32 rounded-full flex items-center justify-center px-5 py-3 bg-red-600 text-white cursor-pointer shadow-lg"
      >
        <YoutubeIcon />
        {isHovered && (
          <Tooltip text="Watch at Youtube Channel✨" className="w-40" />
        )}
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
