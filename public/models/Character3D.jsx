import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Character3D(props) {
  const { scene } = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/heart/model.gltf");


  return (
    <primitive
      object={scene}
      scale={2.5}
      position={[0, -1, 0]}
      rotation={[0, Math.PI / 6, 0]}
      {...props}
    />
  );
}
