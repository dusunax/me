"use client";
import { ReactNode } from "react";
import CustomCursor from "./Cursor";
import { useMobileStore } from "../store/useMobileStore";

export default function CustomCursorProvider({
  children,
}: {
  children: ReactNode;
}) {
  const isMobile = useMobileStore((state) => state.isMobile);

  return (
    <>
      {!isMobile && <CustomCursor />}
      {children}
    </>
  );
}
