"use client";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  GlobeIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { useMobileStore } from "../../store/useMobileStore";
import ContentsWrapper from "@components/ContentsWrapper";

interface Props {
  scrollToSection: (sectionId: string) => void;
}
export default function Footer({ scrollToSection }: Props) {
  const isMobile = useMobileStore((state) => state.isMobile);
  const iconSize = isMobile ? 20 : 40;

  return (
    <footer className="min-h-[70vh] bg-[#78655f] text-white">
      <ContentsWrapper className="h-full justify-between flex flex-col pt-10 sm:pt-20 pb-12">
        <ul className="flex-1 flex flex-col sm:gap-3 heading-lg mb-8">
          <motion.li
            whileHover={{ opacity: 0.7 }}
            whileTap={{ opacity: 0.4 }}
            onClick={() => scrollToSection("hero")}
          >
            <button className="border-b-2">Top</button>
          </motion.li>
          <motion.li
            whileHover={{ opacity: 0.7 }}
            whileTap={{ opacity: 0.4 }}
            onClick={() => scrollToSection("video")}
          >
            <button className="border-b-2">Video</button>
          </motion.li>
          <motion.li
            whileHover={{ opacity: 0.7 }}
            whileTap={{ opacity: 0.4 }}
            onClick={() => scrollToSection("work")}
          >
            <button className="border-b-2">Work</button>
          </motion.li>
          <motion.li
            whileHover={{ opacity: 0.7 }}
            whileTap={{ opacity: 0.4 }}
            onClick={() => scrollToSection("skill")}
          >
            <button className="border-b-2">Skill</button>
          </motion.li>
          <motion.li
            whileHover={{ opacity: 0.7 }}
            whileTap={{ opacity: 0.4 }}
            onClick={() => scrollToSection("study")}
          >
            <button className="border-b-2">Study</button>
          </motion.li>
        </ul>

        <h2 className="heading-2xl text-right opacity-30 mb-2">Contact</h2>
        <div className="font-size-xl pt-4 sm:pt-8 border-t-[1px] border-white ">
          <ul className="flex flex-col md:flex-row flex-wrap justify-between items-center gap-y-3 gap-x-2">
            <li className="flex items-center gap-2">Copyright © Dusunax</li>
            <li className="flex items-center gap-2">
              <GlobeIcon width={iconSize} height={iconSize} /> Seoul, KR
            </li>
            <li>
              <motion.a
                href="mailto:dusunax@gmail.com"
                className="flex items-center gap-4 cursor-pointer underline"
                whileHover={{ opacity: 0.7 }}
                whileTap={{ opacity: 0.4 }}
              >
                <EnvelopeClosedIcon width={iconSize} height={iconSize} />
                dusunax@gmail.com
              </motion.a>
            </li>
            <li>
              <motion.a
                href="https://www.linkedin.com/in/dusunax/"
                target="_blank"
                className="flex items-center gap-2 cursor-pointer underline"
                whileHover={{ opacity: 0.7 }}
                whileTap={{ opacity: 0.4 }}
              >
                <LinkedInLogoIcon width={iconSize} height={iconSize} /> LinkedIn
              </motion.a>
            </li>
            <li>
              <motion.a
                href="https://github.com/dusunax"
                target="_blank"
                className="flex items-center gap-2 cursor-pointer underline"
                whileHover={{ opacity: 0.7 }}
                whileTap={{ opacity: 0.4 }}
              >
                <GitHubLogoIcon width={iconSize} height={iconSize} /> Github
              </motion.a>
            </li>
          </ul>
        </div>
      </ContentsWrapper>
    </footer>
  );
}
