"use client";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import ContentsWrapper from "src/packages/components/ContentsWrapper";
import MainLogo from "src/packages/components/MainLogo";
import WordCloud from "src/packages/components/WordCloud";

export default function Hero({ goNextSection }: { goNextSection: () => void }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  return (
    <div className="relative px-20 pt-8 h-[90vh] bg-white shadow-xl z-10 rounded-b-2xl">
      <motion.div
        className="absolute left-0 top-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <WordCloud scrollYProgress={scrollYProgress} />
      </motion.div>

      <ContentsWrapper className="h-full flex flex-col justify-between">
        <div className="flex-1 flex justify-center sm:justify-start">
          <div className="sticky top-0 z-10 sm:py-10 scale-[60%] sm:scale-100 origin-top-left">
            <MainLogo fontSize={50} />
          </div>
        </div>

        <motion.div
          className="absolute left-0 bottom-4 w-full text-center z-20"
          whileHover={{
            scale: 1.2,
            y: 10,
          }}
          whileTap={{ scale: 0.9 }}
          onClick={goNextSection}
        >
          <button className="flex justify-center w-full text-center">
            <CaretDownIcon width={80} height={80} color={"#b6a79d"} />
          </button>
        </motion.div>
      </ContentsWrapper>
    </div>
  );
}
