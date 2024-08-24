import Image from "next/image";
import { HTMLMotionProps, motion } from "framer-motion";

export default function MainLogo({ fontSize }: { fontSize: number }) {
  return (
    <div className="relative">
      <MainText fontSize={fontSize} />

      <div className="absolute w-full h-full left-0 top-0 flex justify-end">
        <motion.div
          className="translate-x-full"
          initial={{ x: fontSize * 0.9, scale: 0.8 }}
          animate={{ x: fontSize * 1.5, scale: 1 }}
          transition={{ duration: 0.4 }}
          style={{ width: `${fontSize * 2}px`, height: `${fontSize * 2}px` }}
          drag
        >
          <MotionCircle
            className="-top-2 -left-2"
            duration={0.3}
            delay={0.5}
            style={{
              width: `${fontSize * 0.8}px`,
              height: `${fontSize * 0.8}px`,
            }}
          />
          <MotionCircle
            className="-right-2 bottom-0"
            duration={0.1}
            delay={0.7}
            style={{
              width: `${fontSize * 0.3}px`,
              height: `${fontSize * 0.3}px`,
            }}
          />
          <MotionCircle
            className="right-6 -bottom-3"
            duration={0.3}
            delay={0.7}
            style={{
              width: `${fontSize * 0.2}px`,
              height: `${fontSize * 0.2}px`,
            }}
          />
          <motion.div
            className="absolute w-full h-full rounded-full overflow-hidden z-1"
            whileTap={{ scale: 1.1, boxShadow: "0 0 16px 8px rgba(0,0,0,0.1)" }}
          >
            <Image
              src="/profile.png"
              alt="Dusunax"
              fill
              className="select-none pointer-events-none"
            />
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute top-0 w-full">
        <MainText
          fontSize={fontSize}
          className="mix-blend-overlay !text-[#ffeeee] "
        />
      </div>
    </div>
  );
}

interface MotionCircleProps extends HTMLMotionProps<"div"> {
  className?: string;
  duration?: number;
  delay?: number;
}

function MotionCircle({ className, ...props }: MotionCircleProps) {
  return (
    <motion.div
      className={`absolute rounded-full bg-[#b6a79d] ${className}`}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      {...props}
    ></motion.div>
  );
}

function MainText({
  fontSize,
  className,
}: {
  fontSize: number;
  className?: string;
}) {
  return (
    <h1
      className={`text-4xl text-[#222222] font-bold leading-none flex items-center select-none ${className}`}
      style={{ fontSize: `${fontSize}px` }}
    >
      Sun A Du <br />・ Dusunax
    </h1>
  );
}
