import React, { useCallback, useState } from "react";
import Particles from "react-tsparticles";
import partcleConfig from "./AboutmeConfig";
import { loadSlim } from "tsparticles-slim";
import { motion } from "framer-motion";
import mypic from "../assets/myPic.jpg";
import { useMediaQuery, useTheme } from "@mui/material";

function AboutME() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [expand,setExpand]=useState(isSmallScreen?false:true)

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    await loadSlim(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div className="h-screen w-full">
      <Particles
        loaded={particlesLoaded}
        id="tsparticles"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
        }}
        options={partcleConfig}
        init={particlesInit}
      ></Particles>
      <section className="flex flex-col lg:flex-row">
        <motion.div className="flex-1 h-screen relative">
          <motion.div className="w-[200px] lg:w-[400px] opacity-[0.7] h-[200px] lg:h-[400px] absolute top-[160px] left-[60px]  lg:left-[80px] lg:top-[100px] rounded-full overflow-hidden 
           "
           style={{
            transform:"translate(40px,50px )",
            boxShadow: "0 0 15px 5px rgba(176, 108, 249, 0.7)", 
            transition: "box-shadow 0.3s ease-in-out" 
          }}>
            <img src={mypic} alt="Photo" style={{marginTop:isSmallScreen ? "-50px":"-100px"}} />
          </motion.div>
        </motion.div>
        <motion.div className="flex-1 h-screen text-center m-auto ">
          <motion.h1 className="text-[4rem] mt-[100px] font-mono text-[#a024ff]">
                    <span className="text-[white]">About </span> Me
          </motion.h1>
          <motion.div className="text-[1rem] mt-[250px] lg:mt-[120px] font-light p-3 lg:p-4 leading-6 lg:leading-10 lg:text-[1.5rem] text-justify lg:text-normal">

          Hi there! I’m <span className="text-[#a024ff] text-[1.2rem] lg:text-[1.7rem">Prashant Joshi </span>, a passionate <strong className="text-[1.2rem] lg:text-[1.7rem]">React.js developer </strong> with over a year of experience building interactive, user-friendly web applications. I specialize in creating dynamic front-end experiences, but recently, I’ve expanded my skills to Node.js, focusing on building robust back-end systems.
          I’m always excited about learning new technologies and tools that can enhance my development workflow and improve the user experience. <a  style={{cursor:"pointer"}}onClick={()=>setExpand(!expand)}>Read more...</a>
          {
            expand && 
            <> Currently, I'm working on combining my front-end expertise with back-end skills to create full-stack applications that are both functional and efficient.
          When I’m not coding, you can find me exploring new tech trends,or working on personal projects to constantly improve my craft.
          Let’s build something great together!
          I’m committed to delivering high-quality, maintainable solutions that align with your project goals, and I’m always eager to collaborate and contribute to the success of your team.
          </>

        }

          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

export default AboutME;
