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
    { id: "video", ref: videoRef },
    { id: "work", ref: workRef },
    { id: "skill", ref: skillRef },
    { id: "study", ref: studyRef },
    { id: "footer", ref: footerRef },
  ];

  const { scrollToSection, scrollProgress, goNextSection } =
    useScroll(sections);

  return (
    <>
      <CustomCursor />
      <ScreenLoading />
      <ScrollProgress percentage={scrollProgress} />

      <main className="flex min-h-screen flex-col justify-between bg-primary-600 cursor-none overflow-hidden">
        <div ref={heroRef}>
          <Hero goNextSection={goNextSection} />
        </div>
        <div ref={videoRef}>
          <VideoSection />
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

        <div ref={footerRef}>
          <Footer scrollToSection={scrollToSection} />
        </div>
      </main>
    </>
  );
}
