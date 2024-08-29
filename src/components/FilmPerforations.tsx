import { motion } from "framer-motion";

export default function FilmPerforations() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="h-4 sm:h-6 md:h-12 flex flex-nowrap justify-between overflow-hidden my-4 sm:my-5 md:my-8 xl:my-8"
    >
      {Array.from({ length: 8 }).map((_, index) => (
        <Part key={index} />
      ))}
    </motion.div>
  );
}

function Part() {
  return <div className="border bg-white w-1/12 shrink-0 rounded-sm" />;
}
