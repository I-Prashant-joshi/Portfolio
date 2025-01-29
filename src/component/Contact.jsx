import React, { useState } from 'react'
import  "../App.css"
import EarthCanva from './EarthCanva'
import { motion } from 'framer-motion';
import { useMediaQuery, useTheme } from '@mui/material';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ComponentMainFrame from './ComponentMainFrame';

function Contact() {
   const theme = useTheme()
   const [sending,setSending]=useState(false)
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [form,setForm]=useState({
    name:"",
    email:"",
    message:""
  })
  function handleChange(event){
   const {name,value}= event.target
    setForm((prevData)=> ({...prevData,[name]:value}))
  }

  function submitMail(e){
    e.preventDefault()
    setSending(true)
    const data={
      user_name:form.name,
      to_name:"Prashant Joshi",
      user_email:form.email,
      to_email:"prashantjoshipj67@gmail.com",
      message:form.message
    }
    
    emailjs.send("service_bmjkl0l","template_0dco9mj",data,"YuJgHnQdhuTPRjRur").then(()=>{
        setSending(false)
        setForm({
          name:"",
          email:"",
          message:""
        })
        toast("Mail sent successfully",{
          style: { 
            backgroundColor:"#6d58f6", 
            color: "#fcfafa" // Black text for better contrast
          },}
        )
    },(err)=>{
      setSending(false)
      setForm({
        name:"",
        email:"",
        message:""
      })
      console.log("error",err);
    })
  }
  return (
    <div className='h-screen flex '>
      <div className='mt-[1rem] lg:mt-[2rem] w-full overflow-hidden' >
      <motion.div
        className="text-[3.5rem] lg:text-[4rem] mt-[40px] lg:mt-[60px] font-mono bg-gradient-to-br from-white to-[#a024ff] bg-clip-text text-transparent flex justify-center w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, margin: `0px 0px ${isSmallScreen?"-30%":"-50%"} 0px` }}
      >
       Contact
      </motion.div>
        <div className='flex flex-col md:flex-col lg:flex-row mt-2 lg:mt-3 h-[80%]'>
        <motion.div className='formDiv bg-black p-[2rem] lg:p-[4rem] h-[350px] md:h-[400px] lg:h-full ml-0 lg:ml-10 '
         initial={{ opacity: 0,x:-300 }}
         whileInView={{ opacity: 1,x:0 }}
         transition={{ duration: 1.5 }}
         viewport={{ once: isSmallScreen ? true : false, margin: `0px 0px ${isSmallScreen?"-30%":"-50%"} 0px` }}
        >
          <form className=''>
              <div className='mb-0 lg:mb-4 '>
              <label htmlFor="name" className='text-[1rem] lg:text-[1.5rem]'>Your Name:</label> <br></br>
              <input className='inputField h-[30px] lg:h-[40px] w-[250px] lg:w-[300px]' type='text' name='name' placeholder='Please enter your name here' value={form.name} onChange={handleChange} />
              </div>
              <div className='mb-0 lg:mb-10'>
              <label htmlFor="email" className='text-[1rem] lg:text-[1.5rem]'>Your Email:</label> <br></br>
              <input className='inputField h-[30px] lg:h-[40px] w-[250px] lg:w-[300px]' type='email' name='email' placeholder='Please enter your email here' value={form.email} onChange={handleChange} />
              <br></br>
              </div>
              <div>
              <label htmlFor="message" className='text-[1rem] lg:text-[1.5rem] '>Message:</label> <br></br>
              <textarea
              className='inputFieldMessage'
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Enter your message"
        rows={isSmallScreen ? "2" : isMediumScreen ? "3" :"8"} 
        cols={isSmallScreen ? "30":"50"} 
      />
              <br></br>
              </div>
              <div onClick={submitMail} className='flex justify-center text-[1rem] lg:text-[2rem] items-center w-full bg-[#700fcc] text-[white] font-inter p-1 lg:p-2 rounded-lg mt-0 lg:mt-10'>
                    {sending ? "sending...": "send"}
              </div>
          </form>
        </motion.div>
      <motion.div className='flex-1'
       initial={{ opacity: 0,x:300 }}
       whileInView={{ opacity: 1,x:0 }}
       transition={{ duration: 1.5 }}
       viewport={{ once: isSmallScreen ? true : false, margin: `0px 0px ${isSmallScreen?"-30%": isMediumScreen ? "20px":"-50%"} 0px` }}
      >
          <EarthCanva />
      </motion.div>
      </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default ComponentMainFrame(Contact,"contact")