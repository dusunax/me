"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import ContentsWrapper from "src/packages/components/ContentsWrapper";

export default function Header() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const moveY1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const moveY2 = useTransform(scrollYProgress, [0, 1], [0, -800]);
  const moveY3 = useTransform(scrollYProgress, [0, 1], [0, -1000]);

  return (
    <header className="relative px-20 pt-8 h-[80vh] bg-white cursor-none">
      <ContentsWrapper className="h-full flex flex-col justify-between">
        <div className="flex-1">
          <div className="w-[11rem] sticky top-0 py-10 z-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="absolute w-7 h-7 rounded-full bg-[#b6a79d] right-0 -mt-2 z-1"
            ></motion.div>
            <h1 className="text-4xl font-bold flex items-center">
              Sun A Du ・ Dusunax
            </h1>
            <motion.div
              className="rounded-full w-[100px] h-[100px] absolute top-8 right-0 translate-x-full overflow-hidden"
              initial={{ x: 50, scale: 0.9 }}
              animate={{ x: 75, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src="/profile.png"
                alt="Dusunax"
                width={100}
                height={100}
              />
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.1, delay: 0.3 }}
              className="absolute w-4 h-4 rounded-full bg-[#d0beb7] -right-20 bottom-6 z-1"
            ></motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.1, delay: 0.4 }}
              className="absolute w-2 h-2 rounded-full bg-[#d0beb7] -right-16 bottom-4 z-1"
            ></motion.div>
            <div className="absolute top-0 w-full py-10">
              <h1 className="text-4xl font-bold mix-blend-overlay text-white flex items-center">
                Sun A Du ・ Dusunax
              </h1>
            </div>
          </div>
        </div>

        <div className="relative">
          <motion.div
            transition={{ duration: 0.1, delay: 0.4 }}
            style={{ y: moveY1 }}
            className="absolute w-40 h-40 rounded-full bg-[#decec7] right-20 -top-20 z-1 shadow-[0_0_40px_40px_#decec7] z-1"
          ></motion.div>
          <p className="relative pl-16 text-9xl text-right bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            SOFTWARE DEVELOPER
          </p>

          <motion.div
            initial={{ bottom: -170 }}
            animate={{ bottom: -190 }}
            transition={{
              type: "keyframes",
              repeat: 10,
              repeatType: "reverse",
              repeatDelay: 1,
              duration: 2,
            }}
            style={{ y: moveY2 }}
            className="absolute w-60 h-60 rounded-full bg-[#d0beb7] -right-16 translate-y-full z-1 shadow-[0_0_8px_20px_#d0beb7]"
          ></motion.div>
          <motion.div
            transition={{ duration: 0.1, delay: 0.4 }}
            style={{ y: moveY3 }}
            className="absolute w-24 h-24 rounded-full bg-[#d0beb7] left-0 bottom-20 z-1 shadow-[0_0_16px_20px_#d0beb7]"
          ></motion.div>
          <motion.hr
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ type: "keyframes" }}
            className="mt-4 mb-10 y-1 border-[#d0beb7]"
          />
        </div>
      </ContentsWrapper>
    </header>
  );
}
