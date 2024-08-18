"use client";
import { useEffect, useRef, useState } from "react";
import CustomCursor from "../components/Cursor";
import Header from "./(one-page)/Header";
import { motion } from "framer-motion";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const [isScrollingEnabled, setIsScrollingEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (isScrollingEnabled && containerRef.current) {
        containerRef.current.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    };

    const handleMouseEnter = () => {
      setIsScrollingEnabled(true);
    };

    const handleMouseLeave = () => {
      setIsScrollingEnabled(false);
    };

    const videoSectionElement = videoSectionRef.current;
    if (videoSectionElement) {
      videoSectionElement.addEventListener("mouseenter", handleMouseEnter);
      videoSectionElement.addEventListener("mouseleave", handleMouseLeave);
    }

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      if (videoSectionElement) {
        videoSectionElement.removeEventListener("mouseenter", handleMouseEnter);
        videoSectionElement.removeEventListener("mouseleave", handleMouseLeave);
      }
      window.removeEventListener("wheel", handleScroll);
    };
  }, [isScrollingEnabled]);

  return (
    <>
      <CustomCursor />
      <main className="flex min-h-screen flex-col justify-between bg-[#9e8c86]">
        <Header />

        {/* Video with Horizontal Scroll */}
        <section className="relative h-[60vh] rounded-xl px-10 my-10">
          <div
            ref={videoSectionRef}
            className={`h-full px-10 flex flex-col transition rounded-xl ${
              isScrollingEnabled
                ? "bg-[rgb(34,34,34)] scale-100"
                : "bg-[#ffffff] scale-95 opacity-90"
            }`}
          >
            <div className="h-10 flex flex-nowrap gap-10 overflow-hidden my-6">
              <div className="border bg-white w-16 shrink-0" />
              <div className="border bg-white w-16 shrink-0" />
              <div className="border bg-white w-16 shrink-0" />
              <div className="border bg-white w-16 shrink-0" />
              <div className="border bg-white w-16 shrink-0" />
              <div className="border bg-white w-16 shrink-0" />
              <div className="border bg-white w-16 shrink-0" />
              <div className="border bg-white w-16 shrink-0" />
              <div className="border bg-white w-16 shrink-0" />
              <div className="border bg-white w-16 shrink-0" />
              <div className="border bg-white w-16 shrink-0" />
              <div className="border bg-white w-16 shrink-0" />
              <div className="border bg-white w-16 shrink-0" />
              <div className="border bg-white w-16 shrink-0" />
              <div className="border bg-white w-16 shrink-0" />
              <div className="border bg-white w-16 shrink-0" />
              <div className="border bg-white w-16 shrink-0" />
              <div className="border bg-white w-16 shrink-0" />
              <div className="border bg-white w-16 shrink-0" />
              <div className="border bg-white w-16 shrink-0" />
              <div className="border bg-white w-16 shrink-0" />
              <div className="border bg-white w-16 shrink-0" />
              <div className="border bg-white w-16 shrink-0" />
            </div>

            <div
              ref={containerRef}
              className="flex flex-1 gap-10 w-full overflow-x-scroll whitespace-nowrap scroll-smooth rounded-xl scrollbar-hide"
            >
              <motion.video
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full object-cover rounded-xl shadow-xl"
                src="/video-1.mp4"
                controls={false}
                autoPlay
                muted
                loop
              />
              <motion.video
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full object-cover rounded-xl shadow-xl"
                src="/video-2.mp4"
                controls={false}
                autoPlay
                muted
                loop
              />
              <motion.video
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full object-cover rounded-xl shadow-xl"
                src="/video-3.mp4"
                controls={false}
                autoPlay
                muted
                loop
              />
              <motion.video
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full object-cover rounded-xl shadow-xl"
                src="/video-4.mp4"
                controls={false}
                autoPlay
                muted
                loop
              />
              <motion.video
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full object-cover rounded-xl shadow-xl"
                src="/video-5.mp4"
                controls={false}
                autoPlay
                muted
                loop
              />
            </div>
            <div className="h-10 flex flex-nowrap gap-10 overflow-hidden my-6">
              <div className="border bg-white w-16 shrink-0" />
              <div className="border bg-white w-16 shrink-0" />
              <div className="border bg-white w-16 shrink-0" />
              <div className="border bg-white w-16 shrink-0" />
              <div className="border bg-white w-16 shrink-0" />
              <div className="border bg-white w-16 shrink-0" />
              <div className="border bg-white w-16 shrink-0" />
              <div className="border bg-white w-16 shrink-0" />
              <div className="border bg-white w-16 shrink-0" />
              <div className="border bg-white w-16 shrink-0" />
              <div className="border bg-white w-16 shrink-0" />
              <div className="border bg-white w-16 shrink-0" />
              <div className="border bg-white w-16 shrink-0" />
              <div className="border bg-white w-16 shrink-0" />
              <div className="border bg-white w-16 shrink-0" />
              <div className="border bg-white w-16 shrink-0" />
              <div className="border bg-white w-16 shrink-0" />
              <div className="border bg-white w-16 shrink-0" />
              <div className="border bg-white w-16 shrink-0" />
              <div className="border bg-white w-16 shrink-0" />
              <div className="border bg-white w-16 shrink-0" />
              <div className="border bg-white w-16 shrink-0" />
              <div className="border bg-white w-16 shrink-0" />
            </div>
          </div>
        </section>

        {/* Portfolio Gallery */}
        <section className="flex flex-col items-center w-full h-dvh border border-red-500">
          <h2>Gallery</h2>
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
