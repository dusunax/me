import { Vector3, Color, Group, Spherical } from "three";
import { useRef, useState, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Billboard, Text } from "@react-three/drei";
import { getRandomWord } from "../constant/words";

function Word({ children, ...props }: { position: Vector3; children: string }) {
  const color = new Color();
  const fontProps = {
    fontSize: 1.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
  };
  const ref = useRef<any>();
  const [hovered, setHovered] = useState(false);
  const over = (e: any) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);

  useFrame(() => {
    if (!ref.current) return;
    ref.current.material.color.lerp(
      color.set(hovered ? "#fa2720" : "white"),
      0.1
    );
  });

  return (
    <Billboard {...props}>
      <Text
        ref={ref}
        onPointerOver={over}
        onPointerOut={out}
        onClick={() => console.log("clicked")}
        {...fontProps}
        children={children}
      />
    </Billboard>
  );
}

function Cloud({ count = 4, radius = 20 }) {
  const groupRef = useRef<Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002; // Y축을 기준으로 회전
    }
  });

  const words = useMemo(() => {
    const temp = [];
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
        ]);
      }
    }
    return temp;
  }, [count, radius]);

  return (
    <group ref={groupRef}>
      {words.map(([pos, word], index) => (
        <Word key={index} position={pos as Vector3} children={word as string} />
      ))}
    </group>
  );
}

export default function WordCloud() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 35], fov: 90 }}
      className="absolute z-10"
    >
      <fog attach="fog" args={["#202025", 0, 80]} />
      <Suspense fallback={null}>
        <group rotation={[10, 10.5, 10]}>
          <Cloud count={8} radius={20} />
        </group>
      </Suspense>
    </Canvas>
  );
}
