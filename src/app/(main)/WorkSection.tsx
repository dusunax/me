"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ContentsWrapper from "../../components/ContentsWrapper";
import ResponsiveBreak from "../../components/ResponsiveBreak";

export default function WorkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section className="relative flex flex-col w-full bg-white py-24">
      <div id="work-section" />
      <ContentsWrapper className="pb-20">
        <div className="flex flex-col lg:flex-row justify-between gap-y-4">
          <div className="flex flex-col justify-between gap-y-4 gap-x-6">
            <motion.h2
              className="heading-2xl"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: isInView ? 1 : 0.5 }}
            >
              WORK
            </motion.h2>
            <motion.ul
              className="flex flex-col sm:flex-row gap-x-4"
              initial={{ opacity: 0.2 }}
              animate={{ opacity: isInView ? 1 : 0.2 }}
            >
              <li>
                <span className="heading-xl">2</span>
                Services Developed.
              </li>
              <li>
                <span className="heading-xl">1</span>year
                <span className="heading-xl">7</span>months of development
                experience.
              </li>
            </motion.ul>
          </div>

          <div className="lg:w-1/2 flex flex-col gap-6">
            <p className="heading-md text-right">
              I&apos;ve been working as a software developer{" "}
              <ResponsiveBreak showOn="sm" />
              since 2022, for 1 year and 7 months I&apos;ve been working as a
              software developer <ResponsiveBreak showOn="sm" />
              and developed 2 services from scratch. I&apos;ve been working as a
              software developer <ResponsiveBreak showOn="sm" />
              Currently looking for a new job opportunity.
            </p>
            <ul className="font-size-md pl-2 flex flex-col gap-2">
              <li>
                <strong>Service 1:</strong> 2022.12-2023.06
                <br />
                <div className="indent-4">
                  <i>
                    Education Service for Free Online Courses and Video
                    Contents.
                  </i>
                </div>
                <div className="indent-4">
                  Collects and analyzes educational data&apos;s metadata to
                  provide personalized learning experiences.
                </div>
              </li>
              <li>
                <strong>Service 2:</strong> 2023.07-2024.07
                <br />
                <div className="indent-4">
                  <i>
                    Medical Service for Online Medical Media Contents Sharing.
                  </i>
                </div>
                <div className="indent-4">
                  Provides medical 3D contents and ordering system for dental
                  prostheses. It&apos;s a platform for dentists and dental
                  technicians and help them to communicate.
                </div>
              </li>
            </ul>
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
