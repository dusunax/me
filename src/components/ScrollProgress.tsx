import { motion } from "framer-motion";

export default function ScrollProgress({ percentage }: { percentage: number }) {
  return (
    <motion.div className="bg-primary-300 w-1 h-16 sm:w-4 sm:h-20 flex justify-center items-start rounded-full overflow-hidden cursor-none">
      <motion.div
        className="w-full bg-primary-500 text-white text-[10px] flex justify-center items-end"
        initial={{ height: 0 }}
        animate={{
          height: `${percentage}%`,
        }}
      />
    </motion.div>
  );
}
