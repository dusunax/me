import { motion } from "framer-motion";

export default function ScrollProgress({ percentage }: { percentage: number }) {
  return (
    <motion.div
      className="fixed top-4 right-4 bg-primary-400 z-[50] w-12 h-12 flex justify-center items-end rounded-full overflow-hidden cursor-none"
      dragConstraints={{ top: 0, bottom: 500 }}
      drag="y"
    >
      <motion.div
        className="w-full bg-black text-center text-white text-xs"
        initial={{ height: 0 }}
        animate={{
          height: `${percentage}%`,
        }}
      >
        {percentage}
      </motion.div>
    </motion.div>
  );
}
