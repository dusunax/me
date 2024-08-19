"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import ContentsWrapper from "../../components/ContentsWrapper";
import StudyCanvas from "../../components/StudyCanvas";
import Accordion from "../../components/Accordion";
import CurvedBackground from "../../components/CurvedBackground";
import { STACKS } from "src/packages/constant/stack";
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
    <section className="relative flex flex-col w-full min-h-dvh bg-white mt-40 py-24">
      <div id="work-section" />
      <CurvedBackground backgroundColor="#ffffff" direction="top" />
      <ContentsWrapper className="my-20">
        <div className="flex justify-between gap-4">
          <div className="flex flex-col justify-between">
            <motion.h2
              className="text-9xl"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: isInView ? 1 : 0.5 }}
            >
              WORK
            </motion.h2>
            <motion.ul
              className="flex gap-4"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: isInView ? 1 : 0 }}
            >
              <li>
                <span className="text-8xl">2</span>
                Services Developed.
              </li>
              <li>
                <span className="text-8xl">1</span>year
                <span className="text-8xl">7</span>months of development
                experience.
              </li>
            </motion.ul>
          </div>

          <div className="w-1/2 flex flex-col gap-6">
            <p className="text-3xl text-right">
              I&apos;ve been working as a software developer for 1 year and 7
              months and developed 2 services since december 2022. I&apos;m
              currently looking for a new job opportunity.
            </p>
            <ul className="text-xl pl-2">
              <li>
                <strong>Service 1:</strong> Education Service for Free Online
                Courses and Video Contents. Collects and analyzes educational
                data&apos;s metadata to provide personalized learning
                experiences.
              </li>
              <li>
                <strong>Service 2:</strong> Medical Service for Online Medical
                Media Contents Sharing. Provides medical 3D contents and
                ordering system for dental prostheses. It&apos;s a platform for
                dentists and dental technicians and help them to communicate.
              </li>
            </ul>
          </div>
        </div>
        <motion.div
          ref={ref}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isInView ? 1.05 : 0 }}
          transition={{ type: "spring", duration: 1 }}
          className="h-10 my-4 border-t-0 border-l-0 border-r-0 border-2 border-[#d0beb7] rounded-[100px]"
        ></motion.div>
      </ContentsWrapper>

      <div id="stack-section" />
      <div className="relative overflow-hidden w-full h-[180px]">
        <motion.div
          className="absolute h-full flex items-center gap-5 pr-5 whitespace-nowrap text-7xl text-right bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 100,
            ease: "linear",
          }}
        >
          {STACKS.map((stack) => (
            <>
              <p>{stack.name}</p>
              <div className="w-6 h-6 bg-red-500 rounded-full" />
            </>
          ))}
        </motion.div>
        <motion.div
          className="absolute h-full flex items-center gap-5 pr-5 whitespace-nowrap text-7xl text-right bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 100,
            ease: "linear",
          }}
        >
          {STACKS.map((stack) => (
            <>
              <p>{stack.name}</p>
              <div className="w-6 h-6 bg-red-500 rounded-full" />
            </>
          ))}
        </motion.div>
      </div>

      <ContentsWrapper className="my-20">
        <div className="flex justify-between">
          <motion.h2
            className="text-9xl"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: isInView ? 1 : 0.5 }}
          >
            USE
          </motion.h2>
          <div className="w-2/3 flex flex-col gap-4">
            <p className="text-3xl">
              <strong>I made this homepage with above skills.</strong>
              <br /> Sometimes use vanilla Javascript for quick prototyping, but
              mostly use React & Typescript. Do write Python code if needed, and
              use Node.js for backend.
            </p>
            <p className="text-xl">
              I do have based on Web Publishing and Computer Graphics, major in
              Formative Illustration. I&apos;m interested in 3D Graphics and
              Interactive Web Development.
            </p>
            <div className="flex gap-2">
              {STACKS.map((stack) => (
                <div className="relative" key={stack.name}>
                  <div className="relative w-8 h-8 rounded-full overflow-hidden shadow-md">
                    <div className="w-12 -ml-1">
                      <img
                        className="absoulte h-8"
                        src={stack.icon}
                        alt={stack.name}
                        title={stack.name}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <motion.div
          ref={ref}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isInView ? 1.05 : 0 }}
          transition={{ type: "spring", duration: 1 }}
          className="h-10 my-4 border-t-0 border-l-0 border-r-0 border-2 border-[#d0beb7] rounded-[100px]"
        ></motion.div>
      </ContentsWrapper>

      <div id="study-section" />
      <ContentsWrapper>
        <div className="flex flex-col gap-10 py-16">
          <div className="flex gap-16 items-end justify-between">
            <div className="flex gap-8 items-end">
              <motion.h2
                className="text-9xl flex flex-col"
                initial={{ opacity: 0.2 }}
                animate={{ opacity: isInView ? 1 : 0.2 }}
              >
                <span className="opacity-20">READ</span>
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
            <div className="w-full max-h-[600px] h-[60vh] bg-[#d0beb7] rounded-xl">
              <StudyCanvas content={STUDY_CONTENT[currentContent]} />
            </div>
          </div>
        </div>
      </ContentsWrapper>
    </section>
  );
}
