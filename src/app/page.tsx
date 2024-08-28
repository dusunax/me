"use client";
import { useRef } from "react";
import { useScroll } from "../hooks/useScroll";
import CustomCursor from "../components/Cursor";
import ScreenLoading from "../components/ScreenLoading";
import Hero from "./(main)/Hero";
import VideoSection from "./(main)/VideoSection";
import StudySection from "./(main)/StudySection";
import Footer from "./(main)/Footer";
import WorkSection from "./(main)/WorkSection";
import SkillSection from "./(main)/SkillSection";
import ScrollProgress from "../components/ScrollProgress";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const studyRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const sections = [
    { id: "hero", ref: heroRef },
    { id: "work", ref: workRef },
    { id: "skill", ref: skillRef },
    { id: "study", ref: studyRef },
    { id: "video", ref: videoRef },
    { id: "footer", ref: footerRef },
  ];

  const { scrollToSection, scrollProgress, goNextSection } =
    useScroll(sections);

  return (
    <>
      <CustomCursor />
      <ScreenLoading />
      <ScrollProgress percentage={scrollProgress} />

      <main className="flex min-h-screen flex-col justify-between cursor-none overflow-hidden">
        <div ref={heroRef}>
          <Hero goNextSection={goNextSection} />
        </div>
        <div ref={workRef}>
          <WorkSection />
        </div>
        <div ref={skillRef}>
          <SkillSection />
        </div>
        <div ref={studyRef}>
          <StudySection />
        </div>
        <div ref={videoRef}>
          <VideoSection />
        </div>

        {/* Horizontal Scroll */}
        {/* <section className="flex flex-col items-center w-full border border-red-500">
          <h2 className="text-2xl font-bold">Who Am I</h2>
          <ul>
            내가 피플 퍼슨이다. 책임감이 있다.
            - 6개월 동안 혼자도 작업할 수 있고
            - 신입 3명과 함께 프론트엔드팀에서 1년 동안 일함
            - 월간 CS 스터디 그룹의 오가니제이터
            - 스터디 원활하게 운영
            내가 개발에 관심이 있다.
            - 컨퍼런스
            - 항해 플러스
            - 만든 프로젝트들                        
            내가 꾸준하다. 
            - 깃허브 잔디
            - 러닝
            - 노션 기록
            - 그림 인스타
            내가 이것저것 한다. 다양한 시각을 가진 사람이다.
            - 사진 출력
            - 스타벅스 커피 자격증
          </ul>
        </section> */}

        <div ref={footerRef}>
          <Footer scrollToSection={scrollToSection} />
        </div>
      </main>
    </>
  );
}
