"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import FilmPerforations from "src/packages/components/FilmPerforations";
import ContentsWrapper from "src/packages/components/ContentsWrapper";
import YoutubeButton from "src/packages/components/YoutubeButton";
import CurvedBackground from "src/packages/components/CurvedBackground";

export default function VideoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const [isScrollingEnabled, setIsScrollingEnabled] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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

    const handleMouseDown = (e: MouseEvent | TouchEvent) => {
      setIsDragging(true);
      const pageX = "touches" in e ? e.touches[0].pageX : e.pageX;
      setStartX(pageX - containerRef.current!.offsetLeft);
      setScrollLeft(containerRef.current!.scrollLeft);
    };

    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      if (isDragging && containerRef.current) {
        const pageX = "touches" in e ? e.touches[0].pageX : e.pageX;
        const x = pageX - containerRef.current!.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed
        containerRef.current.scrollLeft = scrollLeft - walk;
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const videoSectionElement = videoSectionRef.current;
    if (videoSectionElement) {
      videoSectionElement.addEventListener("mouseenter", handleMouseEnter);
      videoSectionElement.addEventListener("mouseleave", handleMouseLeave);
    }

    window.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchstart", handleMouseDown);
    window.addEventListener("touchmove", handleMouseMove);
    window.addEventListener("touchend", handleMouseUp);

    return () => {
      if (videoSectionElement) {
        videoSectionElement.removeEventListener("mouseenter", handleMouseEnter);
        videoSectionElement.removeEventListener("mouseleave", handleMouseLeave);
      }
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchstart", handleMouseDown);
      window.removeEventListener("touchmove", handleMouseMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isScrollingEnabled, isDragging, startX, scrollLeft]);

  const VIDEOS = [
    "/video-1.mp4",
    "/video-2.mp4",
    "/video-3.mp4",
    "/video-4.mp4",
    "/video-5.mp4",
    "/video-6.mp4",
  ];

  return (
    <section className="relative h-[70vh] xl:h-[80vh] xl:px-10 pt-10 md:pt-16 xl:pt-24 pb-10 xl:pb-20 bg-primary-600">
      <CurvedBackground backgroundColor="#ffffff" direction="top" reverse />
      <ContentsWrapper className="h-full">
        <motion.div
          ref={videoSectionRef}
          className="h-full px-4 sm:px-8 xl:px-10 flex flex-col transition rounded-xl shadow-2xl"
          initial={{ opacity: 1, scale: 1 }}
          animate={{
            opacity: isScrollingEnabled ? 1 : 0.85,
            scale: isScrollingEnabled ? 1.05 : 1,
            backgroundColor: isScrollingEnabled
              ? "rgb(34,34,34)"
              : "rgba(0,0,0,0.5)",
          }}
        >
          <FilmPerforations />
          <div
            ref={containerRef}
            className="flex flex-1 gap-4 sm:gap-10 w-full overflow-x-scroll whitespace-nowrap scroll-smooth rounded-xl scrollbar-hide"
          >
            {VIDEOS.map((src) => (
              <VideoComponent key={src} src={src} />
            ))}
          </div>
          <FilmPerforations />
          {isScrollingEnabled && <YoutubeButton />}
        </motion.div>
      </ContentsWrapper>
    </section>
  );
}

function VideoComponent({ src }: { src: string }) {
  return (
    <motion.video
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      className="h-full object-cover rounded-xl shadow-xl"
      src={src}
      controls={false}
      autoPlay
      muted
      loop
    />
  );
}
