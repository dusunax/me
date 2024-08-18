"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import FilmPerforations from "src/packages/components/FilmPerforations";

export default function VideoSection() {
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

    const handleMouseEnter = () =>
      !isScrollingEnabled && setIsScrollingEnabled(true);
    const handleMouseLeave = () =>
      isScrollingEnabled && setIsScrollingEnabled(false);

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

  const VIDEOS = [
    "/video-1.mp4",
    "/video-2.mp4",
    "/video-3.mp4",
    "/video-4.mp4",
    "/video-5.mp4",
  ];

  return (
    <section className="relative h-[60vh] rounded-xl px-10 my-10">
      <motion.div
        ref={videoSectionRef}
        className="h-full px-10 flex flex-col transition rounded-xl"
        animate={{
          opacity: isScrollingEnabled ? 1 : 0.85,
          scale: isScrollingEnabled ? 1 : 0.95,
          backgroundColor: isScrollingEnabled ? "rgb(34,34,34)" : "#ffffff",
        }}
      >
        <FilmPerforations />
        <div
          ref={containerRef}
          className="flex flex-1 gap-10 w-full overflow-x-scroll whitespace-nowrap scroll-smooth rounded-xl scrollbar-hide"
        >
          {VIDEOS.map((src) => (
            <VideoComponent key={src} src={src} />
          ))}
        </div>
        <FilmPerforations />
      </motion.div>
    </section>
  );
}

function VideoComponent({ src }: { src: string }) {
  return (
    <motion.video
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      className="h-full object-cover rounded-xl shadow-xl"
      src={src}
      controls={false}
      autoPlay
      muted
      loop
    />
  );
}
