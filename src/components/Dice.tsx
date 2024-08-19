import React, { useRef, useMemo } from "react";
import { Texture, TextureLoader } from "three";
import { useLoader, useFrame } from "@react-three/fiber";

type DiceProps = {
  images: string[];
};

export default function Dice({ images }: DiceProps) {
  const textures: Texture[] = useLoader(TextureLoader, images) as Texture[];

  const faces = useMemo(() => {
    return Array.from(
      { length: 6 },
      (_, index) => textures[index % textures.length]
    );
  }, [textures]);

  const meshRef = useRef<any>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      {faces.map((texture, index) => (
        <meshBasicMaterial map={texture} key={index} />
      ))}
    </mesh>
  );
}
