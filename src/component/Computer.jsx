import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import CanvaLoader from './CanvaLoader'; 
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function Computer() {
    const computerdata = useGLTF('/desktop_pc/scene.gltf');
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const size= isSmallScreen ? 0.40 : 0.67
    const modelposition =isSmallScreen ? [1,-2.8,-0.6] : [1.2,-2.8,-1.5]
  return (
    <mesh>
        <hemisphereLight intensity={0.15} groundColor={"black"} />
      <primitive object={computerdata.scene}
      scale={size}
      position={modelposition}
      rotation={[0,-0.3,-0.1]}
       />
    </mesh>
  );
}

const  ComputerCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }} 
      gl={{preserveDrawingBuffer:true}}
    >
        <ambientLight intensity={0.25} />
        <spotLight intensity={0.75} position={[-30,50,10]} angle={0.15} shadow-mapSize={1025} />
        
      <Suspense fallback={<CanvaLoader />}>
      <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2}/>
        <Computer />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}

export default ComputerCanvas;
