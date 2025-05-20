import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = () => {
  const { scene } = useGLTF('/Employee/Model/3dmodel-v1.glb'); // use optimized file

  return (
    <Canvas camera={{ position: [5, 5, 10], fov: 30 }} style={{ width: '700px', height: '500px' }}>
      <ambientLight intensity={1} />
      <directionalLight position={[15, 15, 15]} />
      <OrbitControls enableZoom={false} enableRotate={true}/>
      <primitive object={scene} scale={[4.5, 4.5, 4.5]} position={[0, 0, 0]} rotation={[-0.2, -1.1, 0.3]}/>
    </Canvas>
  );
};

export default Model;
