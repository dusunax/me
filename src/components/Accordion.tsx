import { motion } from "framer-motion";
import { useState } from "react";
import type { StudyContent } from "@constants/study";

type AccordionProps = {
  contents: StudyContent[];
  currentContent: number;
  nextContent: () => void;
  prevContent: () => void;
  changeContentIndex: (index: number) => void;
};

export default function Accordion({
  contents,
  currentContent,
  nextContent,
  prevContent,
  changeContentIndex,
}: AccordionProps) {
  return (
    <div className="flex flex-col xl:w-1/3 shrink-0">
      <Button onClick={prevContent}>Prev</Button>

      <ul className="w-full flex-1 overflow-y-scroll scrollbar-hide -order-1 md:order-none">
        {contents.map((content, index) => (
          <motion.li
            key={index}
            onClick={() => changeContentIndex(index)}
            className="overflow-hidden rounded-xl xl:rounded-r-none px-8 xl:pr-4 cursor-pointer flex flex-col gap-1"
            animate={{
              height:
                content.title === contents[currentContent].title
                  ? "auto"
                  : "48px",
              backgroundColor:
                content.title === contents[currentContent].title
                  ? "#d0beb7"
                  : "#ffffff",
            }}
            initial={{ height: "48px" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            whileHover={{ backgroundColor: "#d0beb7" }}
          >
            <div className="flex gap-2 items-center">
              <h4 className="font-size-xl h-12 shrink-0 flex items-center">
                {content.title}
              </h4>
              {!content.isFinished && (
                <div className="text-xs px-2 py-1 border rounded-full border-orange-400 text-orange-400 animate-pulse">
                  now reading
                </div>
              )}
            </div>
            <strong className="font-size-xs">{content.subtitle}</strong>
            {content.title === contents[currentContent].title && (
              <motion.div
                className="font-size-xs"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {content.description}
              </motion.div>
            )}
            <div className="flex justify-between pb-2">
              <p className="text-right text-xs opacity-50">
                {content.duration}
              </p>
              {content.link && (
                <a
                  href={content.link}
                  target="_blank"
                  className="font-size-xs text-blue-500 text-right underline"
                >
                  ...study link
                </a>
              )}
            </div>
          </motion.li>
        ))}
      </ul>

      <Button onClick={nextContent}>Next</Button>
    </div>
  );
}

function Button({
  onClick,
  children,
}: {
  onClick: () => void;
  children: string;
}) {
  const circleVariants = {
    hidden: { clipPath: "circle(0% at 50% 70%)" },
    visible: { clipPath: "circle(150% at 50% 100%)" },
  };
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      className="relative p-1 sm:p-2 md:p-4 m-2 md:m-4 font-bold rounded-full border"
      onClick={onClick}
      animate={{ borderColor: isHovered ? "#ffffff" : "#222222" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setTimeout(() => setIsHovered(false), 400)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-full rounded-full bg-black bg-blend-screen z-1"
        variants={circleVariants}
        initial="hidden"
        animate={isHovered ? "visible" : "hidden"}
      />
      <motion.span
        className="font-size-md relative z-10"
        animate={{ color: isHovered ? "#ffffff" : "#000000" }}
      >
        {children}
      </motion.span>
    </motion.button>
  );
}
