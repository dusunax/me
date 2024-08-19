"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import FilmPerforations from "src/packages/components/FilmPerforations";
import ContentsWrapper from "src/packages/components/ContentsWrapper";
import YoutubeButton from "src/packages/components/YoutubeButton";

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

    const handleMouseDown = (e: MouseEvent) => {
      setIsDragging(true);
      setStartX(e.pageX - containerRef.current!.offsetLeft);
      setScrollLeft(containerRef.current!.scrollLeft);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && containerRef.current) {
        const x = e.pageX - containerRef.current!.offsetLeft;
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

    return () => {
      if (videoSectionElement) {
        videoSectionElement.removeEventListener("mouseenter", handleMouseEnter);
        videoSectionElement.removeEventListener("mouseleave", handleMouseLeave);
      }
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isScrollingEnabled, isDragging, startX, scrollLeft]);

  const VIDEOS = [
    "/video-1.mp4",
    "/video-2.mp4",
    "/video-3.mp4",
    "/video-4.mp4",
    "/video-5.mp4",
  ];

  return (
    <section className="relative h-[70vh] rounded-xl px-10 my-24">
      <ContentsWrapper className="h-full">
        <motion.div
          ref={videoSectionRef}
          className="h-full px-10 flex flex-col transition rounded-xl shadow-2xl"
          initial={{ opacity: 1, scale: 1 }}
          animate={{
            opacity: isScrollingEnabled ? 1 : 0.85,
            scale: isScrollingEnabled ? 1 : 0.95,
            backgroundColor: isScrollingEnabled
              ? "rgb(34,34,34)"
              : "rgba(0,0,0,0)",
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
          {isScrollingEnabled && (
            <div className="absolute -right-4 -bottom-4">
              <YoutubeButton />
            </div>
          )}
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
