import { memo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import type { StudyContent } from "@constants/study";
import Dice from "./Dice";
import Book from "./Book";

type StudyCanvasProps = {
  content: StudyContent;
};

const StudyCanvas = memo(function StudyCanvas({ content }: StudyCanvasProps) {
  return (
    <Canvas camera={{ fov: 75 }}>
      <Book images={content.images} />
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
});

export default StudyCanvas;
