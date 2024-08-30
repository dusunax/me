import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

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
        className="font-size-lg font-semibold opacity-90"
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
        id="md-viewer"
      >
        <Viewer
          initialEditType="markdown"
          previewStyle="vertical"
          height="600px"
          initialValue={text}
          key={text}
        />
      </motion.p>
    </div>
  );
}
