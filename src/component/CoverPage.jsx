import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ComputerCanvas from './Computer';
function CoverPage() {
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
    <section className='relative w-full h-screen mx-auto'>
        <div className='absolute top-[120px] flex flex-row items-start max-w-7xl ml-[2rem] lg:ml-[10rem] gap-5'>
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
    </section>
  )
}

export default CoverPage