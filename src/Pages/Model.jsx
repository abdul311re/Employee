import { Canvas } from '@react-three/fiber'
import {Office} from "./Office.jsx"
import { OrbitControls } from '@react-three/drei'
function App() {
return (
    <>
 <div > 
  <Canvas camera={{ position: [5, 5, 10], fov: 30 }} style={{ width: '700px', height: '500px' }} className="two absolute">
    <ambientLight intensity={1} />
    <directionalLight position={[15, 15, 15]} />
    <OrbitControls enableZoom={false} target={[0, 0, 0]} />
    <Office scale={[5, 5, 5]} position={[0, 0, 0]} rotation={[-0.2, -1.1, 0.3]} />
  </Canvas>
</div>
    </>
  )
}
export default App;
