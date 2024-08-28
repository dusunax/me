import React from "react";

interface ResponsiveBreakProps {
  showOn?: "sm" | "md" | "lg" | "xl" | "2xl";
}

export default function ResponsiveBreak({
  showOn = "sm",
}: ResponsiveBreakProps) {
  const classes = `hidden ${showOn}:block`;

  return <br className={classes} />;
}
