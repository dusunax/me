"use client";
import CustomCursor from "../components/Cursor";
import Header from "./(one-page)/Header";
import VideoSection from "./(one-page)/VideoSection";
import StudySection from "./(one-page)/StudySection";
import Footer from "./(one-page)/Footer";
import ScreenLoading from "../components/ScreenLoading";
import WorkSection from "./(one-page)/WorkSection";
import SkillSection from "./(one-page)/SkillSection";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <div id="top" />
      <main className="flex min-h-screen flex-col justify-between bg-primary-600 cursor-none overflow-hidden">
        <ScreenLoading />
        <Header />
        <div id="video-section" />
        <VideoSection />
        <WorkSection />
        <SkillSection />
        <StudySection />

        <Footer />
      </main>
    </>
  );
}
