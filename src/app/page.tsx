"use client";
import { useRef, useState } from "react";
import ContentsWrapper from "../components/ContentsWrapper";
import CustomCursor from "../components/Cursor";
import Header from "./(one-page)/Header";
import VideoSection from "./(one-page)/VideoSection";
import { motion, useInView } from "framer-motion";
import StudyCanvas from "../components/StudyCanvas";
import Accordion from "../components/Accordion";
import AnimatedDivider from "../components/AnimatedDivider";
import CurvedBackground from "../components/CurvedBackground";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const STACKS = [
    {
      name: "GITHUB",
      icon: "https://img.shields.io/badge/-%23121011.svg?logo=github&logoColor=white",
    },
    {
      name: "JAVASCRIPT",
      icon: "https://img.shields.io/badge/-%23323330.svg?logo=javascript&logoColor=%23F7DF1E",
    },
    {
      name: "TYPESCRIPT",
      icon: "https://img.shields.io/badge/-%23007ACC.svg?logo=typescript&logoColor=white",
    },
    {
      name: "REACT",
      icon: "https://img.shields.io/badge/-%2320232a.svg?logo=react&logoColor=%2361DAFB",
    },
    {
      name: "NEXTJS",
      icon: "https://img.shields.io/badge/-%23000000.svg?logo=nextdotjs&logoColor=white",
    },
    {
      name: "TAILWINDCSS",
      icon: "https://img.shields.io/badge/-%2338B2AC.svg?logo=tailwind-css&logoColor=white",
    },
    {
      name: "FRAMER-MOTION",
      icon: "https://img.shields.io/badge/-%23FFFFFF.svg?logo=framer&logoColor=black",
    },
    {
      name: "THREEJS&R3F",
      icon: "https://img.shields.io/badge/-%23000000.svg?logo=three.js&logoColor=white",
    },
    {
      name: "VERCEL",
      icon: "https://img.shields.io/badge/-%23000000.svg?logo=vercel&logoColor=white",
    },
  ];

  type Content = {
    title: string;
    orignalTitle?: string;
    subtitle: string;
    description: string;
    type: "book" | "article" | "documentation" | "video lecture";
    duration: string;
    images: string[];
    link: string;
    isFinished: boolean;
  };

  const [currentContent, setCurrentContent] = useState<number>(0);
  const contents: Content[] = [
    {
      title: "모던 자바스크립트 딥 다이브",
      orignalTitle: "Modern JavaScript Deep Dive",
      subtitle: "자바스크립트의 핵심 개념과 동작 원리",
      description: "The book is about modern JavaScript.",
      duration: "2023.09.09 - 2023.12.30",
      type: "book",
      images: ["/book-1.png"],
      link: "https://github.com/dusunax/javascript/tree/main/ppts/javascript",
      isFinished: true,
    },
    {
      title: "모던 리액트 딥 다이브",
      orignalTitle: "Modern React Deep Dive",
      subtitle: "리액트의 핵심 개념과 동작 원리",
      description: "The book is about modern React.",
      duration: "2024.03.04 - 2024.04.28",
      type: "book",
      images: ["/book-2.png"],
      link: "https://github.com/monthly-cs/2024-03-modern-react-deep-dive/tree/main/docs/dusunax/presentation",
      isFinished: true,
    },
    {
      title: "이펙티브 타입스크립트",
      orignalTitle: "Effective TypeScript",
      subtitle: "타입스크립트의 동작 원리의 이해와 구체적인 조언 62가지",
      description: "The book is about effective TypeScript.",
      duration: "2024.05.12 - 2024.06.30",
      type: "book",
      images: ["/book-3.png"],
      link: "https://github.com/dusunax/javascript/tree/main/ppts/typescript",
      isFinished: true,
    },
    {
      title: "개발자 온보딩 가이드",
      orignalTitle: "The Missing Readme",
      subtitle: "개발자 온보딩 가이드",
      description: "The book is about developer onboarding guide.",
      duration: "2024.08 -",
      type: "book",
      isFinished: false,
      images: ["/book-4.png"],
      link: "",
    },
  ];

  const changeContentIndex = (index: number) => {
    setCurrentContent(index);
  };
  const prevContent = () => {
    if (currentContent === 0) return;
    setCurrentContent((prevContent) => (prevContent - 1) % contents.length);
  };
  const nextContent = () => {
    if (currentContent === contents.length - 1) return;
    setCurrentContent((prevContent) => (prevContent + 1) % contents.length);
  };

  return (
    <>
      <CustomCursor />
      <main className="flex min-h-screen flex-col justify-between bg-[#9e8c86]">
        <Header />
        <VideoSection />

        {/* Portfolio Gallery */}
        <section className="relative flex flex-col w-full min-h-dvh bg-white mt-40 py-24">
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
                  I've been working as a software developer for 1 year and 7
                  months and developed 2 services since december 2022. I'm
                  currently looking for a new job opportunity.
                </p>
                <ul className="text-xl pl-2">
                  <li>
                    <strong>Service 1:</strong> Education Service for Free
                    Online Courses and Video Contents. Collects and analyzes
                    educational data's metadata to provide personalized learning
                    experiences.
                  </li>
                  <li>
                    <strong>Service 2:</strong> Medical Service for Online
                    Medical Media Contents Sharing. Provides medical 3D contents
                    and ordering system for dental prostheses. It's a platform
                    for dentists and dental technicians and help them to
                    communicate.
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
                  <br /> Sometimes use vanilla Javascript for quick prototyping,
                  but mostly use React & Typescript. Do write Python code if
                  needed, and use Node.js for backend.
                </p>
                <p className="text-xl">
                  I do have based on Web Publishing and Computer Graphics, major
                  in Formative Illustration. I'm interested in 3D Graphics and
                  Interactive Web Development.
                </p>
                <div className="flex gap-2">
                  {STACKS.map((stack) => (
                    <div className="relative">
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
                  <motion.h3
                    className="text-4xl flex flex-col"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: isInView ? 1 : 0 }}
                  >
                    <strong className="opacity-40">BOOKS</strong>
                    <strong className="opacity-60">ARTICLES</strong>
                    <strong className="opacity-90">DOCUMENTATION</strong>
                  </motion.h3>
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
                  contents={contents}
                  currentContent={currentContent}
                  nextContent={nextContent}
                  prevContent={prevContent}
                  changeContentIndex={changeContentIndex}
                />
                <div className="w-full max-h-[600px] h-[60vh] bg-[#d0beb7] rounded-xl">
                  <StudyCanvas content={contents[currentContent]} />
                </div>
              </div>
            </div>
          </ContentsWrapper>
        </section>

        {/* Horizontal Scroll */}
        <section className="flex flex-col items-center w-full h-dvh border border-red-500">
          <h2 className="text-2xl font-bold">About Me</h2>
          <ul>
            <li>Creator</li>
            <li>Developer</li>
            <li>Coworker</li>
            <li>Runner</li>
            <li>Traveler</li>
          </ul>
        </section>

        <footer className="flex flex-col items-center">
          <h2 className="text-2xl font-bold">Contact</h2>
        </footer>
      </main>
    </>
  );
}
