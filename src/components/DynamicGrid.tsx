"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ShuffleIcon } from "@radix-ui/react-icons";
import { getRandomLayout } from "@utils/getRandomLayout";

export default function DynamicGrid({ images }: { images: string[] }) {
  let count = 0;
  const [currentLayout, setCurrentLayout] = useState(() =>
    getRandomLayout(images.length)
  );

  useEffect(() => {
    setCurrentLayout(getRandomLayout(images.length));
  }, [images]);

  const handleRandomize = () => {
    setCurrentLayout(getRandomLayout(images.length));
  };

  return (
    <div className="h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`h-full grid
          ${
            currentLayout?.cols === 1
              ? "grid-cols-1"
              : currentLayout?.cols === 2
              ? "grid-cols-2"
              : "grid-cols-3"
          }
      `}
      >
        {currentLayout.items.map((row, rowIndex) => {
          return (
            <AnimatePresence mode="wait" key={`image-row${rowIndex}`}>
              {row.map((colSpan, colIndex) => {
                count++;
                return (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      type: "tween",
                      duration: 0.2,
                      delay: 0.1 * count,
                    }}
                    key={`image-row${rowIndex}-col${colIndex}`}
                    className={`relative ${colSpan === 1 && "col-span-1"} ${
                      colSpan === 2 && "col-span-2"
                    } ${colSpan === 3 && "col-span-3"}`}
                  >
                    <Image
                      fill
                      src={images[count - 1]}
                      alt=""
                      objectFit="cover"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      quality={75}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          );
        })}
      </motion.div>

      {images.length > 1 && (
        <div className="absolute top-4 left-4">
          <motion.button
            onClick={handleRandomize}
            className="px-2 py-1 md:px-4 md:py-2 bg-black text-white rounded-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ShuffleIcon className="w-4 h-4 md:w-6 md:h-6 inline-block"></ShuffleIcon>
          </motion.button>
        </div>
      )}
    </div>
  );
}
