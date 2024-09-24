"use client";
import { useEffect, useRef, Suspense, useState } from "react";
import { useScroll } from "@hooks/useScroll";
import ScrollControl from "@components/ScrollControl";
import LoadingScreen from "../LoadingScreen";
import Hero from "./Hero";
import Footer from "./Footer";
import AboutSection from "./AboutSection";
import WorkSection from "./WorkSection";
import SkillSection from "./SkillSection";
import StudySection from "./StudySection";
import VideoSection from "./VideoSection";
import { useSupabase } from "@/context/SupabaseContext";
import { useDataStore } from "@/store/useSupabaseStore";

export default function MainPage() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <MainSections />
    </Suspense>
  );
}

const MainSections = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const studyRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const sections = [
    { id: "hero", ref: heroRef },
    { id: "about", ref: aboutRef },
    { id: "work", ref: workRef },
    { id: "study", ref: studyRef },
    { id: "skill", ref: skillRef },
    { id: "video", ref: videoRef },
    { id: "footer", ref: footerRef },
  ];

  const { scrollToSection, scrollProgress, goNextSection, goPrevSection } =
    useScroll(sections);

  return (
    <>
      <ScrollControl
        goNextSection={goNextSection}
        goPrevSection={goPrevSection}
        scrollProgress={scrollProgress}
      />
      <main className="flex min-h-screen flex-col justify-between cursor-none overflow-hidden">
        <div ref={heroRef}>
          <Hero goNextSection={goNextSection} />
        </div>
        <div ref={aboutRef}>
          <AboutSection />
        </div>
        <div ref={workRef}>
          <WorkSection />
        </div>
        <div ref={studyRef}>
          <StudySection />
        </div>
        <div ref={skillRef}>
          <SkillSection />
        </div>
        <div ref={videoRef}>
          <VideoSection />
        </div>

        <div ref={footerRef}>
          <Footer scrollToSection={scrollToSection} sections={sections} />
        </div>
      </main>
    </>
  );
};
