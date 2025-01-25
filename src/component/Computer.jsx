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
    const size= isSmallScreen ? 0.38 : 0.67
    const modelposition =isSmallScreen ? [1,-2,-0.5] : [1.2,-2.8,-1.5]
    const modelRotation = isSmallScreen ?  [0,-0.3,-0.1] : [0,-0.7,-0.1] 
  return (
    <mesh>
        <hemisphereLight intensity={0.15} groundColor={"black"} />
      <primitive object={computerdata.scene}
      scale={size}
      position={modelposition}
      rotation={modelRotation}
       />
    </mesh>
  );
}

const  ComputerCanvas = () => {
  return (
    <Canvas dpr={[1, 2]} frameloop="demand" shadows camera={{ position: [20, 3, 5], fov: 25 }} >

        <ambientLight intensity={0.45} />
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
