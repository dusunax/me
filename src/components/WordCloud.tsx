"use client";
import { Vector3, Color, Group, Spherical } from "three";
import { useRef, useState, useMemo, Suspense } from "react";
import { useTransform } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Billboard, Html, Text } from "@react-three/drei";
import { getRandomWord } from "@constants/words";
import { MotionValue } from "framer-motion";
import { degreesToRadians } from "popmotion";

function Word({
  word,
  color,
  ...props
}: {
  position: Vector3;
  word: string;
  color: Color;
}) {
  const fontProps = {
    fontSize: 1.2,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
    "material-color": color,
  };
  const ref = useRef<any>();
  const [hovered, setHovered] = useState(false);

  const over = (e: any) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);

  useFrame(() => {
    if (!ref.current) return;
    ref.current.scale.setScalar(hovered ? 1.1 : 1);
  });

  return (
    <Billboard {...props}>
      <Text ref={ref} onPointerOver={over} onPointerOut={out} {...fontProps}>
        {word}
      </Text>
    </Billboard>
  );
}

function Cloud({ count = 4, radius = 20 }) {
  const groupRef = useRef<Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  const colors = useMemo(
    () => [new Color("#3B82F6"), new Color("#8B5CF6"), new Color("#EC4899")],
    []
  );

  const words = useMemo(() => {
    const temp: [Vector3, string, Color][] = [];
    const spherical = new Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    for (let i = 1; i < count + 1; i++) {
      for (let j = 0; j < count; j++) {
        temp.push([
          new Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j)
          ),
          getRandomWord(),
          colors[(i * j) % colors.length],
        ]);
      }
    }
    return temp;
  }, [count, radius, colors]);

  return (
    <group ref={groupRef}>
      {words.map(([pos, word, color], index) => (
        <Word key={index} position={pos} color={color} word={word} />
      ))}
    </group>
  );
}

export default function WordCloud({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 35], fov: 90 }}
      className="absolute z-10"
    >
      <WordCloudContent scrollYProgress={scrollYProgress} />
    </Canvas>
  );
}

const WordCloudContent = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const xAngle = useTransform(
    scrollYProgress,
    [0, 1],
    [0, degreesToRadians(30)]
  );
  const yAngle = useTransform(
    scrollYProgress,
    [0, 1],
    [0, degreesToRadians(180)]
  );

  useFrame(({ camera }) => {
    camera.rotation.x = xAngle.get();
    camera.rotation.y = yAngle.get();
  });

  return (
    <>
      <fog attach="fog" args={["#ffffff", 0, 65]} />
      <Suspense fallback={null}>
        <group rotation={[10, 10.5, 10]}>
          <Cloud count={12} radius={20} />
        </group>
        <gridHelper
          args={[100, 100]}
          position={[0, -10, 0]}
          rotation={[degreesToRadians(180), 0, 0]}
        />

        <Html center>
          <p className="text-3xl sm:text-7xl leading-none font-semibold break-words text-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent select-none pointer-events-none">
            WEB <br />
            FRONTEND <br />
            DEVELOPER
          </p>
        </Html>
      </Suspense>
    </>
  );
};
