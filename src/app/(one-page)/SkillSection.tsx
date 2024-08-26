"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ContentsWrapper from "../../components/ContentsWrapper";
import { STACKS } from "src/packages/constant/stack";

export default function SkillSection() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section className="relative flex flex-col w-full bg-white">
      <div className="relative overflow-hidden w-full h-[180px]">
        <motion.div
          className="absolute h-full flex items-center gap-5 pr-5 whitespace-nowrap text-7xl text-right bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 100,
            ease: "linear",
          }}
        >
          {STACKS.map((stack) => (
            <div key={stack.name} className="flex items-center">
              <p>{stack.name}</p>
              <div className="w-6 h-6 bg-red-500 rounded-full ml-4" />
            </div>
          ))}
        </motion.div>
        <motion.div
          className="absolute h-full flex items-center gap-5 pr-5 whitespace-nowrap text-7xl text-right bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 100,
            ease: "linear",
          }}
        >
          {STACKS.map((stack) => (
            <div key={stack.name} className="flex items-center">
              <p>{stack.name}</p>
              <div className="w-6 h-6 bg-red-500 rounded-full ml-4" />
            </div>
          ))}
        </motion.div>
      </div>

      <ContentsWrapper className="my-20">
        <div className="flex justify-between gap-10">
          <motion.h2
            className="text-9xl"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: isInView ? 1 : 0.5 }}
          >
            SKILL
          </motion.h2>
          <div className="w-2/3 flex flex-col gap-4">
            <p className="text-3xl">
              <strong>I made this homepage with the skills above.</strong>
              <br /> I sometimes use vanilla JavaScript for quick prototyping,{" "}
              <br />
              but mostly rely on React & TypeScript. I also write Python code
              when needed and use Node.js for backend tasks.
            </p>
            <p className="text-xl">
              My background is in Web Publishing and Computer Graphics, with a
              major in Formative Illustration. <br />
              I&apos;m particularly interested in 3D Graphics and Interactive
              Web Development.
              <br />I aim to build services that are functional, efficient,
              beautiful, and fun!
            </p>
            <div className="flex gap-2">
              {STACKS.map((stack) => (
                <div className="relative" key={stack.name}>
                  <div className="relative w-8 h-8 rounded-full overflow-hidden shadow-md">
                    <div className="w-12 -ml-1">
                      <img
                        className="absoulte h-8"
                        src={stack.icon}
                        alt={stack.name}
                        title={stack.name}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <motion.div
          ref={ref}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isInView ? 1.05 : 0 }}
          transition={{ type: "spring", duration: 1 }}
          className="h-10 my-4 border-t-0 border-l-0 border-r-0 border-2 border-primary-600 rounded-[100px]"
        ></motion.div>
      </ContentsWrapper>
    </section>
  );
}
