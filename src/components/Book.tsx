import React, { useRef } from "react";
import { TextureLoader } from "three";
import { useLoader, useFrame } from "@react-three/fiber";

type BookProps = {
  images: string[];
};

export default function Book({ images }: BookProps) {
  const frontTexture = useLoader(TextureLoader, images[0]);
  const meshRef = useRef<any>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[Math.PI / 6, Math.PI / 4, 0]}>
      <boxGeometry args={[0.1, 2.2, 1.5]} />
      {/* Front Cover */}
      <meshBasicMaterial attach="material-1" map={frontTexture} />
      {/* Back Cover */}
      <meshBasicMaterial attach="material-0" map={frontTexture} />
      {/* Others */}
      <meshBasicMaterial attach="material-2" color="#b0aeb1" />
      <meshBasicMaterial attach="material-3" color="#b0aeb1" />
      <meshBasicMaterial attach="material-4" color="#b0aeb1" />
      <meshBasicMaterial attach="material-5" color="#b0aeb1" />
    </mesh>
  );
}
