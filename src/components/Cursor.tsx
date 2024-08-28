"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorSize, setCursorSize] = useState(16);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      setCursorSize(128);
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setCursorSize(16);
      setIsHovering(false);
    };

    window.addEventListener("mousemove", handleMouseMove);

    const interactiveElements = document.querySelectorAll("button, a");
    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mix-blend-multiply z-[100]"
      initial={{ opacity: 0, x: -cursorSize, y: -cursorSize }}
      animate={{
        opacity: isHovering ? 0.5 : 1,
        x: mousePosition.x - cursorSize / 2,
        y: mousePosition.y - cursorSize / 2,
        width: cursorSize,
        height: cursorSize,
      }}
      transition={{
        type: "keyframes",
      }}
    />
  );
}
