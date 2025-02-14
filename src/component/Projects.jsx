import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { projectsData } from "./Constants";
import { useMediaQuery, useTheme } from "@mui/material";
import ComponentMainFrame from "./ComponentMainFrame";
import MotionWrapper from "./Common/MotionWrapper";
import PropTypes from "prop-types"; 


const ProjectItem = ({ item, onceData }) => (
  <MotionWrapper  onceData={onceData} className="flex flex-col lg:flex-row">
    <div className="flex h-full w-full lg:w-[45%] justify-center lg:items-center p-5 lg:p-10 rounded-2xl">
      <img src={item.source} alt="Project" loading="lazy"  className="h-[200px] lg:h-[500px] rounded-2xl" />
    </div>
    
    <div className="flex-1 mt-[10px] lg:mt-[50px]">
      <p className="text-center text-[2rem] lg:text-[3rem]">{item.projectName}</p>
      <p className="text-[0.8rem] lg:text-[1.5rem] text-justify p-2 lg:p-0 lg:pr-[50px] mt-0 lg:mt-[20px]">
        {item.description}
      </p>
      <p className="text-[0.7rem] lg:text-[1.5rem] mt-2 lg:mt-4 p-2">
        Technologies Used: {item.techUsed}
      </p>
      
      <div className="flex gap-10 items-center mt-5 justify-center lg:justify-end w-[100%] lg:w-[90%]">
        <div className="flex justify-center items-center text-[1rem] p-[10] border-[#a024ff] border-[2px] h-[40px] w-[100px] rounded-md select-none hover:bg-gradient-to-br from-[#a024ff] to-[#d3abf2] hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
          <a href={item.link} target="_blank" rel="noopener noreferrer">Live</a>
        </div>
      </div>
    </div>
  </MotionWrapper>
);

function Projects() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const onceData=isSmallScreen ? true : false;
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  return (
    <div className="w-full flex flex-col">
      <motion.div
        className="text-[2.5rem] lg:text-[4rem] mt-[40px] lg:mt-[60px] font-mono bg-gradient-to-br from-white to-[#a024ff] bg-clip-text text-transparent flex justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, margin: `0px 0px ${isSmallScreen ? "-20%" : "-50%"} 0px` }}
      >
        Projects
      </motion.div>
    
      <motion.div
  className="flex w-[100%] justify-center items-center"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{
    once: false,
    margin: `0px 0px ${isSmallScreen ? "-25%" : "-55%"} 0px`,
  }}
>
  <motion.div
    className="text-[1rem] bg-[#3a3a3a93] rounded-2xl lg:text-[1.03rem] mt-[5px] lg:mt-[10px] font-mono flex justify-center w-[100%] lg:w-[60%] text-center p-1 lg:p-2 relative overflow-hidden"
    initial={{ backgroundSize: "0% 0%" }}
    whileInView={{ backgroundSize: "100% 100%" }}
    transition={{ duration: 2, ease: "easeInOut" }}
    style={{
      backgroundImage: "linear-gradient(to left, #3a3a3a93 0%, #3a3a3a93 100%)",
      backgroundRepeat: "no-repeat",
    }}
  >
    {isSmallScreen
      ? "Welcome to my front-end projects showcase!"
      : "Welcome to my front-end projects showcase! This section features a collection of web applications and interfaces that highlight my expertise in crafting engaging, user-friendly experiences using modern technologies such as React.js"}
  </motion.div>
</motion.div>
      <div className="mt-[10px] lg:mt-[100px]">
        <Carousel responsive={responsive} swipeable={true} autoPlay={true} infinite={true}>
          {projectsData.map((item, index) => (
            <ProjectItem key={index} item={item} onceData={onceData} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
ProjectItem.propTypes = {
  item: PropTypes.shape({
    source: PropTypes.string.isRequired,
    projectName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    techUsed: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};
const Project = ComponentMainFrame(Projects, "projects");
export default Project;
