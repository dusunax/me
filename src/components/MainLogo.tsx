import Image from "next/image";
import { HTMLMotionProps, motion } from "framer-motion";

export default function MainLogo({
  fontSize,
  animate = true,
}: {
  fontSize: number;
  animate?: boolean;
}) {
  return (
    <div className="relative">
      <MainText fontSize={fontSize} />

      <div className="absolute w-full h-full left-0 top-0 flex justify-end">
        <motion.div
          className="translate-x-full"
          initial={{ x: fontSize * 0.9, scale: 0.8 }}
          animate={animate ? { x: fontSize * 1.5, scale: 1 } : {}}
          transition={{ duration: 0.2 }}
          whileHover={{ scale: 1.1 }}
          style={{ width: `${fontSize * 2}px`, height: `${fontSize * 2}px` }}
          drag
        >
          <MotionCircle
            className="-top-2 -left-2"
            duration={0.3}
            animate={animate}
            style={{
              width: `${fontSize * 0.8}px`,
              height: `${fontSize * 0.8}px`,
            }}
          />
          <MotionCircle
            className="-right-2 bottom-0"
            duration={0.1}
            animate={animate}
            style={{
              width: `${fontSize * 0.3}px`,
              height: `${fontSize * 0.3}px`,
            }}
          />
          <MotionCircle
            className="right-6 -bottom-3"
            duration={0.3}
            animate={animate}
            style={{
              width: `${fontSize * 0.2}px`,
              height: `${fontSize * 0.2}px`,
            }}
          />
          <motion.div
            className="absolute w-full h-full rounded-full overflow-hidden z-1 bg-primary"
            whileTap={{ scale: 1.1, boxShadow: "0 0 16px 8px rgba(0,0,0,0.1)" }}
          >
            <Image
              src="/profile.png"
              alt="Dusunax"
              fill
              sizes="100%"
              className="select-none pointer-events-none"
              priority
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
  animate: boolean;
}

function MotionCircle({ className, animate, ...props }: MotionCircleProps) {
  return (
    <motion.div
      className={`absolute rounded-full bg-primary-500 ${className}`}
      initial={{ scale: 0 }}
      animate={animate ? { scale: 1 } : {}}
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
      className={`flex flex-col text-4xl text-[#222222] font-bold leading-none select-none ${className}`}
      style={{ fontSize: `${fontSize}px` }}
    >
      <span className="text-nowrap">Sun A Du</span>
      <span className="text-nowrap">・ Dusunax</span>
    </h1>
  );
}
