"use client";
import CustomCursor from "../components/Cursor";
import Header from "./(one-page)/Header";
import VideoSection from "./(one-page)/VideoSection";
import StudySection from "./(one-page)/StudySection";
import Footer from "./(one-page)/Footer";
import ScreenLoading from "../components/ScreenLoading";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <div id="top" />
      <main className="flex min-h-screen flex-col justify-between bg-[#9e8c86] cursor-none overflow-hidden">
        <ScreenLoading />
        <Header />
        <div id="video-section" />
        <VideoSection />
        <StudySection />

        {/* Horizontal Scroll */}
        {/* <section className="flex flex-col items-center w-full border border-red-500">
          <h2 className="text-2xl font-bold">About Me</h2>
          <ul>
            <li>Creator</li>
            <li>Developer</li>
            <li>Coworker</li>
            <li>Runner</li>
            <li>Traveler</li>
          </ul>
        </section> */}

        <Footer />
      </main>
    </>
  );
}
