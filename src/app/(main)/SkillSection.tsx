"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { STACKS } from "../../constant/stack";
import ContentsWrapper from "../../components/ContentsWrapper";
import SkillLoop from "../../components/SkillLoop";
import ResponsiveBreak from "src/packages/components/ResponsiveBreak";

export default function SkillSection() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section className="relative flex flex-col w-full bg-white md:py-10 lg:py-24">
      <div className="relative overflow-hidden w-full h-[6rem] mb-4 lg:mb-20">
        <SkillLoop />
      </div>

      <ContentsWrapper>
        <div className="flex flex-col xl:flex-row justify-between gap-10">
          <motion.h2
            className="heading-2xl"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: isInView ? 1 : 0.5 }}
          >
            SKILL
          </motion.h2>
          <div className="xl:w-2/3 flex flex-col">
            <p className="heading-md">
              <strong>I made this homepage with the skills above.</strong>
            </p>
            <p className="heading-md">
              I sometimes use vanilla JavaScript for quick prototyping,
              <ResponsiveBreak showOn="sm" />
              but mostly rely on React & TypeScript. I also write Python code
              when needed and use Node.js for backend tasks.
            </p>
            <p className="heading-md">
              My background is in Web Publishing and Computer Graphics, with a
              major in Formative Illustration. <br />
              I&apos;m particularly interested in 3D Graphics and Interactive
              Web Development.
              <ResponsiveBreak showOn="sm" />I aim to build services that are
              functional, efficient, beautiful, and fun!
            </p>
            <div className="flex gap-2 my-6 flex-wrap">
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
          className="h-10 my-4 lg:mx-4 border-t-0 border-l-0 border-r-0 border-2 border-primary-600 rounded-[100px]"
        ></motion.div>
      </ContentsWrapper>
    </section>
  );
}
