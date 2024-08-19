"use client";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  GlobeIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import ContentsWrapper from "../../components/ContentsWrapper";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="h-[70vh] bg-[#78655f] text-white">
      <ContentsWrapper className="h-full justify-between flex flex-col pt-20 pb-12">
        <ul className="flex-1 flex flex-col gap-2 text-5xl">
          <motion.li
            className=" cursor-pointer"
            whileHover={{ opacity: 0.7 }}
            whileTap={{ opacity: 0.4 }}
            onClick={() => scrollToSection("top")}
          >
            Top
          </motion.li>
          <motion.li
            className="cursor-pointer"
            whileHover={{ opacity: 0.7 }}
            whileTap={{ opacity: 0.4 }}
            onClick={() => scrollToSection("video-section")}
          >
            Youtube
          </motion.li>
          <motion.li
            className="cursor-pointer"
            whileHover={{ opacity: 0.7 }}
            whileTap={{ opacity: 0.4 }}
            onClick={() => scrollToSection("stack-section")}
          >
            Skill
          </motion.li>
          <motion.li
            className="cursor-pointer"
            whileHover={{ opacity: 0.7 }}
            whileTap={{ opacity: 0.4 }}
            onClick={() => scrollToSection("study-section")}
          >
            Study
          </motion.li>
        </ul>

        <h2 className="text-9xl text-right opacity-30 mb-2">Contact</h2>
        <div className="py-10 border-t-[1px] border-white text-xl">
          <ul className="flex justify-between gap-2">
            <li className="flex items-center gap-2">Copyright © Dusunax</li>
            <li className="flex items-center gap-2">
              <GlobeIcon width={40} height={40} /> Seoul, KR
            </li>
            <li>
              <motion.a
                href="mailto:dusunax@gmail.com"
                className="flex items-center gap-4 cursor-pointer underline"
                whileHover={{ opacity: 0.7 }}
                whileTap={{ opacity: 0.4 }}
              >
                <EnvelopeClosedIcon width={40} height={40} />
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
                <LinkedInLogoIcon width={40} height={40} /> LinkedIn
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
                <GitHubLogoIcon width={40} height={40} /> Github
              </motion.a>
            </li>
          </ul>
        </div>
      </ContentsWrapper>
    </footer>
  );
}
