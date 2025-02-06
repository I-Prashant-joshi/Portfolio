import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import CanvaLoader from './CanvaLoader'; 
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';


function Earth() {
  const [size,setSize]=useState(2.07)
  const [position,setPosition]=useState(0.3)
    const computerdata = useGLTF('/planet/scene.gltf');
    const theme = useTheme();
    var isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    var isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
    useEffect(()=>{
      if(isSmallScreen){
        setSize(2)
        setPosition(1)
      }
      if(isMediumScreen){
        setSize(2)
        setPosition(1.5)
      }
    },[isMediumScreen,isSmallScreen])
  
  return (
    <mesh>
        <hemisphereLight intensity={0.15} groundColor={"black"} />
      <primitive object={computerdata.scene}
      scale={size}
      position-y={position}
      rotation-y={0}
       />
    </mesh>
  );
}

const  EarthCanva = () => {
  return (
    <Canvas dpr={[1, 2]} frameloop="demand" shadows  gl={{preserveDrawingBuffer:true}} >
        <ambientLight intensity={0.45} />
        <spotLight intensity={0.75} position={[-30,50,10]} angle={0.15} shadow-mapSize={1025} />
      <Suspense fallback={<CanvaLoader />}>
      <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2}/>
        <Earth />
      </Suspense>
      <Preload all />

    </Canvas>
  );
}

export default EarthCanva;
