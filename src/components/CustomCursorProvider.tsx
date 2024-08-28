"use client";
import { useEffect, useState, ReactNode } from "react";
import CustomCursor from "./Cursor";

export default function CustomCursorProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const isMobileDevice = /Mobi|Android/i.test(userAgent);
    setIsMobile(isMobileDevice);
  }, []);

  return (
    <>
      {!isMobile && <CustomCursor />}
      {children}
    </>
  );
}
