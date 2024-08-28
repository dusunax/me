import React from "react";
import { motion } from "framer-motion";

type CurvedBackgroundProps = {
  direction?: "top" | "bottom";
  reverse?: boolean;
  backgroundColor?: string;
};

export default function CurvedBackground({
  direction = "bottom",
  backgroundColor = "#d0beb7",
  reverse = false,
}: CurvedBackgroundProps) {
  const isTop = direction === "top";

  return (
    <div
      className={`absolute w-full left-0 scale-y-[40%] ${
        isTop ? "top-0 -translate-y-full" : "bottom-0"
      } ${reverse ? "-mt-1" : "mt-1"}`}
      style={{ backgroundColor, transform: reverse ? "scaleY(-0.4)" : "" }}
    >
      <motion.div
        className="absolute w-[200vw] bottom-0 opacity-50 flex"
        initial={{ x: "0%" }}
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={backgroundColor}
            d="M0,96L48,90.7C96,85,192,75,288,96C384,117,480,171,576,186.7C672,203,768,181,864,186.7C960,192,1056,224,1152,245.3C1248,267,1344,277,1392,282.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{ transform: "scaleX(-1)" }}
        >
          <path
            fill={backgroundColor}
            d="M0,96L48,90.7C96,85,192,75,288,96C384,117,480,171,576,186.7C672,203,768,181,864,186.7C960,192,1056,224,1152,245.3C1248,267,1344,277,1392,282.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </motion.div>
      <motion.div
        className="absolute w-[200vw] bottom-0 opacity-50 flex"
        initial={{ x: "100%" }}
        animate={{ x: ["100%", "0"] }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={backgroundColor}
            d="M0,96L48,90.7C96,85,192,75,288,96C384,117,480,171,576,186.7C672,203,768,181,864,186.7C960,192,1056,224,1152,245.3C1248,267,1344,277,1392,282.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{ transform: "scaleX(-1)" }}
        >
          <path
            fill={backgroundColor}
            d="M0,96L48,90.7C96,85,192,75,288,96C384,117,480,171,576,186.7C672,203,768,181,864,186.7C960,192,1056,224,1152,245.3C1248,267,1344,277,1392,282.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </motion.div>

      <motion.div className="absolute w-full bottom-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={backgroundColor}
            d="M0,224L48,218.7C96,213,192,203,288,208C384,213,480,235,576,245.3C672,256,768,256,864,240C960,224,1056,192,1152,192C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </motion.div>
    </div>
  );
}
