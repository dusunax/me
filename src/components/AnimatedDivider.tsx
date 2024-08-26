import React, { useRef } from "react";
import { motion } from "framer-motion";

type AnimatedDividerProps = {
  isInView: boolean;
};

export default function AnimatedDivider({ isInView }: AnimatedDividerProps) {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: isInView ? 1.05 : 0 }}
      transition={{ type: "spring", duration: 1 }}
      className="h-10 my-4 border-t-0 border-l-0 border-r-0 border-2 border-primary-600 rounded-[100px]"
    ></motion.div>
  );
}
