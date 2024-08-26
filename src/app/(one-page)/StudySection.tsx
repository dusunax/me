"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import ContentsWrapper from "../../components/ContentsWrapper";
import Accordion from "../../components/Accordion";
import StudyCanvas from "../../components/StudyCanvas";
import { STUDY_CONTENT } from "src/packages/constant/study";

export default function StudySection() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [currentContent, setCurrentContent] = useState<number>(0);

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
    <section className="bg-white">
      <div id="study-section" />
      <ContentsWrapper className="mb-20">
        <div className="flex flex-col gap-10 py-16">
          <div className="flex gap-16 items-end justify-between">
            <div className="flex gap-8 items-end">
              <motion.h2
                className="text-9xl flex flex-col"
                initial={{ opacity: 0.2 }}
                animate={{ opacity: isInView ? 1 : 0.2 }}
              >
                <span className="opacity-20">STUDY</span>
              </motion.h2>
              <h3 className="text-4xl flex flex-col">
                <strong className="opacity-40">BOOKS</strong>
                <strong className="opacity-60">ARTICLES</strong>
                <strong className="opacity-90">DOCUMENTATION</strong>
              </h3>
            </div>
            <div className="flex-1">
              <p className="text-3xl mb-2">
                <strong>Currently reading:</strong>
              </p>
              <p className="text-3xl">
                개발자 온보딩 가이드
                <br />
                The Missing Readme
              </p>
            </div>
          </div>

          <div className="flex">
            <Accordion
              contents={STUDY_CONTENT}
              currentContent={currentContent}
              nextContent={nextContent}
              prevContent={prevContent}
              changeContentIndex={changeContentIndex}
            />
            <div className="w-full max-h-[600px] h-[60vh] bg-primary-400 rounded-xl">
              <StudyCanvas content={STUDY_CONTENT[currentContent]} />
            </div>
          </div>
        </div>
      </ContentsWrapper>
    </section>
  );
}
