"use client";
import { motion } from "framer-motion";

export default function Tooltip({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`absolute top-2 -translate-y-full left-1/2 -translate-x-1/2 px-3 py-1 bg-[#222222] text-white font-size-sm text-center rounded-md shadow-lg ${className}`}
    >
      {text}
    </motion.div>
  );
}
