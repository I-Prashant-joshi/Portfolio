import {
  motion,
} from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { projectsData } from "./Constants";
import { useMediaQuery, useTheme } from "@mui/material";
function Projects() {
    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
  return (
    <div className="h-screen w-full flex flex-col">
      <motion.div
        className="text-[3.5rem] lg:text-[4rem] mt-[40px] lg:mt-[60px] font-mono bg-gradient-to-br from-white to-[#a024ff] bg-clip-text text-transparent flex justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, margin: `0px 0px ${isSmallScreen?"-30%":"-50%"} 0px` }}
      >
        Projects
      </motion.div>
      <motion.div
        className="flex justify-center text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, margin: `0px 0px ${isSmallScreen?"-30%":"-60%"} 0px` }}
      >
        <div className="text-[1rem] lg:text-[1.03rem] mt-[5px] lg:mt-[10px] lg:ml-[100px] font-mono bg-gradient-to-br from-white to-[#9e9d9f] bg-clip-text text-transparent flex justify-center w-[100%] lg:w-[70%]">
            {
                isSmallScreen ? 
              <>Welcome to my front-end projects showcase!</>
                :
               <> Welcome to my front-end projects showcase! This section features a
                collection of web applications and interfaces that highlight my
                expertise in crafting engaging, user-friendly experiences. I
                specialize in building responsive and dynamic web applications using
                modern technologies such as React.js
                </>
            }
        </div>
      </motion.div>
      <div className="mt-[10px] lg:mt-[100px]">
      <Carousel responsive={responsive} swipeable={true} >
        {
            projectsData.map((item,index)=>(
                <div key={index} className="flex flex-col lg:flex-row">
                <motion.div
                initial={{ opacity: 0, y: 250 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true, margin: `0px 0px ${isSmallScreen?"-10%":"-30%"} 0px` }}
                className="flex h-[100%] w-[100%] lg:w-[45%] justify-center lg:items-center p-5 lg:p-10 rounded-2xl">
                    <img src={item.source} alt="image"  className="h-[200px] lg:h-[500px] rounded-2xl"/>
                </motion.div>
                <motion.div 
                initial={{ opacity: 0, y: 250 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: false, margin:`0px 0px ${isSmallScreen?"-2%":"-20%"} 0px` }}
                className="flex-1 h-[100%] mt-[2px] lg:mt-[50px]">
                    <p className="text-center text-[2rem] lg:text-[3rem]">{item.projectName}</p>
                    <p className="text-[0.8rem] h-[120px] md:h-[250px] lg:text-[1.5rem] text-justify p-2 lg:p-0 lg:pr-[50px] mt-0 lg:mt-[20px]">
                        {item.description}
                    </p>
                    <p className="text-[0.7rem] lg:text-[1.5rem] mt-2 lg:mt-4 p-2">
                        Technologies Used :  {item.techUsed}    
                    </p>
                    <motion.div  
                className="flex gap-10 items-center mt-5  justify-center lg:justify-end w-[100%] lg:w-[90%]"
                >
                <div className="flex justify-center items-center text-[1rem] p-[10] border-[#a024ff] border-[2px] h-[40px] w-[100px] rounded-md select-none hover:bg-gradient-to-br from-[#a024ff] to-[#d3abf2] hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
                    Images
                </div>
                <div className="flex justify-center items-center text-[1rem] p-[10] border-[#a024ff] border-[2px] h-[40px] w-[100px] rounded-md select-none hover:bg-gradient-to-br from-[#a024ff] to-[#d3abf2] hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
                    <a href={item.link} target="blank"> Live </a>
                </div>
                </motion.div>
                </motion.div>
               
            </div>
            ))
        }
        
      </Carousel>
      </div>
    </div>
  );
}

export default Projects;
