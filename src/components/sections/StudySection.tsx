"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { STUDY_CONTENT } from "@constants/study";
import ContentsWrapper from "@components/ContentsWrapper";
import Accordion from "@components/Accordion";
import StudyCanvas from "@components/StudyCanvas";
import ResponsiveBreak from "@components/ResponsiveBreak";
import { HandIcon } from "@radix-ui/react-icons";

export default function StudySection() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [currentContent, setCurrentContent] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);

  const changeContentIndex = (index: number) => {
    setCurrentContent(index);
  };

  const prevContent = () => {
    if (currentContent === 0) return;
    setCurrentContent(
      (prevContent) => (prevContent - 1) % STUDY_CONTENT.length
    );
  };

  const nextContent = () => {
    if (currentContent === STUDY_CONTENT.length - 1) return;
    setCurrentContent(
      (prevContent) => (prevContent + 1) % STUDY_CONTENT.length
    );
  };

  return (
    <section ref={ref}>
      <ContentsWrapper>
        <div className="flex flex-col gap-4 sm:gap-10 py-10 sm:py-20">
          <p>
            Study Group:{" "}
            <a
              href="https://github.com/monthly-cs"
              target="_blank"
              className="underline"
            >
              https://github.com/monthly-cs
            </a>
          </p>
          <div className="flex flex-col sm:items-center xl:flex-row gap-y-4 gap-x-16 xl:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-y-2 gap-x-8 md:items-center">
              <motion.h2
                className="heading-2xl opacity-20"
                initial={{ opacity: 0.1 }}
                animate={{ opacity: isInView ? 1 : 0.1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                STUDY
              </motion.h2>
              <h3 className="heading-md flex flex-col">
                <strong className="opacity-40">BOOKS</strong>
                <strong className="opacity-60">ARTICLES</strong>
                <strong className="opacity-90">DOCUMENTATION</strong>
              </h3>
            </div>
            <div className="w-full flex-1 flex xl:flex-col flex-wrap gap-x-2 gap-y-0 sm:justify-center xl:items-end">
              <p className="heading-sm">
                <strong>Currently reading:</strong>
              </p>
              <p className="heading-sm">
                개발자 온보딩 가이드 <ResponsiveBreak showOn="xl" />
                The Missing Readme
              </p>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row">
            <Accordion
              contents={STUDY_CONTENT}
              currentContent={currentContent}
              nextContent={nextContent}
              prevContent={prevContent}
              changeContentIndex={changeContentIndex}
            />
            <div
              className="relative w-full max-h-[600px] h-[60vh] bg-primary-400 rounded-xl"
              onMouseDown={() => setIsInteracting(true)}
              onMouseUp={() => setIsInteracting(false)}
              onMouseOver={() => setIsInteracting(false)}
              onTouchStart={() => setIsInteracting(true)}
              onTouchEnd={() => setIsInteracting(false)}
            >
              <HandIcon
                color={`${isInteracting ? "#d0beb7" : "#fff"}`}
                width={32}
                height={32}
                className={`absolute right-0 top-0 m-3 p-1 border border-white rounded-full transition ${
                  isInteracting ? "bg-white" : "animate-pulse"
                }`}
              />
              <StudyCanvas content={STUDY_CONTENT[currentContent]} />
            </div>
            <div className="h-[100vh]"></div>
          </div>
        </div>
      </ContentsWrapper>
    </section>
  );
}
