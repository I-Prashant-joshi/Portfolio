import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ComputerCanvas from "./Computer";
import { motion } from "framer-motion";

function CoverPage() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from("#nameContent p", {
      x: 150,
      delay: 1.5,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
    });
    return () => tl.kill(); // Clean up the animation
  }, []);

  return (
    <motion.div className="coverPage h-screen overflow-hidden">
      <section className="relative w-full h-full">
        <div className="absolute top-[50px] lg:top-[50px] flex items-start max-w-7xl ml-8 lg:ml-40 gap-5">
          <div className="flex justify-center gap-5 w-full">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-[#540bfe]"></div>
              <div className="w-1 h-60 bg-gradient-to-b from-[#540bfe] to-transparent"></div>
            </div>
            <div id="nameContent">
              <p className="mt-8 font-marker text-2xl md:text-4xl lg:text-5xl">
                Hi, I'm <span className="text-[#a024ff]">Prashant Joshi</span>
              </p>
              <p className="mt-5 font-mono text-sm md:text-xl lg:text-2xl">
                I develop User Interfaces and web applications
              </p>
            </div>
          </div>
        </div>
        <ComputerCanvas />
        <motion.a
          href="#about"
          className="absolute bottom-0  lg:bottom-0 w-full h-[12rem] lg:h-[8rem] flex justify-center cursor-pointer"
        >
          <motion.div
            className="h-14 w-9 rounded-3xl border-2 border-white flex justify-center items-center p-2"
            animate={{ y: [0, 20, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-3 h-3 rounded-full bg-slate-300" />
          </motion.div>
        </motion.a>
      </section>
    </motion.div>
  );
}

export default CoverPage;
