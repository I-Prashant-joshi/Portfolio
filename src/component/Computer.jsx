import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import CanvaLoader from './CanvaLoader'; 
import { useMediaQuery, useTheme } from '@mui/material';

function Computer() {
  const { scene } = useGLTF('/desktop_pc/scene.gltf');
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));

  const size = isSmall ? 0.38 : isMedium ? 0.5 : 0.67;
  const position = isSmall ? [1, -1, -0.5] : isMedium ? [1, -2.8, -0.5] : [1.2, -2.8, -1.5];
  const rotation = [0, isSmall ? -0.3 : -0.7, -0.1];

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <primitive object={scene} scale={size} position={position} rotation={rotation} />
    </mesh>
  );
}

const ComputerCanvas = () => (
  <Canvas  dpr={[1, 1.5]}  frameloop="demand" shadows camera={{ position: [20, 3, 5], fov:30 }}>
    <ambientLight intensity={0.45} />
    <spotLight intensity={0.75} position={[-30, 50, 10]} angle={0.15} shadow-mapSize={1025} />
    <Suspense fallback={<CanvaLoader />}>
      <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
      <Computer />
    </Suspense>
    <Preload all />
  </Canvas>
);

export default ComputerCanvas;
