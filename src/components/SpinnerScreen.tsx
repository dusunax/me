import { AnimatePresence, motion } from "framer-motion";

export default function SpinnerScreen() {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed w-full h-full top-0 left-0 z-[100] flex justify-center items-center bg-white"
        initial={{ opacity: 1 }}
        animate={{ display: "none", opacity: 0 }}
        transition={{ delay: 1, duration: 0.2 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="w-60 h-60 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-transparent animate-spin 
                    relative after:content-[''] after:absolute after:inset-0 after:bg-transparent 
                    after:rounded-full after:border-8 after:border-t-blue-500 after:border-transparent"
          initial={{ filter: "blur(10px)" }}
          animate={{ filter: "blur(0px)" }}
          transition={{ delay: 0, duration: 1 }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
