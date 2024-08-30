"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ContentsWrapper from "@components/ContentsWrapper";
import DynamicGrid from "@components/DynamicGrid";
import FadeInText from "@components/FadeInText";
import { useDataStore } from "@/store/useSupabaseStore";

export default function AboutSection() {
  const [currentContentIdx, setCurrentContentIdx] = useState<number>(0);
  const about = useDataStore((state) => state.about);
  const current = about[currentContentIdx];
  if (!current) return null;

  return (
    <section className="py-10 md:py-16">
      <ContentsWrapper>
        <div className="flex flex-col lg:flex-row w-full h-[80vh] rounded-xl bg-primary-400 shadow-lg overflow-hidden">
          <div className="lg:w-2/5">
            <div className="py-8 md:py-20 px-6 md:px-10 flex flex-col gap-6 md:gap-10">
              <ul>
                {about
                  ?.sort((a, b) => a.id - b.id)
                  .map((item, index) => (
                    <motion.li
                      className="border-l-2 border-green-600 heading-md pl-2 sm:pl-4 py-1 sm:py-2"
                      initial={{ opacity: 0.3, x: 10 * index }}
                      animate={{
                        opacity: currentContentIdx === index ? 1 : 0.3,
                      }}
                      whileInView={{ x: 0 }}
                      whileHover={{
                        opacity: 0.8,
                        color: "#fff",
                        borderColor: "#fff",
                      }}
                      key={item.title}
                      transition={{ delay: 0.1 }}
                      onClick={() => setCurrentContentIdx(index)}
                    >
                      <button>{item.title}</button>
                    </motion.li>
                  ))}
              </ul>
              {current && (
                <FadeInText
                  title={current["sub-title"]}
                  text={current.content}
                />
              )}
            </div>
          </div>
          <div className="lg:w-3/5 h-full">
            <DynamicGrid images={current?.images} />
          </div>
        </div>
      </ContentsWrapper>
    </section>
  );
}
