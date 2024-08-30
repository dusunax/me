"use client";
import { AnimatePresence, motion } from "framer-motion";
import MainLogo from "./MainLogo";

export default function LoadingScreen({ animate = true }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-white z-[99] flex justify-center items-center"
        initial={{ opacity: 1 }}
        animate={{
          display: animate ? "none" : "fixed",
          opacity: animate ? 0 : 1,
        }}
        transition={{ delay: 0, duration: 0.2 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="-ml-[10vw] md:-ml-[100px] scale-[30%]  sm:scale-50 md:scale-100 animate-pulse"
          initial={{ filter: "blur(10px)" }}
          animate={{ filter: animate ? "blur(0px)" : "blur(10px)" }}
          transition={{ delay: 0, duration: 0.2 }}
        >
          <MainLogo fontSize={100} animate={animate} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
