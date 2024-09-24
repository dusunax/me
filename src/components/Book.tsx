import React, { useRef, useEffect, useState } from "react";
import { Texture } from "three";
import { useFrame } from "@react-three/fiber";

type BookProps = {
  images: string[];
};

export default function Book({ images }: BookProps) {
  const [frontTexture, setFrontTexture] = useState<Texture | null>(null);
  const meshRef = useRef<any>(null);

  useEffect(() => {
    const img = new Image();
    img.src = images[0];
    img.onload = () => {
      const texture = new Texture(img);
      texture.needsUpdate = true;
      setFrontTexture(texture);
    };
  }, [images]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  if (!frontTexture) return null;

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
