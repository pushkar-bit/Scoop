import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { muscleData } from '../data/muscleData';
import './MuscleSystem3D.css';

// Individual muscle mesh component
function MuscleMesh({ muscle, onClick, isSelected, isHovered, onHover }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      // Gentle pulsing animation for hovered/selected muscles
      if (isSelected || isHovered) {
        meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 3) * 0.05);
      } else {
        meshRef.current.scale.setScalar(1);
      }
    }
  });
  
  const getColor = () => {
    if (isSelected) return '#0A84FF';
    if (isHovered) return '#64D2FF';
    return muscle.color;
  };
  
  return (
    <mesh
      ref={meshRef}
      position={[muscle.position.x, muscle.position.y, muscle.position.z]}
      onClick={() => onClick(muscle)}
      onPointerOver={() => onHover(muscle.id)}
      onPointerOut={() => onHover(null)}
    >
      <sphereGeometry args={[0.08, 32, 32]} />
      <meshStandardMaterial
        color={getColor()}
        emissive={getColor()}
        emissiveIntensity={isSelected || isHovered ? 0.5 : 0.2}
        roughness={0.3}
        metalness={0.8}
      />
      {(isHovered || isSelected) && (
        <Html distanceFactor={10}>
          <div className="muscle-label">
            {muscle.name}
          </div>
        </Html>
      )}
    </mesh>
  );
}

// Human body model
function HumanBody({ onMuscleClick, selectedMuscle, hoveredMuscle, onMuscleHover }) {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      // Gentle rotation animation
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });
  
  const muscles = Object.values(muscleData);
  
  return (
    <group ref={groupRef}>
      {/* Body outline */}
      <mesh position={[0, 0, 0]}>
        <capsuleGeometry args={[0.25, 1.5, 32, 32]} />
        <meshStandardMaterial
          color="#1a1a1a"
          transparent
          opacity={0.3}
          roughness={0.7}
          metalness={0.3}
        />
      </mesh>
      
      {/* Head */}
      <mesh position={[0, 0.9, 0]}>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial
          color="#1a1a1a"
          transparent
          opacity={0.3}
          roughness={0.7}
          metalness={0.3}
        />
      </mesh>
      
      {/* Arms */}
      <mesh position={[0.35, 0.2, 0]} rotation={[0, 0, 0.3]}>
        <capsuleGeometry args={[0.06, 0.6, 16, 16]} />
        <meshStandardMaterial
          color="#1a1a1a"
          transparent
          opacity={0.3}
          roughness={0.7}
          metalness={0.3}
        />
      </mesh>
      <mesh position={[-0.35, 0.2, 0]} rotation={[0, 0, -0.3]}>
        <capsuleGeometry args={[0.06, 0.6, 16, 16]} />
        <meshStandardMaterial
          color="#1a1a1a"
          transparent
          opacity={0.3}
          roughness={0.7}
          metalness={0.3}
        />
      </mesh>
      
      {/* Legs */}
      <mesh position={[0.12, -0.9, 0]}>
        <capsuleGeometry args={[0.08, 0.8, 16, 16]} />
        <meshStandardMaterial
          color="#1a1a1a"
          transparent
          opacity={0.3}
          roughness={0.7}
          metalness={0.3}
        />
      </mesh>
      <mesh position={[-0.12, -0.9, 0]}>
        <capsuleGeometry args={[0.08, 0.8, 16, 16]} />
        <meshStandardMaterial
          color="#1a1a1a"
          transparent
          opacity={0.3}
          roughness={0.7}
          metalness={0.3}
        />
      </mesh>
      
      {/* Muscle points */}
      {muscles.map((muscle) => (
        <MuscleMesh
          key={muscle.id}
          muscle={muscle}
          onClick={onMuscleClick}
          isSelected={selectedMuscle?.id === muscle.id}
          isHovered={hoveredMuscle === muscle.id}
          onHover={onMuscleHover}
        />
      ))}
    </group>
  );
}

// Main component
export default function MuscleSystem3D({ onMuscleSelect }) {
  const [selectedMuscle, setSelectedMuscle] = useState(null);
  const [hoveredMuscle, setHoveredMuscle] = useState(null);
  
  const handleMuscleClick = (muscle) => {
    setSelectedMuscle(muscle);
    if (onMuscleSelect) {
      onMuscleSelect(muscle);
    }
  };
  
  return (
    <div className="muscle-system-3d">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#000000']} />
        
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#0A84FF" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#BF5AF2" />
        <spotLight
          position={[0, 5, 5]}
          angle={0.5}
          penumbra={1}
          intensity={1}
          castShadow
          color="#64D2FF"
        />
        
        {/* Human body with muscles */}
        <HumanBody
          onMuscleClick={handleMuscleClick}
          selectedMuscle={selectedMuscle}
          hoveredMuscle={hoveredMuscle}
          onMuscleHover={setHoveredMuscle}
        />
        
        {/* Controls */}
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minDistance={2}
          maxDistance={6}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
      
      {/* Instructions */}
      <div className="interaction-hint">
        <p>🖱️ Click on glowing muscles to view details</p>
        <p>🔄 Drag to rotate • Scroll to zoom</p>
      </div>
    </div>
  );
}
