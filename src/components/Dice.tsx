import React, { useRef, useEffect } from "react";
import { Texture, TextureLoader } from "three";
import { useLoader, useFrame } from "@react-three/fiber";

type DiceProps = {
  images: string[];
};

const Dice: React.FC<DiceProps> = ({ images }) => {
  const textures: Texture[] = images.map((img) =>
    useLoader(TextureLoader, img)
  );
  const faces = Array.from(
    { length: 6 },
    (_, index) => textures[index % textures.length]
  );

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
};

export default Dice;
