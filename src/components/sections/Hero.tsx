"use client";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import ContentsWrapper from "@components/ContentsWrapper";
import MainLogo from "@components/MainLogo";
import WordCloud from "@components/WordCloud";

export default function Hero({ goNextSection }: { goNextSection: () => void }) {
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative px-6 pt-6 h-[90vh] bg-white shadow-xl z-10 rounded-b-2xl">
      <div className="absolute left-0 top-0 w-full h-full">
        <WordCloud scrollYProgress={scrollYProgress} />
      </div>

      <ContentsWrapper className="h-full flex flex-col justify-between">
        <div className="relative flex-1 flex">
          <div className="sticky h-1/2 top-0 z-10 -ml-10 sm:ml-0 sm:py-10 scale-[60%] sm:scale-100 origin-top-left">
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
