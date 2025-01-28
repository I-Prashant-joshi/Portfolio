import React, { useState } from 'react'
import  "../App.css"
import EarthCanva from './EarthCanva'
import { motion } from 'framer-motion';
import { useMediaQuery, useTheme } from '@mui/material';

function Contact() {
   const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [form,setForm]=useState({
    name:"",
    email:"",
    message:""
  })
  function handleChange(event){
   const {name,value}= event.target
    setForm((prevData)=> ({...prevData,[name]:value}))
  }
  return (
    <div className='h-screen flex '>
      <div className='mt-[2rem] lg:mt-[2rem] w-full' >
      <motion.div
        className="text-[3.5rem] lg:text-[4rem] mt-[40px] lg:mt-[60px] font-mono bg-gradient-to-br from-white to-[#a024ff] bg-clip-text text-transparent flex justify-center w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, margin: `0px 0px ${isSmallScreen?"-30%":"-50%"} 0px` }}
      >
       Contact
      </motion.div>
        <div className='flex flex-col lg:flex-row mt-2 lg:mt-3'>
        <div className='formDiv p-[2rem] lg:p-[4rem] h-full'>
          <form>
              <div className='mb-4'>
              <label htmlFor="name" className='text-[1.5rem]'>Your Name:</label> <br></br>
              <input className='inputField' type='text' name='name' placeholder='Please enter your name here' value={form.name} onChange={handleChange} />
              </div>
              <br></br> 
              <div className='mb-10'>
              <label htmlFor="email" className='text-[1.5rem]'>Your Email:</label> <br></br>
              <input className='inputField' type='email' name='email' placeholder='Please enter your email here' value={form.email} onChange={handleChange} />
              <br></br>
              </div>
              <div>
              <label htmlFor="message" className='text-[1.5rem]'>Message:</label> <br></br>
              <textarea
              className='inputFieldMessage'
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Enter your message"
        rows={isSmallScreen ? "8":"8"} 
        cols={isSmallScreen ? "30":"50"} 
      />
              <br></br>
              </div>
          </form>
        </div>
      <div className='flex-1'>
          <EarthCanva />
      </div>
      </div>
      </div>
    </div>
  )
}

export default Contact