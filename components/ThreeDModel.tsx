// components/ThreeDModel.tsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { useGLTF } from "@react-three/drei/native";

interface ModelProps {
  modelPath: string;
}

function Model({ modelPath }: ModelProps) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={0.5} />;
}

export default function ThreeDModel() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      className="w-full h-full"
      dpr={[1, 1]}
      gl={{ alpha: false }}
    >
      <ambientLight intensity={1} />
      <directionalLight position={[0, 5, 5]} />
      <Suspense fallback={null}>
        <Model modelPath="joe-bg.glb" />
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
