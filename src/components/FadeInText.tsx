import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function FadeInText({ text }: { text: string }) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: [0.4, 1], y: [20, 0] });
    console.log(text);
  }, [text, controls]);

  return (
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
  );
}
