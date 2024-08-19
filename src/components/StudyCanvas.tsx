import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import type { StudyContent } from "../constant/study";
import Dice from "./Dice";
import Book from "./Book";

type StudyCanvasProps = {
  content: StudyContent;
};

export default function StudyCanvas({ content }: StudyCanvasProps) {
  return (
    <Canvas camera={{ fov: 75 }}>
      <Stage>
        {content.type === "book" ? (
          <Book images={content.images} />
        ) : (
          <Dice images={content.images} />
        )}
        <OrbitControls />
      </Stage>
    </Canvas>
  );
}
