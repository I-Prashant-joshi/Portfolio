import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ComputerCanvas from './Computer';
import { motion, useTransform,useScroll } from 'framer-motion';
function CoverPage() {
    const {scrollY}= useScroll()
    const opacity= useTransform(scrollY,[100,600],[1,0])
    useGSAP(()=>{
        gsap.from("#nameContent p",{
            x:150,
            delay:1.5,
            opacity:0,
            duration:1,
            stagger:0.5         
        })
    },[])
  return (
    <motion.div className='coverPage' style={{opacity}}>
    <section className='relative w-full h-screen '>
        <div className='absolute top-[90px] lg:top-[120px] flex flex-row items-start max-w-7xl ml-[2rem] lg:ml-[10rem] gap-5'>
            <div className='flex flex-row justify-center gap-5 w-full '>
                <div className='flex flex-col justify-center items-center'>
                <div className='w-[1rem] h-[1rem] rounded-full bg-[#540bfe]'></div>
                <div className="w-[0.2rem] h-[15rem] rounded-full bg-gradient-to-b from-[#540bfe] to-transparent"></div>
                </div>
                <div id='nameContent'>
                <p className='mt-[2rem] font-marker text-2xl lg:text-5xl'>Hi I'm <span className='text-[#a024ff]'>Prashant Joshi </span> </p> 
                <p className='mt-5 font-mono text-[0.9rem] lg:text-[1.4rem]'>I develop User Interfaces and <br/> web applications</p>
                </div>
            </div>
        </div>
        <ComputerCanvas />
        <div className=' absolute flex w-full bottom-0 justify-center items-center '>
            <a href='#about'>
                <motion.div className='h-[54px] w-[35px] rounded-3xl border-[2px] border-white flex justify-center items-center p-2 ' style={{opacity}}>
               
                    <motion.div
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: 20, opacity: 0.3 }}
      transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      className="w-3 h-3 rounded-full bg-slate-300 mb-5"
    />
                </motion.div>
            </a>
        </div>
    </section>
    </motion.div>
  )
}

export default CoverPage