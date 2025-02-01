import { useState } from "react";
import { easeInOut, motion } from "framer-motion";
import mypic from "../assets/myPic.jpg";
import { useMediaQuery, useTheme } from "@mui/material";
import ComponentMainFrame from "./ComponentMainFrame";

function AboutME() {
  const theme = useTheme();
  const text = "About Me";
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [expand, setExpand] = useState(!isSmallScreen);

  return (
    <div>
      <section className="flex flex-col lg:flex-row">
        {/* Left section - Image */}
        <motion.div
          className="flex w-[50%] justify-center lg:justify-start"
          initial={{ opacity: 0, x: isSmallScreen ? -200 : -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: easeInOut }}
          viewport={{ once: isSmallScreen ? true : false, margin: "0px 0px -40% 0px" }}
        >
          <div className="hidden lg:block w-[200px] md:w-[300px] md:h-[300px] lg:w-[450px] opacity-[0.7] h-[200px] lg:h-[450px] mt-[100px] lg:top-[100px] ml-0 lg:ml-[100px] rounded-full overflow-hidden"
            style={{
              transform: "translate(40px, 50px)",
              boxShadow: "0 0 15px 5px rgba(176, 108, 249, 0.7)",
              transition: "box-shadow 0.3s ease-in-out",
            }}
          >
            <img src={mypic} alt="Prashant Joshi" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Right section - Text and Content */}
        <motion.div
          className="flex-1 text-center m-auto overflow-hidden pr-[0px] lg:pr-[50px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, margin: "0px 0px -50% 0px" }}
        >
          <motion.h1 className="text-[3.5rem] lg:text-[4rem] mt-[50px] lg:mt-[100px] font-mono text-[#a024ff]">
            <motion.span className="text-[white]">
              {text.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: false, margin: "0px 0px -50% 0px" }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </motion.h1>

          {/* Mobile Image */}
          <motion.div className="lg:hidden flex justify-center items-center mt-[40px]">
            <div className="w-[200px] md:w-[300px] md:h-[300px] lg:w-[450px] opacity-[0.7] h-[200px] lg:h-[450px] rounded-full overflow-hidden">
              <img src={mypic} alt="Prashant Joshi" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Description and "Read more" toggle */}
          <motion.div
            className="text-[1rem] mt-[30px] lg:mt-[120px] font-light p-3 lg:p-8 leading-6 lg:leading-10 lg:text-[1.5rem] md:text-[1.2rem] md:leading-8 md:p-6 text-justify lg:text-normal"
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: easeInOut }}
            viewport={{ once: isSmallScreen ? true : false, margin: `0px 0px -40% 0px` }}
          >
            <div>
              Hi there! I’m <span className="text-[#a024ff] text-[1.2rem] lg:text-[1.7rem]">Prashant Joshi</span>, a passionate{" "}
              <strong className="text-[1.2rem] lg:text-[1.7rem]">React.js developer</strong> with over a year of experience building interactive,
              user-friendly web applications. I specialize in creating dynamic front-end experiences, but recently, I’ve expanded my skills to
              Node.js, focusing on building robust back-end systems.
              <br />
              I’m always excited about learning new technologies and tools that can enhance my development workflow and improve the user experience.
              <a
                style={{ cursor: "pointer" }}
                onClick={() => setExpand(!expand)}
              >
                {expand ? " Read less..." : " Read more..."}
              </a>
              {expand && (
                <p>
                  Currently, I'm working on combining my front-end expertise with back-end skills to create full-stack applications that are
                  both functional and efficient. When I’m not coding, you can find me exploring new tech trends, or working on personal projects to
                  constantly improve my craft. Let’s build something great together!
                  I’m committed to delivering high-quality, maintainable solutions that align with your project goals, and I’m always eager to collaborate
                  and contribute to the success of your team.
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

const AboutMe= ComponentMainFrame(AboutME, "about");
export default AboutMe