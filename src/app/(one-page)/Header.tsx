"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ContentsWrapper from "src/packages/components/ContentsWrapper";
import MainLogo from "src/packages/components/MainLogo";
import WordCloud from "src/packages/components/WordCloud";

export default function Header() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const moveY1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const moveY2 = useTransform(scrollYProgress, [0, 1], [0, -800]);
  const moveY3 = useTransform(scrollYProgress, [0, 1], [0, -1200]);

  return (
    <header className="relative px-20 pt-8 h-[90vh] bg-white">
      <motion.div
        className="absolute left-0 top-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <WordCloud />
      </motion.div>

      <ContentsWrapper className="h-full flex flex-col justify-between">
        <div className="flex-1 flex">
          <div className="sticky top-0 z-10 py-10">
            <MainLogo fontSize={50} />
          </div>
        </div>

        <div className="relative">
          <motion.div
            transition={{ duration: 0.1, delay: 0.4 }}
            style={{ y: moveY1 }}
            className="absolute w-40 h-40 rounded-full bg-primary-300 right-20 -top-20 z-1 shadow-[0_0_40px_40px_#decec7] z-1"
          ></motion.div>

          <motion.div
            initial={{ bottom: -170 }}
            animate={{ bottom: -190 }}
            transition={{
              type: "keyframes",
              repeat: 10,
              repeatType: "reverse",
              repeatDelay: 1,
              duration: 2,
            }}
            style={{ y: moveY2 }}
            className="absolute w-60 h-60 rounded-full bg-primary-400 -right-16 translate-y-full z-1 shadow-[0_0_8px_20px_#d0beb7]"
          ></motion.div>
          <motion.div
            transition={{ duration: 0.1, delay: 0.4 }}
            style={{ y: moveY3 }}
            className="absolute w-24 h-24 rounded-full bg-primary-400 left-0 bottom-20 z-1 shadow-[0_0_16px_20px_#d0beb7]"
          ></motion.div>
          <motion.hr
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className="mt-4 mb-10 y-1 border-primary-600"
          />
        </div>
      </ContentsWrapper>
    </header>
  );
}
