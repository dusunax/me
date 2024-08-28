import { motion } from "framer-motion";

export default function ScrollProgress({ percentage }: { percentage: number }) {
  return (
    <motion.div className="fixed top-4 right-4 bg-primary-400 z-[50] w-4 h-16 flex justify-center items-end rounded-full overflow-hidden cursor-none">
      <motion.div
        className="w-full bg-black text-center text-white text-[10px]"
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
