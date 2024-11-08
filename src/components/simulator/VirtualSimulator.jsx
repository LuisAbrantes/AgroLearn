
import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export const VirtualSimulator = () => {
  const [difficulty, setDifficulty] = useState('beginner');

  return (
    <div className="w-full h-[600px] relative">
      <div className="absolute top-4 left-4 z-10 bg-white/80 p-2 rounded">
        <select 
          value={difficulty} 
          onChange={(e) => setDifficulty(e.target.value)}
          className="p-2 rounded border"
        >
          <option value="beginner">Iniciante</option>
          <option value="intermediate">Intermediário</option>
          <option value="advanced">Avançado</option>
        </select>
      </div>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#2B5E2E" />
        </mesh>
      </Canvas>
    </div>
  );
};