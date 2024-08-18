"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const cursorSize = 16;

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mix-blend-multiply z-50"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        x: mousePosition.x - cursorSize / 2,
        y: mousePosition.y - cursorSize / 2,
      }}
      transition={{
        type: "keyframes",
      }}
    />
  );
}
