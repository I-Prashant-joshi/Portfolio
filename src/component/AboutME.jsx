import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import partcleConfig from "./AboutmeConfig";
import { loadSlim } from "tsparticles-slim";

function AboutME() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    await loadSlim(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (  
    <div className='h-screen w-full'>
    <Particles
      loaded={particlesLoaded}
      id="tsparticles"
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100vh" }}
      options={partcleConfig}
      init={particlesInit}
    ></Particles>
    </div>
  );
}

export default AboutME;
