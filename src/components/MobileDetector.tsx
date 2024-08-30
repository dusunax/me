"use client";
import { useEffect } from "react";
import { useMobileStore } from "@store/useMobileStore";

export default function MobileDetector() {
  const { setIsMobile } = useMobileStore();

  useEffect(() => {
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const isMobileDevice = /Mobi|Android/i.test(userAgent);
    setIsMobile(isMobileDevice);
  }, [setIsMobile]);

  return null;
}
