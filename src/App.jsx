import { useState } from 'react'
import './App.css'
import {BrowserRouter} from 'react-router-dom'
import Navbar from './component/Navbar'
import CoverPage from './component/CoverPage'
import AboutME from './component/AboutME'
import { motion, useScroll, useTransform } from 'framer-motion';
import Projects from './component/Projects'
import Contact from './component/Contact'

function App() {

  return (
    <BrowserRouter>
  <div className="mainDiv" >
          <Navbar />
          <CoverPage />
          <AboutME />
          <Projects />
          <Contact />
  </div> 
    </BrowserRouter>
  )
}

export default App
