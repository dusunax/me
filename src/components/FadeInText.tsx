import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function FadeInText({
  text,
  title,
}: {
  text: string;
  title: string;
}) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: [0.4, 1], y: [20, 0] });
  }, [text, controls]);

  return (
    <div className="flex flex-col gap-2 md:gap-4">
      <motion.p
        initial={{ opacity: 0.1, y: 20 }}
        animate={controls}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.2, delay: 0.3 }}
        className="font-size-lg font-semibold"
      >
        {title}
      </motion.p>
      <motion.p
        initial={{ opacity: 0.1, y: 20 }}
        animate={controls}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.2, delay: 0.3 }}
        className="font-size-md"
      >
        {text}
      </motion.p>
    </div>
  );
}
