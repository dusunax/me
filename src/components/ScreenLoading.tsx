import { AnimatePresence, motion } from "framer-motion";
import MainLogo from "./MainLogo";

export default function ScreenLoading() {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-white z-[99] flex justify-center items-center"
        initial={{ opacity: 1 }}
        animate={{ display: "none", opacity: 0 }}
        transition={{ delay: 1.2, duration: 0.2 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="-ml-[10vw] md:-ml-[100px] scale-[30%]  sm:scale-50 md:scale-100"
          initial={{ filter: "blur(10px)" }}
          animate={{ filter: "blur(0px)" }}
          transition={{ delay: 0, duration: 0.4 }}
        >
          <MainLogo fontSize={100} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
